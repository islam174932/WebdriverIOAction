// login.steps.ts
import { Given, When } from "@wdio/cucumber-framework";
import { Page } from "../../page-objects/page.ts";
import { Logger } from "../../../debug/logger.ts";
import allureReporter from '@wdio/allure-reporter';

const page = new Page();


Given(/^I am on the OrangeHRM page$/, async () => {
  const environmentInfo = {
    Browser: browser.capabilities.browserName,
    Platform: process.platform,
    Execution_Date: new Date().toLocaleDateString(),
  };

  allureReporter.addEnvironment(environmentInfo);
  allureReporter.addFeature('Open Application');

  await page.open(); // Assuming this method opens the application
  const logs = browser.getLogs('browser'); // Fetch browser logs
  console.log('Logs:', logs); // Log browser console logs

  allureReporter.addSeverity('blocker');
});

When(/^The user is going to enter the username "([^"]*)" and password "([^"]*)"$/,
  async (username: string, password: string) => {
    AllureReporter.startStep('Perform Login'); // Start Allure step
    await page.login(username, password); // Perform login action
    AllureReporter.endStep(); // End Allure step

    // Add any assertions or further actions after login if needed
  }
);
