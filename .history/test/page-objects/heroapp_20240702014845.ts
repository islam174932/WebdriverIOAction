import { expect } from "chai";

export class HeakoAppPage {
  async openTheWebsite() {
    // Navigate to the webpage

    await browser.url("https://the-internet.herokuapp.com/download");
    await browser.pause(4000);

    // Locate the file upload element
    const fileUploadButton = await $('//*[@id="content"]/div/a[3]');
    
    // Provide the file path
  
    await uploadButton.click();
    
    // Optionally, wait for some time after clicking the upload button
    await browser.pause(4000);
  }
}
