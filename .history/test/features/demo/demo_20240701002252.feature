Feature: Google Search

  Scenario Outline: Search for WDIO and verify URL
    Given I am on the Google search page
    When I search for "<searchTerm>"
    Then 
    

    Examples:
      | searchTerm  |
      | webdriverIO |

