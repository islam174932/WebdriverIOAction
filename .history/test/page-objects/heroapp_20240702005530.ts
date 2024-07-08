import { expect } from "chai";

export class HeakoAppPage {
  async openTheWebsite() {
    await browser.url("https://the-internet.herokuapp.com/javascript_alerts");
    const alertButton = await $('//*[@id="content"]/div/ul/li[3]/button');
    await alertButton.click();
    await browser.pause(6000);
    await browser.sendAlertText("Hello, this is the text I want to send.");
    await browser.pause(6000);
    // Accept the alert
    await browser.acceptAlert();

    await browser.pause(6000);
  }
}
