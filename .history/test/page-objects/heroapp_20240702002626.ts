export class HeakoAppPage {
  async openTheWebsite() {
    await browser.url("https://the-internet.herokuapp.com/windows");
    await browser.pause(8000); // Adjust as needed
    // Assuming you're using Selenium WebDriver, you should find the element first
    const element = $('[xpath="//*[@id=\'content\']/div/a"]');
        element.click();

        const windowHandles = browser.getWindowHandles();
        const originalWindowHandle = browser.getWindowHandle(); // Get the ID of the original window
        windowHandles.forEach(handle => {
            if (handle !== originalWindowHandle) {
                browser.switchToWindow(handle);
            }
        });

    // Click the checkbox
   
  }
}
