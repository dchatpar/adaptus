# Advanced Multi-Source Image Scraper

A powerful Python script that scrapes images from multiple sources including Google Images, Bing Images, DuckDuckGo, Unsplash, Pexels, and Pixabay.

## Features

✨ **Multi-Source Support**

- Google Images (API + Scraping)
- Bing Images (API + Scraping)
- DuckDuckGo Images
- Unsplash (API)
- Pexels (API)
- Pixabay (API)

🚀 **Advanced Capabilities**

- Parallel downloading with ThreadPoolExecutor
- Automatic duplicate removal
- Image validation
- Smart filename generation
- Progress tracking
- Configurable output directory

## Installation

```bash
# Install dependencies
pip install beautifulsoup4 requests lxml pillow

# Or use the script (it auto-installs dependencies)
python scripts/image_scraper.py "your query" --limit 100
```

## Basic Usage

```bash
# Download 100 images of "sunset beach"
python scripts/image_scraper.py "sunset beach" --limit 100

# Download 50 images to custom directory
python scripts/image_scraper.py "modern architecture" --limit 50 --output ./architecture

# Use specific sources only
python scripts/image_scraper.py "cats" --sources google bing --limit 30

# Increase parallel downloads
python scripts/image_scraper.py "nature" --limit 200 --workers 20
```

## API Keys (Optional but Recommended)

For better results and higher limits, set these environment variables:

```bash
# Google Custom Search
export GOOGLE_API_KEY="your_google_api_key"
export GOOGLE_CX="your_custom_search_engine_id"

# Bing Image Search
export BING_API_KEY="your_bing_api_key"

# Unsplash
export UNSPLASH_ACCESS_KEY="your_unsplash_access_key"

# Pexels
export PEXELS_API_KEY="your_pexels_api_key"

# Pixabay
export PIXABAY_API_KEY="your_pixabay_api_key"
```

### Getting API Keys

1. **Google Custom Search**
   - Get API key: https://developers.google.com/custom-search/v1/overview
   - Create search engine: https://programmablesearchengine.google.com/

2. **Bing Image Search**
   - Get API key: https://www.microsoft.com/en-us/bing/apis/bing-image-search-api

3. **Unsplash**
   - Get API key: https://unsplash.com/developers

4. **Pexels**
   - Get API key: https://www.pexels.com/api/

5. **Pixabay**
   - Get API key: https://pixabay.com/api/docs/

## Command Line Options

```
usage: image_scraper.py [-h] [--limit LIMIT] [--output OUTPUT]
                        [--workers WORKERS]
                        [--sources {google,bing,duckduckgo,unsplash,pexels,pixabay} ...]
                        query

positional arguments:
  query                 Search query

optional arguments:
  -h, --help            show this help message and exit
  --limit LIMIT, -l LIMIT
                        Total number of images to download (default: 100)
  --output OUTPUT, -o OUTPUT
                        Output directory (default: downloaded_images)
  --workers WORKERS, -w WORKERS
                        Number of parallel downloads (default: 10)
  --sources SOURCES [SOURCES ...], -s SOURCES [SOURCES ...]
                        Specific sources to use
```

## Examples

### Download high-quality stock photos

```bash
python scripts/image_scraper.py "business meeting" --sources unsplash pexels --limit 50
```

### Scrape from all sources

```bash
python scripts/image_scraper.py "artificial intelligence" --limit 200
```

### Fast download with more workers

```bash
python scripts/image_scraper.py "landscape photography" --limit 300 --workers 30
```

## Output

Images are saved with descriptive filenames:

```
query_source_index_hash.ext
```

Example:

```
sunset_beach_google_0001_a1b2c3d4.jpg
modern_architecture_unsplash_0042_e5f6g7h8.png
```

## Features in Detail

### Automatic Deduplication

The scraper automatically removes duplicate images based on URL.

### Image Validation

All downloaded images are validated using PIL to ensure they're valid image files.

### Smart Fallbacks

If API keys are not provided, the scraper falls back to web scraping methods.

### Progress Tracking

Real-time progress updates show download status for each image.

## Troubleshooting

**No images found?**

- Check your internet connection
- Try different search terms
- Add API keys for better results

**Download failures?**

- Some URLs may be temporary or restricted
- Increase timeout in the code if needed
- Check firewall/proxy settings

**Rate limiting?**

- Reduce `--workers` value
- Add delays between requests
- Use API keys instead of scraping

## License

MIT License - Use freely for any purpose!
