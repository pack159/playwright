import { test, expect, firefox } from '@playwright/test';

test('handle mouse over', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.getByRole('button', { name: 'Node.js' }).hover();
    await page.getByLabel('Main', { exact: true }).getByRole('link', { name: 'Java'}).click();
});

test('handle basic web components', async ({ page }) => {
    await page.goto('https://web-demo.qahive.com/form-demo');
    //Combobox
    await page.getByRole('combobox').selectOption('Thailand');
    await page.getByRole('combobox').selectOption({value: 'PH'});

    //Checkbox
    await page.getByRole('checkbox').check(); //uncheck

    //Radio button
    await page.getByTestId('male').check();
});

test('handle new tab', async ({ page, context }) => {
    await page.goto('https://web-demo.qahive.com/');
    
    /*const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    await page.getByRole('link', { name: 'ทำแบบสอบถาม คลิก' }).click()
    ]);*/

    //Start waiting for new page before clicking, Nite no wait
    const pagePromise = context.waitForEvent('page');
    await page.getByRole('link', { name: 'ทำแบบสอบถาม คลิก' }).click();
    //pop-up page
    const newPage = await pagePromise;
    await newPage.getByRole('radio', { name: 'แน่น๊อนน' }).click;

    //new empty page
    const pageEmpty = await context.newPage();
    await pageEmpty.goto('https://web-demo.qahive.com/form-demo');
    
});

test('handle multi context', async ({ page, context, browser }) => {
    await page.goto('https://web-demo.qahive.com/');

    const newContext = await browser.newContext();
    const newPage = await newContext.newPage();
    await newPage.goto('https://web-demo.qahive.com/form-demo');

    //new browser context
    const firefoxBrowser = await firefox.launch();
    const firefoxContext = await firefoxBrowser.newContext();
    const firefoxPage = await firefoxContext.newPage();
    await firefoxPage.goto('https://web-demo.qahive.com/form-demo');
});

test('handle iframe', async ({ page }) => {
    await page.goto('https://web-demo.qahive.com/form-demo');
    const frame = await page.locator('iframe[title*="W3Schools"]').contentFrame();
    await frame.getByTestId('markDone').click();
});

test('handle alert', async ({ page }) => {
    await page.goto('https://web-demo.qahive.com/form-demo');
    await page.getByTestId('alert-1').click();

    page.on('dialog', async diaglog => {
        await diaglog.dismiss();
    });
    await page.getByTestId('alert-2').click();
});

test('handle download file', async ({ page }) => {
    await page.goto('https://web-demo.qahive.com/form-demo');
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download file' }).click();
    const download = await downloadPromise;
    await download.saveAs('./download/file.txt');
});

test('handle upload file', async ({ page }) => {
    await page.goto('https://qahive-demo.com.w3spaces.com/index.html');
    await page.getByRole('link', { name: 'Continue' }).click();

    const fileChooserEvent = page.waitForEvent('filechooser');
    await page.getByRole('button', { name: 'Select a file' }).click();
    const fileChooser = await fileChooserEvent;
    await fileChooser.setFiles('./package.json');
});

test('handle wait for', async ({ page }) => {
    await page.goto('https://web-demo.qahive.com/form-demo');
    await page.getByRole('textbox', { name: 'username*' }).fill('Pack');
    await page.locator('input[name="firstname"]').fill('QA');
    await page.getByRole('textbox').nth(2).fill('Test');
    await page.getByTestId('male').click();
    await page.getByRole('combobox').selectOption('Thailand');
    await page.getByRole('checkbox').click();
    await page.getByText('Accept agreementsubmit').click();
    await page.getByTestId('submit').click();

    //wait for
    await page.locator('css=div.alert-success').waitFor({ timeout: 15000 });
    //verify result
    // const alertText = await page.locator('css=div.alert-success').textContent();
    // console.log('Alert text: ', alertText);
    await expect(page.locator('css=div.alert-success')).toContainText('username: Pack');

});