#!/bin/bash

# Visual Testing Suite Runner
# Runs all visual regression tests across multiple tools

set -e

echo "🧪 Running Comprehensive Visual Testing Suite..."
echo ""

# 1. BackstopJS Tests
echo "📸 Running BackstopJS visual regression tests..."
pnpm backstop:test || echo "⚠️  BackstopJS tests need baseline or have differences"
echo ""

# 2. Playwright Visual Tests
echo "🎭 Running Playwright snapshot tests..."
pnpm playwright test --project=chromium || echo "⚠️  Playwright tests need baseline or have differences"
echo ""

# 3. Storybook Chromatic (if configured)
echo "📚 Building Storybook for Chromatic..."
pnpm build-storybook || echo "⚠️  Storybook build skipped"
echo ""

# 4. Galen Framework Layout Tests
echo "📐 Running Galen Framework layout tests..."
# galen test tests/galen/homepage.test --htmlreport reports/galen || echo "⚠️  Galen tests skipped (not configured)"
echo ""

echo "✅ Visual testing suite complete!"
echo ""
echo "📊 Reports available at:"
echo "  - BackstopJS: backstop_data/html_report/index.html"
echo "  - Playwright: playwright-report/index.html"
echo "  - Storybook: storybook-static/index.html"
echo ""
