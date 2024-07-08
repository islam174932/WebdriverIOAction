import { config as baseConfig } from '../wd';
import type { Options } from '@wdio/types';

export const config: Options.Testrunner = {
  ...baseConfig, // Spread the base configuration to inherit it
  specs: [
    // Add or override the specs as needed
    [
      "./test/features/other/newdemo.feature",
      "./test/features/other/herako2.feature",
    ],
  ],
  capabilities: [
    // Add or override capabilities if necessary
    ...baseConfig.capabilities,
    {
      maxInstances: 5,
      browserName: 'safari', // Example of adding another capability
      'safari.options': {
        args: [
          '--window-size=1920,1080',
        ],
      },
    },
  ],
  // You can override any other property of the base configuration if necessary
  logLevel: 'debug', // For example, changing the log level
};
