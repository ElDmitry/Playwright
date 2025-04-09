import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html']
  ],
  use: {
    baseURL: process.env.BASE_URL,
    httpCredentials: {
      username: process.env.LOGIN,
      password: process.env.PASSWORD,
    },
    headless: true,
    screenshot: 'on',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'Prod',
      testMatch: 'tests/Setup/setup.js'
    },/*
    {
      name: 'QA:run',
      use: {
        storageState: '../pages/auth.js'
      },
      testIgnore: 'tests/Setup/*.spec.js'
    },
    {
      name: 'PROD:setup',
      testMatch: 'tests/Setup/setup.js'
    },
    {
      name: 'PROD:run',
      use: {
        storageState: '../pages/auth.js'
      },
      testIgnore: 'tests/Setup/*.spec.js'
    },
    {
      name: 'TEST:setup',
      testMatch: 'tests/Setup/setup.js'
    },
    {
      name: 'TEST:run',
      use: {
        storageState: '../pages/auth.js'
      },
      testIgnore: 'tests/Setup/*.spec.js'
    }*/
  ],
});