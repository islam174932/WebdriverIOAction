import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect as expectWDIO } from "@wdio/globals";

Given(/^I am on the Google search page$/, async () => {
  await browser.url("https://www.google.com");
  browser.pause(100000);
});

When(/^I search for "([^"]*)"$/, async (searchTerm) => {
    // Assuming the XPath you provided is for the search input field
    const searchInput = await browser.$('//*[@id="APjFqb"]');
    await searchInput.setValue(searchTerm);
    await searchInput.keys("Enter"); // Simulate pressing Enter after typing the search term
  });
  