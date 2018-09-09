$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Rohit/eclipse-workspace/CucumberBDDFramework/src/main/java/features/login.feature");
formatter.feature({
  "line": 1,
  "name": "ABSoft login feature",
  "description": "",
  "id": "absoft-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "ABSoft login test scenario",
  "description": "",
  "id": "absoft-login-feature;absoft-login-test-scenario",
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
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 8187163932,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_the_page_is_My_Account()"
});
formatter.result({
  "duration": 11019809,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_enter_username_and_password()"
});
formatter.result({
  "duration": 269332391,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_login_button()"
});
formatter.result({
  "duration": 4468522336,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});