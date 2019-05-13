'use strict';
import base from '../elements/base';

const protractor = require('protractor');
const EC = protractor.ExpectedConditions;

class input_action {

    constructor(){
        
        this.base_action = new base();
    }

    /**
     * Find Element By Id and SendKeys
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} text - set test data that we want to enter.
     */
    findElementByIdAndSendKeys($element, text) {
        return this.base_action.findElementById($element).sendKeys(text);
    }

    /**
     * Find Element By Css and SendKeys
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} text - set test data that we want to enter.
     */
    findElementByCssAndSendKeys($element, text) {
        return this.base_action.findElementByCss($element).sendKeys(text);
    }

    /**
     * Find Element By Xpath and SendKeys
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} text - set test data that we want to enter.
     */
    findElementByXpathAndSendKeys($element, text) {
        return this.base_action.findElementByXpath($element).sendKeys(text);
    }

    /**
     * Find Element By LinkText and SendKeys
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} text - set test data that we want to enter.
     */
    findElementByLinkTextAndSendKeys($element, text) {
        return this.base_action.findElementByLinkText($element).sendKeys(text);
    }

    /**
     * Find Element By Test Hook and SendKeys
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} text - set test data that we want to enter.
     */
    findElementByTestHookAndSendKeys($element, text) {
        return this.base_action.findElementByTestHook($element).sendKeys(text);
    }

    /**
     * Find Element By Name and SendKeys
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} text - set test data that we want to enter.
     */
    findElementByNameAndSendKeys($element, text) {
        return this.base_action.findElementByName($element).sendKeys(text);
    }

    /**
     * Find Element By Class Name and SendKeys
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} text - set test data that we want to enter.
     */
    findElementByClassNameAndSendKeys($element, text) {
        return this.base_action.findElementByClassName($element).sendKeys(text);
    }

    /**
     * Find Element By Id and Clear before SendKeys
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} text - set test data that we want to enter.
     */
    findElementByIdAndClearBeforeSendKeys($element, text) {
        return this.base_action.findElementById($element).clear().then(() => this.base_action.findElementById($element).sendKeys(text));
    }

    /**
     * Find Element By Css and Clear before SendKeys
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} text - set test data that we want to enter.
     */
    findElementByCssAndClearBeforeSendKeys($element, text) {
        return this.base_action.findElementByCss($element).clear().then(() => this.base_action.findElementByCss($element).sendKeys(text));
    }

    /**
     * Find Element By Xpath and Clear before SendKeys
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} text - set test data that we want to enter.
     */
    findElementByXpathAndClearBeforeSendKeys($element, text) {
        return this.base_action.findElementByXpath($element).clear().then(() => this.base_action.findElementByXpath($element).sendKeys(text));
    }

    /**
     * Find Element By Link Text and Clear before SendKeys
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} text - set test data that we want to enter.
     */
    findElementByLinkTextAndClearBeforeSendKeys($element, text) {
        return this.base_action.findElementByLinkText($element).clear().then(() => this.base_action.findElementByLinkText($element).sendKeys(text));
    }

    /**
     * Find Element By Test Hook and Clear before SendKeys
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} text - set test data that we want to enter.
     */
    findElementByTestHookAndClearBeforeSendKeys($element, text) {
        return this.base_action.findElementByTestHook($element).clear().then(() => this.base_action.findElementByTestHook($element).sendKeys(text));
    }

    /**
     * Find Element By Name and Clear before SendKeys
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} text - set test data that we want to enter.
     */
    findElementByNameAndClearBeforeSendKeys($element, text) {
        return this.base_action.findElementByName($element).clear().then(() => this.base_action.findElementByName($element).sendKeys(text));
    }

    /**
     * Find Element By Class Name and Clear before SendKeys
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} text - set test data that we want to enter.
     */
    findElementByClassNameAndClearBeforeSendKeys($element, text) {
        return this.base_action.findElementByClassName($element).clear().then(() => this.base_action.findElementByClassName($element).sendKeys(text));
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
