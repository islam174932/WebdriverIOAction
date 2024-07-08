import { config as baseConfig } from './wdio.conf';

import type { Options } from '@wdio/types';

export const config: Options.Testrunner = {
  ...baseConfig,

  specs: [
    './test/features/other/newdemo.feature',
    './test/features/other/herako2.feature',
  ],

  capabilities: [
    {
      maxInstances: 5,
      browserName: 'safari',
      'safari.options': {
        args: [
          '--window-size=1920,1080',
        ],
      },
    },
  ],

  logLevel: 'debug',
};
