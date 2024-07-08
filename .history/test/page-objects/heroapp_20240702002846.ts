import { expect } from 'chai';

import { browser } from 'webdriverio';

export class HeakoAppPage {
  async openTheWebsite() {
    
    browser.url('https://the-internet.herokuapp.com/windows');

    // Find and click on the link that opens a new window
    const clickHereLink = $('[href="/windows/new"]');
    clickHereLink.click();

    // Get all window handles (IDs)
    const windowHandles = browser.getWindowHandles();

    // Switch to the new window
    const originalWindowHandle = browser.getWindowHandle(); // Get the ID of the original window
    const newWindowHandle = windowHandles.find(handle => handle !== originalWindowHandle);
    browser.switchToWindow(newWindowHandle);

    // Assert that you are now in the new window
    expect(browser.getUrl()).to.contain('new');

    // Perform actions on the new window if needed

    // Close the new window and switch back to the original window
    browser.closeWindow();
    browser.switchToWindow(originalWindowHandle);

    // Click the checkbox
   
  }
}
