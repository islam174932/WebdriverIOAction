import { Given, When} from "@wdio/cucumber-framework";

Given(/^I am on the Google search page$/, async () => {
  await browser.url("https://www.google.com"); 
  browser.pause
});

When(/^I search for "([^"]*)"$/, async (searchTerm) => {
  // Assuming the XPath you provided is for the search input field
  const searchInput = await $('input[name="q"]');
  await searchInput.setValue(searchTerm);
  await browser.keys("Enter"); // Simulate pressing Enter after typing the search term
  
  // Perform additional actions (clear and set value) after performing the search
  const element = await $('#APjFqb');
  await element.waitForClickable({ timeout: 5000 });
  await element.clearValue();
  await element.setValue('webdriverIO');
});
