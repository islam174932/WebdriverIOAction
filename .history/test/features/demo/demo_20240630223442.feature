Feature: Google Search

  Scenario: Search for WDIO and verify URL
    Given I am on the Google search page
    When I search for <Srea>
    And I click on the first search result
    Then I expect the URL to contain "webdriver.io"
