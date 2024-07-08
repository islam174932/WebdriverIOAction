import { expect } from "chai";

export class HeakoAppPage {
  async openTheWebsite() {
    // Navigate to the webpage
    

    await browser.url("https://the-internet.herokuapp.com/upload");

    // Locate and click the button to trigger the alert
    const filetButton = await $('//*[@id="file-submit"]');
    await filetButton.click();
    const filePath = await'D:\\coursesFiles\\Backend Testing with sql.docx';
    await browser.pause(2000); // Adjust the pause time as needed
    await fileInput.setValue(filePath)


    // Optionally, wait for some time after accepting the alert
    await browser.pause(2000);
  }
}
