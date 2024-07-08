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

      // Regular expression to validate email address format
      const emailRegex: RegExp = /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/;

      if (emailRegex.test(value)) {
        console.log('Email address is valid');
      } else {
        console.log('Email address is invalid');
      }
      break;
    default:
      console.log(`Unsupported type: ${type}`);
  }
});
