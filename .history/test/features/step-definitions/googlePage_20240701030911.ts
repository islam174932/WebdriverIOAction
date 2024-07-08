// googlePage.t
 class GooglePage {
  public async open(): Promise<void> {
    await browser.url('https://www.google.com/');
    await this.handleCookieConsent();
  }

  private async handleCookieConsent(): Promise<void> {
    try {
      const acceptButton = await $('//*[@id="L2AGLb"]/div');
      if (await acceptButton.isExisting()) {
        await acceptButton.click();
      }
    } catch (error) {
      console.log('Cookie consent prompt not found or cannot be interacted with.');
    }
  }

  public async searchFor(term: string): Promise<void> {
    const searchInput = await $('//*[@id="tsf"]/div[2]/div[1]/div[1]/div/div[2]/input');
    await searchInput.setValue(term);
    await browser.keys('Enter');
  }

  public async clickWebdriverIOLink(): Promise<void> {
    const webdriverIOButton = await $('//*[@id="rso"]/div[1]/div/div/div/div/div/div/div/div[1]/div/span/a/h3');
    await webdriverIOButton.waitForClickable({ timeout: 5000 });
    await webdriverIOButton.click();
  }
}

export default new GooglePage();
