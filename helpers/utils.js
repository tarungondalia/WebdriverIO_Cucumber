/* global browser */

// Wait times configured below.
/* eslint-disable */
export const SHORTWAIT_TIMEOUT_MS = 5000;
export const WAIT_TIMEOUT_MS = 30000;
export const LONGWAIT_TIMEOUT_MS = 50000;
export const implicitWaitTimeout = 3000;
export const POLLING_TIME = 500;
export const SHORT_POLLING_TIME = 100;
// Browser Helpers


export const existWait = (selector) => {
    browser.waitUntil(
        () => {
            return $(selector).isExisting() == true;
        },
        LONGWAIT_TIMEOUT_MS,
        `expected element with selector : ${selector} to exist,but element was not existing after ${LONGWAIT_TIMEOUT_MS} milliseconds.`,
        POLLING_TIME,
    );
};

export const waitAndClickElWithTimeout = (selector, timeout) => {
    browser.waitUntil(
        () => {
            return $(selector).isDisplayed() == true;
        },
        timeout,
        `expected element with selector : ${selector} to be visible,but element was still not displayed after ${timeout} milliseconds.`,
        POLLING_TIME,
    );
    el.click();
};

export const clickText = (text) => {
    var path = "//*[contains(@text,'" + text + "')]";
    $(path).click();
};

export const waitForTextToExist = (text) => {
    var path = "//*[contains(@text,'" + text + "')]";
    $(path).waitForExist(WAIT_TIMEOUT_MS);
};

export const extractText = (selector) => {
   return $(selector).getText();
};

export const extractAttributeValue = (selector,attribute) => {
    return $(selector).getAttribute(attribute);
};
