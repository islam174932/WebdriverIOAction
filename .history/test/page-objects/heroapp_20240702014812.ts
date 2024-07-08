import { expect } from "chai";

export class HeakoAppPage {
  async openTheWebsite() {
    // Navigate to the webpage

    await browser.url("https://the-internet.herokuapp.com/download");
    await browser.pause(4000);

    // Locate the file upload element
    const fileUploadButton = await $('#file-upload');
    
    // Provide the file path
    const filePath = "D:\\coursesFiles\\Backend Testing with sql.docx";
    await fileUploadButton.setValue(filePath);
    
    // Pause to ensure file selection
    await browser.pause(2000);

    // Locate and click the submit button
    const uploadButton = await $('#file-submit');
    await uploadButton.click();
    
    // Optionally, wait for some time after clicking the upload button
    await browser.pause(4000);
  }
}
