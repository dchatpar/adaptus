import { Page, expect } from '@playwright/test';

/**
 * BasePage - Reusable base class for all page objects
 * Provides common utilities and methods shared across pages
 */
export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navigate to a specific URL
   */
  async goTo(url: string) {
    await this.page.goto(url);
  }

  /**
   * Wait for page to be fully loaded
   */
  async waitForLoad() {
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Check if element is visible
   */
  async expectVisible(selector: string) {
    await expect(this.page.locator(selector)).toBeVisible();
  }

  /**
   * Get page title
   */
  async getTitle(): Promise<string> {
    return await this.page.title();
  }

  /**
   * Take screenshot
   */
  async screenshot(name: string) {
    await this.page.screenshot({ path: `screenshots/${name}.png`, fullPage: true });
  }

  /**
   * Wait for specific selector
   */
  async waitForSelector(selector: string) {
    await this.page.waitForSelector(selector);
  }
}
