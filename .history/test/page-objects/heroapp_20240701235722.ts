export class HeakoAppPage {
  async openTheWebsite() {
    await browser.url("https://the-internet.herokuapp.com/checkboxes");
    await browser.pause(8000); // Adjust as needed
    const checkBox =await '//*[@id="checkboxes"]/input[2]';
    await checkBox.click()

  }
}
