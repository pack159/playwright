import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://web-demo.qahive.com/todo-list');
    await page.locator('data-testid=markRemove').click();
});

test.afterEach(async ({ page }) => {
    // await page.screenshot({fullPage: true}), path: `screenshots/todo-${Date.now()}.png`});
    await page.screenshot({fullPage: true, path: 'screenshots/todo-' + Date.now() + '.png' });
});

test('id locator', async ({ page }) => {

    // await page.locator('data-testid=markRemove').click();

    await page.locator('data-testid=inputTodo').fill('Day1 playwright overview');
    await page.locator('data-testid=submitTodo').click();
    await page.locator('data-testid=markDone').click();

    await page.locator('data-testid=inputTodo').fill('Day2 playwright POM');
    await page.locator('data-testid=submitTodo').click();   

});

test('getByTestId locator', async ({ page }) => {
    await page.goto('https://web-demo.qahive.com/todo-list');
    await page.getByTestId('markRemove').nth(0).click();   
    await page.getByTestId('inputTodo').fill('Day1 playwright overview')
    await page.getByTestId('submitTodo').click();
    await page.getByTestId('inputTodo').fill('Day2 playwright POM')
    await page.getByTestId('submitTodo').click();
    await page.getByTestId('markDone').nth(0).click();  

});