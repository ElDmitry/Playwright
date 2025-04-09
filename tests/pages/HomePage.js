// @ts-check
/**
 * @typedef {import('@playwright/test').Page} Page
 * @typedef {import('@playwright/test').Locator} Locator
 */
export class HomePage {
  /**
   * @param {Page} page
   */
  constructor(page) {
    this.page = page;
    this.signUpBtn = page.locator("button[class*='descriptor_btn']", { hasText: 'Sign up' });
    this.signInBtn = page.locator("button[class*='header_signin']", { hasText: 'Sign in' });
  }

  async clickSignUpBtn() {
    await this.signUpBtn.click();
    return this;
  }

  async clickSignInBtn() {
    await this.signInBtn.click();
    return this;
  }
}
