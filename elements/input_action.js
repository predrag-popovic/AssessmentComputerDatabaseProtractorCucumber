'use strict';
const protractor = require('protractor');
const EC = protractor.ExpectedConditions;

class input_action {

    constructor(){

    }

    /**
     * Type
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} text - set test data that we want to enter.
     */
    clearAndType($element, text) {
        return $element.sendKeys(text);
    }

    /**
     * Clear and type
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} text - set test data that we want to enter.
     */
    clearAndType($element, text) {
        return $element.clear().then(() => $element.sendKeys(text));
    }

    /**
     * Is Editable
     * @param {protractor.ElementFinder} element - location of the element .
     */
    isEditable($element) {
        return $element.sendKeys('')
            .then(() => false, err => err.message.indexOf('cannot focus element') > -1);
    }
}

export default input_action;