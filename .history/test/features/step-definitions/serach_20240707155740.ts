import { Given, When } from "@wdio/cucumber-framework";
import { Page } from "../../page-objects/page.ts";
import allureReporter from "@wdio/allure-reporter";
import { expect } from 'chai';
const page = new Page();

Given(/^I am on the OrangeHRM page$/, async () => {
  // Adding Allure report metadata
  allureReporter.addAllureId("1000");
  allureReporter.addEpic("13");
  allureReporter.addIssue("4");
  allureReporter.addOwner("islam");
  allureReporter.addSeverity("blocker");
  allureReporter.addTag("we add Tga for our test here");
  allureReporter.addLink(" ehre our link to test the owner");
  
  
  // Log environment details as descriptions // Open the OrangeHRM page
  await page.open();
});

When(/^The user is going to enter the username "([^"]*)" and password "([^"]*)"$/, async (username, password) => {
  allureReporter.startStep("User Login");
  allureReporter.addFeature("User Authentication");

  // Perform login action
  await page.login(username, password);

  allureReporter.endStep();

  async function verifyTitle() {
    await browser.url('https://example.com');
    const title = await browser.getTitle();
    expect(title).to.equal('Example Domain');
}

async function verifyElementPresence() {
    await browser.url('https://example.com');
    const element = await $('#not-existing-element');
    expect(await element.isExisting()).to.be.false;
}

async function verifyUrl() {
    await browser.url('https://example.com');
    const currentUrl = await browser.getUrl();
    expect(currentUrl).to.equal('https://example.com/');
}

// Example of running these functions (make sure to wrap in an async function or use promises appropriately)
async function runTests() {
    try {
        await verifyTitle();
        await verifyElementPresence();
        await verifyUrl();
        console.log('All tests passed successfully.');
    } catch (error) {
        console.error('Test failed:', error);
    } finally {
        await browser.deleteSession(); // Close browser session after tests
    }
}

});

  // Additional assertions or actions can be added here if needed

