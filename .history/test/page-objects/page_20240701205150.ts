import { ChainablePromiseElement } from "webdriverio";

export class Page {
  private get usernameInput(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('input.oxd-input.oxd-input--active[name="username"]');
  }

  private get passwordInput(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('input.oxd-input.oxd-input--active[name="password"]');
  }

  private get loginButton(): ChainablePromiseElement<WebdriverIO.Element> {
    return $(
      "button.oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button"
    );
  }

  public async open(): Promise<void> {
    await browser.url("https://example.com/login");
  }

  public async enterUsername(username: string): Promise<void> {
    await this.usernameInput.setValue(username);
  }

  public async enterPassword(password: string): Promise<void> {
    await this.passwordInput.setValue(password);
  }

  public async clickLoginButton(): Promise<void> {
    await this.loginButton.click();
  }

  public async login(username: string, password: string): Promise<void> {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLoginButton();
  }
}
