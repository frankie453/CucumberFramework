Feature: Hook functionality in cucumber

@FirstScenria
Scenario: Hook functionality scenario 1

Given user is on login screen
When title is my account


Scenario: Hook functionality scenario 2

Then user enters username and password
Then user clicks on login button
Then user logged in successfully to application