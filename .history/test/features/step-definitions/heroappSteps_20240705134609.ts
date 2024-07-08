import { Given } from "@wdio/cucumber-framework";
import { HeakoAppPage } from "../../page-objects/heroapp.ts";
import {VideoRecorder} from "../../../VideoRecorder.ts";



const heakoAppPages = new HeakoAppPage();
const videoOutputDir = '/path/to/output/directory'; // Replace with your desired output directory
const videoRecorder = new VideoRecorder(videoOutputDir);


Given("The user will click on Admin", async function () {
    

        // Perform actions on the page
        await heakoAppPages.openTheWebsite();
        const browser = await videoRecorder.startRecording();

        // Stop recording after interaction is complete
        
    
});
