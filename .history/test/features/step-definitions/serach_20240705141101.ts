import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "chai";
import { Page } from "../../page-objects/page.ts";
 // Corrected import with .ts extension
import { Browser } from 'webdriverio'; // Import Browser if necessary

const videoOutputDir = 'C:/Users/User/Desktop/WebdriverIO2/results'; // Replace with your desired output directory
const videoRecorder = new VideoRecorder(videoOutputDir);
const page = new Page();

Given(/^I am on the OrangeHRM page$/, async () => {
  await page.open();
});

Given(
  /^The user is going to enter the username "([^"]*)" and password "([^"]*)"$/,
  async (username: string, password: string) => {
    // Start recording before performing actions
    const browser = await videoRecorder.startRecording();

    await page.login(username, password);

    // Stop recording after actions are completed
    await videoRecorder.stopRecording(browser);
  }
);
