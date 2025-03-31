import { test, expect, request } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

const BASE_URL = 'https://qauto.forstudy.space/api';
const USER_EMAIL = 'testinho@meta.ua';
const USER_PASSWORD = 'Test123!';
let client;
let token; // Змінна для збереження токена

test.beforeEach(async ({ request }) => {
    client = request; // Використовуємо глобальний API-контекст

    // Авторизація перед тестами
    const response = await client.post(`${BASE_URL}/auth/signin`, {
        headers: { 'Content-Type': 'application/json' },
        data: {
            email: USER_EMAIL,
            password: USER_PASSWORD,
            remember: false
        }
    });

    expect(response.status()).toBe(200); // Перевіряємо успішний вхід

    // Збереження токена для наступних запитів
    const responseBody = await response.json();
    token = responseBody.data.token;
});

test.describe('API Tests for Car Creation', () => {
    test('Create a car successfully', async () => {        
        const requestBody = {
            carBrandId: 1,
            carModelId: 1,
            mileage: 1000
        };
        const response = await client.post(`${BASE_URL}/cars`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            data: requestBody
        });
        console.log('Response:', response.status(), await response.text());
        expect(response.status()).toBe(201);

        const responseBody = await response.json();
        expect(responseBody.status).toBe('ok');
        expect(responseBody.data.carBrandId).toBe(requestBody.carBrandId);
        expect(responseBody.data.carModelId).toBe(requestBody.carModelId);
        expect(responseBody.data.mileage).toBe(requestBody.mileage);
});
    test('Bad request / 400 status code', async () => {        
        const badRequestBody = {
            carBrandId: "test", 
            mileage: 12
        };
        const response = await client.post(`${BASE_URL}/cars`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            data: badRequestBody
        });

        console.log('Bad Request Response:', response.status(), await response.text());
        expect(response.status()).toBe(400);

        const responseBody = await response.json();
        expect(responseBody.status).toBe('error');
        expect(responseBody.message).toBe('Invalid car brand type')
    });
test('Not found / 404 status code', async () => {        
        const badRequestBody = {
            carBrandId: 1,
            carModelId: 1,
            mileage: 1000
        };
        const response = await client.post(`${BASE_URL}/carss`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            data: badRequestBody
        });

        console.log('Bad Request Response:', response.status(), await response.text());
        expect(response.status()).toBe(404);

        const responseBody = await response.json();
        expect(responseBody.status).toBe('error');
        expect(responseBody.message).toBe('Not found')
    });
});