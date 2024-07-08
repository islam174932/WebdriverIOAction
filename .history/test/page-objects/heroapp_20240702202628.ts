export class HeakoAppPage {
  async openTheWebsite() {
    // Navigate to the webpage
    await browser.url("https://www.saucedemo.com/inventory.html");
    await browser.pause(4000);

    // Locate the file upload element
    // Select all elements with the class 'inventory_item_price'
    const prices = await $$('.inventory_item_price');

    // Convert the selected elements into an array of prices
    const pricesArray = [];
    for (const element of prices) {
      const priceText = await element.getText();
      pricesArray.push(priceText);
    }

    // Print the array of prices
    console.log(pricesArray);
    
    // Optionally, wait for some time after logging the prices
    await browser.pause(4000);
  }
}
