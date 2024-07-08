// login.steps.ts
import { Given, When } from "@wdio/cucumber-framework";
import { Page } from "../../page-objects/page.ts";



const page = new Page();
const logger = new Logger();
Given(/^I am on the OrangeHRM page$/, async () => {
  await page.open();
  logger.info('This is an informational message.');
});

When(/^The user is going to enter the username "([^"]*)" and password "([^"]*)"$/,
  async (username: string, password: string) => {
    await page.login(username, password);
    logger.warn('This is a warning message.');
    // Add any assertions or further actions after login if needed
  }
);
