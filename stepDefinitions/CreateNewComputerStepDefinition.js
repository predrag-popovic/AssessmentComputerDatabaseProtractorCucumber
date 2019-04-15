"use strict";
import CreateNewComputerPage from '../pages/CreateNewComputerPage';
import Globals from '../support/Globals';
//import { browser } from 'protractor';
import { When, Then, Given } from "cucumber";

var {setDefaultTimeout} = require('cucumber');

const conf = require("../config/protractor.config").config;

// Chai
const globals = new Globals();
const expect = globals.expect;

// CreateNewComputer page instance
const createNew = new CreateNewComputerPage();

//Defining Expected Result
var expectResult = "Computer name";

Given(/^Open computer database page$/, function () {

    return browser.get(conf.baseUrl);
});

Then(/^Click on button for add new computer$/, function () {

    return createNew.clickOnAddNewComputer();
});

When(/^Leave all fields empty and click on button create this computer$/, function () {

    return createNew.clickOnButtonCreateThisComputer();
});

Then(/^Verify that User will not create new computer and validation notification will activate on computer name$/, function () {

    return expect(createNew.getActualResult()).to.eventually.equal(`${expectResult}`);
});

When(/^Enter data only for field Introduced date "([^"]*)"$/, function (string) {

    return createNew.enterDataInIntroducedDateFiel(string);
});

When(/^Enter data only for field Discontinued date "([^"]*)"$/, function (string) {

    return createNew.enterDataInDiscontinuedDateField(string);
});

Then(/^Click on button create this computer$/, function () {

    return createNew.clickOnButtonCreateThisComputer();
});