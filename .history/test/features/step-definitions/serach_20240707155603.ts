import { Given, When } from "@wdio/cucumber-framework";
import { Page } from "../../page-objects/page.ts";
import allureReporter from "@wdio/allure-reporter";

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
  , () => {
        browser.url('https://example.com');
        const title = browser.getTitle();
        expect(title).to.equal('Example Domain');
    });

    it('should verify the presence of an element', () => {
        browser.url('https://example.com');
        const element = $('#not-existing-element');
        expect(element.isExisting()).to.be.false;
    });

    it('should verify URL', () => {
        browser.url('https://example.com');
        const currentUrl = browser.getUrl();
        expect(currentUrl).to.equal('https://example.com/');
    });
});

  // Additional assertions or actions can be added here if needed
});
