'use strict';
import { element, $ } from "protractor";
import Globals from '../support/Globals';
import base from '../elements/base';
import { get } from "http";
import { basename } from "path";

// Chai
const globals = new Globals();
const expect = globals.expect;

/***
* Get Current TimeStamp 
*/
var timeStampInMs = new Date().getTime();

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

/***
* Defining Test data
*/
var computerName = "GeckoComputerTest";

class UpdateComputerPage extends base {

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
        return element(by.css(`${createThisComputer}`));
    }

    /***
    * Element for field Computer name
    */
    get $fieldComputerName() {
        return element(by.id(`${computerNameField}`));
    }

    /***
    * Element for field Introduced Date
    */
    get $fieldIntroducedDate() {
        return element(by.id(`${introducedField}`));
    }

    /***
    * Element for field Discontinued Date
    */
    get $fieldDiscontinuedDate() {
        return element(by.id(`${discontinuedField}`));
    }

    /***
    * Element for search field
    */
    get $searchfield() {
        return element(by.id(`${searchField}`));
    }

    /***
    * Element for search button
    */
    get $buttonSearch() {
        return element(by.id(`${filterByName}`));
    }

    /***
    * Element for Company field
    */
    get $openCompanyField() {
        return element(by.id(`${companyField}`));
    }

    /***
    * List of computer
    */
    get $listOfComputer() {
        return element(by.linkText(`${computerName}` + `${timeStampInMs}`));
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
    * Enter data in computer name field
    */
    enterComuterName(computerName) {
        return this.waitAndType(this.$fieldComputerName, 10000, computerName + `${timeStampInMs}`);
    }

    /***
    * Enter data in Introduced Field
    */
    enterDateInIntroducedField(introducedData) {
        return this.waitAndType(this.$fieldIntroducedDate, 10000, introducedData);
    }

    /***
    * Enter data in Discontinued Field
    */
    enterDateInDiscontinuedField(discontinuedDate) {
        return this.waitAndType(this.$fieldDiscontinuedDate, 10000, discontinuedDate);
    }

    /***
    * Enter data in Search Field
    */
    enterDataInSearchField(string) {
        return this.waitAndType(this.$searchfield, 10000, string + `${timeStampInMs}`);
    }

    /***
    * Click on button for Search
    */
    clickOnButtonSearch() {
        return this.waitAndClick(this.$buttonSearch, 10000);
    }

    /***
    * Select one company from list
    */
    selectCompanyFromList() {
        return this.waitAndClick(this.$openCompanyField, 10000)
            .then(() => this.$openCompanyField.$('[value="2"]').click());
    }

    /***
    * Click on Computer name that is on table in Dashboard
    */
    clickOnComputerNameFromList() {
        return this.waitAndClick(this.$listOfComputer);
    }

    /***
    * Remove text from Computer name field
    */
    cleanDataFromComputerNameField() {
        return this.$fieldComputerName.clear();
    }

    /***
    * Remove text from Introduced Date field
    */
    cleanDataFromFieldIntroducedDate() {
        return this.$fieldIntroducedDate.clear();
    }

    /***
    * Remove text from Discontinued Date field
    */
    clearDataFromfieldDiscontinuedDate() {
        return this.$fieldDiscontinuedDate.clear();
    }

    /***
   * Get Actual resoult
   */
    getActualResult() {
        return this.$actualResult.getText();
    }
}

export default UpdateComputerPage;
