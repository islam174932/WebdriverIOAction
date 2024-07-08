import { Given, When } from "@wdio/cucumber-framework";

async function handleCookieConsent() {
  try {
    // Check if the cookie consent prompt exists
    const acceptButton = await $('//*[@id="L2AGLb"]/div');
    if (acceptButton.isExisting()) {
      await acceptButton.click();
    }
  } catch (error) {
    console.log(
      "Cookie consent prompt not found or cannot be interacted with."
    );
    // Handle error as needed, e.g., log or ignore
  }
}

Given(/^I am on the Google search page$/, async () => {
  await browser.url("https://www.google.com/");
  await handleCookieConsent(); // Handle cookie consent before proceeding
  // Optionally, add a pause or wait for some element to ensure page is fully loaded
  // await $('some-element').waitForDisplayed({ timeout: 10000 });
});

When(/^I search for "([^"]*)"$/, async (searchTerm) => {
  // Assuming the XPath you provided is for the search input field
  const searchInput = await $('//*[@id="APjFqb"]');
  await searchInput.setValue(searchTerm);
  await browser.keys("Enter"); // Simulate pressing Enter after typing the search term
  await browser.pause(10000);
});
Then (/^The user will click on the link webdriverIO$/, async () => {
    const webdrierIOButton = await $('//*[@id="rso"]/div[1]/div/div/div/div/div/div/div/div[1]/div/span/a/h3');
    await webdrierIOButton.cl
  });