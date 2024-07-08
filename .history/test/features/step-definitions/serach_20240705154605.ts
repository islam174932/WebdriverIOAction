import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "chai";
import { Page } from "../../page-objects/page.ts";
 // Corrected import with .ts extension
import { Browser } from 'webdriverio'; // Import Browser if necessary


const page = new Page();

Given(/^I am on the OrangeHRM page$/, async () => {
  await page.open();
});

Given(
  /^The user is going to enter the username "([^"]*)" and password "([^"]*)"$/,
  async (username: string, password: string) => {
    // Start recording before performing actions
   

    await page.login(username, password);
    await 
    // Stop recording after actions are completed
    
  }
);
