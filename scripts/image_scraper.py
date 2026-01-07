#!/usr/bin/env python3
"""
ULTIMATE Image Scraper - Scrapes from ALL sources
Google Images, Bing Images, DuckDuckGo, Unsplash, Pexels, Pixabay
No API keys required for search engines!
"""

import os
import sys
import argparse
import hashlib
import requests
import re
import json
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from typing import List, Dict, Set
from urllib.parse import quote, urljoin
import time

# Auto-install dependencies
try:
    from PIL import Image
    from bs4 import BeautifulSoup
    import io
except ImportError:
    print("Installing required dependencies...")
    os.system(f"{sys.executable} -m pip install pillow requests beautifulsoup4 lxml -q")
    from PIL import Image
    from bs4 import BeautifulSoup
    import io


class UltimateImageScraper:
    def __init__(self, query: str, limit: int = 100, output_dir: str = "downloaded_images", workers: int = 15):
        self.query = query
        self.limit = limit
        self.output_dir = Path(output_dir)
        self.workers = workers
        self.downloaded_urls: Set[str] = set()
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.5',
            'Accept-Encoding': 'gzip, deflate',
            'DNT': '1',
            'Connection': 'keep-alive',
            'Upgrade-Insecure-Requests': '1'
        })

        # API Keys (optional)
        self.unsplash_key = os.getenv('UNSPLASH_ACCESS_KEY', '')
        self.pexels_key = os.getenv('PEXELS_API_KEY', '')
        self.pixabay_key = os.getenv('PIXABAY_API_KEY', '')

        # Create output directory
        self.output_dir.mkdir(parents=True, exist_ok=True)

    def fetch_google_images(self, num_images: int = 100) -> List[Dict]:
        """Scrape Google Images (no API key needed)"""
        images = []
        try:
            search_url = f"https://www.google.com/search?q={quote(self.query)}&tbm=isch&hl=en"

            response = self.session.get(search_url, timeout=10)
            response.raise_for_status()

            # Extract image URLs from page source
            soup = BeautifulSoup(response.text, 'lxml')

            # Method 1: Find all img tags
            for img in soup.find_all('img'):
                src = img.get('src') or img.get('data-src')
                if src and src.startswith('http') and 'gstatic' not in src:
                    images.append({
                        'url': src,
                        'source': 'google',
                        'width': 0,
                        'height': 0
                    })

            # Method 2: Extract from JavaScript data
            scripts = soup.find_all('script')
            for script in scripts:
                if script.string and 'AF_initDataCallback' in script.string:
                    # Extract image URLs from JavaScript
                    matches = re.findall(r'https://[^"\']+\.(?:jpg|jpeg|png|webp)', script.string)
                    for url in matches:
                        if url not in [img['url'] for img in images]:
                            images.append({
                                'url': url,
                                'source': 'google',
                                'width': 0,
                                'height': 0
                            })

            images = images[:num_images]
            print(f"✓ Found {len(images)} images from Google Images")
        except Exception as e:
            print(f"✗ Google Images error: {e}")

        return images

    def fetch_bing_images(self, num_images: int = 100) -> List[Dict]:
        """Scrape Bing Images (no API key needed)"""
        images = []
        try:
            search_url = f"https://www.bing.com/images/search?q={quote(self.query)}&form=HDRSC2&first=1&tsc=ImageHoverTitle"

            response = self.session.get(search_url, timeout=10)
            response.raise_for_status()

            soup = BeautifulSoup(response.text, 'lxml')

            # Find all image containers
            for img_container in soup.find_all('a', class_='iusc'):
                m = img_container.get('m')
                if m:
                    try:
                        metadata = json.loads(m)
                        img_url = metadata.get('murl') or metadata.get('turl')
                        if img_url:
                            images.append({
                                'url': img_url,
                                'source': 'bing',
                                'width': metadata.get('w', 0),
                                'height': metadata.get('h', 0)
                            })
                    except:
                        pass

            images = images[:num_images]
            print(f"✓ Found {len(images)} images from Bing Images")
        except Exception as e:
            print(f"✗ Bing Images error: {e}")

        return images

    def fetch_duckduckgo_images(self, num_images: int = 100) -> List[Dict]:
        """Scrape DuckDuckGo Images (no API key needed)"""
        images = []
        try:
            # DuckDuckGo uses a token-based system
            search_url = "https://duckduckgo.com/"
            params = {'q': self.query, 'iax': 'images', 'ia': 'images'}

            # Get initial page to get vqd token
            response = self.session.get(search_url, params=params, timeout=10)

            # Extract vqd token
            vqd_match = re.search(r'vqd=([\d-]+)', response.text)
            if vqd_match:
                vqd = vqd_match.group(1)

                # Get images
                api_url = "https://duckduckgo.com/i.js"
                params = {
                    'l': 'us-en',
                    'o': 'json',
                    'q': self.query,
                    'vqd': vqd,
                    'f': ',,,',
                    'p': '1',
                    'v7exp': 'a'
                }

                response = self.session.get(api_url, params=params, timeout=10)
                data = response.json()

                for result in data.get('results', []):
                    images.append({
                        'url': result.get('image'),
                        'source': 'duckduckgo',
                        'width': result.get('width', 0),
                        'height': result.get('height', 0)
                    })

            images = images[:num_images]
            print(f"✓ Found {len(images)} images from DuckDuckGo")
        except Exception as e:
            print(f"✗ DuckDuckGo error: {e}")

        return images

    def fetch_unsplash(self, per_page: int = 30) -> List[Dict]:
        """Fetch from Unsplash API"""
        images = []
        if not self.unsplash_key:
            return images

        try:
            url = "https://api.unsplash.com/search/photos"
            params = {
                'query': self.query,
                'per_page': min(per_page, 30),
                'orientation': 'landscape'
            }
            headers = {'Authorization': f'Client-ID {self.unsplash_key}'}

            response = self.session.get(url, params=params, headers=headers, timeout=10)
            response.raise_for_status()
            data = response.json()

            for item in data.get('results', []):
                images.append({
                    'url': item['urls']['full'],
                    'source': 'unsplash',
                    'width': item.get('width', 0),
                    'height': item.get('height', 0)
                })

            print(f"✓ Found {len(images)} images from Unsplash")
        except Exception as e:
            print(f"✗ Unsplash error: {e}")

        return images

    def fetch_pexels(self, per_page: int = 80) -> List[Dict]:
        """Fetch from Pexels API"""
        images = []
        if not self.pexels_key:
            return images

        try:
            url = "https://api.pexels.com/v1/search"
            params = {
                'query': self.query,
                'per_page': min(per_page, 80),
                'orientation': 'landscape'
            }
            headers = {'Authorization': self.pexels_key}

            response = self.session.get(url, params=params, headers=headers, timeout=10)
            response.raise_for_status()
            data = response.json()

            for item in data.get('photos', []):
                images.append({
                    'url': item['src']['large2x'],
                    'source': 'pexels',
                    'width': item.get('width', 0),
                    'height': item.get('height', 0)
                })

            print(f"✓ Found {len(images)} images from Pexels")
        except Exception as e:
            print(f"✗ Pexels error: {e}")

        return images

    def fetch_pixabay(self, per_page: int = 200) -> List[Dict]:
        """Fetch from Pixabay API"""
        images = []
        if not self.pixabay_key:
            return images

        try:
            url = "https://pixabay.com/api/"
            params = {
                'key': self.pixabay_key,
                'q': self.query,
                'image_type': 'photo',
                'per_page': min(per_page, 200)
            }

            response = self.session.get(url, params=params, timeout=10)
            response.raise_for_status()
            data = response.json()

            for item in data.get('hits', []):
                images.append({
                    'url': item['largeImageURL'],
                    'source': 'pixabay',
                    'width': item.get('imageWidth', 0),
                    'height': item.get('imageHeight', 0)
                })

            print(f"✓ Found {len(images)} images from Pixabay")
        except Exception as e:
            print(f"✗ Pixabay error: {e}")

        return images

    def download_image(self, image_data: Dict, index: int) -> bool:
        """Download a single image"""
        url = image_data['url']
        source = image_data['source']

        if not url or url in self.downloaded_urls:
            return False

        try:
            response = self.session.get(url, timeout=15, stream=True)
            response.raise_for_status()

            # Validate image
            img = Image.open(io.BytesIO(response.content))

            # Skip small images
            if img.width < 400 or img.height < 300:
                return False

            img.verify()

            # Generate filename
            url_hash = hashlib.md5(url.encode()).hexdigest()[:8]
            query_slug = self.query.replace(' ', '_').lower()[:30]
            ext = img.format.lower() if img.format else 'jpg'
            filename = f"{query_slug}_{source}_{index:04d}_{url_hash}.{ext}"
            filepath = self.output_dir / filename

            # Save image
            with open(filepath, 'wb') as f:
                f.write(response.content)

            self.downloaded_urls.add(url)
            print(f"✓ [{len(self.downloaded_urls):3d}] {filename}")
            return True

        except Exception as e:
            return False

    def scrape(self, sources: List[str] = None) -> int:
        """Main scraping function"""
        if sources is None:
            sources = ['google', 'bing', 'duckduckgo', 'unsplash', 'pexels', 'pixabay']

        print(f"\n🔍 ULTIMATE IMAGE SCRAPER")
        print(f"{'='*50}")
        print(f"Query: '{self.query}'")
        print(f"Target: {self.limit} images")
        print(f"Output: {self.output_dir}")
        print(f"Workers: {self.workers}")
        print(f"{'='*50}\n")

        # Collect image URLs from all sources
        all_images = []

        if 'google' in sources:
            all_images.extend(self.fetch_google_images(100))
        if 'bing' in sources:
            all_images.extend(self.fetch_bing_images(100))
        if 'duckduckgo' in sources:
            all_images.extend(self.fetch_duckduckgo_images(100))
        if 'unsplash' in sources:
            all_images.extend(self.fetch_unsplash(30))
        if 'pexels' in sources:
            all_images.extend(self.fetch_pexels(80))
        if 'pixabay' in sources:
            all_images.extend(self.fetch_pixabay(200))

        if not all_images:
            print("\n❌ No images found!")
            return 0

        # Remove duplicates
        seen_urls = set()
        unique_images = []
        for img in all_images:
            if img['url'] not in seen_urls:
                seen_urls.add(img['url'])
                unique_images.append(img)

        print(f"\n📥 Found {len(unique_images)} unique images")
        print(f"⬇️  Downloading (target: {self.limit})...\n")

        # Download images in parallel
        downloaded_count = 0
        with ThreadPoolExecutor(max_workers=self.workers) as executor:
            futures = {
                executor.submit(self.download_image, img, idx): idx
                for idx, img in enumerate(unique_images[:self.limit * 3], 1)  # Try 3x to account for failures
            }

            for future in as_completed(futures):
                if future.result():
                    downloaded_count += 1
                    if downloaded_count >= self.limit:
                        break

        print(f"\n{'='*50}")
        print(f"✅ Downloaded {downloaded_count} images")
        print(f"📂 Saved to: {self.output_dir.absolute()}")
        print(f"{'='*50}\n")

        return downloaded_count


def main():
    parser = argparse.ArgumentParser(
        description='ULTIMATE Image Scraper - All sources, no API keys required!',
        formatter_class=argparse.RawDescriptionHelpFormatter
    )

    parser.add_argument('query', help='Search query')
    parser.add_argument('--limit', '-l', type=int, default=100,
                       help='Number of images to download (default: 100)')
    parser.add_argument('--output', '-o', default='downloaded_images',
                       help='Output directory (default: downloaded_images)')
    parser.add_argument('--workers', '-w', type=int, default=15,
                       help='Parallel downloads (default: 15)')
    parser.add_argument('--sources', '-s', nargs='+',
                       choices=['google', 'bing', 'duckduckgo', 'unsplash', 'pexels', 'pixabay'],
                       help='Specific sources (default: all)')

    args = parser.parse_args()

    scraper = UltimateImageScraper(
        query=args.query,
        limit=args.limit,
        output_dir=args.output,
        workers=args.workers
    )

    scraper.scrape(sources=args.sources)


if __name__ == '__main__':
    main()
