const allureReporter = require('@wdio/allure-reporter').default;

Given(/^I am on the OrangeHRM page$/, async () => {
  allureReporter.addAllureId("1000");
  allureReporter.addEpic("13");
  allureReporter.addIssue("4");
  allureReporter.addOwner("islam");

  await page.open();
  allureReporter.addSeverity("blocker");

  // Add environment variables (if not using a file)
  const environmentVariables = {
    Browser: "Chrome",
    "Browser.Version": "89.0",
    URL: "https://example.com",
    Platform: "Windows"
  };
  
  for (const [key, value] of Object.entries(environmentVariables)) {
    allureReporter.addEnvironment(key, value);
  }
});

Wh(
  /^The user is going to enter the username "([^"]*)" and password "([^"]*)"$/,
  async (username, password) => {
    allureReporter.startStep("Perform action");
    allureReporter.addFeature("Open Application");
    await page.login(username, password);
    allureReporter.endStep();
    // Add any assertions or further actions after login if needed
  }
);
