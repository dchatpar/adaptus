#!/bin/bash

# Website Image Scraper - Scrapes HD images for all website pages
# This script uses the image_scraper.py to get watermark-free HD images

set -e

echo "🎨 AdaptUs Group Website Image Scraper"
echo "======================================"
echo ""

# Create main images directory
mkdir -p public/images/{hero,industries,divisions,company,blog,tech-stack,case-studies,team}

# Function to scrape images
scrape_images() {
    local query="$1"
    local output_dir="$2"
    local limit="${3:-20}"

    echo "📸 Scraping: $query"
    python3 "$(dirname "$0")/image_scraper.py" "$query" \
        --limit "$limit" \
        --output "$output_dir" \
        --workers 15 \
        --sources google bing duckduckgo
    echo ""
}

echo "🏠 HOMEPAGE IMAGES"
echo "=================="
scrape_images "modern technology office workspace" "public/images/hero" 10
scrape_images "business team collaboration" "public/images/hero" 10
scrape_images "data center servers technology" "public/images/hero" 10

echo ""
echo "🏭 INDUSTRY PAGES"
echo "================="
scrape_images "enterprise saas software dashboard" "public/images/industries/saas" 15
scrape_images "financial technology fintech banking" "public/images/industries/finance" 15
scrape_images "logistics warehouse distribution" "public/images/industries/logistics" 15
scrape_images "manufacturing factory automation" "public/images/industries/manufacturing" 15
scrape_images "real estate modern architecture" "public/images/industries/real-estate" 15
scrape_images "retail ecommerce shopping" "public/images/industries/retail" 15

echo ""
echo "⚙️  DIVISION PAGES"
echo "================="
scrape_images "artificial intelligence machine learning" "public/images/divisions/cortex" 12
scrape_images "software development coding" "public/images/divisions/forge" 12
scrape_images "digital marketing analytics" "public/images/divisions/kinetic" 12
scrape_images "cloud infrastructure network" "public/images/divisions/nexus" 12
scrape_images "cybersecurity shield protection" "public/images/divisions/sentinel" 12
scrape_images "logistics supply chain" "public/images/divisions/vector" 12

echo ""
echo "🏢 COMPANY PAGES"
echo "================"
scrape_images "diverse business team meeting" "public/images/company/team" 20
scrape_images "modern office workspace culture" "public/images/company/culture" 15
scrape_images "business leadership executive" "public/images/company/leadership" 10

echo ""
echo "💼 CASE STUDIES & BLOG"
echo "======================"
scrape_images "business success growth chart" "public/images/case-studies" 20
scrape_images "technology innovation abstract" "public/images/blog" 30

echo ""
echo "🔧 TECHNOLOGY STACK"
echo "==================="
scrape_images "cloud computing aws azure" "public/images/tech-stack/cloud" 10
scrape_images "react nextjs javascript" "public/images/tech-stack/frontend" 10
scrape_images "nodejs python backend" "public/images/tech-stack/backend" 10
scrape_images "docker kubernetes devops" "public/images/tech-stack/devops" 10

echo ""
echo "✅ IMAGE SCRAPING COMPLETE!"
echo "==========================="
echo ""
echo "📊 Summary:"
find public/images -type f -name "*.jpg" -o -name "*.png" -o -name "*.webp" | wc -l | xargs echo "Total images downloaded:"
echo ""
echo "📁 Images saved to: public/images/"
echo ""
echo "💡 Next steps:"
echo "   1. Review images in public/images/"
echo "   2. Select best images for each page"
echo "   3. Optimize images if needed"
echo "   4. Update page components to use new images"
echo ""
