/* eslint-disable max-len */

import * as dotenv from 'dotenv';

import { argv } from 'yargs';
import { generate } from 'multiple-cucumber-html-reporter';
import { removeSync } from 'fs-extra';

const config = require('./src/config/capabilities.ts')[argv.platform || 'web'];

dotenv.config();

// const multipleCucumberHtmlReporter = require('wdio-multiple-cucumber-html-reporter');

const finalConfig =
  typeof config === 'function'
    ? config(argv.isHeadless ? argv.isHeadless : false)
    : config;

exports.config = {
  exclude: [
    // 'path/to/excluded/files'
  ],

  sync: false,

  runner: 'local',

  maxInstances: 1,

  // Level of logging: trace | debug | info | warn | error | silent
  logLevel: 'debug',

  baseUrl: process.env.BASE_URL,

  screenshotPath: './screenshots/',

  coloredLogs: true,

  deprecationWarnings: true,

  bail: 0,

  waitforTimeout: 10000,

  connectionRetryTimeout: 90000,

  connectionRetryCount: 3,

  framework: 'cucumber',

  reporters: [
    'spec',
    [
      'cucumberjs-json',
      {
        jsonFolder: './reports/cucumber/',
      },
    ],
  ],

  cucumberOpts: {
    compiler: ['ts:ts-node/register'],
    requireModule: ['tsconfig-paths/register'],
    require: ['./src/features/stepDefinitions/**/*.ts'],
    backtrace: false,
    dryRun: false,
    failFast: false,
    format: ['pretty'],
    colors: true,
    snippets: true,
    source: true,
    profile: [],
    strict: true,
    tags: [''],
    timeout: 99999999,
    ignoreUndefinedDefinitions: false,
  },

  ...finalConfig,

  // =====
  // Hooks
  // =====
  // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
  // it and to build services around it. You can either apply a single function or an array of
  // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
  // resolved to continue.
  /**
   * Gets executed once before all workers get launched.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   */
  onPrepare: () => {
    // Remove the `.tmp/` folder that holds the json and report files
    removeSync('reports/cucumber');
  },
  /**
   * Gets executed just before initialising the webdriver session and test framework. It allows you
   * to manipulate configurations depending on the capability or spec.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   */
  // beforeSession: function beforeTest() {
  // },
  /**
   * Gets executed before test execution begins. At this point you can access to all global
   * variables like `browser`. It is the perfect place to define custom commands.
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   */
  // before(_capabilities, _specs) {

  // },
  /**
   * Runs before a WebdriverIO command gets executed.
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   */
  // beforeCommand: function (commandName, args) {
  // },

  /**
   * Hook that gets executed before the suite starts
   * @param {Object} suite suite details
   */
  // beforeSuite: function (suite) {
  // },
  /**
   * Function to be executed before a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
   * @param {Object} test test details
   */
  // beforeTest: function (test) {
  // },
  /**
   * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
   * beforeEach in Mocha)
   */
  // beforeHook: function () {
  // },
  /**
   * Hook that gets executed _after_ a hook within the suite ends (e.g. runs after calling
   * afterEach in Mocha)
   */
  // afterHook: function () {
  // },
  /**
   * Function to be executed after a test (in Mocha/Jasmine) or a step (in Cucumber) ends.
   * @param {Object} test test details
   */
  // afterTest: function (test) {
  // },
  /**
   * Hook that gets executed after the suite has ended
   * @param {Object} suite suite details
   */
  // afterSuite: function (suite) {
  // },

  /**
   * Runs after a WebdriverIO command gets executed
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   * @param {Number} result 0 - command success, 1 - command error
   * @param {Object} error error object if any
   */
  // afterCommand: function (commandName, args, result, error) {
  // },
  /**
   * Gets executed after all tests are done. You still have access to all global variables from
   * the test.
   * @param {Number} result 0 - test pass, 1 - test fail
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // after: function (result, capabilities, specs) {
  // },
  /**
   * Gets executed right after terminating the webdriver session.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // afterSession: function (config, capabilities, specs) {
  // },
  /**
   * Gets executed after all workers got shut down and the process is about to exit.
   * @param {Object} exitCode 0 - success, 1 - fail
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   */
  onComplete: () => {
    // Generate the report when it all tests are done
    generate({
      // Required
      jsonDir: './reports/cucumber',
      reportPath: './reports/cucumberReport/',
      displayDuration: true,
      openReportInBrowser: true,
      disableLog: true,
      reportName: 'MyProject - Report',
      pageTitle: 'MyProject - Report',
    });
  },

  //   afterStep: function (stepResult) {
  //     console.log(stepResult);
  //     if(stepResult.status === 'failed'){
  //       multipleCucumberHtmlReporter.attach(browser.screenshot(), 'image/png');
  //     }
  //   }
};
