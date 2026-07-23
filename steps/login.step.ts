import { Given, setDefaultTimeout, Then, When } from "@cucumber/cucumber";
import { CustomWorld } from "../support/world";
import { LoginPage } from "../pages/login-page";
import { expect } from "@playwright/test";
import { ProductListPage } from "../pages/product-list-page";

//Set default timeout = 30 second for all step
setDefaultTimeout(30 * 1000);

Given('the user is on the login page', async function (this: CustomWorld) {
  await this.page.goto("https://web-demo.qahive.com/e-commerce/register")
});

When('the user submit valid credentials {string} and {string}', async function (this: CustomWorld, email: string, password: string) {
  const loginPage = new LoginPage(this.page);
  await loginPage.login(email, password);
  // this.scenarioContext.email = email;
});

Then('the user should be redirected to the dashboard', async function (this: CustomWorld) {
  const productListPage = new ProductListPage(this.page);
  await expect(productListPage.cartlLink).toBeVisible();
  // await expect(this.page.getByRole('link', { name: 'eCommerce' })).toBeVisible();
});

Then('the user should see an error message "Unauthorized"', async function (this: CustomWorld, errorNessage: string) {
  await expect(this.page.locator(`text=${errorNessage}`)).toBeVisible();
});
