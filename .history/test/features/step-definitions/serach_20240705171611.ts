// login.steps.ts
import { Given, When } from "@wdio/cucumber-framework";
import { Page } from "../../page-objects/page.ts";
i


const page = new Page();

Given(/^I am on the OrangeHRM page$/, async () => {
  await page.open();
});

When(/^The user is going to enter the username "([^"]*)" and password "([^"]*)"$/,
  async (username: string, password: string) => {
    await page.login(username, password);
    // Add any assertions or further actions after login if needed
  }
);
