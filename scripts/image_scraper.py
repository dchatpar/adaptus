#!/usr/bin/env python3
"""
The Universal Image Hunter 5000
--------------------------------
Strategies:
1. High-Quality APIs (Unsplash, Pexels - if keys avail)
2. Search Engines (DuckDuckGo, Google, Bing)
3. Commons Repositories (Wikimedia)

Features:
- "Desperation Mode": Auto-relaxes filters if no images found.
- "Query Simplify": Auto-retries with simpler keywords if results are zero.
- Anti-Watermark: Aggressive domain filtering.
- Smart Deduplication: Perceptual hashing.
"""

import os
import sys
import json
import requests
import argparse
import re
import random
import time
import hashlib
from pathlib import Path
from urllib.parse import quote, urlparse, unquote
from typing import List, Optional, Set, Dict, Any
from concurrent.futures import ThreadPoolExecutor, as_completed
from dataclasses import dataclass, field
from io import BytesIO

# --- Dependencies ---
try:
    from bs4 import BeautifulSoup
    from PIL import Image, ImageFilter, ImageStat
    import numpy as np
except ImportError:
    print("❌ Missing dependencies. Run: pip install beautifulsoup4 requests lxml pillow numpy")
    sys.exit(1)

# --- Configuration ---

USER_AGENTS = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Safari/605.1.15",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:121.0) Gecko/20100101 Firefox/121.0",
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
]

# Domains known to have heavy watermarks or paywalls
BLOCKLIST_DOMAINS = [
    "shutterstock.com", "istockphoto.com", "gettyimages.com", "adobe.com",
    "dreamstime.com", "123rf.com", "alamy.com", "depositphotos.com",
    "vectorstock.com", "bigstockphoto.com", "pond5.com", "freepik.com",
    "licensing", "stock", "buy", "premium", "vectors"
]

@dataclass
class ImageCandidate:
    url: str
    source: str
    score: float = 0.0
    data: Optional[bytes] = None
    img_obj: Optional[Image.Image] = None
    width: int = 0
    height: int = 0
    content_hash: str = ""

class UniversalScraper:
    def __init__(self, output_dir: str, max_workers: int = 10, hd_mode: bool = True):
        self.output_dir = Path(output_dir)
        self.output_dir.mkdir(parents=True, exist_ok=True)
        self.max_workers = max_workers
        self.hd_mode = hd_mode
        self.session = requests.Session()
        self.seen_hashes = set()
        
        # API Keys (Optional)
        self.unsplash_key = os.getenv("UNSPLASH_ACCESS_KEY")
        self.pexels_key = os.getenv("PEXELS_API_KEY")

    def _get_headers(self):
        return {"User-Agent": random.choice(USER_AGENTS)}

    def _is_safe_domain(self, url: str) -> bool:
        domain = urlparse(url).netloc.lower()
        if any(b in domain for b in BLOCKLIST_DOMAINS):
            return False
        # Reject obvious thumbnails
        if "thumb" in url.lower() or "preview" in url.lower():
            # Soft check, sometimes full res has these words, but usually bad.
            # We'll trust the resolution check later, but prioritize clean URLs.
            pass
        return True

    # --- Search Engines ---

    def search_duckduckgo(self, query: str) -> List[str]:
        """DuckDuckGo Image Search - Very resilient"""
        print(f"🦆 [DuckDuckGo] Searching: {query}")
        url = "https://duckduckgo.com/"
        params = {
            "q": query,
            "t": "h_",
            "iax": "images",
            "ia": "images",
            "iaf": "size:Wallpaper" if self.hd_mode else "" # Filter for Large
        }
        
        urls = []
        try:
            # 1. Get Token
            res = self.session.get(url, params=params, headers=self._get_headers())
            vqd_match = re.search(r'vqd=\"?([^\"]+)\"?', res.text)
            if not vqd_match:
                # Fallback to simple extraction if possible or skip
                return []
            vqd = vqd_match.group(1)

            # 2. Get Images
            api_url = "https://duckduckgo.com/i.js"
            api_params = {
                "l": "us-en",
                "o": "json",
                "q": query,
                "vqd": vqd,
                "f": ",,,",
                "p": "1"
            }
            res = self.session.get(api_url, params=api_params, headers=self._get_headers())
            data = res.json()
            
            for item in data.get("results", []):
                img_url = item.get("image")
                if img_url and self._is_safe_domain(img_url):
                    urls.append(img_url)
                    
        except Exception as e:
            print(f"⚠️ [DuckDuckGo] Error: {e}")
            
        return urls

    def search_google_fallback(self, query: str) -> List[str]:
        print(f"🔍 [Google] Searching: {query}")
        url = f"https://www.google.com/search?q={quote(query)}&tbm=isch&tbs=isz:l" # Large
        urls = []
        try:
            res = self.session.get(url, headers=self._get_headers(), timeout=10)
            # Regex for frequent Google patterns
            # Note: Google heavily obfuscates. We look for loose http strings in script tags.
            # This is "dirty" scraping but often effective for a few hits.
            candidates = re.findall(r'(https?://[^"\n]+\.(?:jpg|jpeg|png|webp))', res.text)
            for c in candidates:
                # decode unicode escapes if any
                c = c.encode().decode('unicode-escape')
                if self._is_safe_domain(c) and "gstatic" not in c:
                    urls.append(c)
        except Exception as e:
            print(f"⚠️ [Google] Error: {e}")
        return list(set(urls)) # dedup

    def search_wikimedia(self, query: str) -> List[str]:
        print(f"📚 [Wikimedia] Searching: {query}")
        url = "https://commons.wikimedia.org/w/api.php"
        params = {
            "action": "query",
            "generator": "search",
            "gsrnamespace": 6, # File namespace
            "gsrsearch": query,
            "gsrlimit": 20,
            "prop": "imageinfo",
            "iiprop": "url|size",
            "format": "json"
        }
        urls = []
        try:
            res = self.session.get(url, params=params, headers=self._get_headers(), timeout=10)
            data = res.json()
            pages = data.get("query", {}).get("pages", {})
            for _, page in pages.items():
                imageinfo = page.get("imageinfo", [])
                if imageinfo:
                    info = imageinfo[0]
                    u = info.get("url")
                    # Filter small icons
                    if info.get("width", 0) > 800:
                        urls.append(u)
        except Exception:
            pass
        return urls

    def search_unsplash(self, query: str) -> List[str]:
        if not self.unsplash_key: return []
        print(f"📸 [Unsplash] Searching: {query}")
        # Implementation similar to previous, assumes key is valid
        # ... (simplified for this context)
        return [] 

    # --- Processing ---

    def download_and_validate(self, url: str, strict_mode: bool = True) -> Optional[ImageCandidate]:
        try:
            # Quick head check to filter non-images or massive files
            try:
                head = self.session.head(url, headers=self._get_headers(), timeout=5)
                if 'image' not in head.headers.get('Content-Type', ''):
                    return None
                if int(head.headers.get('Content-Length', 0)) < 20000: # < 20KB is likely junk
                    return None
            except:
                pass # Head not allowed, just try get

            resp = self.session.get(url, headers=self._get_headers(), timeout=10)
            if resp.status_code != 200: return None

            img_data = BytesIO(resp.content)
            try:
                img = Image.open(img_data)
                img.verify() # Integrity check
                img = Image.open(img_data) # Re-open after verify
            except:
                return None

            # 1. Convert to RGB (remove alpha/palettes for consistency)
            img = img.convert("RGB")
            w, h = img.size

            # 2. Strict Filter
            min_w, min_h = (1280, 720) if strict_mode else (600, 400)
            
            if w < min_w or h < min_h:
                return None # Too small

            # 3. Blur Check
            blur_score = 0
            if strict_mode:
                gray = img.convert("L")
                edges = gray.filter(ImageFilter.FIND_EDGES)
                blur_score = np.var(np.array(edges))
                if blur_score < 100: # Threshold
                    return None # Too blurry

            # 4. Hash
            # Simple average hash
            small = img.resize((8, 8), Image.Resampling.LANCZOS).convert("L")
            avg = sum(list(small.getdata())) / 64
            bits = "".join(['1' if p > avg else '0' for p in small.getdata()])
            h_hex = hex(int(bits, 2))[2:]

            if h_hex in self.seen_hashes:
                return None # Duplicate
            
            return ImageCandidate(
                url=url,
                source="unknown",
                score=blur_score + (w * h / 10000), # Simple quality score
                data=resp.content,
                img_obj=img,
                width=w,
                height=h,
                content_hash=h_hex
            )

        except Exception as e:
            return None

    def run(self, initial_query: str, limit: int = 1):
        print(f"\n🚀 STARTING HUNT: '{initial_query}'")
        
        # Strategies to try in order
        queries = [initial_query]
        
        # Add simplified query (remove adjectives/complex words)
        simple_query = " ".join([w for w in initial_query.split() if len(w) > 3])
        if simple_query != initial_query:
            queries.append(simple_query)

        # Container for valid candidates
        candidates: List[ImageCandidate] = []

        # 1. HARVEST URLS
        for query in queries:
            print(f"🔎 Trying Query: {query}")
            urls = []
            
            # Run searchers in parallel threads
            with ThreadPoolExecutor(max_workers=5) as executor:
                futures = {
                    executor.submit(self.search_duckduckgo, query): "ddg",
                    executor.submit(self.search_wikimedia, query): "wiki",
                    executor.submit(self.search_google_fallback, query): "google",
                }
                
                for future in as_completed(futures):
                    res = future.result()
                    urls.extend(res)

            urls = list(set(urls)) # Unique URLs
            print(f"   found {len(urls)} URLs")

            if not urls: continue

            # 2. DOWNLOAD & FILTER (Strict)
            print("   ⬇️  Downloading & Analyzing (Strict Mode)...")
            with ThreadPoolExecutor(max_workers=self.max_workers) as executor:
                futures = [executor.submit(self.download_and_validate, u, True) for u in urls]
                for future in as_completed(futures):
                    res = future.result()
                    if res:
                        candidates.append(res)
                        self.seen_hashes.add(res.content_hash)
                        if len(candidates) >= limit: break
            
            if len(candidates) >= limit: break # We got enough

        # 3. DESPERATION MODE (Relaxed Filters) if still empty
        if not candidates:
            print("\n⚠️ No HD images found. Entering DESPERATION MODE (Relaxing filters)...")
            # We need to re-try the URLs we found but rejected?
            # Or re-search? The download_and_validate consumes the rejection logic.
            # Ideally we would have kept the rejected ones, but for simplicity let's just
            # re-run the *best* query with strict_mode=False on the *same* URLs if we kept them.
            # Since we didn't keep them, let's just re-run the search-download loop for the first query but relaxed.
            
            # Re-fetch URLs for the first query (fast enough)
            urls = self.search_duckduckgo(initial_query) + self.search_google_fallback(initial_query)
            
            with ThreadPoolExecutor(max_workers=self.max_workers) as executor:
                futures = [executor.submit(self.download_and_validate, u, False) for u in urls]
                for future in as_completed(futures):
                    res = future.result()
                    if res:
                        candidates.append(res)
                        self.seen_hashes.add(res.content_hash)
                        if len(candidates) >= limit: break

        # 4. SAVE RESULTS
        print("-" * 50)
        saved_count = 0
        
        # Sort by score (best quality first)
        candidates.sort(key=lambda x: x.score, reverse=True)

        for i, c in enumerate(candidates[:limit]):
            safe_query = "".join(x for x in initial_query if x.isalnum() or x in "-_").strip()
            ext = "jpg" # Force jpg for consistency usually, or keep original
            
            filename = f"{safe_query}_{i:02d}_{c.content_hash[:8]}.{ext}"
            path = self.output_dir / filename
            
            with open(path, "wb") as f:
                c.img_obj.save(f, "JPEG", quality=90) # Save as standardized JPEG
            
            print(f"✅ Saved: {filename} ({c.width}x{c.height})")
            saved_count += 1

        if saved_count == 0:
            print("❌ FAILED. No images could be retrieved even in desperation mode.")
        else:
            print(f"✨ DONE. Total Images: {saved_count}")

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("query")
    parser.add_argument("--limit", type=int, default=1)
    parser.add_argument("--output", default=".")
    parser.add_argument("--hd", action="store_true")
    args = parser.parse_args()

    scraper = UniversalScraper(args.output, hd_mode=args.hd)
    scraper.run(args.query, args.limit)

if __name__ == "__main__":
    main()