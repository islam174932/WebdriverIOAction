// GooglePage.ts

import { config } from './conf';

export class GooglePage {
  public async open(): Promise<void> {
    await browser.url(config.baseUrl);
    await this.handleCookieConsent();
  }

  private async handleCookieConsent(): Promise<void> {
    try {
      const acceptButton = await $(config.cookieConsentXPath);
      if (await acceptButton.isExisting()) {
        await acceptButton.click();
      }
    } catch (error) {
      console.log("Cookie consent prompt not found or cannot be interacted with.");
    }
  }

  public async searchFor(term: string): Promise<void> {
    const searchInput = await $(config.searchInputXPath);
    await searchInput.setValue(term);
    await browser.keys("Enter");
  }

  public async clickWebdriverIOLink(): Promise<void> {
    const webdriverIOButton = await $(config.webdriverIOXPath);
    await webdriverIOButton.waitForClickable({ timeout: config.webdriverIOWaitTimeout });
    await webdriverIOButton.click();
  }
}

