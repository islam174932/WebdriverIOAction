Feature: Google Search

  Scenario Outline: Search for WDIO and verify URL
    Given I am on the Google search page
     Then I send on the first search result <webdriverIO>

     Examples
     | webdriverIO |
     
 

