'use strict';
const protractor = require('protractor');
const EC = protractor.ExpectedConditions;

var log4js = require('log4js');
var log = log4js.getLogger("base");

class input_action {

    constructor(){

    }

    /**
     * Type
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} text - set test data that we want to enter.
     */
    Type($element, text) {
        log.info('Find element:'+ $element + 'and type data:' + text);
        return $element.sendKeys(text);
    }

    /**
     * Clear and type
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} text - set test data that we want to enter.
     */
    clearAndType($element, text) {
        log.info('Clean data for element:'+ $element + 'and type:' + text);
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
