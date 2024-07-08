import { remote} from 'webdriverio';
import * as fs from 'fs';
import * as path from 'path';

export class VideoRecorder {
    private browser: BrowserObject;
  constructor(private outputDir: string) {
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
    const filePath = path.join(this.outputDir, `video-${Date.now()}.mp4`); // Example filename with timestamp
    fs.writeFileSync(filePath, videoBuffer); // Save video to file
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
