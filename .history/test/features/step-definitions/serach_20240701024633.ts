const googlePage = req

import { Given, When, Then } from "@wdio/cucumber-framework";
import  GooglePage  from '../../page-objects/googlePage';
// Adjust based on your directory structure
// Adjust the path as necessary

Given(/^I am on the Google search page$/, async () => {
  await GooglePage.open();
});

When(/^I search for "([^"]*)"$/, async (searchTerm: string) => {
  await GooglePage.searchFor(searchTerm);
  await browser.pause(10000); // Adjust this pause as necessary
});

Then(/^The user will click on the link webdriverIO$/, async () => {
  await GooglePage.clickWebdriverIOLink();
  await browser.pause(10000); // Adjust this pause as necessary
});
