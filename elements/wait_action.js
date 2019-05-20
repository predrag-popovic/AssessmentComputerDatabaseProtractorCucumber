'use strict';
import base from '../elements/base';

const protractor = require('protractor');
const EC = protractor.ExpectedConditions;

var log4js = require('log4js');
var log = log4js.getLogger("base");

class wait_action {

    constructor() {
        
        this.base_action = new base();
    }
    
    /**
     * Wait element by Id to be clickable and click
     * @param {protractor.ElementFinder} element - location of the element .
     */
    waitElementByIdAndClick($element) {
        return protractor.browser.wait(EC.elementToBeClickable(this.base_action.findElementById($element)))
        .then(() => this.base_action.findElementById($element).click())
        .then(() => log.info('Wait element by Id:'+'('+$element +')'+'to be clickable and click'));
    }

    /**
     * Wait element by Css to be clickable and click
     * @param {protractor.ElementFinder} element - location of the element .
     */
    waitElementByCssAndClick($element) {
        return protractor.browser.wait(EC.elementToBeClickable(this.base_action.findElementByCss($element)))
        .then(() => this.base_action.findElementByCss($element).click())
        .then(() => log.info('Wait element by Css:'+'('+$element +')'+'to be clickable and click'));
    }

    /**
     * Wait element by Xpath to be clickable and click
     * @param {protractor.ElementFinder} element - location of the element .
     */
    waitElementByXpathAndClick($element) {
        return protractor.browser.wait(EC.elementToBeClickable(this.base_action.findElementByXpath($element)))
        .then(() => this.base_action.findElementByXpath($element).click())
        .then(() => log.info('Wait element by Xpath:'+'('+$element +')'+'to be clickable and click'));
    }

    /**
     * Wait element by LinkText to be clickable and click
     * @param {protractor.ElementFinder} element - location of the element .
     */
    waitElementByLinkTextpathAndClick($element) {
        return protractor.browser.wait(EC.elementToBeClickable(this.base_action.findElementByLinkText($element)))
        .then(() => this.base_action.findElementByLinkText($element).click())
        .then(() => log.info('Wait element by LinkText:'+'('+$element +')'+'to be clickable and click'));
    }

    /**
     * Wait element by TestHook to be clickable and click
     * @param {protractor.ElementFinder} element - location of the element .
     */
    waitElementByTestHookAndClick($element) {
        return protractor.browser.wait(EC.elementToBeClickable(this.base_action.findElementByTestHook($element)))
        .then(() => this.base_action.findElementByTestHook($element).click())
        .then(() => log.info('Wait element by TestHook:'+'('+$element +')'+'to be clickable and click'));
    }

    /**
     * Wait element by Name to be clickable and click
     * @param {protractor.ElementFinder} element - location of the element .
     */
    waitElementByNameAndClick($element) {
        return protractor.browser.wait(EC.elementToBeClickable(this.base_action.findElementByName($element)))
        .then(() => this.base_action.findElementByName($element).click())
        .then(() => log.info('Wait element by Name:'+'('+$element +')'+'to be clickable and click'));
    }

    /**
     * Wait element by Class Name to be clickable and click
     * @param {protractor.ElementFinder} element - location of the element .
     */
    waitElementByclassNameAndClick($element) {
        return protractor.browser.wait(EC.elementToBeClickable(this.base_action.findElementByClassName($element)))
        .then(() => this.base_action.findElementByClassName($element).click())
        .then(() => log.info('Wait element by Class name:'+'('+$element +')'+'to be clickable and click'));
    }
    
    /**
     * Wait element By Id and type
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} timeOut - set time for timeout.
     * @param {string} string - set test data that we want to enter.
     */
    waitElementByIdAndType($element, timeOut, string) {
        return this.waitTillVisible(this.base_action.findElementById($element), timeOut)
        .then(() => this.base_action.findElementById($element).sendKeys(string))
        .then(() => log.info('Wait element By Id:'+'('+ $element + ')' + 'waiting time:' + '(' + timeOut + ')' + 'and type text:' + '('+ string + ')'));
    }
    
    /**
     * Wait element By Css and type
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} timeOut - set time for timeout.
     * @param {string} string - set test data that we want to enter.
     */
    waitElementByCssAndType($element, timeOut, string) {
        return this.waitTillVisible(this.base_action.findElementByCss($element), timeOut)
        .then(() => this.base_action.findElementByCss($element).sendKeys(string))
        .then(() => log.info('Wait element By Css:'+'('+ $element + ')' + 'waiting time:' + '(' + timeOut + ')' + 'and type text:' + '('+ string + ')'));
    }
    
    /**
     * Wait element By Xpath and type
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} timeOut - set time for timeout.
     * @param {string} string - set test data that we want to enter.
     */
    waitElementByXpathAndType($element, timeOut, string) {
        return this.waitTillVisible(this.base_action.findElementByXpath($element), timeOut)
        .then(() => this.base_action.findElementByXpath($element).sendKeys(string))
        .then(() => log.info('Wait element By Xpath:'+'('+ $element + ')' + 'waiting time:' + '(' + timeOut + ')' + 'and type text:' + '('+ string + ')'));
    }
    
     /**
     * Wait element By LinkText and type
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} timeOut - set time for timeout.
     * @param {string} string - set test data that we want to enter.
     */
    waitElementByLinkTextAndType($element, timeOut, string) {
        return this.waitTillVisible(this.base_action.findElementByLinkText($element), timeOut)
        .then(() => this.base_action.findElementByLinkText($element).sendKeys(string))
        .then(() => log.info('Wait element By LinkText:'+'('+ $element + ')' + 'waiting time:' + '(' + timeOut + ')' + 'and type text:' + '('+ string + ')'));
    }
    
    /**
     * Wait element By TestHook and type
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} timeOut - set time for timeout.
     * @param {string} string - set test data that we want to enter.
     */
    waitElementByTestHookAndType($element, timeOut, string) {
        return this.waitTillVisible(this.base_action.findElementByTestHook($element), timeOut)
        .then(() => this.base_action.findElementByTestHook($element).sendKeys(string))
        .then(() => log.info('Wait element By TestHook:'+'('+ $element + ')' + 'waiting time:' + '(' + timeOut + ')' + 'and type text:' + '('+ string + ')'));
    }
    
    /**
     * Wait element By Name and type
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} timeOut - set time for timeout.
     * @param {string} string - set test data that we want to enter.
     */
    waitElementByNameAndType($element, timeOut, string) {
        return this.waitTillVisible(this.base_action.findElementByName($element), timeOut)
        .then(() => this.base_action.findElementByName($element).sendKeys(string))
        .then(() => log.info('Wait element By Name:'+'('+ $element + ')' + 'waiting time:' + '(' + timeOut + ')' + 'and type text:' + '('+ string + ')'));
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
