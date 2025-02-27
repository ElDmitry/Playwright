import { test, expect } from '@playwright/test';
import {firstName, lastName, email, password} from './positive.spec.js';


test.beforeEach('open registration form', async ({page}) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.locator('button', {hasText : "Sign up"}).click();
});
test.describe('negative cases', () => {
    test('Name field is require', async ({ page }) => {
        await page.locator('#signupName').click();
        await page.locator('#signupLastName').fill(lastName);
        await page.locator('#signupEmail').fill(email);
        await page.locator('#signupPassword').fill(password);
        await page.locator('#signupRepeatPassword').fill(password);
        await expect(page.locator('button', {hasText : "Register"})).toBeDisabled();
        await expect(page.locator('.invalid-feedback')).toHaveText('Name required');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('color', 'rgb(220, 53, 69)');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  });
    test('Name field has 1 symbol', async ({ page }) => {
        await page.locator('#signupName').fill('J');
        await page.locator('#signupLastName').fill(lastName);
        await page.locator('#signupEmail').fill(email);
        await page.locator('#signupPassword').fill(password);
        await page.locator('#signupRepeatPassword').fill(password);
        await expect(page.locator('button', {hasText : "Register"})).toBeDisabled();
        await expect(page.locator('.invalid-feedback')).toHaveText('Name has to be from 2 to 20 characters long');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('color', 'rgb(220, 53, 69)');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  });
    test('Name field has 21 symbol', async ({ page }) => {
        await page.locator('#signupName').fill('Johnohnohnohnohnohnoh');
        await page.locator('#signupLastName').fill(lastName);
        await page.locator('#signupEmail').fill(email);
        await page.locator('#signupPassword').fill(password);
        await page.locator('#signupRepeatPassword').fill(password);
        await expect(page.locator('button', {hasText : "Register"})).toBeDisabled();
        await expect(page.locator('.invalid-feedback')).toHaveText('Name has to be from 2 to 20 characters long');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('color', 'rgb(220, 53, 69)');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  });
  test('Name field has wrong data(number)', async ({ page }) => {
        await page.locator('#signupName').fill('1234');
        await page.locator('#signupLastName').fill(lastName);
        await page.locator('#signupEmail').fill(email);
        await page.locator('#signupPassword').fill(password);
        await page.locator('#signupRepeatPassword').fill(password);
        await expect(page.locator('button', {hasText : "Register"})).toBeDisabled();
        await expect(page.locator('.invalid-feedback')).toHaveText('Name is invalid');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('color', 'rgb(220, 53, 69)');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  });
  test('Name field has wrong data(Cyrillic)', async ({ page }) => {
        await page.locator('#signupName').fill('Дмитро');
        await page.locator('#signupLastName').fill(lastName);
        await page.locator('#signupEmail').fill(email);
        await page.locator('#signupPassword').fill(password);
        await page.locator('#signupRepeatPassword').fill(password);
        await expect(page.locator('button', {hasText : "Register"})).toBeDisabled();
        await expect(page.locator('.invalid-feedback')).toHaveText('Name is invalid');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('color', 'rgb(220, 53, 69)');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  });
  test('Last name field is require', async ({ page }) => {
        await page.locator('#signupName').fill(firstName);
        await page.locator('#signupLastName').click();
        await page.locator('#signupEmail').fill(email);
        await page.locator('#signupPassword').fill(password);
        await page.locator('#signupRepeatPassword').fill(password);
        await expect(page.locator('button', {hasText : "Register"})).toBeDisabled();
        await expect(page.locator('.invalid-feedback')).toHaveText('Last name required');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('color', 'rgb(220, 53, 69)');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  });
    test('Last name field has 1 symbol', async ({ page }) => {
        await page.locator('#signupName').fill(firstName);
        await page.locator('#signupLastName').fill('A');
        await page.locator('#signupEmail').fill(email);
        await page.locator('#signupPassword').fill(password);
        await page.locator('#signupRepeatPassword').fill(password);
        await expect(page.locator('button', {hasText : "Register"})).toBeDisabled();
        await expect(page.locator('.invalid-feedback')).toHaveText('Last name has to be from 2 to 20 characters long');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('color', 'rgb(220, 53, 69)');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  });
  test('Last name field has 21 symbol', async ({ page }) => {
        await page.locator('#signupName').fill(firstName);
        await page.locator('#signupLastName').fill('Aaaaaaaaaaaaaaaaaaaaa');
        await page.locator('#signupEmail').fill(email);
        await page.locator('#signupPassword').fill(password);
        await page.locator('#signupRepeatPassword').fill(password);
        await expect(page.locator('button', {hasText : "Register"})).toBeDisabled();
        await expect(page.locator('.invalid-feedback')).toHaveText('Last name has to be from 2 to 20 characters long');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('color', 'rgb(220, 53, 69)');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  });
  test('Last name field has wrong data(number)', async ({ page }) => {
        await page.locator('#signupName').fill(firstName);
        await page.locator('#signupLastName').fill('1234');
        await page.locator('#signupEmail').fill(email);
        await page.locator('#signupPassword').fill(password);
        await page.locator('#signupRepeatPassword').fill(password);
        await expect(page.locator('button', {hasText : "Register"})).toBeDisabled();
        await expect(page.locator('.invalid-feedback')).toHaveText('Last name is invalid');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('color', 'rgb(220, 53, 69)');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  });
  test('Last name field has wrong data(Cyrillic)', async ({ page }) => {
        await page.locator('#signupName').fill(firstName);
        await page.locator('#signupLastName').fill('Бест');
        await page.locator('#signupEmail').fill(email);
        await page.locator('#signupPassword').fill(password);
        await page.locator('#signupRepeatPassword').fill(password);
        await expect(page.locator('button', {hasText : "Register"})).toBeDisabled();
        await expect(page.locator('.invalid-feedback')).toHaveText('Last name is invalid');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('color', 'rgb(220, 53, 69)');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  });
  test('Email field is require', async ({ page }) => {
        await page.locator('#signupName').fill(firstName);
        await page.locator('#signupLastName').fill(lastName);
        await page.locator('#signupEmail').click();
        await page.locator('#signupPassword').fill(password);
        await page.locator('#signupRepeatPassword').fill(password);
        await expect(page.locator('button', {hasText : "Register"})).toBeDisabled();
        await expect(page.locator('.invalid-feedback')).toHaveText('Email required');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('color', 'rgb(220, 53, 69)');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  });
  test('Email field wrong data(without name)', async ({ page }) => {
        await page.locator('#signupName').fill(firstName);
        await page.locator('#signupLastName').fill(lastName);
        await page.locator('#signupEmail').fill('@g.com');
        await page.locator('#signupPassword').fill(password);
        await page.locator('#signupRepeatPassword').fill(password);
        await expect(page.locator('button', {hasText : "Register"})).toBeDisabled();
        await expect(page.locator('.invalid-feedback')).toHaveText('Email is incorrect');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('color', 'rgb(220, 53, 69)');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  });
  test('Email field wrong data', async ({ page }) => {
        await page.locator('#signupName').fill(firstName);
        await page.locator('#signupLastName').fill(lastName);
        await page.locator('#signupEmail').fill('test.g.com');
        await page.locator('#signupPassword').fill(password);
        await page.locator('#signupRepeatPassword').fill(password);
        await expect(page.locator('button', {hasText : "Register"})).toBeDisabled();
        await expect(page.locator('.invalid-feedback')).toHaveText('Email is incorrect');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('color', 'rgb(220, 53, 69)');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  });
  test('Password field is require', async ({ page }) => {
        await page.locator('#signupName').fill(firstName);
        await page.locator('#signupLastName').fill(lastName);
        await page.locator('#signupEmail').fill(email);
        await page.locator('#signupPassword').click();
        await page.locator('#signupRepeatPassword').click()
        await expect(page.locator('button', {hasText : "Register"})).toBeDisabled();
        await expect(page.locator('.invalid-feedback')).toHaveText('Password required');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('color', 'rgb(220, 53, 69)');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  });
  test('Password field is 7 symbols', async ({ page }) => {
        await page.locator('#signupName').fill(firstName);
        await page.locator('#signupLastName').fill(lastName);
        await page.locator('#signupEmail').fill(email);
        await page.locator('#signupPassword').fill('Test12!');
        await page.locator('#signupRepeatPassword').click()
        await expect(page.locator('button', {hasText : "Register"})).toBeDisabled();
        await expect(page.locator('.invalid-feedback')).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('color', 'rgb(220, 53, 69)');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  });
  test('Password field is 19 symbols', async ({ page }) => {
        await page.locator('#signupName').fill(firstName);
        await page.locator('#signupLastName').fill(lastName);
        await page.locator('#signupEmail').fill(email);
        await page.locator('#signupPassword').fill('Test12123456789012!');
        await page.locator('#signupRepeatPassword').click()
        await expect(page.locator('button', {hasText : "Register"})).toBeDisabled();
        await expect(page.locator('.invalid-feedback')).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('color', 'rgb(220, 53, 69)');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  });
  test('Password field doesn`t have capital letter', async ({ page }) => {
        await page.locator('#signupName').fill(firstName);
        await page.locator('#signupLastName').fill(lastName);
        await page.locator('#signupEmail').fill(email);
        await page.locator('#signupPassword').fill('test123!');
        await page.locator('#signupRepeatPassword').click()
        await expect(page.locator('button', {hasText : "Register"})).toBeDisabled();
        await expect(page.locator('.invalid-feedback')).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('color', 'rgb(220, 53, 69)');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  });
  test('Password field doesn`t have integer', async ({ page }) => {
        await page.locator('#signupName').fill(firstName);
        await page.locator('#signupLastName').fill(lastName);
        await page.locator('#signupEmail').fill(email);
        await page.locator('#signupPassword').fill('testtes!');
        await page.locator('#signupRepeatPassword').click()
        await expect(page.locator('button', {hasText : "Register"})).toBeDisabled();
        await expect(page.locator('.invalid-feedback')).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('color', 'rgb(220, 53, 69)');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  });
  test('Password field doesn`t have small letters', async ({ page }) => {
        await page.locator('#signupName').fill(firstName);
        await page.locator('#signupLastName').fill(lastName);
        await page.locator('#signupEmail').fill(email);
        await page.locator('#signupPassword').fill('TEST123!');
        await page.locator('#signupRepeatPassword').click()
        await expect(page.locator('button', {hasText : "Register"})).toBeDisabled();
        await expect(page.locator('.invalid-feedback')).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('color', 'rgb(220, 53, 69)');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  });
  test('Re-enter password field is require', async ({ page }) => {
        await page.locator('#signupName').fill(firstName);
        await page.locator('#signupLastName').fill(lastName);
        await page.locator('#signupEmail').fill(email);
        await page.locator('#signupPassword').fill(password);
        await page.locator('#signupRepeatPassword').click();
        await page.locator('#signupPassword').click();
        await expect(page.locator('button', {hasText : "Register"})).toBeDisabled();
        await expect(page.locator('.invalid-feedback')).toHaveText('Re-enter password required');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('color', 'rgb(220, 53, 69)');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  });
  test('Re-enter password field do not match', async ({ page }) => {
        await page.locator('#signupName').fill(firstName);
        await page.locator('#signupLastName').fill(lastName);
        await page.locator('#signupEmail').fill(email);
        await page.locator('#signupPassword').fill(password);
        await page.locator('#signupRepeatPassword').fill('Test123!!');
        await page.locator('#signupPassword').click();
        await expect(page.locator('button', {hasText : "Register"})).toBeDisabled();
        await expect(page.locator('.invalid-feedback')).toHaveText('Passwords do not match');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('color', 'rgb(220, 53, 69)');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  });
  });
