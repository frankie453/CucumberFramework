$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Rohit/eclipse-workspace/CucumberBDDFramework/src/main/java/features/taggingFeature.feature");
formatter.feature({
  "line": 2,
  "name": "Feature file for Tag",
  "description": "",
  "id": "feature-file-for-tag",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.scenario({
  "line": 40,
  "name": "Testing private Scenario",
  "description": "",
  "id": "feature-file-for-tag;testing-private-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 41,
  "name": "private Application",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingFeatureTest.private_Application()"
});
formatter.result({
  "duration": 189142267,
  "status": "passed"
});
});