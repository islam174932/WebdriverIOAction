import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "chai";
import { Page } from "../../page-objects/page.ts"; // Include .ts extension

const page = new Page();

Given(/^I am on the Google search page$/, async () => {
  await page.open("https://www.google.com/");
  await page.handleCookieConsent();
});

When(/^I search for "([^"]*)"$/, async (searchTerm: string) => {
  await page.searchFor(searchTerm);
});

Then(/^the user clicks on the link WebdriverIO$/, async () => {
   await page.clickWebdriverIOLink();
});
