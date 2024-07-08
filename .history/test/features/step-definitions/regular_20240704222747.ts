import { Given, When } from '@wdio/cucumber-framework';

Given('the user is on the registration page', () => {
  // Code to navigate to the registration page
  console.log('User is on the registration page');
});

When('the user enters {string} as their {string}', (value: string, type: string) => {
  switch (type) {
    case 'phone number':
      console.log(`User enters phone number: ${value}`);
      break;
    case 'email address':
      console.log(`User enters email address: ${value}`);

    
  }
});
