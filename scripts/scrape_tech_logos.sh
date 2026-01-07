#!/bin/bash

# Activate venv
source .venv/bin/activate

# Install dependencies if not already (quietly)
pip install beautifulsoup4 requests lxml pillow > /dev/null 2>&1

# Function to scrape
scrape() {
    echo "Scraping $1..."
    python3 scripts/image_scraper.py "$1 logo icon transparent" --limit 3 --output "public/images/tech/$2" --sources google bing duckduckgo
}

# Create output dir
mkdir -p public/images/tech

# Scrape tech logos
scrape "aws" "aws"
scrape "azure" "azure"
scrape "google cloud platform" "gcp"
scrape "kubernetes" "kubernetes"
scrape "react js" "react"
scrape "next js" "nextjs"
scrape "node js" "nodejs"
scrape "python" "python"
scrape "django" "django"
scrape "dotnet core" "dotnet"
scrape "postgresql" "postgresql"
scrape "mongodb" "mongodb"
scrape "redis" "redis"
scrape "docker" "docker"
scrape "terraform" "terraform"

echo "Scraping complete."
