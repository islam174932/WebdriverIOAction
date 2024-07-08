import { Given, When } from "@wdio/cucumber-framework";
import { Page } from "../../page-objects/page";
import allureReporter from "@wdio/allure-reporter";

const page = new Page();

Given(/^I am on the OrangeHRM page$/, async () => {
  // Adding Allure report metadata
  allureReporter.addAllureId("1000");
  allureReporter.addEpic("13");
  allureReporter.addIssue("4");
  allureReporter.addOwner("islam");
  allureReporter.addSeverity("blocker");
  
  // Log environment details as descriptions
  const environmentDetails = {
    Browser: "Chrome",
    "Browser Version": "89.0",
    URL: "https://example.com",
    Platform: "Windows",
  };

  for (const [key, value] of Object.entries(environmentDetails)) {
    allureReporter.a(`${key}: ${value}`);
  }

  // Open the OrangeHRM page
  await page.open();
});

When(/^The user is going to enter the username "([^"]*)" and password "([^"]*)"$/, async (username, password) => {
  allureReporter.startStep("User Login");
  allureReporter.addFeature("User Authentication");

  // Perform login action
  await page.login(username, password);

  allureReporter.endStep();

  // Additional assertions or actions can be added here if needed
});
