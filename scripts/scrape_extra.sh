#!/bin/bash
source .venv/bin/activate

scrape() {
    echo "Scraping $1..."
    python3 scripts/image_scraper.py "$1 logo icon transparent" --limit 2 --output "public/images/tech/$2" --sources bing google
}

mkdir -p public/images/tech

scrape "elasticsearch" "elasticsearch"
scrape "github actions" "github_actions"
scrape "jenkins" "jenkins"
