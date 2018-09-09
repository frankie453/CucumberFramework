Feature: Login using data driven approach with examples

#Without Examples keyword
#Scenario: ABSoft login test scenario

#Given user is already on login page
#When title of the page is My Account
#Then user enters "testuser3" and "testpwd3"
#Then user click on login button
#Then user logged in successfully


#with Examples keyword
Scenario Outline: ABSoft login test scenario

Given user is already on login page
When title of the page is My Account
Then user enters "<username>" and "<password>"
Then user click on login button
Then user logged in successfully

Examples:
	| username  | password |
	| testuser3 | testpwd3 |
	| testuser2 | testpwd2 |