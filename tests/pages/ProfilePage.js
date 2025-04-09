// @ts-check
/**
 * @typedef {import('@playwright/test').Page} Page
 * @typedef {import('@playwright/test').Locator} Locator
 */

export class ProfilePage {
  /**
   * @param {Page} page
   */
  constructor(page) {
    this.page = page;
    this.url = '/panel/profile';
    this.profileTitle = page.locator('h1', { hasText: 'Profile' });
    this.profileName = page.locator("p[class*='profile_name']");
  }
}
