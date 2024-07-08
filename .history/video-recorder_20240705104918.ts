import { remote } from 'webdriverio';
import fs from 'fs';
import path from 'path';
import ffmpeg from 'fluent-ffmpeg';
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg';

// Set ffmpeg path
ffmpeg.setFfmpegPath(ffmpegInstaller.path);

// WebDriverIO configuration
const config = {
    // Your WebDriverIO configuration options
};

let browser;
let videoRecorder = null;

(async () => {
    browser = await remote(config);

    // Define VideoRecorder class
    class VideoRecorder {
        constructor(testName) {
            const resultsDir = path.join('C:', 'Users', 'User', 'Desktop', 'WebdriverIO2', 'results');
            this.videoPath = path.join(resultsDir, `${testName.replace(/ /g, '_')}_${Date.now()}.mp4`);
        }

        startRecording() {
            if (!fs.existsSync(this.videoPath)) {
                const resultsDir = path.dirname(this.videoPath);
                if (!fs.existsSync(resultsDir)) {
                    fs.mkdirSync(resultsDir, { recursive: true });
                }

                this.command = ffmpeg()
                    .input(':0.0+0,0') // Adjust the input source as needed
                    .inputFormat('x11grab') // Use appropriate format for your OS
                    .videoCodec('libx264')
                    .outputOptions('-pix_fmt yuv420p')
                    .output(this.videoPath)
                    .on('start', (cmd) => console.log(`Started recording: ${cmd}`))
                    .on('end', () => console.log(`Video saved to: ${this.videoPath}`))
                    .on('error', (err, stdout, stderr) => {
                        console.error(`Error: ${err.message}`);
                        console.error(`ffmpeg stdout: ${stdout}`);
                        console.error(`ffmpeg stderr: ${stderr}`);
                    })
                    .run();
            }
        }

        stopRecording() {
            if (this.command) {
                this.command.kill('SIGINT');
            }
        }
    }

    // Create instance of VideoRecorder
    function createVideoRecorder(testName) {
        if (!videoRecorder) {
            videoRecorder = new VideoRecorder(testName);
        }
    }

    // AfterStep hook
    browser.config.afterStep = async function (step, scenario, result, context) {
        console.log(`Finished step: ${step.text}`);
        console.log(`In scenario: ${scenario.name}`);
        console.log(`Step status: ${result.passed ? 'Passed' : 'Failed'}`);

        if (!result.passed) {
            // Take a screenshot
            const screenshotDir = path.join('C:', 'Users', 'User', 'Desktop', 'WebdriverIO2', 'results');
            if (!fs.existsSync(screenshotDir)) {
                fs.mkdirSync(screenshotDir, { recursive: true });
            }
            const screenshotPath = path.join(screenshotDir, `${scenario.name.replace(/ /g, '_')}_${Date.now()}.png`);

            try {
                await browser.saveScreenshot(screenshotPath);
                console.log(`Screenshot saved to: ${screenshotPath}`);
            } catch (e) {
                console.error(`Failed to save screenshot: ${e.message}`);
            }

            // Stop video recording if in progress
            if (videoRecorder) {
                videoRecorder.stopRecording();
                videoRecorder = null;
            }
        }
    };

    // Example usage:
    try {
        // Start video recording for a test case
        createVideoRecorder('Test Scenario Name');
        videoRecorder.startRecording();

        // Your WebDriverIO test steps go here...
        await browser.url('https://example.com');
        await browser.pause(5000); // Example pause for demonstration

        // Simulate a failing step (example)
        await browser.click('non_existent_element');

    } catch (err) {
        console.error(`Test encountered an error: ${err}`);
    } finally {
        // Stop video recording at the end of the test
        if (videoRecorder) {
            videoRecorder.stopRecording();
            videoRecorder = null;
        }
        await browser.deleteSession(); // Close WebDriver session
    }
})();
