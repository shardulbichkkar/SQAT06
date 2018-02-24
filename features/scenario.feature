Feature: Simple maths
  In order to do maths
  As a developer
  I want to increment variables

  Scenario: easy maths
    Given I go to duck duck go
    When  I search for WebdriverIO
    Then  I should see the search results

  Scenario: easy maths
    Given I go to Google
    When  I search for WebdriverIO on Google
    Then  I should see the search results on Google
