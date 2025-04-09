import { test as setup } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';
import { performLogin } from '../pages/auth.js';

// Визначаємо __dirname для ES-модулів
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

setup('Login and save storage state', async ({ page }) => {
  await performLogin(page, process.env.LOGIN, process.env.PASSWORD);
  await page.context().storageState({
    path: path.resolve(__dirname, '../storageState.json')
});
});