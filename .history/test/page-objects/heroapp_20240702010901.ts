import { expect } from "chai";

export class HeakoAppPage {
  async openTheWebsite() {
     // Navigate to the webpage
     await browser.url("https://the-internet.herokuapp.com/javascript_alerts");

     await browser.url("https://the-internet.herokuapp.com/javascript_alerts");

     // Locate and click the button to trigger the alert
     const alertButton = await $('//*[@id="content"]/div/ul/li[3]/button');
     await alertButton.click();
 
     // Wait for the alert to appear
     await browser.pause(2000); // Adjust the pause time as needed
 
     // Send text to the prompt alert
     await browser.sendAlertText('please accept');
 
     // Accept the alert
     await browser.acceptAlert();
 
     // Optionally, wait for some time after accepting the alert
     await browser.pause(2000); 
  


  }
}
