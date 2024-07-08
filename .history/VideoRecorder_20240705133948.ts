import { remote, Browser } from 'webdriverio';
import * as fs from 'fs';
import * as path from 'path';

export class VideoRecorder {
  constructor(private outputDir: string) {}

  async startRecording(): Promise<Browser> {
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

  async stopRecording(browser: Browser) {
    const videoBuffer = await browser.stopRecordingScreen();
    const filePath = path.join(this.outputDir, `video-${Date.now()}.mp4`); // Example filename with timestamp
    fs.writeFileSync(filePath, videoBuffer); // Save video to file
  }


}