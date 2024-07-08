export class HeakoAppPage {
  async openTheWebsite() {
    // Navigate to the webpage
    await browser.url("https://www.saucedemo.com/inventory.html");
    await browser.pause(4000);

    // Perform login
    
    
    // Optionally, wait for some time after logging the prices
    await browser.pause(4000);
  }

  
  
}
