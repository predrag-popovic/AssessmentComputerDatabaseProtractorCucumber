'use strict';
const protractor = require('protractor');
const EC = protractor.ExpectedConditions;

class scroll_action {

    constructor() {

    }

    /**
     * Scroll element to bottom view
     * @param {protractor.ElementFinder} element - location of the element .
     */
    scrollElementToBottomVIew($element) {
        return protractor.browser.executeScript('arguments[0].scrollElemToBottomOfView();', $element);
    }

    /**
     * Scroll element to element
     * @param {protractor.ElementFinder} element - location of the element .
     */
    scrollToElement($element) {
        return protractor.browser.executeScript('arguments[0].scrollIntoView(false);', $element);
    }

    /**
     * Scroll and click
     * @param {protractor.ElementFinder} element - location of the element .
     */
    scrollAndClick($element) {
        return this.scrollToElement($element).then(() => this.clickAfterClickable($element));
    }
}

export default scroll_action;