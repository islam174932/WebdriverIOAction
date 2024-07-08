import { remote, WebDriver } from 'webdriverio';
import * as path from 'path';

class VideoRecorder {
    private static client: WebDriver;

    static async startRecording(filename: string) {
        // Initialize WebDriverIO client if not already initialized
        if (!VideoRecorder.client) {
            VideoRecorder.client = await remote({
                capabilities: {
                    browserName: 'chrome' // You can change this to other browsers as needed
                }
            });
        }

        // Define the directory where videos will be saved
        const resultsDir = 'C:\\Users\\User\\Desktop\\WebdriverIO2\\results';

        // Start video recording using WebDriverIO's browser API
        await VideoRecorder.client.startRecordingScreen({
            filePath: path.join(resultsDir, `${filename}.mp4`), // Adjust the file path as needed
            width: 1920,
            height: 1080
        });
    }

    static async stopRecording() {
        if (VideoRecorder.client) {
            // Stop video recording
            const videoBuffer = await VideoRecorder.client.stopRecordingScreen();

            // Handle the videoBuffer as needed
            // For example, you could save it to a file using fs module
            // fs.writeFileSync('video.mp4', videoBuffer);
            // Note: You may need additional dependencies and imports for file handling

            // Close WebDriverIO client session
            await VideoRecorder.client.deleteSession();
            VideoRecorder.client = undefined; // Reset client after closing session
        } else {
            console.warn('No WebDriverIO client initialized.');
        }
    }
}

// Example usage:
async function testVideoRecording() {
    try {
        await VideoRecorder.startRecording('test_video'); // Start recording with filename 'test_video'
        // Perform your WebDriverIO actions here
        await VideoRecorder.stopRecording();
    } catch (error) {
        console.error('Error occurred:', error);
    }
}

// Call the test function
testVideoRecording();
