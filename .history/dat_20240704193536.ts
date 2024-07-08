import { baseConfig } from "./wdio.confconf";

export const config = {
  ...baseConfig,

  // Specify Test Files
  specs: [
    [
      "./test/features/data/data.feature",
      "./test/features/data/herako.feature",
    ],
    // Add more feature files if needed
  ],
};
