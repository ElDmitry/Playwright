import { test, expect } from '@playwright/test';
import {firstName, lastName, email, password} from './test-data/registration-data.js';

test.beforeEach('open registration form', async ({page}) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.locator('button', {hasText : "Sign up"}).click();
    await expect (page.locator('div.modal-content')).toBeVisible(); 
});
test.describe('Positive cases', () => {
  test('Smoke test', async ({ page }) => {
    await page.locator('#signupName').fill(firstName);
    await page.locator('#signupLastName').fill(lastName);
    await page.locator('#signupEmail').fill(email);
    await page.locator('#signupPassword').fill(password);
    await page.locator('#signupRepeatPassword').fill(password);
    await page.locator('button', {hasText : "Register"}).click();
    await expect(page).toHaveURL(/.*garage/);
  });
  test('Name field has 2 symbols', async({ page }) => {
    await page.locator('#signupName').fill('Jo');
    await page.locator('#signupLastName').fill(lastName);
    await page.locator('#signupEmail').fill(email);
    await page.locator('#signupPassword').fill(password);
    await page.locator('#signupRepeatPassword').fill(password);
    await page.locator('button', {hasText : "Register"}).click();
    await expect(page).toHaveURL(/.*garage/);
  });
  test('Last name has 20 symbols', async ({ page }) => {
    await page.locator('#signupName').fill(firstName);
    await page.locator('#signupLastName').fill('Featherstonehaughwic');
    await page.locator('#signupEmail').fill(email);
    await page.locator('#signupPassword').fill(password);
    await page.locator('#signupRepeatPassword').fill(password);
    await page.locator('button', {hasText : "Register"}).click();
    await expect(page).toHaveURL(/.*garage/);
  });
})