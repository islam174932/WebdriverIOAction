import { Given, When } from '@wdio/cucumber-framework';

Given("the user is on the registration page", () => {
  // Navigate to the registration page
  browser.url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  browser.pause(9000); // Pause for 9 seconds after navigation to ensure page is loaded completely
});

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
  browser.pause(7000); // Pause for 7 seconds after entering the value

  // Add any additional actions needed after entering the value
});
