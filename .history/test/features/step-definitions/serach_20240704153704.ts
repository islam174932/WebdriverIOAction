import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "chai";
import { Page } from "../../page-objects/page.ts"; 
require('dotenv').config();// Include .ts extension

const page = new Page();

Given(/^I am on the OrangeHRM page$/, async () => {
  await page.open();
});

Given(
  /^The user is going to enter the username "([^"]*)" and password "([^"]*)"$/,
  async (username: string, password: string) => {
    await page.login(username, password);
  }
);


