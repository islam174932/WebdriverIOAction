// google.steps.ts

import { Given, When, Then } from "@wdio/cucumber-framework";
import googlePage from '../../page-objects/googlePage';

Given(/^I am on the Google search page$/, async () => {
  await googlePage.open();
});

When(/^I search for "([^"]*)"$/, async (searchTerm: string) => {
  await googlePage.searchFor(searchTerm);
  // You can adjust or remove the pause as necessary
});

Then(/^The user will click on the link webdriverIO$/, async () => {
  await googlePage.clickWebdriverIOLink();
  // You can adjust or remove the pause as necessary
});
