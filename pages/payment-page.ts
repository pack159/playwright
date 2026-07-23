import { Locator, Page } from '@playwright/test';

export class PaymentPage {
    readonly page: Page;
    readonly paymentSuccessHeading: Locator;

    constructor(page: Page) {
        this.page = page;
        this.paymentSuccessHeading = this.page.getByRole('heading', { name: 'Payment Successful'});
    }
    async checverifyPaymentSuccess() {
        await this.paymentSuccessHeading.waitFor();
    }
}