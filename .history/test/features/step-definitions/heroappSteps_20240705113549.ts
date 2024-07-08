import { Given } from "@wdio/cucumber-framework";
import { HeakoAppPage } from "../../page-objects/heroapp.ts";




const heakoAppPages = new HeakoAppPage();
const recorder = new VideoRecorder();

Given("The user will click on Admin", async function () {
    try {
       

        // Perform actions on the page
        await heakoAppPages.openTheWebsite();

        // Stop recording after interaction is complete
        
    } catch (error) {
        console.error('Error occurred during test:', error);
    }
});
