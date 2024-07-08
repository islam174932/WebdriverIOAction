import { expect } from "chai";

export class HeakoAppPage {
  async openTheWebsite() {
    await browser.url("https://the-internet.herokuapp.com/javascript_alerts");
    const alertButton = await $("//*[@id='content']/div/ul/li[1]/button");
    await alertButton.click();

    // Wait for the alert to appear (if necessary, WebDriverIO handles this automatically)
    await browser.pause(6000); // Adjust the pause time as needed

    // Switch to the alert and accept it
    const alertText = await browser.getAlertText();
    await browser.acceptAlert();
}
}