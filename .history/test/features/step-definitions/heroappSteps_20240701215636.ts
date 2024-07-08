import { Given } from "@wdio/cucumber-framework";
import { HeakoAppPage } from "../../page-objects/heroapp.ts";
const heakoAppPage = new HeakoAppPage();

Given("I am on the Heako app", async function () {
  await heakoAppPage.openTheWebsite();
});
