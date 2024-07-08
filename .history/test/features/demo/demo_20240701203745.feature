Feature: Google Search

  Scenario Outline: Search for WDIO and verify URL
    Given I am on the OrangeHRM page
    When The user is going to click on Login Butto
    

    Examples:
      | searchTerm  |
      | webdriverIO |
