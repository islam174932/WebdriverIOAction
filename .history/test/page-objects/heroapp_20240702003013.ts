import { expect } from 'chai';


export class HeakoAppPage {
  async openTheWebsite() {
    await browser.url('https://the-internet.herokuapp.com/windows');

    // Find and click on the link that opens a new window
    const clickHereLink = await $('[href="/windows/new"]');
    await clickHereLink.click();

    // Get all window handles (IDs)
    const windowHandles = await browser.getWindowHandles();

    // Switch to the new window
    const originalWindowHandle = await browser.getWindowHandle(); // Get the ID of the original window
    const newWindowHandle = windowHandles.find(handle => handle !== originalWindowHandle);
    await browser.switchToWindow(newWindowHandle);

    // Assert that you are now in the new window
    expect(await browser.getUrl()).to.contain('new');

    // Perform actions on the new window if needed

    // Close the new window
    await browser.closeWindow();

    // Switch back to the original window
    await browser.switchToWindow(originalWindowHandle);
    await browser.pause

    // Click the checkbox on the original window
 
    // Click the checkbox
   
  }
}
