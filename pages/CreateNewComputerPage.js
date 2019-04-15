'use strict';
import { element, $ } from "protractor";
import Globals from '../support/Globals';
import base from '../elements/base';
import { get } from "http";
import { basename } from "path";

// Chai
const globals = new Globals();
const expect = globals.expect;

//Defining locators

var addNewComputer = "add";
var computerNameField = "name";
var introducedField = "introduced";
var discontinuedField = "discontinued";
var companyField = "company";
var createThisComputer = "input.btn.primary";
var validationFieldNotification = "div.clearfix.error > label";
var searchField = "searchbox";
var filterByName = "searchsubmit";

class CreateNewComputerPage extends base {

    constructor() {
        super('elements/base');
    }

    /***
    * Element for button add new Computer
    */
    get $buttonAddNewComputer() {
        return element(by.id(`${addNewComputer}`));
    }

    /***
    * Element for button create this computer
    */
    get $buttonCreateThisComputer() {
        return element(by.css(`${createThisComputer}`));;
    }

    /***
    * Element for data in Introduced Date Field
    */
    get $dataInIntroducedDateField() {
        return element(by.id(`${introducedField}`));
    }

    /***
   * Element for data in Discontinued Date Field
   */
    get $dataInDiscontinuedDateField() {
        return element(by.id(`${discontinuedField}`));
    }

    /***
   * Actual result
   */
    get $actualResult() {
        return element(by.css(`${validationFieldNotification}`));
    }

    /***
    * Click on add New Computer
    */
    clickOnAddNewComputer() {
        return this.waitAndClick(this.$buttonAddNewComputer, 10000);
    }

    /***
    * Click on button create this computer
    */
    clickOnButtonCreateThisComputer() {
        return this.waitAndClick(this.$buttonCreateThisComputer, 10000);
    }

    /***
    * Enter data in Introduced Date Field
    */
    enterDataInIntroducedDateFiel(string) {
        return this.waitAndType(this.$dataInIntroducedDateField, 10000, string);
    }

    /***
    * Enter Data In Discontinued Date Field
    */
    enterDataInDiscontinuedDateField(string) {
        return this.waitAndType(this.$dataInDiscontinuedDateField, 10000, string);
    }

    /***
    * Get Actual resoult
    */
    getActualResult() {
        return this.$actualResult.getText();
    }
}

export default CreateNewComputerPage;