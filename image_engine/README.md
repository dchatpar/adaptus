# AdaptUs Image Acquisition Engine

Legal-aware, watermark-resistant, HD-only image scraping with human review workflow.

## Quick Start

```bash
# Install dependencies
pip install -r requirements.txt

# Run the engine
python run.py
```

## Architecture

```
image_engine/
├── sources/       # Image source integrations (Unsplash, Pexels, Wikimedia, etc.)
├── filters/       # Quality filters (resolution, watermark, sharpness)
├── enrich/        # Metadata enrichment and tagging
├── review/        # Human review workflow (images pending approval)
├── output/        # Final curated images with metadata
└── run.py         # Main engine script
```

## Quality Filters

### 1. Resolution Filter (`is_hd`)
- **Requirement**: >= 1920x1080 (Full HD)
- **Purpose**: Ensure images are high-quality for enterprise website
- **Configurable**: Can adjust min_width and min_height

### 2. Watermark Detection (`detect_watermark`)
- **Method**: Canny edge density heuristic
- **How it works**:
  - Applies Canny edge detection
  - Calculates edge density across image
  - Divides image into 8x8 grid
  - Detects concentrated edge patterns (typical of watermarks)
- **Threshold**: Confidence > 2.5 or edge density > 0.15
- **Blocks**: Shutterstock, Getty, iStock, Pinterest, etc.

### 3. Sharpness Detection (`is_sharp`)
- **Method**: Laplacian variance
- **Threshold**: >= 100.0 for HD images
- **Purpose**: Filter out blurry or low-quality images
- **Higher score = sharper image**

### 4. Aspect Ratio Check
- Categorizes images: 16:9, 4:3, 1:1, 9:16, custom
- Helps with layout planning

## Metadata Structure

Each image gets a JSON metadata file:

```json
{
  "source": "unsplash",
  "query": "vancouver skyline",
  "url": "https://...",
  "license": "Unsplash License",
  "resolution": [1920, 1080],
  "file_size": 245678,
  "format": "JPEG",
  "hash_md5": "a1b2c3d4...",
  "hash_perceptual": "f8e7d6c5...",
  "sharpness_score": 342.5,
  "watermark_detected": false,
  "watermark_confidence": 0.8,
  "aspect_ratio": "16:9",
  "usage": "commercial",
  "downloaded_at": "2026-01-07T05:50:00",
  "approved_by": null,
  "approved_at": null,
  "alt_text": "Vancouver skyline at sunset",
  "tags": ["vancouver", "skyline", "sunset"]
}
```

## Human Review Workflow

1. **Download**: Images are downloaded to `review/` folder
2. **Review**: Human reviews images for:
   - Brand alignment
   - Tone/aesthetic fit
   - Watermark false negatives
   - Content appropriateness
3. **Approve**: Move approved images to `output/`
4. **Metadata**: Update `approved_by` and `approved_at` fields

## Blocklist Domains

The engine automatically blocks:
- shutterstock.com
- istockphoto.com
- gettyimages.com
- dreamstime.com
- 123rf.com
- alamy.com
- depositphotos.com
- pinterest.com
- freepik.com
- vectorstock.com

## License-Safe Sources

Prioritized sources:
1. **Unsplash** (Unsplash License - free for commercial use)
2. **Pexels** (Pexels License - free for commercial use)
3. **Wikimedia Commons** (CC0, CC-BY, etc.)
4. **Bing/Google** (with license filtering)

## Usage Example

```python
from run import ImageEngine

engine = ImageEngine()

# Process a single image
metadata = engine.process_image(
    url="https://images.unsplash.com/photo-...",
    source="unsplash",
    query="vancouver mountains",
    license_type="Unsplash License"
)

if metadata:
    print(f"✅ Image approved: {metadata.resolution}")
```

## Next Steps

1. Integrate with Unsplash/Pexels APIs for bulk downloads
2. Add automated alt-text generation using AI
3. Build web UI for human review workflow
4. Add batch processing scripts
5. Integrate with website deployment pipeline

## Traceability

Every image includes:
- Source URL
- Download timestamp
- MD5 hash (content verification)
- Perceptual hash (duplicate detection)
- Quality scores
- License information
- Human approval status

This ensures full audit trail for compliance and attribution.
