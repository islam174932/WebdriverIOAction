import { remote, BrowserObject } from 'webdriverio';
import * as fs from 'fs';
import * as path from 'path';

export class VideoRecorder {
  constructor(private outputDir: string) {}

  async startRecording() {
    const browser = await remote({
      capabilities: {
        browserName: 'chrome' // Example: Use Chrome
      },
      logLevel: 'error' // Adjust log level as needed
    });

    await browser.startRecordingScreen({
      videoSize: '1920x1080' // Specify video size
    });

    return browser;
  }

  async stopRecording(browser: BrowserObject) {
    const videoBuffer = await browser.stopRecordingScreen();
    const filePath = path.join(this.outputDir, `video-${Date.now()}.mp4`); // Example filename with timestamp
    fs.writeFileSync(filePath, videoBuffer); // Save video to file
  }

  async runTests() {
    let browser: BrowserObject;

    try {
      browser = await this.startRecording(); // Start recording and get the browser instance
      await browser.url('https://example.com');
      const title = await browser.getTitle();
      console.log('Page title:', title);
    } catch (error) {
      console.error('Error occurred:', error);
    } finally {
      if (browser) {
        await this.stopRecording(browser); // Stop recording and pass the browser instance
        await browser.deleteSession(); // Close browser session
      }
    }
  }
}
