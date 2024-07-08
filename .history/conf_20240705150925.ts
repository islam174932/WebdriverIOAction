// Assuming base.conf.ts exports config as a variable

export const config:   {
 
  user: 'eslamgamal_t6Q92k',
  key: '9xQEqwpHEUo8LEmV8qt4',
  hostname: 'hub.browserstack.com',
  maxInstances: 5, // Adjust maxInstances according to your needs

  capabilities: [
    {
      browserName: 'chrome',
      'bstack:options': {
        os: 'Windows',
        osVersion: '10',
        browserVersion: '120.0',
        local: true,
        buildName: 'browserstack-build-1',
        projectName: 'BrowserStack Sample'
      }
    },
    {
      browserName: 'safari',
      'bstack:options': {
        os: 'OS X',
        osVersion: 'Monterey',
        browserVersion: '15.6',
        local: true,
        buildName: 'browserstack-build-1',
        projectName: 'BrowserStack Sample'
      }
    },
    {
      browserName: 'chromium',
      'bstack:options': {
        deviceName: 'iPhone 13',
        osVersion: '15',
        realMobile: true,
        local: true,
        buildName: 'browserstack-build-1',
        projectName: 'BrowserStack Sample'
      }
    }
  ],

  services: ['browserstack'],

  logLevel: 'info',
  framework: 'cucumber',
  reporters: ['spec'],
  cucumberOpts: {
    require: ['./test/features/step-definitions/*.ts'],
    backtrace: false,
    requireModule: ['ts-node/register'],
    dryRun: false,
    failFast: false,
    format: ['pretty'],
    snippets: true,
    source: true,
    profile: [],
    strict: false,
    tagExpression: '',
    timeout: 60000,
    ignoreUndefinedDefinitions: false
  }
};
