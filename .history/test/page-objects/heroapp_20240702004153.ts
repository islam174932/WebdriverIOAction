import { expect } from "chai";

export class HeakoAppPage {
  async openTheWebsite() {
    await browser.url("https://the-internet.herokuapp.com/javascript_alerts");

    await browser.pause(9000);

    // Click the checkbox on the original window

    // Click the checkbox
  }
}
