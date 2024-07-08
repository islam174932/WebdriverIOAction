// login.steps.ts
import { Given, When } from "@wdio/cucumber-framework";
import { Page } from "../../page-objects/page.ts";

import allureReporter from '@wdio/allure-reporter';

const page = new Page();


Given(/^I am on the OrangeHRM page$/, async () => {
  allureReporter.addAllureId('10');
  allureReporter.addDescription('1');
  allureReporter.addFeature('Open Application');
  await page.open();
  allureReporter.addSeverity('blocker');
  

});

When(/^The user is going to enter the username "([^"]*)" and password "([^"]*)"$/,
  async (username: string, password: string) => {
    allureReporter.startStep('Perform action');
    await page.login(username, password);
    allureReporter.endStep();
    // Add any assertions or further actions after login if needed
  }
);