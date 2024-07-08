import { remote } from 'webdriverio';

export class VideoRecorder {
  private browser: WebdriverIO.BrowserObject;

  constructor() {
    // Initialize WebDriverIO browser instance
    this.browser = remote({
      capabilities: {
        browserName: 'chrome' // Example: Use Chrome
      },
      logLevel: 'error' // Adjust log level as needed
    });
  }

  async startRecording() {
    await this.browser.startRecordingScreen({
      videoSize: '1920x1080' // Specify video size
    });
  }

  async stopRecording() {
    const videoBuffer = await this.browser.stopRecordingScreen();
    // Save or process the video buffer as needed
    // Example: save to file
    // fs.writeFileSync('video.mp4', videoBuffer);
  }

  async runTests() {
    try {
      await this.browser.url('https://example.com');
      const title = await this.browser.getTitle();
      console.log('Page title:', title);
    } catch (error) {
      console.error('Error occurred:', error);
    } finally {
      await this.browser.deleteSession(); // Close browser session
    }
  }
}
