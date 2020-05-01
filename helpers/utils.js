/* global browser */

// Wait times configured below.
/* eslint-disable */
export const SHORTWAIT_TIMEOUT_MS = 5000;
// Browser Helpers


export const clickText = (text) => {
    var path = "//*[contains(@text,'" + text + "')]";
    $(path).click();
};

export const extractText = (selector) => {
   return $(selector).getText();
};

export const extractAttributeValue = (selector,attribute) => {
    return $(selector).getAttribute(attribute);
};

export const enterText = (selector, text) => {
    return $(selector).setValue(text);
};

export const clickOnButton = (selector) => {
    return $(selector).click();
};
