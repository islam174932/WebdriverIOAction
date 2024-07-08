// google.steps.ts

const googlePage = require('../../page-objects/googlePage');

import { Given, When, Then } from "@wdio/cucumber-framework";

Given(/^I am on the Google search page$/, async () => {
  await googlePage.open();
});

When(/^I search for "([^"]*)"$/, async (searchTerm: string) => {
  await googlePage.searchFor(searchTerm);
  // Adjust or remove the pause as necessary
});

Then(/^The user will click on the link webdriverIO$/, async () => {
  await googlePage.clickWebdriverIOLink();
  // Adjust or remove the pause as necessary
});
