#!/bin/bash

# Script to add HD hero sections to all remaining industry pages

echo "🎨 Adding HD Hero Sections to Industry Pages"
echo "=============================================="

# Array of industries with their image paths
declare -A industries
industries[finance]="financial_trading_floor_bankin_bing_0001_3e1686db.jpeg"
industries[logistics]="warehouse_logistics_distributi_bing_0001_73ca0084.webp"
industries[manufacturing]="factory_manufacturing_producti_bing_0001_8291340e.jpeg"
industries[real-estate]="modern_real_estate_luxury_prop_bing_0001_f309b1c5.jpeg"
industries[retail]="retail_store_ecommerce_shoppin_bing_0001_90e1c27a.webp"

for industry in "${!industries[@]}"; do
  echo ""
  echo "📝 Processing: $industry"

  file="src/app/industries/$industry/page.tsx"
  image="${industries[$industry]}"

  if [ -f "$file" ]; then
    echo "✓ Found: $file"
    echo "✓ Image: /images/industries/$industry/$image"
    # We'll manually update these files to ensure quality
  else
    echo "✗ Not found: $file"
  fi
done

echo ""
echo "=============================================="
echo "✅ Ready to update industry pages"
echo ""
echo "Next steps:"
echo "1. Update each industry page with HD hero section"
echo "2. Use Enterprise SaaS page as template"
echo "3. Replace image paths with industry-specific images"
echo "4. Test build after each update"
