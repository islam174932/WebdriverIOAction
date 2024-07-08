// search.ts

import { Given, When, Then } from "@wdio/cucumber-framework";
import googlePage from '../page-objects/googlePage'; // Adjust path relative to your project structure

Given(/^I am on the Google search page$/, async () => {
  await googlePage.open();
});

When(/^I search for "([^"]*)"$/, async (searchTerm: string) => {
  await googlePage.searchFor(searchTerm);
});

Then(/^The user will click on the link webdriverIO$/, async () => {
  await googlePage.clickWebdriverIOLink();
});

