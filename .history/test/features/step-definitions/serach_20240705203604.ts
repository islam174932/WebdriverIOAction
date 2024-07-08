// login.steps.ts
import { Given, When } from "@wdio/cucumber-framework";
import { Page } from "../../page-objects/page.ts";
import { Logger } from "../../../debug/logger.ts";
import allureReporter from '@wdio/allure-reporter';

const page = new Page();


Given(/^I am on the OrangeHRM page$/, async () => {
  allureReporter.addFeature('Open Application');
  await page.open();
  const logs = browser.getLogs('browser');
  allureReporter.addSeverity('blocker');
  console.log('Logs:', logs);

});

When(/^The user is going to enter the username "([^"]*)" and password "([^"]*)"$/,
  async (username: string, password: string) => {
    allureReporter.startStep('Perform action');
    await page.login(username, password);
    
    // Add any assertions or further actions after login if needed
  }
);