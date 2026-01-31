# Swift Translator Automated Tests

This repository contains the **full Playwright project** for testing the [Swift Translator](https://www.swifttranslator.com/) web application.  
It includes all scripts, test cases, and configuration files necessary to run automated tests for both **functional** and **UI** features.

---

## Repository Overview

**Repository Name:** `swift-translator-playwright`  
**Repository Link:** [https://github.com/<your-username>/swift-translator-playwright](https://github.com/<your-username>/swift-translator-playwright)

### Project Structure

swift-translator-playwright/
│
├── tests/
│ └── translator.spec.js # All positive, negative, and UI test scripts
│
├── playwright.config.js # Playwright configuration file
│
├── package.json # Node.js project and dependencies
│
├── package-lock.json # Locked dependencies
│
└── README.md # This file


---

## Features of the Tests

1. **Positive Functional Tests (25 cases)**  
   - Validate Singlish-to-Sinhala translations for typical use cases.

2. **Negative Functional Tests (10 cases)**  
   - Handle unexpected or incorrect input to verify system behavior.

3. **UI Validation Tests**  
   - Check input clearing, placeholder visibility, and other UI elements.

4. **Expected Fail Tests**  
   - Validate features that are not currently implemented (e.g., dark mode, font resizing).

---

## Prerequisites

- Node.js v18+  
- npm (Node package manager)  
- Internet connection to access [Swift Translator](https://www.swifttranslator.com/)

---

## Installation Instructions

1. **Clone the repository**:

```bash
git clone https://github.com/<your-username>/swift-translator-playwright.git
cd swift-translator-playwright
npm install
npx playwright install

Running the Tests
Run all tests sequentially
npx playwright test

Run tests in headed mode (browser visible)
npx playwright test --headed

Generate an HTML Test Report
npx playwright show-report

Configuration

playwright.config.js contains settings for test execution:

const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 60000, // Global test timeout
  expect: {
    timeout: 10000 // Assertion timeout
  },
  workers: 1, // Run tests sequentially
  use: {
    headless: false,
    actionTimeout: 15000, // Timeout for click/fill actions
    navigationTimeout: 30000,
  },
});

How Tests Work

Browser Setup

One browser instance is opened for all tests.

Functional Tests

Positive tests check correct translation output.

Negative tests check incorrect or edge-case inputs.

UI Tests

Validate placeholder text, input clearing, and other UI elements.

Expected Fail Tests

Ensure missing or unsupported features are flagged correctly.



Author

Sujan Lakdin
IT Undergraduate | Automation Testing Enthusiast
