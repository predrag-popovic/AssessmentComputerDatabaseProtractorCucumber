'use strict';
import base from '../elements/base';

const protractor = require('protractor');
const EC = protractor.ExpectedConditions;

var log4js = require('log4js');
var log = log4js.getLogger("base");

class input_action {

    constructor(){
        
        this.base_action = new base();
    }
    
    /**
     * Enter data for Element by Id
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} text - set test data that we want to enter.
     */
    findElementByIdAndSendKeys($element, text) {

        return this.base_action.findElementById($element).sendKeys(text)
        .then(() => log.info('Find element by Id:'+'('+ $element +')'+'and type data:' + '(' + text + ')'));
    }

    /**
     * Enter data for Element by Css 
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} text - set test data that we want to enter.
     */
    findElementByCssAndSendKeys($element, text) {

        return this.base_action.findElementByCss($element).sendKeys(text)
        .then(() => log.info('Find element by Css:'+'('+ $element +')'+'and type data:' + '(' + text + ')'));
    }

    /**
     * Enter data for Element by Xpath 
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} text - set test data that we want to enter.
     */
    findElementByXpathAndSendKeys($element, text) {

        return this.base_action.findElementByXpath($element).sendKeys(text)
        .then(() => log.info('Find element by Xpath:'+'('+ $element +')'+'and type data:' + '(' + text + ')'));
    }

    /**
     * Enter data for Element by LinkText 
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} text - set test data that we want to enter.
     */
    findElementByLinkTextAndSendKeys($element, text) {

        return this.base_action.findElementByLinkText($element).sendKeys(text)
        .then(() => log.info('Find element by LinkText:'+'('+ $element +')'+'and type data:' + '(' + text + ')'));
    }

    /**
     * Enter data for Element by TestHook
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} text - set test data that we want to enter.
     */
    findElementByTestHookAndSendKeys($element, text) {

        return this.base_action.findElementByTestHook($element).sendKeys(text)
        .then(() => log.info('Find element by TestHook:'+'('+ $element +')'+'and type data:' + '(' + text + ')'));
    }

    /**
     * Enter data for Element by Name
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} text - set test data that we want to enter.
     */
    findElementByNameAndSendKeys($element, text) {

        return this.base_action.findElementByName($element).sendKeys(text)
        .then(() => log.info('Find element by Name:'+'('+ $element +')'+'and type data:' + '(' + text + ')'));
    }

     /**
     * Enter data for Element by Class Name
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} text - set test data that we want to enter.
     */
    findElementByClassNameAndSendKeys($element, text) {

        return this.base_action.findElementByClassName($element).sendKeys(text)
        .then(() => log.info('Find element by Class name:'+'('+ $element +')'+'and type data:' + '(' + text + ')'));
    }
    
    /**
     * Clean data for Element by Id
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} text - set test data that we want to enter.
     */
    findElementByIdAndClear($element) {

        return this.base_action.findElementById($element).clear()
        .then(() => log.info('Find element by Id:'+'('+ $element +')'+'and clear data'));
    }

    /**
     * Clean data for Element by Css
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} text - set test data that we want to enter.
     */
    findElementByCssAndClear($element) {

        return this.base_action.findElementByCss($element).clear()
        .then(() => log.info('Find element by Css:'+'('+ $element +')'+'and clear data'));
    }

    /**
     * Clean data for Element by Xpath
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} text - set test data that we want to enter.
     */
    findElementByXpathAndClear($element) {

        return this.base_action.findElementByXpath($element).clear()
        .then(() => log.info('Find element by Xpath:'+'('+ $element +')'+'and clear data'));
    }

    /**
     * Clean data for Element by LinkText
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} text - set test data that we want to enter.
     */
    findElementByLinkTexthAndClear($element) {

        return this.base_action.findElementByLinkText($element).clear()
        .then(() => log.info('Find element by LinkText:'+'('+ $element +')'+'and clear data'));
    }

    /**
     * Clean data for Element by TestHook
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} text - set test data that we want to enter.
     */
    findElementByTestHookAndClear($element) {

        return this.base_action.findElementByTestHook($element).clear()
        .then(() => log.info('Find element by TestHook:'+'('+ $element +')'+'and clear data'));
    }

    /**
     * Clean data for Element by Name
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} text - set test data that we want to enter.
     */
    findElementByNameAndClear($element) {

        return this.base_action.findElementByName($element).clear()
        .then(() => log.info('Find element by Name:'+'('+ $element +')'+'and clear data'));
    }

    /**
     * Clean data for Element by Class Name
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} text - set test data that we want to enter.
     */
    findElementByClassNameAndClear($element) {

        return this.base_action.findElementByClassName($element).clear()
        .then(() => log.info('Find element by Class Name:'+'('+ $element +')'+'and clear data'));
    }

    /**
     * Clean and enter data for Element by Id
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} text - set test data that we want to enter.
     */
    findElementByIdCleanAndSendKeys($element, text) {

        return this.base_action.findElementById($element).clear()
        .then(() => this.base_action.findElementById($element).sendKeys(text))
        .then(() => log.info('Find element by Id:'+'('+ $element +')'+'and type data:' + '(' + text + ')'));
    }

    /**
     * Clean and enter data for Element by Css
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} text - set test data that we want to enter.
     */
    findElementByCssCleanAndSendKeys($element, text) {

        return this.base_action.findElementByCss($element).clear()
        .then(() => this.base_action.findElementByCss($element).sendKeys(text))
        .then(() => log.info('Find element by Css:'+'('+ $element +')'+'and type data:' + '(' + text + ')'));
    }

    /**
     * Clean and enter data for Element by Xpath
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} text - set test data that we want to enter.
     */
    findElementByXpathCleanAndSendKeys($element, text) {

        return this.base_action.findElementByXpath($element).clear()
        .then(() => this.base_action.findElementByXpath($element).sendKeys(text))
        .then(() => log.info('Find element by Xpath:'+'('+ $element +')'+'and type data:' + '(' + text + ')'));
    }

    /**
     * Clean and enter data for Element by LinkText
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} text - set test data that we want to enter.
     */
    findElementByLinkTextCleanAndSendKeys($element, text) {

        return this.base_action.findElementByLinkText($element).clear()
        .then(() => this.base_action.findElementByLinkText($element).sendKeys(text))
        .then(() => log.info('Find element by LinkText:'+'('+ $element +')'+'and type data:' + '(' + text + ')'));
    }

    /**
     * Clean and enter data for Element by TestHook
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} text - set test data that we want to enter.
     */
    findElementByTestHookCleanAndSendKeys($element, text) {

        return this.base_action.findElementByTestHook($element).clear()
        .then(() => this.base_action.findElementByTestHook($element).sendKeys(text))
        .then(() => log.info('Find element by TestHook:'+'('+ $element +')'+'and type data:' + '(' + text + ')'));
    }

    /**
     * Clean and enter data for Element by Name
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} text - set test data that we want to enter.
     */
    findElementByTestHookCleanAndSendKeys($element, text) {

        return this.base_action.findElementByName($element).clear()
        .then(() => this.base_action.findElementByName($element).sendKeys(text))
        .then(() => log.info('Find element by Name:'+'('+ $element +')'+'and type data:' + '(' + text + ')'));
    }

    /**
     * Clean and enter data for Element by Class name
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} text - set test data that we want to enter.
     */
    findElementByClassNameCleanAndSendKeys($element, text) {

        return this.base_action.findElementByClassName($element).clear()
        .then(() => this.base_action.findElementByClassName($element).sendKeys(text))
        .then(() => log.info('Find element by Class Name:'+'('+ $element +')'+'and type data:' + '(' + text + ')'));
    }

    /**
     * Type
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} text - set test data that we want to enter.
     */
    Type($element, text) {
        log.info('Find element:'+ $element + 'and type data:' + text);
        return $element.sendKeys(text);
    }

    /**
     * Clear and type
     * @param {protractor.ElementFinder} element - location of the element .
     * @param {string} text - set test data that we want to enter.
     */
    clearAndType($element, text) {
        log.info('Clean data for element:'+ $element + 'and type:' + text);
        return $element.clear().then(() => $element.sendKeys(text));
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
