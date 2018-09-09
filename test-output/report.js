$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Rohit/eclipse-workspace/CucumberBDDFramework/src/main/java/features/loginDataDrivenMap.feature");
formatter.feature({
  "line": 1,
  "name": "ABSoft login using data driven with map feature",
  "description": "",
  "id": "absoft-login-using-data-driven-with-map-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "ABSoft login test scenario",
  "description": "",
  "id": "absoft-login-using-data-driven-with-map-feature;absoft-login-test-scenario",
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
        "username",
        "password"
      ],
      "line": 8
    },
    {
      "cells": [
        "testuser2",
        "testpwd2"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user logged in successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user search orderId",
  "rows": [
    {
      "cells": [
        "orderId"
      ],
      "line": 13
    },
    {
      "cells": [
        "#366"
      ],
      "line": 14
    },
    {
      "cells": [
        "#345"
      ],
      "line": 15
    },
    {
      "cells": [
        "#343"
      ],
      "line": 16
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginDDMap.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 10286539682,
  "status": "passed"
});
formatter.match({
  "location": "LoginDDMap.title_of_the_page_is_My_Account()"
});
formatter.result({
  "duration": 12337195,
  "status": "passed"
});
formatter.match({
  "location": "LoginDDMap.user_enter_username_and_password(DataTable)"
});
formatter.result({
  "duration": 285288392,
  "status": "passed"
});
formatter.match({
  "location": "LoginDDMap.user_click_on_login_button()"
});
formatter.result({
  "duration": 4288642818,
  "status": "passed"
});
formatter.match({
  "location": "LoginDDMap.user_logged_in_successfully()"
});
formatter.result({
  "duration": 57972335,
  "status": "passed"
});
formatter.match({
  "location": "LoginDDMap.user_search_orderId(DataTable)"
});
formatter.result({
  "duration": 16612258538,
  "status": "passed"
});
});