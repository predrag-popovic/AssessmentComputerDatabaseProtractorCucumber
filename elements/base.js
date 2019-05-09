'use strict';
const protractor = require('protractor');
const EC = protractor.ExpectedConditions;

module.exports = class base {

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
     * Wait element till enabled
     * @param {protractor.ElementFinder} element - location of the element .
     */
    waitTillEnabled($element) {
        return browser.wait($element.isEnabled);
    }

    /**
     * Wait element till visible
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} timeOut - set time for timeout.
     */
    waitTillVisible($element, timeOut = 20000) {
        return protractor.browser.wait(EC.visibilityOf($element), timeOut);
    }

    /**
     * Wait element till not be visible
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} timeOut - set time for timeout.
     */
    waitTillNotVisible($element, timeOut = 8000) {
        return protractor.browser.wait(EC.not(EC.visibilityOf($element)), timeOut);
    }

    /**
     * Wait element till gone
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} timeOut - set time for timeout.
     */
    waitTillGone($element, timeOut = 8000) {
        return protractor.browser.wait(EC.stalenessOf($element), timeOut);
    }

    /**
     * Wait element till is present
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} timeOut - set time for timeout.
     */
    waitTillPresent($element, timeout = 20000) {
        return protractor.browser.wait(EC.presenceOf($element), timeout);
    }

    /**
     * Wait element till is clickable
     * @param {protractor.ElementFinder} element - location of the element .
     */
    waitTillClickable($element) {
        return protractor.browser.wait(EC.visibilityOf($element), 40000).then(() => {
            return protractor.browser.wait(EC.elementToBeClickable($element), 8000);
        });
    }

    /**
     * Wait element until visible
     * @param {protractor.ElementFinder} element - location of the element .
     */
    waitUntilVisible($element) {
        browser.wait(EC.presenceOf($element), 1000)
            .catch(err => err);
        return $element;
    }

    /**
     * Wait element and click
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} timeOut - set time for timeout.
     */
    waitAndClick($element, timeOut) {
        return this.waitTillVisible($element, timeOut).then(() => $element.click());
    }

    /**
     * Wait element and type
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} timeOut - set time for timeout.
     * @param {string} string - set test data that we want to enter.
     */
    waitAndType($element, timeOut, string) {

        return this.waitTillVisible($element, timeOut).then(() => $element.sendKeys(string));
    }

    /**
     * Wait element for alert
     * @param {string} timeOut - set time for timeout.
     */
    waitForAlert(timeOut = 10000) {
        return protractor.browser.wait(EC.alertIsPresent(), timeOut);
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
     * Scroll and click
     * @param {protractor.ElementFinder} element - location of the element .
     */
    scrollAndClick($element) {
        return this.scrollToElement($element).then(() => this.clickAfterClickable($element));
    }

    /**
     * Is Text present
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} textToBePresent - set text to be check.
     */
    isTextPresent($element, textToBePresent) {
        return $element.getText().then((text) => text === textToBePresent);
    }

    /**
     * Is Editable
     * @param {protractor.ElementFinder} element - location of the element .
     */
    isEditable($element) {
        return $element.sendKeys('')
            .then(() => false, err => err.message.indexOf('cannot focus element') > -1);
    }

    /**
     * Double click on element
     * @param {protractor.ElementFinder} element - location of the element .
     */
    doubleClick($element) {
        return browser.actions().doubleClick($element).perform();
    }

    /**
     * Clear and type
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} text - set test data that we want to enter.
     */
    clearAndType($element, text) {
        return $element.clear().then(() => $element.sendKeys(text));
    }

    moveMouse(elem, x, y) {
        return browser.actions().mouseMove(elem, {
            x,
            y
        }).perform();
    }
};
