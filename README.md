# IT23681774-Playwright-Automation-Project

This repository contains automated test scripts developed using Playwright to evaluate the accuracy and usability of a Singlish-to-Sinhala translation system.

## Quick Start

### Installation

```bash
# Install dependencies
npm install
```

### Configuration

** IMPORTANT:** Before running tests, update the translator URL in `tests/example.spec.js`:

```javascript
// Line ~421
await page.goto("https://example.com/translator");  // Replace with your URL
```

Also verify the element selectors match your application:
- `#inputText` - Input field
- `#translateBtn` - Translate button
- `#outputText` - Output field

### Running Tests

```bash
# Run all tests
npm test

# Run with visible browser
npm run test:headed

# Interactive UI mode
npm run test:ui

# Debug mode
npm run test:debug

# View report
npm run test:report
```

##  Test Suite Overview

- **24 Positive Test Cases** - Valid translation scenarios
- **10 Negative Test Cases** - Edge cases and error handling
- **1 UI Test Case** - Interface behavior validation
- **Total: 35 test cases** across 3 browsers (Chromium, Firefox, WebKit)

##  Project Structure

```
IT23681774-Playwright-Automation-project/
├── tests/
│   └── Translater.spec.js       # Main test suite with all test cases
├── playwright.config.js       # Playwright configuration
├── package.json              # Dependencies and scripts
├── TEST_DOCUMENTATION.md     # Detailed test documentation
└── README.md                 # This file
```

##  Test Categories

###  Positive Tests
- Daily language usage (greetings, conversations)
- Mixed Singlish + English (technical terms)
- Formatting handling (spaces, punctuation)
- Numbers and dates
- Various sentence types (interrogative, imperative, etc.)
- Different tenses (past, present, future)

###  Negative Tests
- Complex slang with misspellings
- Typographical errors
- Special symbols
- Edge inputs (numbers-only, joined words)
- Long paragraphs

### UI Tests
- Real-time output update behavior
- Punctuation handling in UI

##  Documentation

For detailed information about test cases, configuration, and troubleshooting, see [TEST_DOCUMENTATION.md](TEST_DOCUMENTATION.md).

##  Technology Stack

- **Playwright** - End-to-end testing framework
- **Node.js** - Runtime environment
- **JavaScript** - Test scripting language

## Test Execution

Tests are executed across multiple browsers in parallel:
- Chromium (Chrome, Edge)
- Firefox
- WebKit (Safari)

Results are generated as an HTML report with detailed logs, screenshots, and traces for failed tests.

## Example Test Case

```javascript
{
  tcId: 'Pos_Fun_0001',
  testCaseName: 'Conditional complex sentence',
  input: 'oya call karoth mama enavaa',
  expectedOutput: 'ඔය call කරොත් මම එනවා',
  category: 'Daily language usage',
  sentenceType: 'Simple sentence'
}
```

## Test Results

After running tests:
1. HTML report is auto-generated
2. View with: `npm run test:report`
3. Check console for detailed logs

## Contributing

1. Ensure all tests pass before committing
2. Follow existing test case structure
3. Update documentation for new test cases



ISC



Student ID: IT23681774
