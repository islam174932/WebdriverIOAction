import type { Options } from '@wdio/types';

export const config: Options.Testrunner = {
  runner: 'local',
  specs: ['./test/features/**/api.feature'],
  exclude: [],
  maxInstances: 5, // Adjust based on your needs
  capabilities: [
    {
      maxInstances: 5,
      acceptInsecureCerts: true,
      // Remove 'browserName' and 'goog:chromeOptions' since they are not needed for API testing
    },
  ],
  logLevel: 'info',
  bail: 0,
  baseUrl: 'http://localhost', // Adjust to your API base URL
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: [], // Remove any unnecessary services like 'chromedriver'
  framework: 'cucumber',
  reporters: ['spec'],
  cucumberOpts: {
    require: ['./test/features/step-definitions/api.ts'], // Adjust path to your step definitions
    backtrace: false,
    dryRun: false,
    failFast: false,
    snippets: true,
    source: true,
    profile: [],
    strict: false,
    tagExpression: '',
    timeout: 30000, // Adjust timeout as needed
    ignoreUndefinedDefinitions: false,
  },
  before: function (capabilities, specs) {
    // You can add any necessary setup here
  },
};

export default config;
