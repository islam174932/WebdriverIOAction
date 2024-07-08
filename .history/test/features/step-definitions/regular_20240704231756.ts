import { Given, When } from "@wdio/cucumber-framework";

Given("the user is on the registration page", () => {
  browser.url(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  // Example of waiting for an element to be displayed on the page
  $('[name="txtUsername"]').waitForDisplayed({ timeout: 5000 });
});

When(
  /^the user enters "([^"]*)" as their (phone number|email address)$/,
  (value: string, fieldType: string) => {
    let inputSelector;
    switch (fieldType) {
      case "phone number":
        inputSelector = $(
          "[xpath=\"//*[@id='app']/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input\"]"
        );
        browser.pause(10000);
        break;
      case "email address":
        inputSelector = $(
          "[xpath=\"//*[@id='app']/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input\"]"
        );
        browser.pause(10000);
        break;
      default:
        throw new Error(`Invalid field type: ${fieldType}`);
    }
    inputSelector.setValue(value);

    // Example of waiting for an element to be clickable after setting value
    $('[name="btnLogin"]').waitForClickable({ timeout: 5000 });
    browser.pause(10000);
  }
);
