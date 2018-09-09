$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Rohit/eclipse-workspace/CucumberBDDFramework/src/main/java/features/loginDataDrivenTable.feature");
formatter.feature({
  "line": 1,
  "name": "Login Data Driven using Tables",
  "description": "",
  "id": "login-data-driven-using-tables",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "ABSoft login test scenario",
  "description": "",
  "id": "login-data-driven-using-tables;absoft-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of the page is My Account",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enter username and password",
  "rows": [
    {
      "cells": [
        "testuser2",
        "testpwd2"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginDDTable.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 9227371068,
  "status": "passed"
});
formatter.match({
  "location": "LoginDDTable.title_of_the_page_is_My_Account()"
});
formatter.result({
  "duration": 13189862,
  "status": "passed"
});
formatter.match({
  "location": "LoginDDTable.user_enter_username_and_password(DataTable)"
});
formatter.result({
  "duration": 274940207,
  "status": "passed"
});
formatter.match({
  "location": "LoginDDTable.user_click_on_login_button()"
});
formatter.result({
  "duration": 4633252952,
  "status": "passed"
});
formatter.match({
  "location": "LoginDDTable.user_logged_in_successfully()"
});
formatter.result({
  "duration": 879120369,
  "status": "passed"
});
});