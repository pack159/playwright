import test from "@playwright/test";

test('GET API Request', async ({ request }) => {
    const resp = await request.get('https://demoqa.com/BookStore/v1/Books');
});