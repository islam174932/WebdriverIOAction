import { Given, When } from "@wdio/cucumber-framework";

const xpathSelectors = {
  "phone number":
    "//*[@id='app']/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input",
  email:
    "//*[@id='app']/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input",
};

Given("the user is on the registration page", () => {
  // Navigate to the registration page
  browser.url("https://example.com/register");
  browser.pause(4000);
});

import { When } from '@wdio/cucumber-framework';

When(/^the user enters "([^"]*)" as their (phone number|email address)$/, (value: string, fieldType: string) => {
  let inputSelector;
  switch (fieldType) {
    case 'phone number':
      inputSelector = $('[xpath="//*[@id=\'app\']/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input"]');
      break;
    case 'email address':
      inputSelector = $('[xpath="//*[@id=\'app\']/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input"]');
      break;
    default:
      throw new Error(`Invalid field type: ${fieldType}`);
  }
  inputSelector.setValue(value);
  // Add any additional actions needed after entering the value
});

