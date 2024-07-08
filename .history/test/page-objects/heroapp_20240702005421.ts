import { expect } from "chai";

export class HeakoAppPage {
  async openTheWebsite() {
    await browser.url("https://the-internet.herokuapp.com/javascript_alerts");
    const alertButton = await $('[onclick="jsConfirm()"]');
    await alertButton.click();
    await browser.sendAlertText('Hello, this is the text I want to send.');
    await browser.pause(6000);
    // Accept the alert
    await browser.acceptAlert();

    // Wait for the alert to appear (if necessary, WebDriverIO handles this automatically)
    await browser.pause(6000); // Adjust the pause time as needed
     
    await browser.acceptAlert();
    await browser.pause(6000)
}
}