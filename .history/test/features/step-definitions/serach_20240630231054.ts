import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect as expectWDIO } from '@wdio/globals';

Given(/^I am on the Google search page$/, async () => {
    await browser.url("https://www.google.com");
    browser.pause(90000)
});


});
