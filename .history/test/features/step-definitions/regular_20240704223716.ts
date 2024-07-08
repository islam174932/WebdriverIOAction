import { Given, When } from '@wdio/cucumber-framework';

Given('the user is on the registration page', () => {
  // Code to navigate to the registration page
  browser.url('https://opensource-demo.orangehrmlive.com/index.php/auth/login');
  browser.pause(2000);

});

const xpathSelectors = {
  'phone number': '//*[@id=\'app\']/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input',
  'email': '//*[@id=\'app\']/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input'
};

When('the user enters {string} as their {string}', (value: string, type: string) => {
  if (!(type in xpathSelectors)) {
    throw new Error(`Unsupported field type: ${type}`);
  }
  
  const inputField = $(`[xpath="${xpathSelectors[type]}"]`);
  inputField.setValue(value);
});