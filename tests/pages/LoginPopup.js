// @ts-check
/**
 * @typedef {import('@playwright/test').Page} Page
 * @typedef {import('@playwright/test').Locator} Locator
 */

export class LoginPopup {
  /**
   * @param {Page} page
   */
  constructor(page) {
    this.page = page;
    this.loginTitle = page.locator('h4.modal-title', { hasText: 'Log in' });
    this.emailInput = page.locator('#signinEmail');
    this.passwordInput = page.locator('#signinPassword');
    this.loginBtn = page.locator("button[type='button']", { hasText: 'Login' });
  }

  /**
   * @param {string} email
   * @param {string} password
   */
  async fillLoginForm(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
  }

  async submitLogin() {
    await this.loginBtn.click();
    return this;
  }
}
