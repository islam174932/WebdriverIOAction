
import { Page } from "../../page-objects/page.ts";
const heakoAppPage = new HeakoAppPage();

Given('I am on the Heako app', async function () {
    
    await heakoAppPage.open();
  });