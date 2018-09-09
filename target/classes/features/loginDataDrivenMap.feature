Feature: ABSoft login using data driven with map feature

Scenario: ABSoft login test scenario

Given user is already on login page
When title of the page is My Account
Then user enter username and password
| username 	| password |
| testuser2 | testpwd2 |
Then user click on login button
Then user logged in successfully
Then user search orderId
| orderId |
| #366 	  |
| #345    |
| #343    |