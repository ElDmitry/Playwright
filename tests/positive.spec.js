import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const email = faker.internet.email();
const password = 'Test123!'

module.exports = {firstName, lastName, email, password}


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