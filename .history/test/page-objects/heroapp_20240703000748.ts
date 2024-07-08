export class HeakoAppPage {

  async openTheWebsite() {
      await browser.url("https://the-internet.herokuapp.com/infinite_scroll");
  }
  browser.pause

  async reloadPage() {
      await browser.reloadSession(); // This will reload the entire session, including the current page
  }

  // Optional: You can add additional methods or functionality related to your page here
}
