import { test, expect } from '@playwright/test';
import { OpenRegisterPage } from './test-data/pom.js';
import { Registration } from './test-data/pom.js';
import {name, lastName, email, password,repeatPassword,url} from './test-data/registration-data.js';

test.beforeEach('open registration form', async ({page}) => {
    const registerForm = new OpenRegisterPage(page,url);
    await registerForm.openPage();
}),
test.describe('Positive casesPOM', () => {
  test('Smoke test', async ({ page }) => {
    const smokeTest = new Registration(page)
    await smokeTest.registration(name, lastName, email, password, repeatPassword)
    await page.locator('button', {hasText : "Register"}).click();
    await expect(page).toHaveURL(/.*garage/);
  }),
test('Name field has 2 symbols', async({ page }) => {
    const test1 = new Registration(page)
    await test1.registration('Jo', lastName, email, password, repeatPassword)
    await page.locator('button', {hasText : "Register"}).click();
    await expect(page).toHaveURL(/.*garage/);
  });
test('Last name has 20 symbols', async ({ page }) => {
    const test2 = new Registration(page)
    await test2.registration(name, 'Featherstonehaughwic', email, password, repeatPassword)
    await page.locator('button', {hasText : "Register"}).click();
    await expect(page).toHaveURL(/.*garage/);
    });
})