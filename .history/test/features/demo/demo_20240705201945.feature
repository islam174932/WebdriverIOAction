Feature: Login Page

Scenario Outline: Search for WDIO and verify URL what islam chnaged now dor second time 
  Given I am on the OrangeHRM page
  When The user is going to enter the username "<username>" and password "<password>"

  Examples:
    | username | password |
    | Admin    | admin123 |
