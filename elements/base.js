'use strict';
const protractor = require('protractor');
const EC = protractor.ExpectedConditions;

class base {

    constructor(){

    }

    /**
     * Find element by Id
     * @param {protractor.ElementFinder} element - location of the element .
     */
    findElementById($element) {
        return element(by.id($element));
    }

    /**
     * Find element by cssSelector
     * @param {protractor.ElementFinder} element - location of the element .
     */
    findElementByCss($element) {
        return element(by.css($element));
    }

    /**
     * Find element by Link text
     * @param {protractor.ElementFinder} element - location of the element .
     */
    findElementByLinkText($element) {
        return element(by.linkText($element));
    }

    /**
     * Find element by Xpath
     * @param {protractor.ElementFinder} element - location of the element .
     */
    findElementByXpath($element) {
        return element(by.xpath($element));
    }

    /**
     * Find element by Name
     * @param {protractor.ElementFinder} element - location of the element .
     */
    findElementByName($element) {
        return element(by.name($element));
    }

    /**
     * Find element by Class name
     * @param {protractor.ElementFinder} element - location of the element .
     */
    findElementByClassName($element) {
        return element(by.className($element));
    }

    /**
     * Find element by Test hook
     * @param {protractor.ElementFinder} element - location of the element .
     */
    findElementByTestHook($element) {
        return element(by.testHook($element));
    }

    /**
     * Element is visible
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} timeOut - set time for timeout.
     */
    isVisible($element, timeOut = 20000) {
        return this.waitTillVisible($element, timeOut).then(() => {
            return true;
        }, () => {
            return false;
        });
    }

    /**
     * Element is present
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} timeOut - set time for timeout.
     */
    isPresent($element, timeOut = 20000) {
        return this.waitTillPresent($element, timeOut).then(() => {
            return true;
        }, () => {
            return false;
        });
    }

    /**
     * Element is not present
     * @param {protractor.ElementFinder} element - location of the element .
     */
    isNotPresent($element) {
        try {
            this.waitTillGone($element);
            return true;
        } catch (error) {
            return false;
        }
    }

    /**
     * Element is alert present
     * @param {string} timeOut - set time for timeout.
     */
    isAlertPresent(timeOut = 10000) {
        return this.waitForAlert(timeOut).then(() => {
            return true;
        }, () => {
            return false;
        });
    }

    /**
     * Is Text present
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} textToBePresent - set text to be check.
     */
    isTextPresent($element, textToBePresent) {
        return $element.getText().then((text) => text === textToBePresent);
    }

    moveMouse(elem, x, y) {
        return browser.actions().mouseMove(elem, {
            x,
            y
        }).perform();
    }
};

export default base;
