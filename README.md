# Jones Automation Exercise

## Overview

This repository contains my solution for the Jones Automation home assignment using Playwright.

The automation performs the following actions:

* Opens the target website: https://test.netlify.app/
* Fills in the Name, Email, Phone, Company, and Website fields
* Changes the **Number of Employees** from **1-10** to **51-500** (Bonus)
* Captures a screenshot before submitting the form
* Clicks the **Request a call back** button
* Waits for the thank-you page
* Prints a confirmation message to the console upon successful completion

---

## Prerequisites

Before running the project, make sure the following are installed:

* Node.js
* npm

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Dsaar/jones.git
```

### 2. Navigate to the project directory

```bash
cd jones/jones-automation-exercise
```

### 3. Install project dependencies

```bash
npm install
```

### 4. Install Playwright browsers

```bash
npx playwright install
```

### 5. Run the automation

```bash
node automation.js
```

---

## Project Structure

```text
jones-automation-exercise/
├── automation.js
├── answers.md
├── README.md
├── package.json
├── package-lock.json
└── screenshots/
    └── before-submit.png
```

---

## Deliverables

This project includes:

* **automation.js** – Playwright automation script
* **answers.md** – Answers to the UI analysis and QA questions
* **screenshots/** – Screenshot captured before form submission
