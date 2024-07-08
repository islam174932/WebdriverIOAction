// heakoAppPage.ts



export class HeakoAppPage {
    

    open() {
        browser.url('https://example.com/heako'); // Replace with your actual URL
    }

    clickLoginButton() {
        const loginButton = $(this.loginButtonSelector);
        loginButton.waitForExist();
        loginButton.click();
    }
}
