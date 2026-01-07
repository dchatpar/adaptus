import { test, expect } from '@playwright/test';
import percySnapshot from '@percy/playwright';

test.describe('Homepage Visual Tests with Percy', () => {
  test('homepage full view', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Percy snapshot
    await percySnapshot(page, 'Homepage Full View');

    // Verify key elements
    await expect(page.locator('text=Enterprise AI')).toBeVisible();
    await expect(page.locator('text=Built for Scale')).toBeVisible();
  });

  test('homepage hero section', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('section:first-of-type');

    await percySnapshot(page, 'Homepage Hero Section');
  });

  test('homepage bento grid', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('section:nth-of-type(2)');

    await percySnapshot(page, 'Homepage Bento Grid');
  });

  test('homepage metrics showcase', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('section:nth-of-type(3)');

    await percySnapshot(page, 'Homepage Metrics Showcase');
  });
});

test.describe('Industry Pages Visual Tests with Percy', () => {
  const industries = [
    { slug: 'enterprise-saas', name: 'Enterprise SaaS' },
    { slug: 'finance', name: 'Finance' },
    { slug: 'logistics', name: 'Logistics' },
    { slug: 'manufacturing', name: 'Manufacturing' },
    { slug: 'real-estate', name: 'Real Estate' },
    { slug: 'retail', name: 'Retail' },
  ];

  for (const industry of industries) {
    test(`${industry.name} page full view`, async ({ page }) => {
      await page.goto(`/industries/${industry.slug}`);
      await page.waitForLoadState('networkidle');

      await percySnapshot(page, `${industry.name} Page Full View`);

      // Verify page loaded
      await expect(page.locator('section:first-of-type')).toBeVisible();
    });
  }
});

test.describe('Responsive Visual Tests', () => {
  test('homepage mobile view', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    await percySnapshot(page, 'Homepage Mobile View', {
      widths: [375],
    });
  });

  test('homepage tablet view', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    await percySnapshot(page, 'Homepage Tablet View', {
      widths: [768],
    });
  });

  test('homepage desktop view', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    await percySnapshot(page, 'Homepage Desktop View', {
      widths: [1440],
    });
  });
});
