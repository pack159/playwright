import { test, expect } from '@playwright/test';

test('id locator', async ({ page }) => {
    await page.goto('https://web-demo.qahive.com/form-demo');
    await page.locator('id=username').fill('testuser');
});

test('data-testid locator', async ({ page }) => {
    await page.goto('https://web-demo.qahive.com/e-commerce/register');
    await page.locator('data-testid=email').fill('demo01@demo.com');
    await page.locator('data-testid=password').fill('Welcome1');
    await page.locator('css=.gap-2 button.btn-primary').click();

    await page.locator('css=div.card-body')
        .filter({ hasText: 'Travel Bag' })
        .locator('button')
        .click();

    // await page.goto('https://web-demo.qahive.com/e-commerce/register');
    // await page.locator('xpath=(//input)[1]').fill('demo01@demo.com');
    // await page.locator('xpath=(//input)[2]').fill('Welcome1');
    
    // await page.locator('xpath=(//button)[2]').click();
    // await page.locator("form").locator("button").nth(1).click();

});

test('custom locator', async ({ page }) => {
    await page.goto('https://web-demo.qahive.com/form-demo');
    await page.getByPlaceholder
});