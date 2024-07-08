// login.steps.ts
import { Given, When } from "@wdio/cucumber-framework";
import { Page } from "../../page-objects/page.ts";
import { Logger } from "../../../debug/logger.ts";


const page = new Page();


Given(/^I am on the OrangeHRM page$/, async () => {
 
  await page.open();
  const logs = browser.getLogs('browser');
  console.log('Logs:', logs);
  xallureReporter.addFeature('Open Application');
  allureReporter.addSeverity('blocker');

});

When(/^The user is going to enter the username "([^"]*)" and password "([^"]*)"$/,
  async (username: string, password: string) => {
    allureReporter.endStep(); 
    await page.login(username, password);
    
    // Add any assertions or further actions after login if needed
  }
);