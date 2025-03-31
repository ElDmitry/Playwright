import {test, expect, request} from '@playwright/test'
import dotenv from 'dotenv';
dotenv.config();


test.beforeEach('login', async ({page}) => {
  const url = 'https://guest:welcome2qauto@qauto.forstudy.space/';
  const login = 'testinho@meta.ua'
  const password = 'Test123!';
  await page.goto(url);
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.locator('#signinEmail').fill(login)
  await page.locator('#signinPassword').fill(password);
  await page.getByRole('button', { name: 'Login' }).click()
}),
test.describe('API', () => {
    test('Change response body', async ({ page }) => {
      await page.getByRole('button', { name: 'Profile' }).click();
      await page.route('https://qauto.forstudy.space/api/users/profile', async (route) => {
        const mockResponse = {
          status: "ok",
          data: {
            userId: 184060,
            photoFilename: "default-user.png",
            name: "I made",
            lastName: "it"
          }
        };
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(mockResponse)
      });
  });
    const responsePromise = page.waitForResponse('https://qauto.forstudy.space/api/users/profile');
    await page.goto('https://qauto.forstudy.space/panel/profile');
    const response = await responsePromise;
    const responseBody = await response.json();

    await expect(responseBody).toEqual({
      status: "ok",
      data: {
        userId: 184060,
        photoFilename: "default-user.png",
        name: "I made",
        lastName: "it"
      }
    });
  });
});