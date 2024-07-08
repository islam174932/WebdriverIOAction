import { Given } from "@wdio/cucumber-framework";
import { HeakoAppPage } from "../../page-objects/heroapp.ts";
import { VideoRecorder } from '../../../record.ts'; 
const heakoAppPages = new HeakoAppPage();
const recorder = new VideoRecorder();
Given("The user will click on Admin", async function () {
  await recorder.startRecording('test_scenario');
  await heakoAppPages.openTheWebsite();
  
});
