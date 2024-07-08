// pages/GoogleSearchPage.ts
import { ChainablePromiseElement } from 'webdriverio';

export default class GoogleSearchPage {
  searchInput: ChainablePromiseElement<Promise<WebdriverIO.Element>>;
  webdriverIOLink: ChainablePromiseElement<Promise<WebdriverIO.Element>>;

  constructor() {
    this.searchInput = $('input[name="q"]');
    this.webdriverIOLink = $('a[href="https://webdriver.io/"]');
  }

  async open(): Promise<void> {
    await browser.url("https://www.google.com/");
    await this.handleCookieConsent();
  }

  async searchFor(term: string): Promise<void> {
    await this.searchInput.setValue(term);
    await browser.keys("Enter");
  }

  async clickWebdriverIOLink(): Promise<void> {
    await this.webdriverIOLink.waitForClickable({ timeout: 5000 });
    await this.webdriverIOLink.click();
  }

  private async handleCookieConsent(): Promise<void> {
    try {
      const acceptButton = await $('//*[@id="L2AGLb"]/div');
      if (await acceptButton.isExisting()) {
        await acceptButton.click();
      }
    } catch (error) {
      console.log("Cookie consent prompt not found or cannot be interacted with.");
    }
  }
}
