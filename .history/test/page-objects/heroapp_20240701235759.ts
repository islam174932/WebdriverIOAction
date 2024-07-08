export class HeakoAppPage {
  async openTheWebsite() {
    await browser.url("https://the-internet.herokuapp.com/checkboxes");
    await browser.pause(8000); // Adjust as needed
 // Assuming you're using Selenium WebDriver, you should find the element first
const checkBox = await browser.findElement(By.xpath('//*[@id="checkboxes"]/input[2]'));

// Now you can interact with the checkbox element
await checkBox,

  }
}
