import { ChainablePromiseElement } from "webdriverio";
import { VideoRecorder } from "../../VideoRecorder"; // Adjust path as necessary

export class Page {
  private get usernameInput(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('input[data-v-1f99f73c][name="username"]');
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
    await browser.url(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    await browser.maximizeWindow();
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
    const videoRecorder = new VideoRecorder(outputDir);
    await videoRecorder.startRecording(); // Start recording before actions
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLoginButton();
    await browser.pause(10000); // Example pause for demonstration
    await videoRecorder.stopRecording(browser); // Stop recording after actions
  }
}
