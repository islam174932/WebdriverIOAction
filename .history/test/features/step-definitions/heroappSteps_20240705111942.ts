import { Given } from "@wdio/cucumber-framework";
import { HeakoAppPage } from "../../page-objects/heroapp.ts";
import { VideoRecorder } from '../../../record.ts'; // Adjust path as per your project structure

const heakoAppPages = new HeakoAppPage();
const recorder = new VideoRecorder();

Given("The user will click on Admin", async function () {
    try {
        await recorder.startRecording('test_scenario');

        // Perform actions on the page
        await heakoAppPages.openTheWebsite();

        // Stop recording after interaction is complete
        await recorder.stopRecording();
    } catch (error) {
        console.error('Error occurred during test:', error);
    }
});
