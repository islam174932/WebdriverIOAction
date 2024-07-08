import { Given, When, Then } from '@wdio/cucumber-framework';


Given(/^I am on the Google search page$/, async () => {
    // Implement code to navigate to Google search page
    await browser.url('https://www.google.com/');
});

When(/^I search for (.*)$/, async (searchItem: string) => {
    // Implement code to search for a specific item
    const searchInput = await $('input[name="q"]');
    await searchInput.setValue(searchItem);
    await searchInput.keys('Enter');
});

Then(/^I click on the first search result$/, async () => {
    // Implement code to click on the first search result
    const firstResultLink = await $('div#search div.g a');
    await firstResultLink.click();
});

Then(/^I expect the URL to contain (.*)$/, async (expectedUrl: string) => {
    // Implement code to verify the URL contains the expected URL
    const currentUrl = await browser.getUrl();
    expect(currentUrl).to.include(expectedUrl);
});
