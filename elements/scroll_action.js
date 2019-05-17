'use strict';
const protractor = require('protractor');
const EC = protractor.ExpectedConditions;

var log4js = require('log4js');
var log = log4js.getLogger("base");

class scroll_action {

    constructor() {

    }

    /**
     * Scroll element to bottom view
     * @param {protractor.ElementFinder} element - location of the element .
     */
    scrollElementToBottomVIew($element) {
        log.info('Scroll element to botton view'+ $element);
        return protractor.browser.executeScript('arguments[0].scrollElemToBottomOfView();', $element);
    }

    /**
     * Scroll element to element
     * @param {protractor.ElementFinder} element - location of the element .
     */
    scrollToElement($element) {
        log.info('Scroll element'+ $element);
        return protractor.browser.executeScript('arguments[0].scrollIntoView(false);', $element);
    }

    /**
     * Scroll and click
     * @param {protractor.ElementFinder} element - location of the element .
     */
    scrollAndClick($element) {
        log.info('Scroll and click on element'+ $element);
        return this.scrollToElement($element).then(() => this.clickAfterClickable($element));
    }
}

export default scroll_action;
