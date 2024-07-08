Feature: Login Page

  Scenario Outline: Search for WDIO and verify URL
    Given I am on the OrangeHRM page
    And The user is going to enter the username "<username>" and password "<password>"
    
    

    Examples:
  | username | password |
      | ${USERNAME} | ${PASSWORD 