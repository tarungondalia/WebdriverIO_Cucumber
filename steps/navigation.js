import { Given, When, Then } from 'cucumber'
import * as companyPage from '../pages/companyPage';



Given('I navigate to company list page starting with {string}', (path) => {
    browser.url(path)
    global.companyDetails = []
    global.currentstartLetter = path;
});


When('I collect the data for First Company',()=>{
    companyPage.extractFirstCompanyData();
});

When('I collect the data for Third Company',()=>{
    browser.back();
    companyPage.extractThirdCompanyData();
});

When('I collect the data for Last Company',()=>{
    browser.back();
    companyPage.extractLastCompanyData();
});