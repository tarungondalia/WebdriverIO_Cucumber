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
    let elem = $('//*[@class = "gfdCompanyDetailsTitle" and text()= "Address"]');
    let isDisplayed = elem.isDisplayed();
    if(isDisplayed == true){
        browser.back();
    }
    companyPage.extractThirdCompanyData();
});

When('I collect the data for Last Company',()=>{
    let elem  = $('//*[@class = "gfdCompanyDetailsTitle" and text()= "Address"]');
    let isDisplayed = elem.isDisplayed();
    if(isDisplayed == true){
        browser.back();
    }
    companyPage.extractLastCompanyData();
});