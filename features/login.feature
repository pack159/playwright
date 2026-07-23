Feature: Authentication

Scenario: Successful login with valid credentials
    Given the user is on the login page
    When the user submit valid credentials "demo01@demo.com" and "Welcome01"
    Then the user should be redirected to the dashboard

Scenario: Successful login with invalid credentials
    Given the user is on the login page
    When the user submit valid credentials "demo01@demo.com" and "Welcome02"
    Then the user should see an error message "Unauthorized"

Scenario: User able to login with valid credentials (ITMX internal)
    Given the user in on the login page ITMX internal
    And verify user on the ITMX portal login page