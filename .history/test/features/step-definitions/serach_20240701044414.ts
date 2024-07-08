import { Given, When, Then } from "@wdio/cucumber-framework";
``

Given(/^I am on the Google search page$/, async () => {
  await browser.url("https://www.google.com/");
  await handleCookieConsent();
});

When(/^I search for "([^"]*)"$/, async (searchTerm: string) => {
  const searchInput = await $('input[name="q"]');
  await searchInput.setValue(searchTerm);
  await browser.keys("Enter");
});

Then(/^The user will click on the link webdriverIO$/, async () => {
  const webdriverIOButton = await $('a[href="https://webdriver.io/"]');
  await webdriverIOButton.waitForClickable({ timeout: 5000 });
  await webdriverIOButton.click();
});

async function handleCookieConsent(): Promise<void> {
  try {
    const acceptButton = await $('//*[@id="L2AGLb"]/div');
    if (await acceptButton.isExisting()) {
      await acceptButton.click();
    }
  } catch (error) {
    console.log("Cookie consent prompt not found or cannot be interacted with.");
  }
}
