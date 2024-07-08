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


