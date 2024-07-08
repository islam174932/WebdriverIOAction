// steps.ts

import { Given, When, Then } from '@wdio/cucumber-framework';
import GooglePage from './googlePage';


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
