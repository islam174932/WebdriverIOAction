import { Given, And} from "@wdio/cucumber-framework";

import { Page } from "../../page-objects/page.ts";
import { AppPage } from "../../page-objects/heroapp.ts";

const page = new Page();


Given(/^I am on the OrangeHRM page$/, async () => {
  await page.open();
});

And(/^The user is going to enter the username "([^"]*)" and password "([^"]*)"$/,
  async (username: string, password: string) => {
    // Start recording before performing actions

    await page.login(username, password);
   
    // Stop recording after actions are completed
  }
);
