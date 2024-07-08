export class HeakoAppPage {
  async openTheWebsite() {
    await browser.url("https://the-internet.herokuapp.com/checkboxes");
    await browser.pause(8000); // Adjust as needed
    // Assuming you're using Selenium WebDriver, you should find the element first
    const checkBox = await browser.$('//*[@id="checkboxes"]/input[]');

    // Click the checkbox
    await checkBox.click();
    await browser.pause(8000);
  }
}
