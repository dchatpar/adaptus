#!/bin/bash
source .venv/bin/activate

# Function to scrape with improved query
scrape() {
    echo "Scraping $1..."
    # Query: "$1 official logo square" - hoping for better aspect ratios
    # Limit 4 to have options
    python3 scripts/image_scraper.py "$1 official logo square" --limit 4 --output "public/images/tech_v2/$2" --sources bing google duckduckgo
}

mkdir -p public/images/tech_v2

# AI
scrape "openai" "openai"
scrape "tensorflow" "tensorflow"
scrape "pytorch" "pytorch"
scrape "langchain" "langchain"

# Cloud
scrape "aws" "aws"
scrape "azure" "azure"
scrape "google cloud platform" "gcp"
scrape "kubernetes" "kubernetes"

# Dev
scrape "react js" "react"
scrape "node js" "nodejs"
scrape "python" "python"
scrape "dotnet core" "dotnet"

# Data
scrape "postgresql" "postgresql"
scrape "mongodb" "mongodb"
scrape "redis" "redis"
scrape "elasticsearch" "elasticsearch"

# Security
scrape "zero trust security" "zerotrust" 
scrape "soc2" "soc2"
scrape "iso 27001" "iso27001" 
scrape "gdpr" "gdpr"

# DevOps
scrape "github actions" "github_actions"
scrape "docker" "docker"
scrape "terraform" "terraform"
scrape "jenkins" "jenkins"
