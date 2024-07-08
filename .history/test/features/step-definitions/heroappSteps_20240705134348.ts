import { Given } from "@wdio/cucumber-framework";
import { HeakoAppPage } from "../../page-objects/heroapp.ts";
import {VideoRecorder} from "../../../VideoRecorder.ts";



const heakoAppPages = new HeakoAppPage();
const record = new 

Given("The user will click on Admin", async function () {
    

        // Perform actions on the page
        await heakoAppPages.openTheWebsite();

        // Stop recording after interaction is complete
        
    
});
