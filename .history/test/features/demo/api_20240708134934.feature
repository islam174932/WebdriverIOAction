Feature: Get users list

  Scenario: Fetch a list of users from reqres.in
    Given I send a GET request to "/api/users?page=2"
 
