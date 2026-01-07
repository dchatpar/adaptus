#!/bin/bash
source .venv/bin/activate

# Function to scrape single image and rename it
scrape_and_rename() {
    QUERY="$1"
    FILENAME="$2"
    echo "Scraping for: $FILENAME..."
    
    # Scrape 1 image
    python3 scripts/image_scraper.py "$QUERY" --limit 1 --output "public/images/blog_temp/$FILENAME" --sources bing google duckduckgo
    
    # Find the downloaded file
    DOWNLOADED=$(find "public/images/blog_temp/$FILENAME" -type f | head -n 1)
    
    if [ -n "$DOWNLOADED" ]; then
        # Move and rename to target
        mv "$DOWNLOADED" "public/images/blog/$FILENAME"
        echo "✅ Saved to public/images/blog/$FILENAME"
    else
        echo "❌ Failed to download for $FILENAME"
    fi
}

mkdir -p public/images/blog
mkdir -p public/images/blog_temp

scrape_and_rename "AI agents enterprise autonomous futuristic abstract technology high quality blue" "ai-agents-enterprise.jpg"
scrape_and_rename "predictive maintenance industrial iot machine learning abstract industry 4.0" "predictive-maintenance.jpg"
scrape_and_rename "natural language processing conversational ai abstract neural network visualization" "nlp-chatbots.jpg"

# Clean up temp
rm -rf public/images/blog_temp
