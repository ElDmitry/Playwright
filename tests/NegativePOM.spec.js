import { test, expect } from '@playwright/test';
import { OpenRegisterPage } from './test-data/pom.js';
import { Registration } from './test-data/pom.js';
import {name, lastName, email, password,repeatPassword,url} from './test-data/registration-data.js';


test.beforeEach('open registration form', async ({page}) => {
    const registerForm = new OpenRegisterPage(page,url);
    await registerForm.openPage();
}),
test.describe('negative casesPOM', () => {
    test('Name field is require', async ({ page }) => {
        const test1 = new Registration(page);
        await page.locator('#signupName').click();
        await test1.registration('',lastName,email,password,repeatPassword)
        await expect(page.locator('button', {hasText : "Register"})).toBeDisabled();
        await expect(page.locator('.invalid-feedback')).toHaveText('Name required');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('color', 'rgb(220, 53, 69)');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  });
    test('Name field has 1 symbol', async ({ page }) => {
        const test2 = new Registration(page);
        await test2.registration('J',lastName,email,password,repeatPassword)
        await expect(page.locator('button', {hasText : "Register"})).toBeDisabled();
        await expect(page.locator('.invalid-feedback')).toHaveText('Name has to be from 2 to 20 characters long');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('color', 'rgb(220, 53, 69)');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    });
    test('Name field has 21 symbol', async ({ page }) => {
        const test2 = new Registration(page);
        await test2.registration('Johnohnohnohnohnohnoh',lastName,email,password,repeatPassword)
        await expect(page.locator('button', {hasText : "Register"})).toBeDisabled();
        await expect(page.locator('.invalid-feedback')).toHaveText('Name has to be from 2 to 20 characters long');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('color', 'rgb(220, 53, 69)');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
     }); 
    test('Name field has wrong data(number)', async ({ page }) => {
        const test3 = new Registration(page);
        await test3.registration('1234',lastName,email,password,repeatPassword)
        await expect(page.locator('button', {hasText : "Register"})).toBeDisabled();
        await expect(page.locator('.invalid-feedback')).toHaveText('Name is invalid');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('color', 'rgb(220, 53, 69)');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  }); 
    test('Name field has wrong data(Cyrillic)', async ({ page }) => {
        const test4 = new Registration(page);
        await test4.registration('Дмитро',lastName,email,password,repeatPassword)
        await expect(page.locator('button', {hasText : "Register"})).toBeDisabled();
        await expect(page.locator('.invalid-feedback')).toHaveText('Name is invalid');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('color', 'rgb(220, 53, 69)');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  });
    test('Last name field is require', async ({ page }) => {
        await page.locator('#signupLastName').click();
        const test5 = new Registration(page);
        await test5.registration(name,'',email,password,repeatPassword);
        await expect(page.locator('button', {hasText : "Register"})).toBeDisabled();
        await expect(page.locator('.invalid-feedback')).toHaveText('Last name required');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('color', 'rgb(220, 53, 69)');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  });
    test('Last name field has 1 symbol', async ({ page }) => {
        const test6 = new Registration(page);
        await test6.registration(name,'A',email,password,repeatPassword);
        await expect(page.locator('button', {hasText : "Register"})).toBeDisabled();
        await expect(page.locator('.invalid-feedback')).toHaveText('Last name has to be from 2 to 20 characters long');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('color', 'rgb(220, 53, 69)');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  });
    test('Last name field has 21 symbol', async ({ page }) => {
        const test7 = new Registration(page);
        await test7.registration(name,'Aaaaaaaaaaaaaaaaaaaaa',email,password,repeatPassword);    
        await expect(page.locator('button', {hasText : "Register"})).toBeDisabled();
        await expect(page.locator('.invalid-feedback')).toHaveText('Last name has to be from 2 to 20 characters long');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('color', 'rgb(220, 53, 69)');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  });
    test('Last name field has wrong data(number)', async ({ page }) => {
        const test8 = new Registration(page);
        await test8.registration(name,'1234',email,password,repeatPassword);    
        await expect(page.locator('button', {hasText : "Register"})).toBeDisabled();
        await expect(page.locator('.invalid-feedback')).toHaveText('Last name is invalid');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('color', 'rgb(220, 53, 69)');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  });
    test('Last name field has wrong data(Cyrillic)', async ({ page }) => {
        const test9 = new Registration(page);
        await test9.registration(name,'Бест',email,password,repeatPassword);    
        await expect(page.locator('button', {hasText : "Register"})).toBeDisabled();
        await expect(page.locator('.invalid-feedback')).toHaveText('Last name is invalid');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('color', 'rgb(220, 53, 69)');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  });
    test('Email field is require', async ({ page }) => {
        await page.locator('#signupEmail').click();
        const test10 = new Registration(page);
        await test10.registration(name,lastName,'',password,repeatPassword);    
        await expect(page.locator('button', {hasText : "Register"})).toBeDisabled();
        await expect(page.locator('.invalid-feedback')).toHaveText('Email required');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('color', 'rgb(220, 53, 69)');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  });
    test('Email field wrong data(without name)', async ({ page }) => {
        const test11 = new Registration(page);
        await test11.registration(name,lastName,'@g.com',password,repeatPassword);    
        await expect(page.locator('button', {hasText : "Register"})).toBeDisabled();
        await expect(page.locator('.invalid-feedback')).toHaveText('Email is incorrect');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('color', 'rgb(220, 53, 69)');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  });
    test('Email field wrong data', async ({ page }) => {
        const test12 = new Registration(page);
        await test12.registration(name,lastName,'test.g.com',password,repeatPassword);    
        await expect(page.locator('button', {hasText : "Register"})).toBeDisabled();
        await expect(page.locator('.invalid-feedback')).toHaveText('Email is incorrect');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('color', 'rgb(220, 53, 69)');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  });
    test('Password field is require', async ({ page }) => {
        await page.locator('#signupPassword').click();
        const test13 = new Registration(page);
        await test13.registration(name,lastName,email,'','');    
        await page.locator('#signupRepeatPassword').click()
        await expect(page.locator('button', {hasText : "Register"})).toBeDisabled();
        await expect(page.locator('.invalid-feedback')).toHaveText('Password required');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('color', 'rgb(220, 53, 69)');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  });
    test('Password field is 7 symbols', async ({ page }) => {
        const test14 = new Registration(page);
        await test14.registration(name,lastName,email,'Test12','');    
        await expect(page.locator('button', {hasText : "Register"})).toBeDisabled();
        await expect(page.locator('.invalid-feedback')).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('color', 'rgb(220, 53, 69)');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  });
    test('Password field is 19 symbols', async ({ page }) => {
        const test15 = new Registration(page);
        await test15.registration(name,lastName,email,'Test12123456789012','');    
        await expect(page.locator('button', {hasText : "Register"})).toBeDisabled();
        await expect(page.locator('.invalid-feedback')).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('color', 'rgb(220, 53, 69)');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  });
    test('Password field doesn`t have capital letter', async ({ page }) => {
        const test16 = new Registration(page);
        await test16.registration(name,lastName,email,'test123!','');    
        await expect(page.locator('button', {hasText : "Register"})).toBeDisabled();
        await expect(page.locator('.invalid-feedback')).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('color', 'rgb(220, 53, 69)');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  });
    test('Password field doesn`t have integer', async ({ page }) => {
        const test17 = new Registration(page);
        await test17.registration(name,lastName,email,'testtes!','');    
        await expect(page.locator('button', {hasText : "Register"})).toBeDisabled();
        await expect(page.locator('.invalid-feedback')).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('color', 'rgb(220, 53, 69)');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  });
    test('Password field doesn`t have small letters', async ({ page }) => {
        const test18 = new Registration(page);
        await test18.registration(name, lastName, email,'TEST123!','');    
        await expect(page.locator('button', {hasText : "Register"})).toBeDisabled();
        await expect(page.locator('.invalid-feedback')).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('color', 'rgb(220, 53, 69)');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  });
    test('Re-enter password field is require', async ({ page }) => {
        const test19 = new Registration(page);
        await test19.registration(name,lastName,email,password,'');    
        await page.locator('#signupPassword').click();
        await expect(page.locator('button', {hasText : "Register"})).toBeDisabled();
        await expect(page.locator('.invalid-feedback')).toHaveText('Re-enter password required');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('color', 'rgb(220, 53, 69)');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  });
    test('Re-enter password field do not match', async ({ page }) => {
        const test20 = new Registration(page);
        await test20.registration(name,lastName,email,password,'Test123!!');
        await page.locator('#signupPassword').click();    
        await expect(page.locator('button', {hasText : "Register"})).toBeDisabled();
        await expect(page.locator('.invalid-feedback')).toHaveText('Passwords do not match');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('color', 'rgb(220, 53, 69)');
        await expect(page.locator('.invalid-feedback')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  });
});

