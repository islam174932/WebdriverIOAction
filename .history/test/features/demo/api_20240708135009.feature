Feature: Fetch User Data from API

Scenario: Fetch data from ReqRes API
    Given I make a GET request to the users API endpoint
    Then I receive a successful response with user data
