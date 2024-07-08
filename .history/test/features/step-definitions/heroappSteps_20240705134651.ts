import { Given } from "@wdio/cucumber-framework";
import { HeakoAppPage } from "../../page-objects/heroapp.ts";
import { VideoRecorder } from "../../../VideoRecorder.ts";

const heakoAppPages = new HeakoAppPage();
const videoOutputDir = 'C:\\Users\\User\\Desktop\\WebdriverIO2\\results'; // Replace with your desired output directory
const videoRecorder = new VideoRecorder(videoOutputDir);

Given("The user will click on Admin", async function () {
  const browser = await videoRecorder.startRecording();
  // Perform actions on the page
  await heakoAppPages.openTheWebsite();
  await videoRecorder.stopRecording(browser);

  // Stop recording after interaction is complete
});
