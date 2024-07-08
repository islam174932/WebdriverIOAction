Feature: Google Search

  Scenario Outline: Search for WDIO and verify URL
    Given I am on the Google search page
    When I search for <SearchItem>
    Then I click on the first search result
    Then I expect the URL to contain <SearchItem>
    
    Examples:
    | SearchItem |
    | webdriver.io |