import { Given } from "@wdio/cucumber-framework";
import { HeakoAppPage } from "../../page-objects/heroapp.ts";

const heakoAppPages = new HeakoAppPage();

Given("I am on the Heako app", async function () {
  await heakoAppPages.openTheWebsite();
});
