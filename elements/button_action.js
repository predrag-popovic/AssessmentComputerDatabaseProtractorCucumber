'use strict';
import base from '../elements/base';

const protractor = require('protractor');
const EC = protractor.ExpectedConditions;

var log4js = require('log4js');
var log = log4js.getLogger("base");

class button_action {

    constructor() {
        
        this.base_action = new base();
    }
    
    /**
     * Click on Element By Id
     * @param {protractor.ElementFinder} element - location of the element .
     */
    findElementByIdAndClick($element) {
        return this.base_action.findElementById($element).click()
        .then(() => log.info('Find element by Id:'+'('+$element +')'+'and click'));
    }

    /**
     * Click on Element By Css
     * @param {protractor.ElementFinder} element - location of the element .
     */
    findElementByCssAndClick($element) {
        return this.base_action.findElementByCss($element).click()
        .then(() => log.info('Find element by Css:'+'('+$element +')'+'and click'));
    }

    /**
     * Click on Element By Xpath
     * @param {protractor.ElementFinder} element - location of the element .
     */
    findElementByXpathAndClick($element) {
        return this.base_action.findElementByXpath($element).click()
        .then(() => log.info('Find element by Xpath:'+'('+$element +')'+'and click'));
    }

    /**
     * Click on Element By LinkText
     * @param {protractor.ElementFinder} element - location of the element .
     */
    findElementByLinkTextAndClick($element) {
        return this.base_action.findElementByLinkText($element).click()
        .then(() => log.info('Find element by LinkText:'+'('+$element +')'+'and click'));
    }

    /**
     * Click on Element By TestHook
     * @param {protractor.ElementFinder} element - location of the element .
     */
    findElementByTestHookAndClick($element) {
        return this.base_action.findElementByTestHook($element).click()
        .then(() => log.info('Find element by TestHook:'+'('+$element +')'+'and click'));
    }

    /**
     * Click on Element By Name
     * @param {protractor.ElementFinder} element - location of the element .
     */
    findElementByNameAndClick($element) {
        return this.base_action.findElementByName($element).click()
        .then(() => log.info('Find element by Name:'+'('+$element +')'+'and click'));
    }

    /**
     * Click on Element By Class name
     * @param {protractor.ElementFinder} element - location of the element .
     */
    findElementByClassNameAndClick($element) {
        return this.base_action.findElementByClassName($element).click()
        .then(() => log.info('Find element by Class name:'+'('+$element +')'+'and click'));
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
