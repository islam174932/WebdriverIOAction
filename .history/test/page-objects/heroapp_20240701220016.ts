import { browser } from "webdriverio";

export class HeakoAppPage {
  async openTheWebsite() {
    await browser.url("https://the-internet.herokuapp.com/");
    await browser.pause(8000); // Adjust as needed
  }
}
