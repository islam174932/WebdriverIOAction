Feature: Get users list
  Scenario: Fetch a list of users from reqres.in
    Given I send a GET request to "/api/users?page=2"
    Then the response should be in JSON format
    And the response status should be 200
    And the response should contain a list of users
