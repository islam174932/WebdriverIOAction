import { expect } from "chai";

export class HeakoAppPage {
  async openTheWebsite() {
    await browser.url("https://the-internet.herokuapp.com/javascript_alerts");
    const alert = browser $("//*[@id="content"]/div/ul/li[1]/button");

    await browser.pause(9000);

    // Click the checkbox on the original window

    // Click the checkbox
  }
}
