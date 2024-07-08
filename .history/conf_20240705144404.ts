import { Options } from '@wdio/types';

export const config: Options.Testrunner = {
  runner: 'local',
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      project: './tsconfig.json',
      transpileOnly: true,
    },
  },
  specs: [
    './test/features/demo/demo.feature',
    './test/features/demo/herako.feature',
  ],
  exclude: [],

  maxInstances: 5,

  capabilities: [
    {
      browserName: 'chrome',
      'bstack:options': {
        os: 'Windows',
        osVersion: '10',
        browserVersion: '120.0',
        userName: 'eslamgamal_t6Q92k',
        accessKey: '9xQEqwpHEUo8LEmV8qt4',
        local: true,
        buildName: 'browserstack-build-1',
        projectName: 'BrowserStack Sample',
      },
    },
    {
      browserName: 'safari',
      'bstack:options': {
        os: 'OS X',
        osVersion: 'Monterey',
        browserVersion: '15.6',
        userName: 'eslamgamal_t6Q92k',
        accessKey: '9xQEqwpHEUo8LEmV8qt4',
        local: true,
        buildName: 'browserstack-build-1',
        projectName: 'BrowserStack Sample',
      },
    },
    {
      browserName: 'chromium',
      'bstack:options': {
        deviceName: 'iPhone 13',
        osVersion: '15',
        realMobile: true,
        userName: 'eslamgamal_t6Q92k',
        accessKey: '9xQEqwpHEUo8LEmV8qt4',
        local: true,
        buildName: 'browserstack-build-1',
        projectName: 'BrowserStack Sample',
      },
    },
  ],

  services: ['browserstack'],
  user: 'eslamgamal_t6Q92k',
  key: '9xQEqwpHEUo8LEmV8qt4',

  // WebdriverIO Hooks
  before: function (capabilities, specs) {
    console.log('Starting the test');
  },

  after: function (result, capabilities, specs) {
    console.log('Ending the test');
  },

  logLevel: 'info',
  framework: 'cucumber',
  reporters: ['spec'],
  cucumberOpts: {
    require: ['./test/steps/**/*.ts'],
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
    ignoreUndefinedDefinitions: false,
  },
};
