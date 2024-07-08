import { remote, WebDriver } from 'webdriverio';
import * as path from 'path';

class VideoRecorder {
    private client: WebDriver;

    async startRecording(filename: string) {
        // Initialize WebDriverIO client
        this.client = await remote({
            capabilities: {
                browserName: 'chrome' // You can change this to other browsers as needed
            }
        });

        // Define the directory where videos will be saved
        const resultsDir = 'C:\\Users\\User\\Desktop\\WebdriverIO2\\results';

        // Start video recording using WebDriverIO's browser API
        await this.client.startRecordingScreen({
            filePath: path.join(resultsDir, `${filename}.mp4`), // Adjust the file path as needed
            width: 1920,
            height: 1080
        });
    }

    async stopRecording() {
        if (this.client) {
            // Stop video recording
            const videoBuffer = await this.client.stopRecordingScreen();

            // Handle the videoBuffer as needed
            // For example, you could save it to a file using fs module
            // fs.writeFileSync('video.mp4', videoBuffer);
            // Note: You may need additional dependencies and imports for file handling

            // Close WebDriverIO client session
            await this.client.deleteSession();
        } else {
            console.warn('No WebDriverIO client initialized.');
        }
    }
}

// Example usage:
async function testVideoRecording() {
    const recorder = new VideoRecorder();
    try {
        await recorder.startRecording('test_video'); // Start recording with filename 'test_video'
        // Perform your WebDriverIO actions here
        await recorder.stopRecording();
    } catch (error) {
        console.error('Error occurred:', error);
    }
}

// Call the test function
testVideoRecording();
