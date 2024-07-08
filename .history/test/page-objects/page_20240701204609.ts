import { ChainablePromiseElement } from "webdriverio";

export class Page {
  private get usernameInput(): ChainablePromiseElement<WebdriverIO.Element> {
    return $("selector-for-username-input");
  }

  private get passwordInput(): ChainablePromiseElement<WebdriverIO.Element> {
    return $("selector-for-password-input");
  }

  private get loginButton(): ChainablePromiseElement<WebdriverIO.Element> {
    return $("selector-for-login-button");
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
