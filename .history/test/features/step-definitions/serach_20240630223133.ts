import { Given, When, Then } from '@wdio/cucumber-framework';


Given(/^I am on the Google search page$/, async () => {
    await browser.url('/');
});

When(/^I search for "([^"]*)"$/, async (searchQuery: string) => {
    const searchInput = await $('input[name="q"]');
    await searchInput.setValue(searchQuery);
    await browser.keys('Enter');
});

When(/^I click on the first search result$/, async () => {
    const firstResult = await $('h3');
    await firstResult.click();
});

Then(/^I expect the URL to contain "([^"]*)"$/, async (expectedUrlPart: string) => {
    const url = await browser.getUrl();
    expect(url).to.include(expectedUrlPart);
});