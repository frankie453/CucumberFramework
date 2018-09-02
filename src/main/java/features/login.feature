Feature: ABSoft login feature

Scenario: ABSoft login test scenario

Given user is already on login page
When title of the page is My Account
Then user enter username and password
Then user click on login button
Then user logged in successfully