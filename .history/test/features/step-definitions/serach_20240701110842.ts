// steps/GoogleSearchSteps.ts
import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "chai";
import GoogleSearchPage from "../../page-objects/";

const googleSearchPage = new GoogleSearchPage();

Given(/^I am on the Google search page$/, async () => {
  await googleSearchPage.open();
});

When(/^I search for "([^"]*)"$/, async (searchTerm: string) => {
  await googleSearchPage.searchFor(searchTerm);
});

Then(/^The user will click on the link webdriverIO$/, async () => {
  await googleSearchPage.clickWebdriverIOLink();
});
