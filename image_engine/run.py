#!/usr/bin/env python3
"""
AdaptUs Image Acquisition Engine
---------------------------------
Legal-aware, watermark-resistant, HD-only image scraping with human review.

Architecture:
- sources/: Unsplash, Pexels, Wikimedia, Bing, Google
- filters/: Resolution, watermark detection, sharpness, aspect ratio
- enrich/: Metadata, alt text, tagging
- review/: Human review workflow
- output/: Final curated images with metadata

Quality Filters:
- is_hd(): >= 1920x1080
- detect_watermark(): Canny edge density heuristic
- is_sharp(): Laplacian variance threshold
"""

import os
import sys
import json
import cv2
import numpy as np
import requests
from pathlib import Path
from typing import List, Dict, Optional, Tuple
from dataclasses import dataclass, asdict
from datetime import datetime
from urllib.parse import urlparse
import hashlib

# Blocklist: No Pinterest/Getty/Shutterstock
BLOCKLIST_DOMAINS = [
    "shutterstock.com", "istockphoto.com", "gettyimages.com",
    "dreamstime.com", "123rf.com", "alamy.com", "depositphotos.com",
    "pinterest.com", "freepik.com", "vectorstock.com",
]

@dataclass
class ImageMetadata:
    """Metadata for each image"""
    source: str  # "unsplash", "pexels", "wikimedia", etc.
    query: str
    url: str
    license: str  # "CC0", "Unsplash License", "Editorial", etc.
    resolution: Tuple[int, int]
    file_size: int
    format: str
    hash_md5: str
    hash_perceptual: str
    sharpness_score: float
    watermark_detected: bool
    watermark_confidence: float
    aspect_ratio: str
    usage: str  # "commercial", "editorial", "unknown"
    downloaded_at: str
    approved_by: Optional[str] = None
    approved_at: Optional[str] = None
    alt_text: Optional[str] = None
    tags: List[str] = None

class QualityFilters:
    """Image quality validation filters"""

    @staticmethod
    def is_hd(width: int, height: int, min_width: int = 1920, min_height: int = 1080) -> bool:
        """Check if image meets HD resolution requirements"""
        return width >= min_width and height >= min_height

    @staticmethod
    def detect_watermark(img: np.ndarray, threshold: float = 0.15) -> Tuple[bool, float]:
        """
        Detect watermarks using Canny edge density heuristic.

        Watermarks typically have:
        - High edge density in specific regions
        - Repeating patterns
        - Text-like structures

        Returns: (has_watermark, confidence)
        """
        try:
            # Convert to grayscale
            if len(img.shape) == 3:
                gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
            else:
                gray = img

            # Apply Canny edge detection
            edges = cv2.Canny(gray, 50, 150)

            # Calculate edge density
            edge_density = np.sum(edges > 0) / edges.size

            # Divide image into grid and check for concentrated edges (watermark pattern)
            h, w = edges.shape
            grid_size = 8
            grid_h, grid_w = h // grid_size, w // grid_size

            max_region_density = 0
            for i in range(grid_size):
                for j in range(grid_size):
                    region = edges[i*grid_h:(i+1)*grid_h, j*grid_w:(j+1)*grid_w]
                    region_density = np.sum(region > 0) / region.size
                    max_region_density = max(max_region_density, region_density)

            # If any region has significantly higher density than average, likely watermark
            confidence = max_region_density / (edge_density + 0.001)  # Avoid division by zero
            has_watermark = confidence > 2.5 or edge_density > threshold

            return has_watermark, float(confidence)

        except Exception as e:
            print(f"⚠️ Watermark detection error: {e}")
            return False, 0.0

    @staticmethod
    def is_sharp(img: np.ndarray, threshold: float = 100.0) -> Tuple[bool, float]:
        """
        Check image sharpness using Laplacian variance.

        Higher variance = sharper image
        Threshold: 100.0 is reasonable for HD images

        Returns: (is_sharp, sharpness_score)
        """
        try:
            # Convert to grayscale
            if len(img.shape) == 3:
                gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
            else:
                gray = img

            # Calculate Laplacian variance
            laplacian = cv2.Laplacian(gray, cv2.CV_64F)
            variance = laplacian.var()

            return variance >= threshold, float(variance)

        except Exception as e:
            print(f"⚠️ Sharpness detection error: {e}")
            return False, 0.0

    @staticmethod
    def check_aspect_ratio(width: int, height: int) -> str:
        """Determine aspect ratio category"""
        ratio = width / height

        if 1.7 <= ratio <= 1.8:
            return "16:9"
        elif 1.3 <= ratio <= 1.4:
            return "4:3"
        elif 0.9 <= ratio <= 1.1:
            return "1:1"
        elif 0.55 <= ratio <= 0.65:
            return "9:16"
        else:
            return f"{width}:{height}"

class ImageEngine:
    """Main image acquisition engine"""

    def __init__(self, output_dir: str = "image_engine/output"):
        self.output_dir = Path(output_dir)
        self.output_dir.mkdir(parents=True, exist_ok=True)
        self.review_dir = Path("image_engine/review")
        self.review_dir.mkdir(parents=True, exist_ok=True)
        self.metadata_file = self.output_dir / "metadata.json"
        self.metadata: List[Dict] = []

        # Load existing metadata
        if self.metadata_file.exists():
            with open(self.metadata_file, 'r') as f:
                self.metadata = json.load(f)

    def download_image(self, url: str) -> Optional[np.ndarray]:
        """Download image from URL"""
        try:
            response = requests.get(url, timeout=10, headers={
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            })
            response.raise_for_status()

            # Convert to numpy array
            img_array = np.frombuffer(response.content, np.uint8)
            img = cv2.imdecode(img_array, cv2.IMREAD_COLOR)

            return img

        except Exception as e:
            print(f"❌ Download failed: {e}")
            return None

    def is_safe_domain(self, url: str) -> bool:
        """Check if domain is not in blocklist"""
        domain = urlparse(url).netloc.lower()
        return not any(blocked in domain for blocked in BLOCKLIST_DOMAINS)

    def process_image(self, url: str, source: str, query: str, license_type: str = "unknown") -> Optional[ImageMetadata]:
        """Download and process single image with all quality checks"""

        # Domain check
        if not self.is_safe_domain(url):
            print(f"⚠️ Blocked domain: {urlparse(url).netloc}")
            return None

        # Download
        img = self.download_image(url)
        if img is None:
            return None

        # Get dimensions
        height, width = img.shape[:2]

        # Quality filters
        if not QualityFilters.is_hd(width, height):
            print(f"❌ Not HD: {width}x{height}")
            return None

        has_watermark, watermark_conf = QualityFilters.detect_watermark(img)
        if has_watermark:
            print(f"⚠️ Watermark detected (confidence: {watermark_conf:.2f})")
            return None

        is_sharp, sharpness = QualityFilters.is_sharp(img)
        if not is_sharp:
            print(f"❌ Not sharp enough: {sharpness:.2f}")
            return None

        # Calculate hashes
        img_bytes = cv2.imencode('.jpg', img)[1].tobytes()
        md5_hash = hashlib.md5(img_bytes).hexdigest()

        # Perceptual hash (simple average hash)
        small = cv2.resize(img, (8, 8))
        gray_small = cv2.cvtColor(small, cv2.COLOR_BGR2GRAY)
        avg = gray_small.mean()
        phash = ''.join(['1' if p > avg else '0' for p in gray_small.flatten()])
        phash_hex = hex(int(phash, 2))[2:].zfill(16)

        # Create metadata
        metadata = ImageMetadata(
            source=source,
            query=query,
            url=url,
            license=license_type,
            resolution=(width, height),
            file_size=len(img_bytes),
            format="JPEG",
            hash_md5=md5_hash,
            hash_perceptual=phash_hex,
            sharpness_score=sharpness,
            watermark_detected=has_watermark,
            watermark_confidence=watermark_conf,
            aspect_ratio=QualityFilters.check_aspect_ratio(width, height),
            usage="commercial" if license_type in ["CC0", "Unsplash License"] else "editorial",
            downloaded_at=datetime.now().isoformat(),
            tags=query.split()
        )

        # Save to review folder
        safe_query = "".join(c for c in query if c.isalnum() or c in "-_").strip()
        filename = f"{safe_query}_{md5_hash[:8]}.jpg"
        review_path = self.review_dir / filename

        cv2.imwrite(str(review_path), img, [cv2.IMWRITE_JPEG_QUALITY, 95])

        # Save metadata JSON alongside image
        meta_path = self.review_dir / f"{safe_query}_{md5_hash[:8]}.json"
        with open(meta_path, 'w') as f:
            json.dump(asdict(metadata), f, indent=2)

        print(f"✅ Saved for review: {filename} ({width}x{height}, sharpness: {sharpness:.1f})")

        return metadata

    def save_metadata(self):
        """Save all metadata to JSON file"""
        with open(self.metadata_file, 'w') as f:
            json.dump(self.metadata, f, indent=2)
        print(f"💾 Metadata saved: {self.metadata_file}")

def main():
    """Example usage"""
    engine = ImageEngine()

    # Example: Process a single image
    test_url = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4"  # Mountain landscape
    metadata = engine.process_image(
        url=test_url,
        source="unsplash",
        query="vancouver mountains landscape",
        license_type="Unsplash License"
    )

    if metadata:
        print("\n✨ Image passed all quality checks!")
        print(f"   Resolution: {metadata.resolution}")
        print(f"   Sharpness: {metadata.sharpness_score:.1f}")
        print(f"   Watermark: {metadata.watermark_detected}")
        print(f"\n📁 Review images in: image_engine/review/")
        print(f"   Approve images, then move to: image_engine/output/")

if __name__ == "__main__":
    main()
