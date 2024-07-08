Feature: Google Search

  Scenario Outline: Search for WDIO and verify URL
    Given I am on the Google search page
 

  Examples: 
    | SearchItem   | ExpectedUrl              |
    | https://webdriver.io/   | https://webdriver.io/    |
