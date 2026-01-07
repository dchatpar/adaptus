import { BasePage } from './BasePage';
import { Page, Locator } from '@playwright/test';

/**
 * IndustryPage - Page Object for industry pages
 */
export class IndustryPage extends BasePage {
  private industrySlug: string;

  constructor(page: Page, industrySlug: string) {
    super(page);
    this.industrySlug = industrySlug;
  }

  // Locators
  get heroSection(): Locator {
    return this.page.locator('section:first-of-type');
  }

  get heroTitle(): Locator {
    return this.page.locator('h1').first();
  }

  get challengesSection(): Locator {
    return this.page.locator('section:nth-of-type(2)');
  }

  get solutionsSection(): Locator {
    return this.page.locator('section:nth-of-type(3)');
  }

  get caseStudySection(): Locator {
    return this.page.locator('section:nth-of-type(4)');
  }

  // Actions
  async navigate() {
    await this.goTo(`/industries/${this.industrySlug}`);
    await this.waitForLoad();
  }

  async verifyPageLoaded() {
    await this.expectVisible('section:first-of-type');
    await this.waitForSelector('h1');
  }
}

/**
 * Factory function to create industry page objects
 */
export class IndustryPages {
  static enterpriseSaaS(page: Page): IndustryPage {
    return new IndustryPage(page, 'enterprise-saas');
  }

  static finance(page: Page): IndustryPage {
    return new IndustryPage(page, 'finance');
  }

  static logistics(page: Page): IndustryPage {
    return new IndustryPage(page, 'logistics');
  }

  static manufacturing(page: Page): IndustryPage {
    return new IndustryPage(page, 'manufacturing');
  }

  static realEstate(page: Page): IndustryPage {
    return new IndustryPage(page, 'real-estate');
  }

  static retail(page: Page): IndustryPage {
    return new IndustryPage(page, 'retail');
  }
}
