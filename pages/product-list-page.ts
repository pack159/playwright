import { Locator, Page } from '@playwright/test';

export class ProductListPage {
    readonly page: Page;
    readonly cartlLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartlLink = this.page.locator('a[href="/e-commerce/checkout"]');
    }
    async checkout() {
        await this.cartlLink.click();
    }
    async addProductByName(productName: string) {
        const productCard = this.page.locator('div.card').filter({hasText: productName});
        await productCard.getByRole('button', { name: 'Add to cart' }).click();
    }

}