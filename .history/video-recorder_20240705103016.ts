import ffmpeg from 'fluent-ffmpeg';
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg';
import path from 'path';


ffmpeg.setFfmpegPath(ffmpegInstaller.path);

export class VideoRecorder {
    private command: ffmpeg.FfmpegCommand | null = null;
    private videoPath: string;

    constructor(testName: string) {
        const resultsDir = path.join('C:', 'Users', 'User', 'Desktop', 'WebdriverIO2', 'results');
        this.videoPath = path.join(resultsDir, `${testName.replace(/ /g, '_')}_${Date.now()}.mp4`);
    }

    public startRecording() {
        this.command = ffmpeg()
            .input(':0.0+0,0') // Adjust the input source as needed
            .inputFormat('x11grab') // Use appropriate format for your OS
            .videoCodec('libx264')
            .outputOptions('-pix_fmt yuv420p')
            .output(this.videoPath)
            .on('start', (cmd) => console.log(`Started recording: ${cmd}`))
            .on('end', () => console.log(`Video saved to: ${this.videoPath}`))
            .on('error', (err) => console.log(`Error: ${err.message}`))
            .run();
    }

    public stopRecording() {
        if (this.command) {
            this.command.kill('SIGINT');
        }
    }
}
