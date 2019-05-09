'use strict';
const protractor = require('protractor');
const EC = protractor.ExpectedConditions;

class button_action {

    constructor() {

    }

    /**
     * Click on Element after enabled
     * @param {protractor.ElementFinder} element - location of the element .
     */
    clickAfterEnabled($element) {
        return this.waitTillEnabled($element).then(() => $element.click());
    }

    /**
     * Click on Element after clickable
     * @param {protractor.ElementFinder} element - location of the element .
     */
    clickAfterClickable($element) {
        return this.waitTillClickable($element).then(() => $element.click());
    }

    /**
     * Click on Element after visible
     * @param {protractor.ElementFinder} element - location of the element .
     */
    clickAfterVisible($element) {
        return this.waitTillVisible($element).then(() => $element.click());
    }

    /**
     * Click on Element after visible
     * @param {protractor.ElementFinder} element - location of the element .
     */
    clickAfterPresent($element) {
        return this.waitTillPresent($element).then(() => $element.click());
    }

    /**
     * Double click on element
     * @param {protractor.ElementFinder} element - location of the element .
     */
    doubleClick($element) {
        return browser.actions().doubleClick($element).perform();
    }
}

export default button_action;