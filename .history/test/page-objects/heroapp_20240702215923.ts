
export class HeakoAppPage {
  async openTheWebsite() {
    
      // Navigate to the webpage
      await browser.url("https://the-internet.herokuapp.com/infinite_scroll");
      await browser.execute(() => {
        window.scrollTo(0, document.body.scrollHeight);
        browser.pause(5000)
      });
}
}
