import { Given, When, Then } from "@wdio/cucumber-framework";
import googlePage from '../../page-objects/'
Given(/^I am on the Google search page$/, async () => {
  await googlePage.open();
});

When(/^I search for "([^"]*)"$/, async (searchTerm: string) => {
  await googlePage.searchFor(searchTerm);
});

Then(/^The user will click on the link webdriverIO$/, async () => {
  await googlePage.clickWebdriverIOLink(); // Assuming you have this method in GooglePage
});

