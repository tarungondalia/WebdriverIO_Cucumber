import { Given, When, Then } from 'cucumber'
import * as signInPage from '../pages/signInPage';


Given('I am on {string} page', (path) => {
    browser.url(path)
});

When('I enter {string} email address', (email) => {
    switch (email.toUpperCase()) {
        case 'CORRECT': {
            signInPage.enterCorrectEmail();
            break;
        }
        case 'WRONG': {
            signInPage.enterWrongEmail();
            break;
        }
    }
});

When('I enter {string} password', (password) => {
    switch (password.toUpperCase()) {
        case 'CORRECT': {
            signInPage.enterCorrectPassword();
            break;
        }
        case 'WRONG': {
            signInPage.enterWrongPassword();
        }
    }
});

When('I click on {string} button', (button) => {
    signInPage.clickOnLoginBtn(button);
});

Then('I should able to login successfully', () => {
    signInPage.successfullLogedIn();
});

Then('I should see error message for {string}', (input) => {
    signInPage.verifyLoginErrMsg(input);
});

When('I Logout', () => {
    signInPage.logout();
});
