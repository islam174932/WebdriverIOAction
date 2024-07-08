import { Given, When } from "@wdio/cucumber-framework";
import { Page } from "../../page-objects/page.ts";
import allure from "@wdio/allure-reporter";
import { expect } from 'chai';

const page = new Page();

Given(/^I am on the OrangeHRM page$/, async () => {
  // Adding Allure report metadata
  allure.addFeature("User Authentication");
  allure.addSeverity("blocker");
  allure.addTestId("1000");
  allure.addIssue("4");
  allure.addEpic("13");
  allure.addOwner("islam");
  allure.addTag("we add Tag for our test here");
  allure.addLink("Link to test owner", "https://example.com");

  // Log environment details as descriptions
  console.log("Opening OrangeHRM page...");
  await page.open();
});

When(/^The user enters the username "([^"]*)" and password "([^"]*)"$/, async (username, password) => {
  allure.startStep("User Login");

  try {
    // Perform login action
    await page.login(username, password);

    allure.endStep();
  } catch (error) {
    
    throw error; // Re-throw error to ensure test fails appropriately
  }
});

// Additional advice:
// - Use consistent naming conventions (camelCase for function names, PascalCase for class names).
// - Add meaningful comments explaining logic and steps, especially for complex actions or conditions.
// - Implement error handling to capture and report failures effectively, ensuring test reliability.
// - Utilize logging (console.log) for important actions or state changes to aid in debugging and understanding test flow.
// - Consider refactoring repetitive code into reusable functions or methods to improve maintainability.
// - Follow coding standards and guidelines specific to your project or team to ensure consistency and readability.


  // Additional assertions or actions can be added here if needed

