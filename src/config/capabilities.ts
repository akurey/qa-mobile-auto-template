/* eslint-disable max-len */
import { config } from 'dotenv';
import { join } from 'path';

config();
const project = process.env.PROJECT || '';

export const ios = {
  capabilities: [
    {
      automationName: 'XCUITest',
      commandTimeout: '7200',
      platformName: 'iOS',
      platformVersion: '15.0',
      avd: process.env.IOS_DEVICE,
      app: process.env.IOS_APP,
      appWaitActivity: 'MainActivity',
      noReset: false,
      useNewWDA: true,
      orientation: 'PORTRAIT',
      // ...settings.iOSMetadata,
    },
  ],
  specs: [join(__dirname, '..', 'features', project, 'mobile', '*.feature')],
  services: ['appium'],
  appium: {
    args: {
      sessionOverride: true,
      address: '127.0.0.1',
      port: '4444',
    },
  },
};

export const android = {
  capabilities: [
    {
      commandTimeout: '15000',
      automationName: 'UiAutomator2',
      platformName: 'Android',
      platformVersion: '11.0',
      avd: process.env.ANDROID_DEVICE,
      app: process.env.ANDROID_APP,
      noReset: false,
    },
  ],

  specs: [join(__dirname, '..', 'features', project, 'mobile', '*.feature')],

  services: ['appium'],

  appium: {
    args: {
      sessionOverride: true,
      address: '127.0.0.1',
      port: '4444',
    },
  },
};
