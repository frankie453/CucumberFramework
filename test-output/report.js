$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Rohit/eclipse-workspace/CucumberBDDFramework/src/main/java/features/login.feature");
formatter.feature({
  "line": 1,
  "name": "ABSoft login feature",
  "description": "",
  "id": "absoft-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "##Without Examples keyword"
    },
    {
      "line": 4,
      "value": "#Scenario: ABSoft login test scenario"
    },
    {
      "line": 6,
      "value": "#Given user is already on login page"
    },
    {
      "line": 7,
      "value": "#When title of the page is My Account"
    },
    {
      "line": 8,
      "value": "##Then user enter username and password"
    },
    {
      "line": 9,
      "value": "#Then user enters \"testuser3\" and \"testpwd3\""
    },
    {
      "line": 10,
      "value": "#Then user click on login button"
    },
    {
      "line": 11,
      "value": "#Then user logged in successfully"
    },
    {
      "line": 14,
      "value": "#with Examples keyword"
    }
  ],
  "line": 15,
  "name": "ABSoft login test scenario",
  "description": "",
  "id": "absoft-login-feature;absoft-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "title of the page is My Account",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user logged in successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "absoft-login-feature;absoft-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 24,
      "id": "absoft-login-feature;absoft-login-test-scenario;;1"
    },
    {
      "cells": [
        "testuser3",
        "testpwd3"
      ],
      "line": 25,
      "id": "absoft-login-feature;absoft-login-test-scenario;;2"
    },
    {
      "cells": [
        "testuser2",
        "testpwd2"
      ],
      "line": 26,
      "id": "absoft-login-feature;absoft-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "ABSoft login test scenario",
  "description": "",
  "id": "absoft-login-feature;absoft-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "title of the page is My Account",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enters \"testuser3\" and \"testpwd3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 9922204898,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_the_page_is_My_Account()"
});
formatter.result({
  "duration": 15217461,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testuser3",
      "offset": 13
    },
    {
      "val": "testpwd3",
      "offset": 29
    }
  ],
  "location": "LoginStepDefination.user_enters_and(String,String)"
});
formatter.result({
  "duration": 283008319,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_login_button()"
});
formatter.result({
  "duration": 4008926526,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_logged_in_successfully()"
});
formatter.result({
  "duration": 1055640535,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "ABSoft login test scenario",
  "description": "",
  "id": "absoft-login-feature;absoft-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "title of the page is My Account",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enters \"testuser2\" and \"testpwd2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 7695741919,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_the_page_is_My_Account()"
});
formatter.result({
  "duration": 8701967,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testuser2",
      "offset": 13
    },
    {
      "val": "testpwd2",
      "offset": 29
    }
  ],
  "location": "LoginStepDefination.user_enters_and(String,String)"
});
formatter.result({
  "duration": 221556756,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_login_button()"
});
formatter.result({
  "duration": 3974343217,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_logged_in_successfully()"
});
formatter.result({
  "duration": 104251184,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat stepDefination.LoginStepDefination.user_logged_in_successfully(LoginStepDefination.java:55)\r\n\tat ✽.Then user logged in successfully(C:/Users/Rohit/eclipse-workspace/CucumberBDDFramework/src/main/java/features/login.feature:21)\r\n",
  "status": "failed"
});
});