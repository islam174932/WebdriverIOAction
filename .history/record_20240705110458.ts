import * as webdriverio from 'webdriverio';
import * as path from 'path';

class VideoRecorder {
    private static client: webdriverio.WebDriver;

    static async startRecording(filename: string) {
        if (!VideoRecorder.client) {
            VideoRecorder.client = await webdriverio.remote({
                capabilities: {
                    browserName: 'chrome'
                }
            });
        }

        const resultsDir = 'C:\\Users\\User\\Desktop\\WebdriverIO2\\results';

        await VideoRecorder.client.startRecordingScreen({
            filePath: path.join(resultsDir, `${filename}.mp4`),
            width: 1920,
            height: 1080
        });
    }

    static async stopRecording() {
        if (VideoRecorder.client) {
            const videoBuffer = await VideoRecorder.client.stopRecordingScreen();

            // Handle videoBuffer as needed

            await VideoRecorder.client.deleteSession();
            VideoRecorder.client = undefined;
        } else {
            console.warn('No WebDriverIO client initialized.');
        }
    }
}

async function testVideoRecording() {
    try {
        await VideoRecorder.startRecording('test_video');
        // Perform WebDriverIO actions
        await VideoRecorder.stopRecording();
    } catch (error) {
        console.error('Error occurred:', error);
    }
}

testVideoRecording();
