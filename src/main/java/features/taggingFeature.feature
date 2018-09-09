@FunctionalTest
Feature: Feature file for Tag
 
@SmokeTest 
Scenario: Testing login Scenario
Given Login to Application

@SmokeTest @RegressionTest 
Scenario: Testing search Scenario
Given perform search

@SmokeTest @RegressionTest @E2ETest
Scenario: Testing find Scenario
Given perform find

@RegressionTest
Scenario: Testing contact Scenario
Given Contact Application

@RegressionTest @E2ETest
Scenario: Testing member Scenario
Given member Application

@E2ETest
Scenario: Testing user Scenario
Given user Application

@SmokeTest @RegressionTest 
Scenario: Testing admin Scenario
Given admin Application

@SmokeTest @E2ETest
Scenario: Testing manager Scenario
Given manager Application

@RegressionTest @E2ETest
Scenario: Testing public Scenario
Given public Application

Scenario: Testing private Scenario
Given private Application

