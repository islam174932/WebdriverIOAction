export class HeakoAppPage {

  async openTheWebsite() {
      await browser.url("https://the-internet.herokuapp.com/infinite_scroll");
      this.reloadPage()
  }
  

  async reloadPage() {
    browser.pause(7000);
      await browser.reloadSession(); // This will reload the entire session, including the current page
  }

  // Optional: You can add additional methods or functionality related to your page here
}
