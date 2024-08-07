export class Page {
  async open(url: string): Promise<void> {
    await browser.url(url);
  }

  async handleCookieConsent(): Promise<void> {
    try {
      const acceptButton = await $('//*[@id="L2AGLb"]/div');
      if (await acceptButton.isExisting()) {
        await acceptButton.click();
      }
    } catch (error) {
      console.log(
        "Cookie consent prompt not found or cannot be interacted with."
      );
    }
  }

  async searchFor(searchTerm: string): Promise<void> {
    const searchInput = await $('//*[@id="APjFqb"]');
    await searchInput.setValue(searchTerm);
    await browser.keys("Enter");
  }

  async clickWebdriverIOLink(): Promise<void> {
    const webdriverIOButton = await $('a[href="https://webdriver.io/"]');
    await webdriverIOButton.waitForClickable({ timeout: 5000 });
    await webdriverIOButton.click();
  }
}
