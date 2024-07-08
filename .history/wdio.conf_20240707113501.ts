
import path from "path";

import fs from 'fs-extra'; // Using fs-extra for cross-version compatibility


import type { Options } from "@wdio/types";

export const config: Options.Testrunner = {
  // ====================
  // Runner Configuration
  // ====================

  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverScreenshotsReporting: false,
        disableWebdriverStepsReporting: false,
        reportedEnvironmentVars :{
          
        }
      },
    ],
  ],

  runner: "local",

  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      project: "./tsconfig.json",
      transpileOnly: true,
    },
  },

  specs: ["./test/features/demo/demo.feature"],

  exclude: [],

  maxInstances: 5,

  capabilities: [
    {
      maxInstances: 5,
      browserName: "chrome",
      "goog:chromeOptions": {
        args: [
          "--disable-gpu",
          "--disable-dev-shm-usage",
          "--no-sandbox",
          "--window-size=1920,1080",
          "--auth-server-whitelist=*",
          "--auth-negotiate-delegate-whitelist=*",
        ],
        prefs: {
          "profile.default_content_setting_values.cookies": 1,
        },
      },
    },
  ],

  logLevel: "warn",
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  framework: "cucumber",

  cucumberOpts: {
    require: ["./test/features/step-definitions/*.ts"],
    backtrace: false,
    requireModule: [],
    dryRun: false,
    failFast: false,
    name: [],
    snippets: true,
    source: true,
    strict: false,
    tagExpression: "",
    timeout: 300000,
    ignoreUndefinedDefinitions: false,
  },

  // Hooks
  
    // Other configurations..
  afterStep: async function (step, scenario, result, context) {
    console.log(`Finished step: ${step.text}`);
    console.log(`In scenario: ${scenario.name}`);
    console.log(`Step status: ${result.passed ? "Passed" : "Failed"}`);

    if (!result.passed) {
      const screenshotDir = path.join(__dirname, "results");
      if (!fs.existsSync(screenshotDir)) {
        fs.mkdirSync(screenshotDir, { recursive: true });
      }
      const screenshotPath = path.join(
        screenshotDir,
        `${scenario.name.replace(/ /g, "_")}_${Date.now()}.png`
      );

      try {
        await browser.saveScreenshot(screenshotPath);
        console.log(`Screenshot saved to: ${screenshotPath}`);
      } catch (e) {
        console.log(`Failed to save screenshot: ${e.message}`);
      }
    }
  },
};

/**
 * Gets executed once before all workers get launched.
 * @param {object} config wdio configuration object
 * @param {Array.<Object>} capabilities list of capabilities details
 */
// onPrepare: function (config, capabilities) {
// },

/**
 * Gets executed before a worker process is spawned and can be used to initialize specific service
 * for that worker as well as modify runtime environments in an async fashion.
 * @param  {string} cid      capability id (e.g 0-0)
 * @param  {object} caps     object containing capabilities for session that will be spawn in the worker
 * @param  {object} specs    specs to be run in the worker process
 * @param  {object} args     object that will be merged with the main configuration once worker is initialized
 * @param  {object} execArgv list of string arguments passed to the worker process
 */
// onWorkerStart: function (cid, caps, specs, args, execArgv) {
// },

/**
 * Gets executed just after a worker process has exited.
 * @param  {string} cid      capability id (e.g 0-0)
 * @param  {number} exitCode 0 - success, 1 - fail
 * @param  {object} specs    specs to be run in the worker process
 * @param  {number} retries  number of retries used
 */
// onWorkerEnd: function (cid, exitCode, specs, retries) {
// },

/**
 * Gets executed just before initialising the webdriver session and test framework. It allows you
 * to manipulate configurations depending on the capability or spec.
 * @param {object} config wdio configuration object
 * @param {Array.<Object>} capabilities list of capabilities details
 * @param {Array.<String>} specs List of spec file paths that are to be run
 * @param {string} cid worker id (e.g. 0-0)
 */
// beforeSession: function (config, capabilities, specs, cid) {
// },

/**
 * Gets executed before test execution begins. At this point you can access to all global
 * variables like `browser`. It is the perfect place to define custom commands.
 * @param {Array.<Object>} capabilities list of capabilities details
 * @param {Array.<String>} specs        List of spec file paths that are to be run
 * @param {object}         browser      instance of created browser/device session
 */
// before: function (capabilities, specs) {
// },

/**
 * Runs before a WebdriverIO command gets executed.
 * @param {string} commandName hook command name
 * @param {Array} args arguments that command would receive
 */
// beforeCommand: function (commandName, args) {
// },

/**
 * Cucumber Hooks
 *
 * Runs before a Cucumber Feature.
 * @param {string}                   uri      path to feature file
 * @param {GherkinDocument.IFeature} feature  Cucumber feature object
 */
// beforeFeature: function (uri, feature) {
// },

/**
 * Runs before a Cucumber Scenario.
 * @param {ITestCaseHookParameter} world    world object containing information on pickle and test step
 * @param {object}                 context  Cucumber World object
 */
// beforeScenario: function (world, context) {
// },

/**
 * Runs before a Cucumber Step.
 * @param {Pickle.IPickleStep} step     step data
 * @param {IPickle}            scenario scenario pickle
 * @param {object}             context  Cucumber World object
 */
// beforeStep: function (step, scenario, context) {
// },

/**
 * Runs after a Cucumber Step.
 * @param {Pickle.IPickleStep} step             step data
 * @param {IPickle}            scenario         scenario pickle
 * @param {object}             result           results object containing scenario results
 * @param {boolean}            result.passed    true if scenario has passed
 * @param {string}             result.error     error stack if scenario failed
 * @param {number}             result.duration  duration of scenario in milliseconds
 * @param {object}             context          Cucumber World object
 */
// afterStep: function (step, scenario, result, context) {
// },

/**
 * Runs after a Cucumber Scenario.
 * @param {ITestCaseHookParameter} world            world object containing information on pickle and test step
 * @param {object}                 result           results object containing scenario results
 * @param {boolean}                result.passed    true if scenario has passed
 * @param {string}                 result.error     error stack if scenario failed
 * @param {number}                 result.duration  duration of scenario in milliseconds
 * @param {object}                 context          Cucumber World object
 */
// afterScenario: function (world, result, context) {
// },

/**
 * Runs after a Cucumber Feature.
 * @param {string}                   uri      path to feature file
 * @param {GherkinDocument.IFeature} feature  Cucumber feature object
 */
// afterFeature: function (uri, feature) {
// },

/**
 * Runs after a WebdriverIO command gets executed
 * @param {string} commandName hook command name
 * @param {Array} args arguments that command would receive
 * @param {number} result 0 - command success, 1 - command error
 * @param {object} error error object if any
 */
// afterCommand: function (commandName, args, result, error) {
// },

/**
 * Gets executed after all workers are done with the test execution.
 * @param {object} exitCode 0 - success, 1 - fail
 * @param {object} config wdio configuration object
 * @param {Array.<Object>} capabilities list of capabilities details
 * @param {Array.<String>} specs        List of spec file paths that ran
 */
// after: function (exitCode, config, capabilities, specs) {
// },

/**
 * Gets executed right after terminating the webdriver session.
 * @param {object} config wdio configuration object
 * @param {Array.<Object>} capabilities list of capabilities details
 * @param {Array.<String>} specs List of spec file paths that ran
 */
// afterSession: function (config, capabilities, specs) {
// },

/**
 * Gets executed after all workers got shut down and the process is about to exit.
 * @param {object} config wdio configuration object
 * @param {Array.<Object>} capabilities list of capabilities details
 * @param {<Object>} results object containing test results
 */
// onComplete: function (config, capabilities, results) {
// },

/**
 * Cucumber Hooks
 *
 * Gets executed after all features are done.
 * @param {object}     result    result object containing scenario results
 * @param {object}     capabilities list of capabilities details
 * @param {Array.<string>}   features  List of feature files that ran
 */
// afterFeatures: function (result, capabilities, features) {
// },

/**
 * Cucumber Hooks
 *
 * Gets executed after all tests are done. You still have access to all global variables from
 * the test.
 * @param {object} result result object containing all tests results
 */
// afterTest: function (test, context, { error, result, duration, passed, retries }) {
// },

/**
 * Gets executed when a refresh happens.
 * @param {number} oldSessionId session ID of the old session
 * @param {number} newSessionId session ID of the new session
 */
// onReload: function(oldSessionId, newSessionId) {
// },

/**
 * Gets executed when test run complete successfully
 * @param {Object} exitCode 0 - success, 1 - fail
 * @param {Object} config wdio configuration object
 * @param {Array.<Object>} capabilities list of capabilities details
 */
// onComplete: function(exitCode, config, capabilities) {
// },

/**
 * Gets executed when test run complete with failures
 * @param {Object} exitCode 0 - success, 1 - fail
 * @param {Object} config wdio configuration object
 * @param {Array.<Object>} capabilities list of capabilities details
 * @param {Object} results object containing test results
 */
// onComplete: function(exitCode, config, capabilities, results) {
// },

/**
 * Cucumber Hooks
 *
 * Gets executed at the beginning of a new test run before any test has started.
 * @param {Array.<string>}   capabilities list of capabilities details
 * @param {object}   specs        List of spec file paths that ran
 */
// beforeSession: function (capabilities, specs) {
// },

/**
 * Cucumber Hooks
 *
 * Gets executed before all tests are run. You can use this to setup whatever is necessary
 * for your test run.
 * @param {Array.<string>}   capabilities list of capabilities details
 * @param {object}   specs        List of spec file paths that ran
 */
// before: function (capabilities, specs) {
// },

/**
 * Cucumber Hooks
 *
 * Gets executed before a Cucumber Feature.
 * @param {object}   feature  Cucumber feature object
 */
// beforeFeature: function (feature) {
// },

/**
 * Cucumber Hooks
 *
 * Gets executed before a Cucumber Scenario.
 * @param {object}   scenario  Cucumber scenario object
 */
// beforeScenario: function (scenario) {
// },

/**
 * Cucumber Hooks
 *
 * Gets executed before a Cucumber Step.
 * @param {object}   step  Cucumber step object
 */
// beforeStep: function (step) {
// },

/**
 * Cucumber Hooks
 *
 * Gets executed after a Cucumber Step.
 * @param {object}   stepResult  Cucumber step result object
 */
// afterStep: function (stepResult) {
// },


