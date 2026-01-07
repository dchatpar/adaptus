import { test, expect } from '@playwright/test';
import { IndustryPages } from '../pages/IndustryPage';

test.describe('Industry Pages Tests with POM', () => {
  const industries = [
    { name: 'Enterprise SaaS', factory: IndustryPages.enterpriseSaaS },
    { name: 'Finance', factory: IndustryPages.finance },
    { name: 'Logistics', factory: IndustryPages.logistics },
    { name: 'Manufacturing', factory: IndustryPages.manufacturing },
    { name: 'Real Estate', factory: IndustryPages.realEstate },
    { name: 'Retail', factory: IndustryPages.retail },
  ];

  for (const industry of industries) {
    test(`${industry.name} page loads correctly`, async ({ page }) => {
      const industryPage = industry.factory(page);

      await industryPage.navigate();
      await industryPage.verifyPageLoaded();

      // Verify hero section
      await expect(industryPage.heroSection).toBeVisible();
      await expect(industryPage.heroTitle).toBeVisible();
    });

    test(`${industry.name} page displays all sections`, async ({ page }) => {
      const industryPage = industry.factory(page);

      await industryPage.navigate();

      // Verify key sections
      await expect(industryPage.heroSection).toBeVisible();
      await expect(industryPage.challengesSection).toBeVisible();
      await expect(industryPage.solutionsSection).toBeVisible();
    });
  }
});
