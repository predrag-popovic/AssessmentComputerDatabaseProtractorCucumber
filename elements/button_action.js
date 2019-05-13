'use strict';
import base from '../elements/base';

const protractor = require('protractor');
const EC = protractor.ExpectedConditions;

class button_action {

    constructor() {
        
        this.base_action = new base();
    }
    
    /**
     * Click on Element by Id
     * @param {protractor.ElementFinder} element - location of the element .
     */
    findElementByIdAndClick($element){
        return this.base_action.findElementById($element).click();
    }

    /**
     * Click on Element by Css
     * @param {protractor.ElementFinder} element - location of the element .
     */
    findElementByCssAndClick($element){
        return this.base_action.findElementByCss($element).click();
    }

    /**
     * Click on Element by Xpath
     * @param {protractor.ElementFinder} element - location of the element .
     */
    findElementByXpathAndClick($element){
        return this.base_action.findElementByXpath($element).click();
    }

    /**
     * Click on Element by LinkText
     * @param {protractor.ElementFinder} element - location of the element .
     */
    findElementByLinkTextAndClick($element){
        return this.base_action.findElementByLinkText($element).click();
    }

    /**
     * Click on Element by Test Hook
     * @param {protractor.ElementFinder} element - location of the element .
     */
    findElementByTestHookAndClick($element){
        return this.base_action.findElementByTestHook($element).click();
    }

    /**
     * Click on Element by Name
     * @param {protractor.ElementFinder} element - location of the element .
     */
    findElementByNameAndClick($element){
        return this.base_action.findElementByName($element).click();
    }

    /**
     * Click on Element by Class name
     * @param {protractor.ElementFinder} element - location of the element .
     */
    findElementByClassNameAndClick($element){
        return this.base_action.findElementByClassName($element).click();
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
