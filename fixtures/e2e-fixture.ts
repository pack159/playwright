import { test as base, expect } from "@playwright/test";
import { LoginPage } from "../pages/login-page";
import { ProductListPage } from "../pages/product-list-page";
import { CheckoutPage } from "../pages/checkout-page";
import { PaymentPage } from "../pages/payment-page";

interface E2EFixtures {
    loginPage: LoginPage;
    productListPage: ProductListPage;
    checkoutPage: CheckoutPage;
    paymentPage: PaymentPage;
}

const test = base.extend<E2EFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    productListPage: async ({ page }, use) => {
        await use(new ProductListPage(page));
    },
    checkoutPage: async ({ page }, use) => {
        await use(new CheckoutPage(page));
    },
    paymentPage: async ({ page }, use) => {
        await use(new PaymentPage(page));
    },
});

export { test, expect };