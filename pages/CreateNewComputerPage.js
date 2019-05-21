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

class CreateNewComputerPage {

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
    * Element for data in Introduced Date Field
    */
    get $dataInIntroducedDateField() {
        return this.base_action.findElementById(`${introducedField}`);
    }

    /***
   * Element for data in Discontinued Date Field
   */
    get $dataInDiscontinuedDateField() {
        return this.base_action.findElementById(`${discontinuedField}`);
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
        return this.wait_action.waitElementByCssAndClick(`${createThisComputer}`);
    }

    /***
    * Enter data in Introduced Date Field
    */
    enterDataInIntroducedDateFiel(string) {
        return this.wait_action.waitElementByIdAndType(`${introducedField}`, 10000, string);
    }

    /***
    * Enter Data In Discontinued Date Field
    */
    enterDataInDiscontinuedDateField(string) {
        return this.wait_action.waitAndType(this.$dataInDiscontinuedDateField, 10000, string);
    }

    /***
    * Get Actual resoult
    */
    getActualResult() {
        return this.$actualResult.getText();
    }
}

export default CreateNewComputerPage;
