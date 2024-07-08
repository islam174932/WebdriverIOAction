import { Given, When } from '@wdio/cucumber-framework';

Given('the user is on the registration page', () => {
  // Code to navigate to the registration page
  browser.url('https://opensource-demo.orangehrmlive.com/index.php/auth/login');
  browser.pause(2000);
  
});

When('the user enters {string} as their {string}', (value: string, type: string) => {
          
});
