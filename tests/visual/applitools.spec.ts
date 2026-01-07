import { test as base, expect } from '@playwright/test';
import { Eyes, Target, Configuration, BatchInfo } from '@applitools/eyes-playwright';

type ApplitoolsFixtures = {
  eyes: Eyes;
};

const test = base.extend<ApplitoolsFixtures>({
  eyes: async ({ page }, use) => {
    const eyes = new Eyes();

    // Configure Applitools
    const configuration = new Configuration();
    configuration.setApiKey(process.env.APPLITOOLS_API_KEY || '');
    configuration.setAppName('AdaptUs Website');
    configuration.setTestName('Visual Regression Tests');

    // Set batch info for grouping tests
    const batch = new BatchInfo('AdaptUs CI/CD Batch');
    configuration.setBatch(batch);

    eyes.setConfiguration(configuration);

    await eyes.open(page, 'AdaptUs', 'Homepage Visual Test');
    await use(eyes);
    await eyes.close();
  },
});

test.describe('Applitools Visual AI Tests', () => {
  test('homepage layout validation', async ({ page, eyes }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Full page check
    await eyes.check('Homepage Full Page', Target.window().fully());
  });

  test('homepage hero section layout', async ({ page, eyes }) => {
    await page.goto('/');
    await page.waitForSelector('section:first-of-type');

    // Check specific region
    const hero = page.locator('section:first-of-type');
    await eyes.check('Hero Section', Target.region(hero));
  });

  test('homepage bento grid alignment', async ({ page, eyes }) => {
    await page.goto('/');
    await page.waitForSelector('section:nth-of-type(2)');

    const bentoGrid = page.locator('section:nth-of-type(2)');
    await eyes.check('Bento Grid Layout', Target.region(bentoGrid));
  });

  test('homepage responsive mobile', async ({ page, eyes }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    await eyes.check('Homepage Mobile Layout', Target.window().fully());
  });

  test('homepage responsive tablet', async ({ page, eyes }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    await eyes.check('Homepage Tablet Layout', Target.window().fully());
  });
});

test.describe('Industry Pages Applitools Tests', () => {
  const industries = ['enterprise-saas', 'finance', 'logistics', 'manufacturing', 'real-estate', 'retail'];

  for (const industry of industries) {
    test(`${industry} page layout validation`, async ({ page, eyes }) => {
      await page.goto(`/industries/${industry}`);
      await page.waitForLoadState('networkidle');

      await eyes.check(`${industry} Page Layout`, Target.window().fully());
    });
  }
});
