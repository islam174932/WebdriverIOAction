export class HeakoAppPage {
  async openTheWebsite() {
    await browser.url("https://the-internet.herokuapp.com/infinite_scroll");
    const elementXPath = '//*[@id="content"]/div/div/div/div/div[6]';
    await this.scrollToElement(elementXPath);
  }

  private async scrollToElement(elementXPath: string) {
    const element = await browser.$(elementXPath);

    // Wait for the element to exist in the DOM
    await element.waitForExist();

    // Scroll to the element
    await browser.execute((el) => {
      el.scrollIntoView();
    }, element);

    // Optionally, wait for element to be displayed if needed
    await element.waitForDisplayed();
  }

  // Optional: You can add additional methods or functionality related to your page here
}
