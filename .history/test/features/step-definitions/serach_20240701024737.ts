const googlePage = require('../../page-objects/googlePage');

import { Given, When, Then } from "@wdio/cucumber-framework";

// Adjust based on your directory structure
// Adjust the path as necessary

Given(/^I am on the Google search page$/, async () => {
  await googlePage.open();
});

When(/^I search for "([^"]*)"$/, async (searchTerm: string) => {
  await googlePage.searchFor(searchTerm);
  await browser.pause(10000); // Adjust this pause as necessary
});

Then(/^The user will click on the link webdriverIO$/, async () => {
  await googlePage.clickWebdriverIOLink();
  await browser.pause(10000); // Adjust this pause as necessary
});
