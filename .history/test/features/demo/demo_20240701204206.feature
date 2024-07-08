Feature: Login 

  Scenario Outline: Search for WDIO and verify URL
    Given I am on the OrangeHRM page
    When The user is going to click on LoginHead Button
    And The user is going to enter the username "<username>" and password "<password>"
    And The user is going to click on Login Button
    

    Examples:
    | username | password |
    | Admin | admin123 |
