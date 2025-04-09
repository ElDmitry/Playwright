// @ts-check
/**
 * @typedef {import('@playwright/test').Page} Page
 */

import { expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage.js';
import { LoginPopup } from '../pages/LoginPopup.js';
import { GaragePage } from '../pages/GaragePage.js';

/**
 * Логін користувача на сайті
 * @param {Page} page
 * @param {string} email
 * @param {string} password
 */
export async function performLogin(page, email, password) {
  const homePage = new HomePage(page);
  const loginPopup = new LoginPopup(page);
  const garagePage = new GaragePage(page);

  await page.goto('/');
  await homePage.clickSignInBtn();
  await expect(loginPopup.loginTitle).toHaveText('Log in');
  await loginPopup.fillLoginForm(email, password);
  await loginPopup.submitLogin();

  await expect(page).toHaveURL(new RegExp(garagePage.url + '$'));
  await expect(garagePage.garageTitle).toHaveText('Garage');
}
