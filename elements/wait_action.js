'use strict';
const protractor = require('protractor');
const EC = protractor.ExpectedConditions;

var log4js = require('log4js');
var log = log4js.getLogger("base");

class wait_action {

    constructor() {

    }

    /**
     * Wait element till enabled
     * @param {protractor.ElementFinder} element - location of the element .
     */
    waitTillEnabled($element) {
        log.info('Wait element till enabled:'+ $element);
        return browser.wait($element.isEnabled);
    }

    /**
     * Wait element till visible
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} timeOut - set time for timeout.
     */
    waitTillVisible($element, timeOut = 20000) {
        log.info('Wait element till visible:'+ $element);
        return protractor.browser.wait(EC.visibilityOf($element), timeOut);
    }

    /**
     * Wait element till not be visible
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} timeOut - set time for timeout.
     */
    waitTillNotVisible($element, timeOut = 8000) {
        log.info('Wait element till not visible:'+ $element);
        return protractor.browser.wait(EC.not(EC.visibilityOf($element)), timeOut);
    }

    /**
     * Wait element till gone
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} timeOut - set time for timeout.
     */
    waitTillGone($element, timeOut = 8000) {
        log.info('Wait element till gone:'+ $element);
        return protractor.browser.wait(EC.stalenessOf($element), timeOut);
    }

    /**
     * Wait element till is present
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} timeOut - set time for timeout.
     */
    waitTillPresent($element, timeout = 20000) {
        log.info('Wait element till present:'+ $element);
        return protractor.browser.wait(EC.presenceOf($element), timeout);
    }

    /**
     * Wait element till is clickable
     * @param {protractor.ElementFinder} element - location of the element .
     */
    waitTillClickable($element) {
        log.info('Wait element till clickable:'+ $element);
        return protractor.browser.wait(EC.visibilityOf($element), 40000).then(() => {
            return protractor.browser.wait(EC.elementToBeClickable($element), 8000);
        });
    }

    /**
     * Wait element until visible
     * @param {protractor.ElementFinder} element - location of the element .
     */
    waitUntilVisible($element) {
        log.info('Wait element until visible:'+ $element);
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
        log.info('Wait element and click'+ $element + 'waiting time:' + timeOut);
        return this.waitTillVisible($element, timeOut).then(() => $element.click());
    }

    /**
     * Wait element and type
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} timeOut - set time for timeout.
     * @param {string} string - set test data that we want to enter.
     */
    waitAndType($element, timeOut, string) {
        log.info('Wait element and type'+ $element + 'waiting time:' + timeOut + 'text:' + string);
        return this.waitTillVisible($element, timeOut).then(() => $element.sendKeys(string));
    }

    /**
     * Wait element for alert
     * @param {string} timeOut - set time for timeout.
     */
    waitForAlert(timeOut = 10000) {
        return protractor.browser.wait(EC.alertIsPresent(), timeOut);
    }
}

export default wait_action;
