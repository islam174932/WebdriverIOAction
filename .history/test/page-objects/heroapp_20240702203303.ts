export class HeakoAppPage {
  async openTheWebsite() {
    // Navigate to the webpage
    await browser.url("https://www.saucedemo.com/inventory.html");
    await browser.pause(4000);

    // Perform login
    await this.login('standard_user', 'secret_sauce');

    // Optionally wait for some time after login
    await browser.pause(2000);

    // Locate the file upload element
    // Select all elements with the class 'inventory_item_price'
    const elements = await $$('.inventory_item_price');

    // Convert the selected elements into an array of prices
    const pricesArray = [];
    for (const element of elements) {
      // Use WebdriverIO getText() method to get the text of each element
      const priceText = await element.getText();
      pricesArray.push(priceText);
    }

    // Print the array of prices
    console.log(pricesArray);
    
    // Optionally, wait for some time after logging the prices
    await browser.pause(4000);
  }

  async login(username, password) {
    const usernameInput = await $('#user-name');
    const passwordInput = await $('#password');
    const loginButton = await $('#login-button');

    await usernameInput.setValue(username);
    await passwordInput.setValue(password);
    await loginButton.click();
  }
}
