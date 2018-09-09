Feature: Login Data Driven using Tables

Scenario: ABSoft login test scenario

Given user is already on login page
When title of the page is My Account
Then user enter username and password
| testuser2 | testpwd2 |
Then user click on login button
Then user logged in successfully