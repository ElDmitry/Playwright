import {test, expect} from '@playwright/test'
import { configDotenv } from "dotenv";
import dotenv from 'dotenv';
dotenv.config();


test('test', async ({page}) => {
    const url = process.env.BASE_URL;
    await page.goto(url)
    
})