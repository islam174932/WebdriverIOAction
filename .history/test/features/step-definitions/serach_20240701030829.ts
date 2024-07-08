// search.steps.ts (or whatever your step definitions file is named)

import { Given, When, Then } from "@wdio/cucumber-framework";
import googlePage from './googlePage'; // Adjust path as per your project structure

Given(/^I am on the Google search page$/, async () => {
  await googlePage.open();
});

When(/^I search for "([^"]*)"$/, async (searchTerm: string) => {
  await googlePage.searchFor(searchTerm);
  // Adjust or remove any pauses as necessary for your test stability
});

Then(/^The user will click on the link webdriverIO$/, async () => {
  await googlePage.clickWebdriverIOLink();
  // Adjust or remove any pauses as necessary for your test stability
});
