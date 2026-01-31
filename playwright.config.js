const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 60000, // මුළු Test එකකටම විනාඩියක් දෙන්න
  expect: {
    timeout: 10000 // Assertion එකකට තත්පර 10ක් දෙන්න
  },
  workers: 1,
  use: {
    headless: false,
    actionTimeout: 15000, // Click/Fill වැනි දේකට තත්පර 15ක්
    navigationTimeout: 30000,
  },
});