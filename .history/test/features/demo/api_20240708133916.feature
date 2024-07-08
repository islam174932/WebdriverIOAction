Feature: Get users list

  Scenario: Fetch a list of users from reqres.in
    Given I send a GET request to "/api/users?page=2"
    Then the response should be in JSON format
    And the response status should be 200
    And the response should contain a list of users
    And the response should have a total of 12 users
    And the page number should be 2
    And the support URL should be "https://reqres.in/#support-heading"
    And the support text should be "To keep ReqRes free, contributions towards server costs are appreciated!"

