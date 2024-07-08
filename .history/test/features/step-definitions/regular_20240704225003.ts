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

When(
  "the user enters {string} as their {string}",
  (value: string, type: string) => {
    if (!(type in xpathSelectors)) {
      throw new Error(`Unsupported field type: ${type}`);
    }

    const inputField = $(`[xpath="${xpathSelectors[type]}"]`);

    if (!inputField.isExisting()) {
      throw new Error(`Could not find input field for ${type}`);
    }

    // Clear any existing value in the input field
    inputField.clearValue();

    // Set the new value based on the type of input field
    if (type === "phone number") {
      // Format phone number if needed
      inputField.setValue(value);
    } else if (type === "email") {
      // Validate email format before setting value
      if (!isValidEmail(value)) {
        throw new Error(`Invalid email format: ${value}`);
      }
      inputField.setValue(value);
    } else {
      throw new Error(`Unsupported field type: ${type}`);
    }
  }
);

function isValidEmail(email: string): boolean {
  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
