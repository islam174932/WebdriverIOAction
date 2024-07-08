// heakoAppPage.ts

export class HeakoAppPage {
  open() {
    browser.url("https://the-internet.herokuapp.com/"); // Replace with your actual URL
  }

  open() {
    const loginButton = $(this.loginButtonSelector);
    loginButton.waitForExist();
    loginButton.click();
  }
}
