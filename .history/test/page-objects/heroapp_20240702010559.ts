import { expect } from "chai";

export class HeakoAppPage {
  async openTheWebsite() {
     // Navigate to the webpage
     await browser.url("https://the-internet.herokuapp.com/javascript_alerts");

     // Locate and click the button to trigger the alert
     const alertButton = await $('//*[@id="content"]/div/ul/li[3]/button');
     await alertButton.click();
 
     // Wait for the alert to appear (if necessary)
     await browser.pause(7000); // Adjust the pause time as needed
 
     // Handle the alert
     const alertText = "Hello, this is the text I want to send.";
     await browser.sendAlertText(alertText);
     await browser.pause(7000);
     // Accept the alert
     
 
     // Optionally, wait for some time after accepting the alert
    ; // Adjust the pause time as needed
 
     // Continue with further actions or assertions as needed


  }
}
