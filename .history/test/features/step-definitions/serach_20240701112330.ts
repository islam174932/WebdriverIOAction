import { Given, When, Then } from "@wdio/cucumber-framework";

import { Page } from "../../page-objects/page";

const page = new Page();

Given(/^I am on the Google search page$/, async () => {
  await page.open("https://www.google.com/");
  await page.handleCookieConsent();
});

When(/^I search for "([^"]*)"$/, async (searchTerm: string) => {
  await page.searchFor(searchTerm);
});

Then(/^The user will click on the link webdriverIO$/, async () => {
  await page.clickWebdriverIOLink();
});
