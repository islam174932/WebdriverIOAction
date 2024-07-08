// search.ts

import { Given, When, Then } from "@wdio/cucumber-framework";
import googlePages from '../../page-objects/googlePage'; // Adjust path relative to your project structure

Given(/^I am on the Google search page$/, async () => {
  await googlePages.open();
});

When(/^I search for "([^"]*)"$/, async (searchTerm: string) => {
  await googlePages.searchFor(searchTerm);
});

Then(/^The user will click on the link webdriverIO$/, async () => {
  await googlePages.clickWebdriverIOLink();
});

