// search.ts
import { GooglePage } from '../../page-objects/googlePage'; // Adjust path relative to your project structure

import { Given, When, Then } from "@wdio/cucumber-framework";
const  GooglePage = require('../../page-objects/googlePage'); // Adjust path relative to your project structure

Given(/^I am on the Google search page$/, async () => {
  await GooglePage.open();
});

When(/^I search for "([^"]*)"$/, async (searchTerm: string) => {
  await GooglePage.searchFor(searchTerm);
});

Then(/^The user will click on the link webdriverIO$/, async () => {
  await googlePages.clickWebdriverIOLink();
});

