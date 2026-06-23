# Jones Automation Exercise

## Overview

This project contains a Playwright automation script created as part of the Jones Automation home assignment.

The automation performs the following actions:

* Opens the target website: https://test.netlify.app/
* Fills in the Name, Email, Phone, Company, and Website fields
* Selects "51-500" from the "Number of Employees" dropdown
* Captures a screenshot before form submission
* Clicks the "Request a call back" button
* Verifies navigation to the thank-you page
* Logs a success message to the console

## Prerequisites

* Node.js (version 18 or higher recommended)
* npm

## Installation

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## Running the Automation

Execute the script:

```bash
node automation.js
```

## Project Structure

```text
jones-automation-exercise/
├── automation.js
├── package.json
├── package-lock.json
├── screenshots/
│   └── before-submit.png
├── answers.md
└── README.md
```
