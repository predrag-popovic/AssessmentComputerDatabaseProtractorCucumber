'use strict';
const protractor = require('protractor');
const EC = protractor.ExpectedConditions;

var log4js = require('log4js');
var log = log4js.getLogger("base");

class button_action {

    constructor() {

    }

    /**
     * Click on Element after enabled
     * @param {protractor.ElementFinder} element - location of the element .
     */
    clickAfterEnabled($element) {
        log.info('Click on element after enabled:'+ $element);
        return this.waitTillEnabled($element).then(() => $element.click());
    }

    /**
     * Click on Element after clickable
     * @param {protractor.ElementFinder} element - location of the element .
     */
    clickAfterClickable($element) {
        log.info('Click on element after clickable:'+ $element);
        return this.waitTillClickable($element).then(() => $element.click());
    }

    /**
     * Click on Element after visible
     * @param {protractor.ElementFinder} element - location of the element .
     */
    clickAfterVisible($element) {
        log.info('Click on element after visible:'+ $element);
        return this.waitTillVisible($element).then(() => $element.click());
    }

    /**
     * Click on Element after visible
     * @param {protractor.ElementFinder} element - location of the element .
     */
    clickAfterPresent($element) {
        log.info('Click on element after present:'+ $element);
        return this.waitTillPresent($element).then(() => $element.click());
    }

    /**
     * Double click on element
     * @param {protractor.ElementFinder} element - location of the element .
     */
    doubleClick($element) {
        log.info('Double click on element:'+ $element);
        return browser.actions().doubleClick($element).perform();
    }
}

export default button_action;
