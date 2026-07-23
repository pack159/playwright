import { Locator, Page } from "@playwright/test";

export class CheckoutPage {
    readonly page: Page;
    readonly cardholderInput: Locator;
    readonly cardnumberInput: Locator;
    readonly expireInput: Locator;
    readonly cvvInput: Locator;
    readonly submitButton: Locator;  

    constructor(page: Page) {
        this.page = page;
        this.cardholderInput = this.page.getByRole('textbox', { name: 'Cardholder\'s Name' });
        this.cardnumberInput = this.page.getByRole('textbox', { name: '1234567890123457' });
        this.expireInput = this.page.getByRole('textbox', { name: 'MM/YYYY' });
        this.cvvInput = this.page.getByRole('textbox', { name: '●●●' });
        // this.cvvInput = this.page.locator('input[name="cvv"]');
        this.submitButton = this.page.getByRole('button', { name: 'Payment' });
    }
    async submitPayment(cardName: string, cardNumber: string, expireDate: string, cvv: string) {
        await this.cardholderInput.fill(cardName);
        await this.cardnumberInput.fill(cardNumber);
        await this.expireInput.fill(expireDate);
        await this.cvvInput.fill(cvv);
        await this.submitButton.click();
    }
}