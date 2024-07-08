Feature: User API Tests

  Scenario: Create a new user
    Given I have the user data to create
    When I make a POST request to create a user
    Then I receive a successful response with user creation details
