$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Contacts.feature");
formatter.feature({
  "name": "Contacts page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Contacts Test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "the user logged in as \"sales manager\"",
  "keyword": "Given "
});
formatter.step({
  "name": "the user navigates to \"Customers\" \"Contacts\"",
  "keyword": "And "
});
formatter.step({
  "name": "the user clicks the \"\u003cemail\u003e\" from contacts",
  "keyword": "When "
});
formatter.step({
  "name": "the information for \"\u003cemail\u003e\" should be same with database",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email"
      ]
    },
    {
      "cells": [
        "mbrackstone9@example.com"
      ]
    },
    {
      "cells": [
        "mike.jorden@hotmail.com"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Contacts Test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as \"sales manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.ContactsStepDefs.the_user_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to \"Customers\" \"Contacts\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.vytrack.step_definitions.NavigationMenuStepDefs.the_user_navigates_to(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the \"mbrackstone9@example.com\" from contacts",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.ContactsStepDefs.the_user_clicks_the_from_contacts(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the information for \"mbrackstone9@example.com\" should be same with database",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.ContactsStepDefs.the_information_for_should_be_same_with_database(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\n\tat com.vytrack.utilities.DBUtils.executeQuery(DBUtils.java:171)\n\tat com.vytrack.utilities.DBUtils.getQueryResultMap(DBUtils.java:130)\n\tat com.vytrack.utilities.DBUtils.getRowMap(DBUtils.java:74)\n\tat com.vytrack.step_definitions.ContactsStepDefs.the_information_for_should_be_same_with_database(ContactsStepDefs.java:145)\n\tat ✽.the information for \"mbrackstone9@example.com\" should be same with database(file:///Users/ayhanbulut/IdeaProjects/EU3CucumberSelenium/src/test/resources/features/Contacts.feature:83)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Contacts Test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as \"sales manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.ContactsStepDefs.the_user_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to \"Customers\" \"Contacts\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.vytrack.step_definitions.NavigationMenuStepDefs.the_user_navigates_to(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the \"mike.jorden@hotmail.com\" from contacts",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.ContactsStepDefs.the_user_clicks_the_from_contacts(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the information for \"mike.jorden@hotmail.com\" should be same with database",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.ContactsStepDefs.the_information_for_should_be_same_with_database(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\n\tat com.vytrack.utilities.DBUtils.executeQuery(DBUtils.java:171)\n\tat com.vytrack.utilities.DBUtils.getQueryResultMap(DBUtils.java:130)\n\tat com.vytrack.utilities.DBUtils.getRowMap(DBUtils.java:74)\n\tat com.vytrack.step_definitions.ContactsStepDefs.the_information_for_should_be_same_with_database(ContactsStepDefs.java:145)\n\tat ✽.the information for \"mike.jorden@hotmail.com\" should be same with database(file:///Users/ayhanbulut/IdeaProjects/EU3CucumberSelenium/src/test/resources/features/Contacts.feature:83)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png", "screenshot");
formatter.after({
  "status": "passed"
});
});