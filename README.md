# Swift Translator – Playwright Automated Testing Project

This repository contains the **full Playwright automation project** developed for functional and UI testing of the **Swift Translator** web application.

🔗 **Application Under Test:** https://www.swifttranslator.com/

The project is created as part of an **ITPM assignment** and includes:
- Positive functional test cases
- Negative functional test cases
- Basic UI test case
- Playwright configuration files
- Data-driven testing approach

---

## 📁 Project Structure

swift-translator-playwright/
│
├── tests/
│ └── translator.spec.js # All functional & UI test cases
│
├── playwright.config.js # Playwright configuration
├── package.json # Project dependencies
├── package-lock.json
└── README.md # Project documentation


---

## 🧪 Test Coverage

### ✅ Functional Testing
- **Positive test cases** (Sinhala-English mixed inputs, numbers, dates, long paragraphs, spacing issues)
- **Negative test cases** (invalid characters, English-only input, URLs, uppercase text, malformed words)

### 🎨 UI Testing
- **Clear button functionality** (verifies input field reset)

### 📊 Test Approach
- Data-driven testing using an array of test objects
- Single browser window execution
- Sequential execution to avoid test conflicts

---

## ⚙️ Prerequisites

Make sure the following are installed on your system:

- **Node.js** (v18 or higher recommended)  
  👉 https://nodejs.org/
- **npm** (comes with Node.js)
- **Google Chrome** (for Chromium testing)

---

## 📥 Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/<your-username>/swift-translator-playwright.git

2. Navigate to the project directory

cd swift-translator-playwright

Install dependencies

npm install


Install Playwright browsers

npx playwright install

▶️ Running the Tests
Run all tests
npx playwright test

Run tests with browser UI (headed mode)
npx playwright test --headed


⚠️ By default, this project runs with one browser window and headed mode enabled, as required for demonstration and marking.

🔧 Playwright Configuration Highlights

   Browser: Chromium (Desktop Chrome)

   Execution Mode: Sequential (1 worker)

   Headless Mode: Disabled

   Timeout: 600 seconds

   Viewport: 1280 × 720

Configuration file: playwright.config.js

📝 Important Notes for Marking

  ✅ This repository is publicly accessible

  ✅ Includes all scripts and configuration files

  ✅ Clear README instructions provided

  ⚠️ Repositories that are not accessible during marking will not be evaluated

👨‍💻 Author

Name: Sujan
Course: IT Undergraduate
Module: ITPM
Testing Tool: Playwright
