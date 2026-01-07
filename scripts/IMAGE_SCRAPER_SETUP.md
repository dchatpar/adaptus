# Image Scraper Setup Guide

## Quick Start

To scrape HD, watermark-free images for the entire website, you need API keys from free image services.

## Get Free API Keys (5 minutes)

### 1. Unsplash (Recommended - Best Quality)
- Visit: https://unsplash.com/developers
- Click "Register as a developer"
- Create a new application
- Copy your "Access Key"
- Set: `export UNSPLASH_ACCESS_KEY="your_key_here"`

### 2. Pexels (Recommended - Large Library)
- Visit: https://www.pexels.com/api/
- Click "Get Started"
- Copy your API key
- Set: `export PEXELS_API_KEY="your_key_here"`

### 3. Pixabay (Optional - Additional Sources)
- Visit: https://pixabay.com/api/docs/
- Sign up and get API key
- Set: `export PIXABAY_API_KEY="your_key_here"`

## Usage

### Option 1: Set API Keys Temporarily (This Session Only)
```bash
export UNSPLASH_ACCESS_KEY="your_unsplash_key"
export PEXELS_API_KEY="your_pexels_key"
export PIXABAY_API_KEY="your_pixabay_key"
```

### Option 2: Set API Keys Permanently
Add to your `~/.bashrc` or `~/.zshrc`:
```bash
echo 'export UNSPLASH_ACCESS_KEY="your_unsplash_key"' >> ~/.bashrc
echo 'export PEXELS_API_KEY="your_pexels_key"' >> ~/.bashrc
echo 'export PIXABAY_API_KEY="your_pixabay_key"' >> ~/.bashrc
source ~/.bashrc
```

### Option 3: Use .env File
Create `.env` file in project root:
```bash
UNSPLASH_ACCESS_KEY=your_unsplash_key
PEXELS_API_KEY=your_pexels_key
PIXABAY_API_KEY=your_pixabay_key
```

Then load before running:
```bash
source .env
./scripts/scrape_all_images.sh
```

## Run the Scraper

Once API keys are set:

```bash
# Scrape all images for the entire website
cd /home/dchat/adaptus
./scripts/scrape_all_images.sh
```

This will download ~250+ HD images organized by page type:
- Homepage hero images
- Industry page images (6 industries × 15 images)
- Division page images (6 divisions × 12 images)
- Company page images (team, culture, leadership)
- Blog and case study images
- Technology stack images

## Manual Scraping (Individual Queries)

```bash
# Download specific images
python3 scripts/image_scraper.py "modern office workspace" --limit 20 --output public/images/hero

# Download from specific sources only
python3 scripts/image_scraper.py "technology" --sources unsplash pexels --limit 50

# Fast download with more workers
python3 scripts/image_scraper.py "business team" --limit 100 --workers 20
```

## Troubleshooting

**No API keys?**
- The script will warn you but won't download images
- Get at least Unsplash and Pexels keys (both free, no credit card)

**Rate limiting?**
- Free tiers have limits (Unsplash: 50/hour, Pexels: 200/hour)
- Run script in batches if needed
- Wait an hour between runs if you hit limits

**Images not downloading?**
- Check internet connection
- Verify API keys are correct
- Check `public/images/` directory permissions

## Next Steps After Scraping

1. Review downloaded images in `public/images/`
2. Select best images for each page
3. Rename/organize as needed
4. Update page components to reference new images
5. Optimize images for web (optional):
   ```bash
   # Install sharp-cli for optimization
   npm install -g sharp-cli

   # Optimize all images
   find public/images -name "*.jpg" -exec sharp -i {} -o {}.webp \;
   ```

## Image Naming Convention

Downloaded images follow this pattern:
```
{query}_{source}_{index}_{hash}.{ext}
```

Example:
```
modern_office_workspace_unsplash_0001_a1b2c3d4.jpg
business_team_pexels_0042_e5f6g7h8.jpg
```

## License

All images from Unsplash, Pexels, and Pixabay are:
- ✅ Free to use
- ✅ No attribution required (though appreciated)
- ✅ Commercial use allowed
- ✅ No watermarks
- ✅ High resolution (HD/4K)
