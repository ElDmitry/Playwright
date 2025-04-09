import { test } from './fixtures/garage-fixture.js';

test.describe('Positive Tests', () => {
    test('Check the empty Garage page', async ({ userGaragePage }) => {
        await userGaragePage.goto();
        await userGaragePage.assertEmptyGarageList();
    });
});