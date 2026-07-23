Feature: Checkout

Background: 
    Given the user is on the login page
    When the user submit valid credentials "demo01@demo.com" and "Welcome01"

Scenario: User able to add product to cart
    Given the user adds product "Apple Watch" to cart
    When the user procees to Checkout