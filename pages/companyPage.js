import { existWait, waitandEnterText, extractText, extractAttributeValue } from "../helpers/utils";

const companylist = '//*[@role= "main"]//li/a';
const companyName = '//h1';
const companyAddress = '//*[@class = "gfdCompanyDetailsTitle" and text()= "Address" ]/following-sibling:: div[1]//p'
const companyFax = '//*[@class = "gfdCompanyDetailsTitle" and text()= "Fax" ]/following-sibling:: div[1]//p'
const companyEmail = '//*[@class = "gfdCompanyDetailsTitle" and text()= "E-mail" ]/following-sibling:: div[1]//p'
const medicalInformationEmail = '//*[@class = "gfdCompanyDetailsTitle" and text()= "Medical Information e-mail" ]/following-sibling:: div[1]//p'
const companyTelephone = '//*[@class = "gfdCompanyDetailsTitle" and text()= "Telephone" ]/following-sibling:: div[1]//p'
const medicalDirectLine = '//*[@class = "gfdCompanyDetailsTitle" and text()= "Medical Information Direct Line" ]/following-sibling:: div[1]//p'
const customerDirectLine = '//*[@class = "gfdCompanyDetailsTitle" and text()= "Customer Care direct line" ]/following-sibling:: div[1]//p'
const outOfHoursLine = '//*[@class = "gfdCompanyDetailsTitle" and text()= "Out of Hours Telephone" ]/following-sibling:: div[1]//p'
const imagepath = '//img[@alt = "Company image"]'
const www = '//*[@class = "gfdCompanyDetailsTitle" and text()= "WWW" ]/following-sibling:: div[1]//p'
const stockAvailibilityPhone = '//*[@class = "gfdCompanyDetailsTitle" and text()= "Stock Availability" ]/following-sibling:: div[1]//p'


export const extractFirstCompanyData = () => {
    let data = {};
    // browser.pause(500);
    let companyList = $$(companylist);
    if (companyList.length >= 1) {
        console.log(companyList.length)
        companyList[0].click()
    
    existWait(companyAddress);
    console.log(extractText(".col-md-4"));
    data.Name = extractText(companyName);
    if ($$(companyAddress).length > 0) {
        data.companyAddress = extractText(companyAddress)
    }
    if ($$(companyFax).length > 0) {
        data.companyFax = extractText(companyFax)
    }
    if ($$(companyEmail).length > 0) {
        data.companyEmail = extractText(companyEmail)
    }
    if ($$(medicalInformationEmail).length > 0) {
        data.medicalInformationEmail = extractText(medicalInformationEmail)
    }
    if ($$(companyTelephone).length > 0) {
        data.companyTelephone = extractText(companyTelephone)
    }
    if ($$(medicalDirectLine).length > 0) {
        data.medicalDirectLine = extractText(medicalDirectLine)
    }
    if ($$(customerDirectLine).length > 0) {
        data.customerDirectLine = extractText(customerDirectLine)
    }
    if ($$(outOfHoursLine).length > 0) {
        data.outOfHoursLine = extractText(outOfHoursLine)
    }
    if ($$(www).length > 0) {
        data.www = extractText(www)
    }
    if ($$(stockAvailibilityPhone).length > 0) {
        data.stockAvailibilityPhone = extractText(stockAvailibilityPhone)
    }

    // data.companyInfo1 = extractText(".col-md-4");
    // data.companyInfo2 = extractText(".col-md-5");

    let path = './output/logos/' + extractText(companyName) + '.png';
    cucumberJson.attach(extractText(companyName), 'text/plain')
    cucumberJson.attach('company name is:', 'text/plain')
    $(imagepath).saveScreenshot(path)
    data.logofile = path;
    global.companyDetails.push(data);

    console.log(JSON.stringify(global.companyDetails))
    }else {
        console.log("No any company available.")
    }
}

export const extractThirdCompanyData = () => {
    let data = {};
    // browser.pause(500);
    let companyList = $$(companylist);
    if (companyList.length >= 3) {
        console.log(companyList.length)
        companyList[2].click()
    
    existWait(companyAddress);
    console.log(extractText(".col-md-4"));
    data.Name = extractText(companyName);
    if ($$(companyFax).length > 0) {
        data.companyFax = extractText(companyFax)
    }
    if ($$(companyEmail).length > 0) {
        data.companyEmail = extractText(companyEmail)
    }
    if ($$(medicalInformationEmail).length > 0) {
        data.medicalInformationEmail = extractText(medicalInformationEmail)
    }
    if ($$(companyTelephone).length > 0) {
        data.companyTelephone = extractText(companyTelephone)
    }
    if ($$(medicalDirectLine).length > 0) {
        data.medicalDirectLine = extractText(medicalDirectLine)
    }
    if ($$(customerDirectLine).length > 0) {
        data.customerDirectLine = extractText(customerDirectLine)
    }
    if ($$(outOfHoursLine).length > 0) {
        data.outOfHoursLine = extractText(outOfHoursLine)
    }
    if ($$(companyAddress).length > 0) {
        data.companyAddress = extractText(companyAddress)
    }
    if ($$(www).length > 0) {
        data.www = extractText(www)
    }
    if ($$(stockAvailibilityPhone).length > 0) {
        data.stockAvailibilityPhone = extractText(stockAvailibilityPhone)
    }

    // data.companyInfo1 = extractText(".col-md-4");
    // data.companyInfo2 = extractText(".col-md-5");

    let path = './output/logos/' + extractText(companyName) + '.png';
    cucumberJson.attach(extractText(companyName), 'text/plain')
    cucumberJson.attach('company name is:', 'text/plain')
    $(imagepath).saveScreenshot(path)
    data.logofile = path;
    global.companyDetails.push(data);

    console.log(JSON.stringify(global.companyDetails))
    }else {
        console.log("No any company available.")
    }
}

export const extractLastCompanyData = () => {
    let data = {};
    // browser.pause(500);
    let companyList = $$(companylist);
    if (companyList.length >= 4) {
        console.log(companyList.length)
        companyList[companyList.length - 1].click()
    
    existWait(companyAddress);
    console.log(extractText(".col-md-4"));
    data.Name = extractText(companyName);
    if ($$(companyFax).length > 0) {
        data.companyFax = extractText(companyFax)
    }
    if ($$(companyEmail).length > 0) {
        data.companyEmail = extractText(companyEmail)
    }
    if ($$(medicalInformationEmail).length > 0) {
        data.medicalInformationEmail = extractText(medicalInformationEmail)
    }
    if ($$(companyTelephone).length > 0) {
        data.companyTelephone = extractText(companyTelephone)
    }
    if ($$(medicalDirectLine).length > 0) {
        data.medicalDirectLine = extractText(medicalDirectLine)
    }
    if ($$(customerDirectLine).length > 0) {
        data.customerDirectLine = extractText(customerDirectLine)
    }
    if ($$(outOfHoursLine).length > 0) {
        data.outOfHoursLine = extractText(outOfHoursLine)
    }
    if ($$(companyAddress).length > 0) {
        data.companyAddress = extractText(companyAddress)
    }
    if ($$(www).length > 0) {
        data.www = extractText(www)
    }
    if ($$(stockAvailibilityPhone).length > 0) {
        data.stockAvailibilityPhone = extractText(stockAvailibilityPhone)
    }

    // data.companyInfo1 = extractText(".col-md-4");
    // data.companyInfo2 = extractText(".col-md-5");

    let path = './output/logos/' + extractText(companyName) + '.png';
    cucumberJson.attach(extractText(companyName), 'text/plain')
    cucumberJson.attach('company name is:', 'text/plain')
    $(imagepath).saveScreenshot(path)
    data.logofile = path;
    global.companyDetails.push(data);

    console.log(JSON.stringify(global.companyDetails))
    }else {
        console.log("No any company available.")
    }
}
