class VideoRecorder {
    private client: webdriverio.Browser;

    async startRecording(filename: string) {
        if (!this.client) {
            // Initialize WebDriverIO client if not already initialized
            this.client = await webdriverio.remote({
                capabilities: {
                    browserName: 'chrome'
                }
            });
        }

        // Directory where videos will be saved
        const resultsDir = 'C:\\Users\\User\\Desktop\\WebdriverIO2\\results';

        // Start recording screen with specified filename
        await this.client.startRecordingScreen({
            filePath: path.join(resultsDir, `${filename}.mp4`),
            width: 1920,
            height: 1080
        });
    }

    async stopRecording() {
        if (this.client) {
            // Stop recording screen and get video buffer
            const videoBuffer = await this.client.stopRecordingScreen();

            // Perform any necessary handling of videoBuffer here

            // Delete WebDriverIO session
            await this.client.deleteSession();
            
        } else {
            console.warn('No WebDriverIO client initialized.');
        }
    }
}
