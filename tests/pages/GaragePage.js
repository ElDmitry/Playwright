// @ts-check
import { expect } from '@playwright/test';

/**
 * @typedef {import('@playwright/test').Page} Page
 * @typedef {import('@playwright/test').Locator} Locator
 */
export class GaragePage {
  /**
   * @param {Page} page
   */
  constructor(page) {
    this.page = page;
    this.url = '/panel/garage';
    this.garageTitle = page.locator('h1', { hasText: 'Garage' });
    this.emptyGarageTitle = page.locator("p[class*='empty_message']");
    this.emptyGaragePanel = page.locator("div[class*='panel-empty']");
    this.addCarBtn = page.locator("button[class*='btn-primary']", { hasText: 'Add car' });
  }

  async assertGaragePage() {
    await expect(this.garageTitle).toHaveText('Garage');
    await expect(this.page).toHaveURL(new RegExp(this.url + '$'));
    return this;
  }
}
