import { Given, When, Then } from 'cucumber'; // Adjust as per your testing framework
import { expect } from 'chai'; // Assuming you use Chai for assertions
import { Page } from '../path/to/Page'; // Adjust the path to your Page class

const page = new Page();

Given('I am on the OrangeHRM page', async () => {
  await page.open();
});

When('The user enters the username {string} and password {string}', async (username, password) => {
  await page.enterUsername(username);
  await page.enterPassword(password);
});

When('The user clicks on Login button', async () => {
  await page.clickLoginButton();
});

Then('The URL should contain {string}', async (expectedUrlFragment) => {
  const currentUrl = await browser.getUrl();
  expect(currentUrl).to.include(expectedUrlFragment);
});

Given('I am logged into the system as an administrator', async () => {
  // Assuming you have a method in Page class to handle admin login
  await page.loginAsAdmin();
});

When('I click on the Admin link', async () => {
  // Assuming you have a method in Page class to click on Admin link
  await page.clickAdminLink();
});

Then('I should be redirected to the Admin page', async () => {
  const currentUrl = await browser.getUrl();
  expect(currentUrl).to.include('/admin');
});
