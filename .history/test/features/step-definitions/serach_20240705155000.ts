import { Given, When, Then } from "@wdio/cucumber-framework";

import { Page } from "../../page-objects/page.ts";
import  {HeakoAppPages} from "../../page-objects/heroapp.ts";


const page = new Page();
const HeakoAppPage = new 

Given(/^I am on the OrangeHRM page$/, async () => {
  await page.open();
});

Given(
  /^The user is going to enter the username "([^"]*)" and password "([^"]*)"$/,
  async (username: string, password: string) => {
    // Start recording before performing actions
   

    await page.login(username, password);
    await HeakoAppPages.openTheWebsite();
    // Stop recording after actions are completed
    
  }
);
