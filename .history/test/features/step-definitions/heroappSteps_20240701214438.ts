
import { HeakoAppPage } from "../../page-objects/heroapp";
const heakoAppPage = new HeakoAppPage();

G('I am on the Heako app', async function () {
    
    await heakoAppPage.open();
  });