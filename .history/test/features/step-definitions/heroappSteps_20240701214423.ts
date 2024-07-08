
import { HeakoAppPage } from "../../page-objects";
const heakoAppPage = new HeakoAppPage();

Given('I am on the Heako app', async function () {
    
    await heakoAppPage.open();
  });