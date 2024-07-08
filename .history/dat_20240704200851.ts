

// Extend or modify config as needed
const extendedConfig = {
  ...config,
  specs: [
    [
      "./test/features/demo/demo.feature",
      "./test/features/demo/herako.feature",
      // Add more feature files as needed
    ],
    // Retain existing specs if needed
  ],
  capabilities: [
    // Override or add additional capabilities here
    {
      maxInstances: 3,
      browserName: "chrome",
      "goog:chromeOptions": {
        args: [
          "--headless",
          "--disable-gpu",
          "--window-size=1920,1080",
        ],
      },
    },
  ],
  cucumberOpts: {
    require: ["./test/features/step-definitions/*.ts"],
    // Modify other cucumber options as needed
  },
};

export { extendedConfig };
