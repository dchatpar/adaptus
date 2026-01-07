import { test, expect } from '@playwright/test';

test.describe('Homepage Visual Tests', () => {
  test('homepage renders correctly on desktop', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveScreenshot('homepage-desktop.png', {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('homepage hero section alignment', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('section:first-of-type');

    const hero = page.locator('section:first-of-type');
    await expect(hero).toHaveScreenshot('hero-section.png');
  });

  test('bento grid alignment', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('section:nth-of-type(2)');

    const bentoGrid = page.locator('section:nth-of-type(2)');
    await expect(bentoGrid).toHaveScreenshot('bento-grid.png');
  });

  test('metrics showcase alignment', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('section:nth-of-type(3)');

    const metrics = page.locator('section:nth-of-type(3)');
    await expect(metrics).toHaveScreenshot('metrics-showcase.png');
  });
});

test.describe('Industry Pages Visual Tests', () => {
  const industries = [
    'enterprise-saas',
    'finance',
    'logistics',
    'manufacturing',
    'real-estate',
    'retail',
  ];

  for (const industry of industries) {
    test(`${industry} page renders correctly`, async ({ page }) => {
      await page.goto(`/industries/${industry}`);
      await page.waitForLoadState('networkidle');
      await expect(page).toHaveScreenshot(`${industry}-page.png`, {
        fullPage: true,
        animations: 'disabled',
      });
    });

    test(`${industry} hero section alignment`, async ({ page }) => {
      await page.goto(`/industries/${industry}`);
      await page.waitForSelector('section:first-of-type');

      const hero = page.locator('section:first-of-type');
      await expect(hero).toHaveScreenshot(`${industry}-hero.png`);
    });
  }
});

test.describe('Responsive Layout Tests', () => {
  test('homepage responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveScreenshot('homepage-mobile.png', {
      fullPage: true,
    });
  });

  test('homepage responsive on tablet', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveScreenshot('homepage-tablet.png', {
      fullPage: true,
    });
  });
});
