$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Rohit/eclipse-workspace/CucumberBDDFramework/src/main/java/features/hook.feature");
formatter.feature({
  "line": 1,
  "name": "Hook functionality in cucumber",
  "description": "",
  "id": "hook-functionality-in-cucumber",
  "keyword": "Feature"
});
formatter.before({
  "duration": 693793,
  "status": "passed"
});
formatter.before({
  "duration": 135064,
  "status": "passed"
});
formatter.before({
  "duration": 370296,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Hook functionality scenario 1",
  "description": "",
  "id": "hook-functionality-in-cucumber;hook-functionality-scenario-1",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@FirstScenria"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on login screen",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title is my account",
  "keyword": "When "
});
formatter.match({
  "location": "HookStepDefinition.user_is_on_login_screen()"
});
formatter.result({
  "duration": 296160001,
  "status": "passed"
});
formatter.match({
  "location": "HookStepDefinition.title_is_my_account()"
});
formatter.result({
  "duration": 94832,
  "status": "passed"
});
formatter.after({
  "duration": 602655,
  "status": "passed"
});
formatter.after({
  "duration": 304201,
  "status": "passed"
});
formatter.after({
  "duration": 234001,
  "status": "passed"
});
formatter.before({
  "duration": 463486,
  "status": "passed"
});
formatter.before({
  "duration": 322264,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Hook functionality scenario 2",
  "description": "",
  "id": "hook-functionality-in-cucumber;hook-functionality-scenario-2",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user logged in successfully to application",
  "keyword": "Then "
});
formatter.match({
  "location": "HookStepDefinition.user_enters_username_and_password()"
});
formatter.result({
  "duration": 121927,
  "status": "passed"
});
formatter.match({
  "location": "HookStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 290244,
  "status": "passed"
});
formatter.match({
  "location": "HookStepDefinition.user_logged_in_successfully_to_application()"
});
formatter.result({
  "duration": 112074,
  "status": "passed"
});
formatter.after({
  "duration": 247138,
  "status": "passed"
});
formatter.after({
  "duration": 278748,
  "status": "passed"
});
});