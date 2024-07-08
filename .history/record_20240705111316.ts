import * as webdriverio from 'webdriverio';
import * as path from 'path';

class VideoRecorder {
    private client: webdriverio.Browser;

  

    async startRecording(filename: string) {
        if (!this.client) {
            this.client = await webdriverio.remote({
                capabilities: {
                    browserName: 'chrome'
                }
            });
        }

        const resultsDir = 'C:\\Users\\User\\Desktop\\WebdriverIO2\\results';

        await this.client.startRecordingScreen({
            filePath: path.join(resultsDir, `${filename}.mp4`),
            width: 1920,
            height: 1080
        });
    }

    async stopRecording() {
        if (this.client) {
            const videoBuffer = await this.client.stopRecordingScreen();

            // Handle videoBuffer as needed

            await this.client.deleteSession();
            
        } else {
            console.warn('No WebDriverIO client initialized.');
        }
    }
}

async function testVideoRecording() {
    const videoRecorder = new VideoRecorder();

    try {
        await videoRecorder.startRecording('test_video');
        // Perform WebDriverIO actions
        await videoRecorder.stopRecording();
    } catch (error) {
        console.error('Error occurred:', error);
    }
}

testVideoRecording();
