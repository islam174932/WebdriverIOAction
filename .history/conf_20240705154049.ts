// conf.ts

export const config = {
    user: 'eslamgamal_t6Q92k',
    key: '9xQEqwpHEUo8LEmV8qt4',
    hostname: 'hub.browserstack.com',
    maxInstances: 5,
  
    capabilities: [
        {
          browserName: 'chrome',
          'bstack:options': {
            os: 'Windows',
            osVersion: '10',
            browserVersion: '120.0',
            buildName: 'browserstack-build-1',
            projectName: 'BrowserStack Sample'
          }
        },
        {
          browserName: 'firefox',
          'bstack:options': {
            os: 'Windows',
            osVersion: '10',
            browserVersion: 'latest', // Use 'latest' for the latest version of Firefox
            buildName: 'browserstack-build-1',
            projectName: 'BrowserStack Sample'
          }
        },
        {
          browserName: 'edge',
          'bstack:options': {
            os: 'Windows',
            osVersion: '10',
            browserVersion: 'latest', // Use 'latest' for the latest version of Edge
            buildName: 'browserstack-build-1',
            projectName: 'BrowserStack Sample'
          }
        }
      ],
  
    specs: [
      "./test/features/demo/demo.feature",
      "./test/features/demo/herako.feature"
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
  