export class HeakoAppPage {
  async openTheWebsite() {
    await browser.url("https://the-internet.herokuapp.com/infinite_scroll");
    await browser.pause(7000);
    this.reloadPage(); // You may remove this pause if it's not necessary
  }

  async reloadPage() {
    await browser.refresh(); // This will refresh/reload the current page
  }

  // Optional: You can add additional methods or functionality related to your page here
}
