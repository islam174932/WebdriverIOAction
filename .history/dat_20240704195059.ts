import { baseConfig } from './con';

export const config: WebdriverIO.Config = {
  ...baseConfig,

  // Additional or override configurations specific to wdio.conf.ts
  // For example, you might want to adjust reporters or add services here
  // or provide additional capabilities or test configurations.

  // Example:
  specs: [
    [
      "./test/features/demo/demo.feature",
      "./test/features/demo/herako.feature",
      // Additional feature files specific to this configuration
    ],
  ],

  reporters: [
    ...baseConfig.reporters, // Keep the reporters from baseConfig
    // Add any additional reporters specific to this configuration
  ],

  // Add any other specific configuration options needed for this setup
};
