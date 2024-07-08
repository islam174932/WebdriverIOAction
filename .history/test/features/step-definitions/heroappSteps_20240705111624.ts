import { Given } from "@wdio/cucumber-framework";
import { HeakoAppPage } from "../../page-objects/heroapp.ts";
import { VideoRecorder } from '..'; 
const heakoAppPages = new HeakoAppPage();

Given("The user will click on Admin", async function () {
  await heakoAppPages.openTheWebsite();
});
