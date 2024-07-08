import { remote } from 'webdriverio';
import * as fs from 'fs';
import * as path from 'path';

export class VideoRecorder {
  private browser: WebdriverIO.BrowserObject;
  private outputDir: string;

  constructor(outputDir: string) {
    this.outputDir = outputDir;
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