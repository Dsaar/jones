# Jones Automation Exercise – Written Answers

## A. Review of the Payment Form UI Mock-Up

After reviewing the payment form, I identified the following issues and potential improvements.

### 1. Missing CVV / Security Code Field

The form requests credit card information but does not include a CVV (Card Verification Value) field.

This is a significant functional and security concern because most online card transactions require the card security code as an additional verification mechanism to help reduce fraud.

### 2. Missing Country Field

The form includes billing address, city, state/province, and postal code fields, but does not include a country field.

This creates several issues:

* Postal code formats differ by country.
* Some countries do not use states or provinces.
* Address validation rules vary internationally.
* It is unclear whether the form is intended only for U.S. customers.

### 3. Payment Amount Lacks Currency Information

The screen displays a payment amount of **30.00**, but no currency is shown.

Users should be able to clearly identify whether the amount is USD, EUR, GBP, or another currency before submitting payment.

### 4. Poor User Experience for Card Number Entry

The card number field states "No dashes or spaces."

Modern payment forms typically allow users to enter spaces and automatically format the card number for readability.

Restricting users from entering spaces may create unnecessary friction and increase input errors.

### 5. Unclear Address Line Structure

The form contains two address fields, but only the first is labeled.

The second address field appears to be intended for information such as apartment, suite, or unit number, but this is not explained to the user.

### 6. Unclear Abbreviation ("MI")

The cardholder name section contains a field labeled "MI".

Some users may not understand that this stands for "Middle Initial."

Using a clearer label would improve usability.

### 7. Accessibility Concerns

Potential accessibility issues include:

* Small text size.
* Required fields indicated only by an asterisk.
* Limited visual emphasis on important information.
* Potential difficulties for screen readers if fields are not properly associated with labels.

### 8. Validation and Error Handling

The mock-up does not indicate how validation errors are handled.

Examples include:

* Invalid card number.
* Expired credit card.
* Missing required fields.
* Invalid postal code format.

Users should receive clear and immediate feedback when invalid data is entered.

---

## B. Sample Test Cases

### Test Case 1 – Successful Payment Submission

**Precondition:** User has a valid credit card.

**Steps:**

1. Select a card type.
2. Enter a valid card number.
3. Enter a valid expiration date.
4. Complete all required billing information.
5. Click Continue.

**Expected Result:**

* Payment information is accepted.
* User proceeds to the next step or confirmation page.
* No validation errors are displayed.

---

### Test Case 2 – Required Field Validation

**Steps:**

1. Leave one or more required fields empty.
2. Click Continue.

**Expected Result:**

* Submission is blocked.
* The missing fields are highlighted.
* Clear validation messages are displayed.

---

### Test Case 3 – Invalid Credit Card Number

**Steps:**

1. Enter an invalid credit card number.
2. Complete the remaining required fields.
3. Click Continue.

**Expected Result:**

* The form rejects the card number.
* A clear validation message is displayed.
* Payment is not processed.

---

## C. Suggested Product Solution for the Most Severe Issue

The most severe issue is the absence of a CVV (Card Verification Value) field.

Without a CVV field, the payment process lacks an important layer of verification commonly used in online card transactions.

I would recommend adding a dedicated CVV field next to the card number and expiration date fields, together with:

* Input validation.
* Contextual help explaining where the CVV can be found on the card.
* Appropriate masking and security handling.
* Clear error messages for invalid or missing values.

This would improve both payment security and the overall reliability of the payment process.
