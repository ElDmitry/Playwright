import { test as base, expect } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';
import { GaragePage } from '../pages/GaragePage.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * @typedef {Object} UserGaragePage
 * @property {() => Promise<void>} goto
 * @property {() => Promise<void>} assertEmptyGarageList
 */

/**
 * @typedef {Object} MyFixture
 * @property {UserGaragePage} userGaragePage
 * @property {import('@playwright/test').Page} login
 */

/** @type {import('@playwright/test').TestType<MyFixture>} */
export const test = base.extend({
  userGaragePage: async ({ browser }, use) => {
    const context = await browser.newContext({
      storageState: path.resolve(__dirname, '../pages/auth.js'),
    });
    const page = await context.newPage();
    const garagePage = new GaragePage(page);

    const userGaragePage = {
      async goto() {
        await page.goto(garagePage.url);
        await page.waitForLoadState('domcontentloaded');
      },

      async assertEmptyGarageList() {
        await expect(garagePage.garageTitle).toHaveText('Garage');
        await expect(garagePage.emptyGarageTitle).toHaveText('You don’t have any cars in your garage');
        await expect(garagePage.emptyGaragePanel).toBeVisible();
        await expect(garagePage.addCarBtn).toBeVisible();
      }
    };

    await use(userGaragePage);
    await page.close();
    await context.close();
  },

  login: async ({ browser }, use) => {
    const context = await browser.newContext({
      storageState: path.resolve(__dirname, '../pages/auth.js'),
    });
    const page = await context.newPage();

    await use(page);
    await page.close();
    await context.close();
  }
});
