# Test Automation Practice - Cypress

Cypress and JavaScript automation project for practicing UI testing and web application interactions on the [Test Automation Practice](https://testautomationpractice.blogspot.com/) website.

The project uses the **Page Object Model (POM)**, reusable base-page actions, fixtures, and **Mochawesome** reporting to keep the test framework organized and maintainable.

## Topics Covered

* GUI elements and form interactions
* Alerts and confirmation dialogs
* Prompt dialogs
* Mouse hover interactions
* Double-click actions
* Drag and drop
* Single and multiple file uploads
* Wikipedia search
* Web tables
* Pagination
* Date pickers
* Date range selection
* Dropdowns
* Radio buttons and checkboxes

## Tech Stack

* **Cypress**
* **JavaScript**
* **Node.js**
* **Page Object Model (POM)**
* **Mochawesome**
* **Git / GitHub**

## Project Structure

```text

test_automation_practice
├─ cypress
│  ├─ e2e
│  │  ├─ dialogs_and_interactions.cy.js
│  │  ├─ file_upload_and_search.cy.js
│  │  ├─ gui_elements.cy.js
│  │  └─ web_tables.cy.js
│  ├─ fixtures
│  │  ├─ example.json
│  │  ├─ image_one.jpg
│  │  └─ image_two.jpg
│  ├─ pages
│  │  ├─ BasePage.js
│  │  ├─ DialogPage.js
│  │  ├─ FileUploadAndSearchPage.js
│  │  ├─ GUIElementsPage.js
│  │  └─ WebTablesPage.js
│  ├─ support
│  │  ├─ commands.js
│  │  └─ e2e.js
│  └─ utils
│     └─ helper.js
├─ cypress.config.js
├─ package-lock.json
├─ package.json
├─ README.md
└─ testCases
   └─ Test_Automation_Practice_Test_Cases.xlsx
```

## Framework Structure

### Page Objects

Page objects contain page-specific locators and workflows, keeping the test specifications clean and easier to maintain.

### Base Page

`BasePage.js` contains reusable actions such as:

* Entering text
* Clicking elements
* Double-clicking
* Hovering
* Selecting dropdown options
* Selecting multiple options
* Checking checkboxes/radio buttons
* Common verification methods

### Fixtures

The `fixtures` folder contains files used by the file-upload tests.

### Test Cases

Manual test cases are maintained separately in the `testCases` folder in Excel format and correspond to the automated test scenarios.

## Test Execution

Install the project dependencies:

```bash
npm install
```

Open Cypress Test Runner:

```bash
npm run test:open
```

Run all tests in headless mode:

```bash
npm test
```

Run tests in headed mode:

```bash
npm run test:headed
```

Run tests in Chrome:

```bash
npm run test:chrome
```

Run a specific spec:

```bash
npm run test:spec -- "cypress/e2e/gui_elements.cy.js"
```

## Test Reports

The project uses **Mochawesome** for test reporting.

Reports are generated when Cypress tests are executed through the configured reporter.
