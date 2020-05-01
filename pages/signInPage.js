import { extractText, enterText, clickOnButton, SHORTWAIT_TIMEOUT_MS } from "../helpers/utils";
import { correctEmail, correctPassword, wrongEmail, wrongPassword, wrongCredentialsErrorMsg, correctEmailWrongPasswordErrMsg } from "../helpers/constants";
import { expect } from "chai";

const email = '[data-e2e="emailAddress"]';
const password = '[data-e2e="password"]';
const loginButton = '[data-e2e="login"]';
const myAccount = '#my-account-icon';
const loginErrorMessage = '.loginBox__login .log-error';
const error = '.error__modal';
const accountDropdown = '.AccountDropdown';
const logoutBtn = '.dropdown-menu li a[id="HeaderMenu.logout"]';
const welcomeToast = '.ToastWrapper_ToastMessage';
const toastCloseBtn = '.Toastify__close-button.Toastify__close-button--success';

export const enterCorrectEmail = () => {
    enterText(email, correctEmail);
}

export const enterCorrectPassword = () => {
    enterText(password, correctPassword);
}

export const clickOnLoginBtn = () => {
    clickOnButton(loginButton);
}

export const successfullLogedIn = () => {
    browser.waitUntil(
        () => {
            return $(welcomeToast).isDisplayed() == true;
        },
        SHORTWAIT_TIMEOUT_MS)
    let present = $(welcomeToast).isDisplayed();
    expect(present).to.equal(true);
}

export const enterWrongEmail = () => {
    enterText(email, wrongEmail);
}

export const enterWrongPassword = () => {
    enterText(password, wrongPassword);
}

export const verifyLoginErrMsg = (input) => {
    browser.waitUntil(
        () => {
            return $(loginErrorMessage).isDisplayed() == true;
        }, SHORTWAIT_TIMEOUT_MS)
    switch (input.toUpperCase()) {
        case 'WRONG CREDENTIALS': {
            var message = extractText(loginErrorMessage);
            expect(message).to.contain(wrongCredentialsErrorMsg);
            break;
        }
        case 'CORRECT EMAIL AND WRONG PASSWORD': {
            var message = extractText(loginErrorMessage);
            expect(message).to.contain(correctEmailWrongPasswordErrMsg);
            break;
        }
    }
}

export const logout = () => {
    do {
        $(toastCloseBtn).click();
    }
    while (($(toastCloseBtn).isDisplayed()) == false);
    $(accountDropdown).click();
    $(logoutBtn).click();
}