import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Homepage Tests with POM', () => {
  test('homepage loads and displays all sections', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.navigate();
    await homePage.verifyAllSectionsVisible();

    // Verify hero section
    await expect(homePage.heroSection).toBeVisible();
    await expect(homePage.heroTitle).toBeVisible();

    // Verify navigation and footer
    await expect(homePage.navigation).toBeVisible();
    await expect(homePage.footer).toBeVisible();
  });

  test('homepage hero section displays correctly', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.navigate();

    // Verify hero elements
    await expect(homePage.heroTitle).toBeVisible();
    await expect(homePage.heroBadge).toBeVisible();
  });

  test('homepage sections are accessible via scroll', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.navigate();

    // Scroll to different sections
    await homePage.scrollToSection(2); // Bento Grid
    await expect(homePage.bentoGrid).toBeVisible();

    await homePage.scrollToSection(3); // Metrics
    await expect(homePage.metricsSection).toBeVisible();

    await homePage.scrollToSection(4); // Case Studies
    await expect(homePage.caseStudiesSection).toBeVisible();
  });
});
