// search.steps.ts

import { Given, When, Then } from "@wdio/cucumber-framework";
import GooglePage from "../../page-objects/GooglePage'; // Adjust path as per your actual structure

Given(/^I am on the Google search page$/, async () => {
  await GooglePage.open();
});

When(/^I search for "([^"]*)"$/, async (searchTerm: string) => {
  await GooglePage.searchFor(searchTerm);
  // Adjust or remove any pauses as necessary for your test stability
});

Then(/^The user will click on the link webdriverIO$/, async () => {
  await GooglePage.clickWebdriverIOLink();
  // Adjust or remove any pauses as necessary for your test stability
});
