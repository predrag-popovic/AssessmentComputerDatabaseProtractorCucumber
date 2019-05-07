"use strict";
import UpdateComputerPage from '../pages/UpdateComputerPage';
import Globals from '../support/Globals';
//import { browser } from 'protractor';
import { When, Then, Given } from "cucumber";

var { setDefaultTimeout } = require('cucumber');

const conf = require("../config/protractor.config").config;

// Chai
const globals = new Globals();
const expect = globals.expect;

// CreateNewComputer page instance
const updateComputer = new UpdateComputerPage();

/***
* Defining Test data
*/
var computerName = "GeckoComputerTest";
var introducedData = "2017-12-10";
var discontinuedDate = "2016-11-15";
var company = "Netronics";
var changeComputerName = "GeckoUpdatedComputer";
var changeIntroducedData = "2016-05-05";
var changeDiscontinuedDate = "2014-11-05";
var changeCompany = "RCA";


/***
 * Defining Expected Result
 */
var validationForComputerName = "Computer name";
var validationForIntroducedDate = "Introduced date";
var validationForDiscontinuedDate = "Discontinued date";
var expectedResultFieldComputerName = "GeckoUpdatedComputer";
var expectedResultFieldIntroduced = "2016-05-05";
var expectedResultFieldDiscontinue = "2014-11-05";
var expectedResultFieldCompany = "RCA";


Then(/^Add new computer$/, function () {

    return updateComputer.enterComuterName(`${computerName}`)
        .then(() => updateComputer.enterDateInIntroducedField(`${introducedData}`))
        .then(() => updateComputer.enterDateInDiscontinuedField(`${discontinuedDate}`))
        .then(() => updateComputer.selectCompanyFromList())
        .then(() => updateComputer.clickOnButtonCreateThisComputer());

});

When(/^Select Computer and try to update with empty field for computer name$/, function () {

    return updateComputer.enterDataInSearchField(`${computerName}`)
        .then(() => updateComputer.clickOnButtonCreateThisComputer())
        .then(() => updateComputer.clickOnButtonSearch())
        .then(() => updateComputer.clickOnComputerNameFromList())
        .then(() => updateComputer.cleanDataFromComputerNameField())
        .then(() => updateComputer.clickOnButtonCreateThisComputer());

});

Then(/^Verify that User will not update computer data if he remove name and validation notification will activate on computer name$/, function () {

    return expect(updateComputer.getActualResult()).to.eventually.equal(`${validationForComputerName}`);
});


When(/^Select Computer and try to update with wrong format "([^"]*)" for Introduced date and try to save these changes$/, function (string) {

    return updateComputer.enterDataInSearchField(`${computerName}`)
        .then(() => updateComputer.clickOnButtonCreateThisComputer())
        .then(() => updateComputer.clickOnButtonSearch())
        .then(() => updateComputer.clickOnComputerNameFromList())
        .then(() => updateComputer.cleanDataFromFieldIntroducedDate())
        .then(() => updateComputer.enterDateInIntroducedField(string))
        .then(() => updateComputer.clickOnButtonCreateThisComputer());
});

Then(/^Verify that User will not update computer data if he remove name and validation notification will activate on Introduced date$/, function () {

    return expect(updateComputer.getActualResult()).to.eventually.equal(`${validationForIntroducedDate}`);
});


When(/^Select Computer and try to update with wrong format "([^"]*)" for Discontinued date$/, function (string) {

    return updateComputer.enterDataInSearchField(`${computerName}`)
        .then(() => updateComputer.clickOnButtonCreateThisComputer())
        .then(() => updateComputer.clickOnButtonSearch())
        .then(() => updateComputer.clickOnComputerNameFromList())
        .then(() => updateComputer.clearDataFromfieldDiscontinuedDate())
        .then(() => updateComputer.enterDateInDiscontinuedField(string))
        .then(() => updateComputer.clickOnButtonCreateThisComputer());

});

Then(/^Verify that User will not update computer data if he remove name and validation notification will activate on Discontinued Date$/, function () {

    return expect(updateComputer.getActualResult()).to.eventually.equal(`${validationForDiscontinuedDate}`);
});
