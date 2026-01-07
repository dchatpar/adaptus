import { BasePage } from './BasePage';
import { Page, Locator } from '@playwright/test';

/**
 * HomePage - Page Object for the main homepage
 */
export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Locators
  get heroSection(): Locator {
    return this.page.locator('section:first-of-type');
  }

  get heroTitle(): Locator {
    return this.page.locator('h1').first();
  }

  get heroBadge(): Locator {
    return this.page.locator('text=Enterprise AI');
  }

  get bentoGrid(): Locator {
    return this.page.locator('section:nth-of-type(2)');
  }

  get metricsSection(): Locator {
    return this.page.locator('section:nth-of-type(3)');
  }

  get caseStudiesSection(): Locator {
    return this.page.locator('section:nth-of-type(4)');
  }

  get techStackSection(): Locator {
    return this.page.locator('section:nth-of-type(5)');
  }

  get globalPresenceSection(): Locator {
    return this.page.locator('section:nth-of-type(6)');
  }

  get testimonialsSection(): Locator {
    return this.page.locator('section:nth-of-type(7)');
  }

  get ctaSection(): Locator {
    return this.page.locator('section:nth-of-type(8)');
  }

  get mainCTA(): Locator {
    return this.page.getByRole('button', { name: /get started/i }).first();
  }

  get navigation(): Locator {
    return this.page.locator('nav');
  }

  get footer(): Locator {
    return this.page.locator('footer');
  }

  // Actions
  async navigate() {
    await this.goTo('/');
    await this.waitForLoad();
  }

  async clickMainCTA() {
    await this.mainCTA.click();
  }

  async scrollToSection(sectionNumber: number) {
    const section = this.page.locator(`section:nth-of-type(${sectionNumber})`);
    await section.scrollIntoViewIfNeeded();
  }

  async verifyAllSectionsVisible() {
    await this.expectVisible('section:first-of-type'); // Hero
    await this.expectVisible('section:nth-of-type(2)'); // Bento Grid
    await this.expectVisible('section:nth-of-type(3)'); // Metrics
    await this.expectVisible('section:nth-of-type(4)'); // Case Studies
  }
}
