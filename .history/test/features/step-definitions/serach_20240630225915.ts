import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect as expectWDIO } from '@wdio/globals';

Given(/^I am on the Google search page$/, async () => {
    await browser.url("https://");
});

When(/^I search for "([^"]*)"$/, async (searchQuery: string) => {
    const searchInput = await $('input[name="q"]');
    await searchInput.setValue(searchQuery);
    await browser.keys('Enter');
});

Then(/^I click on the first search result$/, async () => {
    const firstResult = await $('h3');
    await firstResult.click();
});

Then(/^I expect the URL to contain "([^"]*)"$/, async (expectedUrlPart: string) => {
    const url = await browser.getUrl();
    expectWDIO(url).toContain(expectedUrlPart);
});
