export class HeakoAppPage {
  async openTheWebsite() {
    await browser.url("https://the-internet.herokuapp.com/windows");
    await browser.pause(8000); // Adjust as needed
    // Assuming you're using Selenium WebDriver, you should find the element first
    const element = $('[xpath="//*[@id=\'content\']/div/a"]');
        element.click();

        const windowHandles = browser.getWindowHandles();
    // Click the checkbox
   
  }
}
