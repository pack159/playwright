// import { test } from '@playwright/test';
// import { LoginPage } from '../pages/login-page';
// import { ProductListPage } from '../pages/product-list-page';
// import { CheckoutPage } from '../pages/checkout-page';
// import { PaymentPage } from '../pages/payment-page';
import { test } from '../fixtures/e2e-fixture';

test('demo page 01', async ({ page, loginPage, productListPage, checkoutPage, paymentPage }) => {
    await page.goto('https://web-demo.qahive.com/e-commerce/register');
    // const loginPage = new LoginPage(page);
    await loginPage.login('demo01@demo.com', 'Welcome1')

    // const productListPage = new ProductListPage(page);
    await productListPage.addProductByName('Travel Bag');
    await productListPage.addProductByName('Apple Watch');
    await productListPage.checkout();

    // const checkoutPage = new CheckoutPage(page);
    await checkoutPage.submitPayment('QA Test','4242424242424242','12/2029','123');

    // const paymentPage = new PaymentPage(page);
    await paymentPage.checverifyPaymentSuccess();
});