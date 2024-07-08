Feature: Input Validation

  Scenario: User provides a valid phone number
    Given the user is on the registration page
    When the user enters "123-456-7890" as their phone number

  Scenario: User provides an invalid email address
    Given the user is on the registration page
    When the user enters "eslamgamal19933" as their email address
