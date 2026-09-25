Playwright POM Automated Test Suite - MyBookList App

An end-to-end (E2E) automated test suite written in TypeScript using Playwright and the Page Object Model (POM) design pattern. This suite tests the functional capabilities of the MyBookList App.

📌 Project Overview

This framework demonstrates E2E testing best practices by separating page element locators and actions from actual test assertions.

Tested Functionalities:

Add a Book: Submits book details (Title, Author, ISBN) through the UI and verifies DOM updates.

Delete a Book: Dynamically targets a specific row by ISBN, triggers the delete action, and verifies the row is removed from the DOM.

📁 Project Structure

.
├── pages/
│   └── bookListPage.ts      # Page Object Class containing locators and page actions
├── tests/
│   └── book-list.spec.ts     # Test scenarios and assertions
├── package.json         # Project metadata and dependencies
├── playwright.config.ts # Playwright test runner configuration
└── README.md            # Project documentation


🛠️ Prerequisites

Before running the tests, ensure you have the following installed:

Node.js (v16 or higher)

npm (installed automatically with Node.js)

🚀 Getting Started

1. Initialize the Project

If you haven't created a Playwright project yet, initialize one in a new directory:

npm init playwright@latest


Follow the prompts (choose TypeScript, place tests in tests/, and install default browsers).

2. Add Code Files

Copy bookListPage.ts into the pages/ directory.

Copy book-list.spec.ts into the tests/ directory.

3. Install Dependencies

Ensure all Playwright browser binaries are downloaded:

npx playwright install


🧪 Executing Tests

You can run the tests using various Playwright CLI flags depending on your needs.

Run All Tests (Headless Mode)

Runs tests silently in the background across configured browsers:

npx playwright test


Run Tests in Headed Mode

Opens a live browser window to display test interactions:

npx playwright test --headed


Interactive UI Mode

Opens Playwright's interactive UI test runner with time-travel debugging:

npx playwright test --ui


Run a Specific Test File

npx playwright test tests/book.spec.ts --headed


📊 Viewing Test Reports

Playwright automatically generates an HTML report after running tests. To view it, execute:

npx playwright show-report


⚙️ Configuration Notes

Browser Handlers: If the web application uses native JavaScript alert dialogs (such as confirm windows upon deletion), Playwright automatically dismisses them by default. However, explicit dialog listeners can be configured in your test file:

page.on('dialog', dialog => dialog.accept());


Locators: Locators are kept dynamic (such as .filter({ hasText: isbn })) to prevent brittle tests when multiple rows exist in the table.
