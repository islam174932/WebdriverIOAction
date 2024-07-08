// heakoAppPage.ts



export class HeakoAppPage {
    private loginButtonSelector = '[data-testid="login-button"]';

    open() {
        browser.url('https://example.com/heako'); // Replace with your actual URL
    }

    clickLoginButton() {
        const loginButton = $(this.loginButtonSelector);
        loginButton.waitForExist();
        loginButton.click();
    }
}
