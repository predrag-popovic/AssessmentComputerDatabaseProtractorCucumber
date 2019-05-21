'use strict';
import { element, $ } from "protractor";
import Globals from '../support/Globals';
import base from '../elements/base';
import button from '../elements/button_action';
import input from '../elements/input_action';
import scroll from '../elements/scroll_action';
import wait from '../elements/wait_action';

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

class UpdateComputerPage {

    constructor(){

        this.base_action = new base();
        this.button_action = new button();
        this.input_action = new input();
        this.wait_action = new wait();
        this.scroll_action = new scroll();
    }

    /***
    * Element for button add new Computer
    */
    get $buttonAddNewComputer() {
        return this.base_action.findElementById(`${addNewComputer}`);
    }

    /***
    * Element for button create this computer
    */
    get $buttonCreateThisComputer() {
        return this.base_action.findElementByCss(`${createThisComputer}`);
    }

    /***
    * Element for field Computer name
    */
    get $fieldComputerName() {
        return this.base_action.findElementById(`${computerNameField}`);
    }

    /***
    * Element for field Introduced Date
    */
    get $fieldIntroducedDate() {
        return this.base_action.findElementById(`${introducedField}`);
    }

    /***
    * Element for field Discontinued Date
    */
    get $fieldDiscontinuedDate() {
        return this.base_action.findElementById(`${discontinuedField}`);
    }

    /***
    * Element for search field
    */
    get $searchfield() {
        return this.base_action.findElementById(`${searchField}`);
    }

    /***
    * Element for search button
    */
    get $buttonSearch() {
        return this.base_action.findElementById(`${filterByName}`);
    }

    /***
    * Element for Company field
    */
    get $openCompanyField() {
        return this.base_action.findElementById(`${companyField}`);
    }

    /***
    * List of computer
    */
    get $listOfComputer() {
        return this.base_action.findElementByLinkText(`${computerName}` + `${timeStampInMs}`);
    }

    /***
  * Actual result
  */
    get $actualResult() {
        return this.base_action.findElementByCss(`${validationFieldNotification}`);
    }

    /***
    * Click on add New Computer
    */
    clickOnAddNewComputer() {
        return this.wait_action.waitAndClick(this.$buttonAddNewComputer, 10000);
    }

    /***
    * Click on button create this computer
    */
    clickOnButtonCreateThisComputer() {
        return this.wait_action.waitAndClick(this.$buttonCreateThisComputer, 10000);
    }

    /***
    * Enter data in computer name field
    */
    enterComuterName(computerName) {
        return this.wait_action.waitAndType(this.$fieldComputerName, 10000, computerName + `${timeStampInMs}`);
    }

    /***
    * Enter data in Introduced Field
    */
    enterDateInIntroducedField(introducedData) {
        return this.wait_action.waitAndType(this.$fieldIntroducedDate, 10000, introducedData);
    }

    /***
    * Enter data in Discontinued Field
    */
    enterDateInDiscontinuedField(discontinuedDate) {
        return this.wait_action.waitAndType(this.$fieldDiscontinuedDate, 10000, discontinuedDate);
    }

    /***
    * Enter data in Search Field
    */
    enterDataInSearchField(string) {
        return this.wait_action.waitAndType(this.$searchfield, 10000, string + `${timeStampInMs}`);
    }

    /***
    * Click on button for Search
    */
    clickOnButtonSearch() {
        return this.wait_action.waitAndClick(this.$buttonSearch, 10000);
    }

    /***
    * Select one company from list
    */
    selectCompanyFromList() {
        return this.wait_action.waitAndClick(this.$openCompanyField, 10000)
            .then(() => this.$openCompanyField.$('[value="2"]').click());
    }

    /***
    * Click on Computer name that is on table in Dashboard
    */
    clickOnComputerNameFromList() {
        return this.wait_action.waitAndClick(this.$listOfComputer);
    }

    /***
    * Remove text from Computer name field
    */
    cleanDataFromComputerNameField() {
        return this.$fieldComputerName.clear();
    }

    /***
   * Get Actual resoult
   */
    getActualResult() {
        return this.$actualResult.getText();
    }
}

export default UpdateComputerPage;
