Feature: Google Search

  Scenario Outline: Search for WDIO and verify URL
    Given I am on the OrangeHRM PAGE
    When I search for "<searchTerm>"
    

    Examples:
      | searchTerm  |
      | webdriverIO |
