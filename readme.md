# Automation Framework

<p>
<i><strong>This framework example using JS programming language with integrated Cucumber framework and Protractor.
Automatic test used Selenium WebDriver (Chrome, Firefox, Edge, Safari) for executing tests and also this
framework have support for Selenium Grid.</strong></i>
</p>

---


### Features

* Choose your Browser where you want to run your tests on local machine or using HUB and NODES
* Writing a test case using Gherkin syntax
* Generate two Report after test is finish 

You can also:

* Get Screenshot if test is failed

### Tech

Automation Basic Framework in order to work properly uses a number of dependencie:

* [NodeJS](https://nodejs.org/en/) - As an asynchronous event driven JavaScript runtime, Node is designed to build scalable network applications.
* [Protractor](https://www.protractortest.org/) - Protractor is an end-to-end test framework for Angular and AngularJS applications. Protractor runs tests against your application running in a real browser, interacting with it as a user would.
* [Cucumber](https://docs.cucumber.io/) - Behaviour-Driven Development (BDD).
* [Selenium](https://www.seleniumhq.org/download/) - Selenium has the support of some of the largest browser
* [Selenium Grid](https://www.seleniumhq.org/docs/07_selenium_grid.jsp) - Selenium-Grid allows you run your tests on different machines against different browsers in parallel.

# To Get Started

## Installation

#### Pre-requisites
1.NodeJS installed globally in the system.
https://nodejs.org/en/download/

**Note** Min node version 6.9.x

2.Chrome or Firefox browsers installed.

3.Text Editor(Optional) installed-->Sublime/Visual Studio Code.

## Run Scripts
* Clone the repository into a folder
* Go inside the folder and run following command from terminal/command prompt which would then install all the dependencies from package.json

```
npm install
```

* Then first step is to fire up the selenium server which could be done in many ways,  **webdriver-manager** proves very handy for this.The below command should download the **chrome & gecko driver** binaries locally for you!

```sh
webdriver-manager update
```

* Then you should start your selenium server!

```sh
webdriver-manager start
```

* You can force webdriver-manager to use an older version of the selenium-standalone package.

```sh
webdriver-manager clean
webdriver-manager update --standalone --versions.standalone=3.141.59
webdriver-manager start --versions.standalone=3.141.59
```

* Leave the server running while you conduct your test sessions.

* In your config file, set seleniumAddress to the address of the running server. This defaults to http://localhost:4444/wd/hub.

* Or you can update your Selenium webdriver for e.g. like this:

```sh
webdriver-manager update --versions.chrome=2.46
```

* Following command will launch the chrome browser and run the scripts

```
npm test
```

## Writing Features

``` 
Feature: To search allure reports in google
    @AllureScenario
    Scenario: Allure Reports Google
        Given I am on google page
        When I type "allure reports"
        Then I click search button
        Then I clear search textbox
```

## Writing Step Definitions

```
"use strict";
"use strict";
const search = require("../pages/searchPage");
const { Given } = require("cucumber");

  Given(/^I am on google page$/, function() {
    return expect(browser.getTitle()).to.eventually.equal("Google");
  });
```

## Writing Page Objects

```
function googleSearch() {
  this.searchTextBox = $("#lst-ib");
  this.searchButton = $("input[value='Google Search']");
}
module.exports = new googleSearch();
```

## Cucumber Hooks
Following method takes screenshot on failure of each scenario

```     
     
After(function(scenario) {
    if (scenario.result.status === Status.FAILED) {
    const attach = this.attach; // cucumber's world object has attach function which should be used
        return browser.takeScreenshot().then(function(png) {
        const decodedImage = new Buffer(png, "base64");
        return attach(decodedImage, "image/png");
    });
}
       
```

## CucumberOpts Tags
Following configuration shows to call specific tags from feature files

```     
cucumberOpts: {
    strict: true,
    format: 'json:./reports/json/cucumber_report.json',
    require: ["../stepDefinitions/*.js", "../support/*.js"],
    tags: "@RegressionTest or @SmokeTest",
}
```

## Create Log file using Log4js
This is a conversion of the log4js framework to work with node. I started out just stripping out the browser-specific code and tidying up some of the javascript to work better in node. It grew from there. Although it's got a similar name to the Java library log4j, thinking that it will behave the same way will only bring you sorrow and confusion.

### Instalation
```
npm install log4js
```

We must create in config folder Json file in order to configure log4js:
```
{
  "appenders": {
    "access": {
      "type": "dateFile",
      "filename": "log/access.log",
      "pattern": "-yyyy-MM-dd",
      "category": "http"
    },
    "app": {
      "type": "file",
      "filename": "log/app.log",
      "maxLogSize": 10485760,
      "numBackups": 1
    },
    "errorFile": {
      "type": "file",
      "filename": "log/errors.log"
    },
    "errors": {
      "type": "logLevelFilter",
      "level": "ERROR",
      "appender": "errorFile"
    }
  },
  "categories": {
    "default": { "appenders": [ "app", "errors", "access" ], "level": "INFO" },
    "http": { "appenders": [ "access"], "level": "INFO" }
  }
}
```

and call log4js in any class that you want to use

```
var log4js = require('log4js');
var log = log4js.getLogger("base");
```

## Cucumber HTML Reports
Currently this project has been integrated with two types of cucumber HTML reports just for demo, which are generated when you run `npm test` in the `reports` folder.
They can be customized according to user's specific needs-
* [cucumber-html-reporter](https://github.com/gkushang/cucumber-html-reporter)
* [cucumber-html-report](https://github.com/leinonen/cucumber-html-report)

![cucumberreporterscreen](https://raw.githubusercontent.com/predrag-popovic/AssessmentComputerDatabaseProtractorCucumber/master/images/cucumberReporter.PNG)
![cucumberreportscreen](https://raw.githubusercontent.com/predrag-popovic/AssessmentComputerDatabaseProtractorCucumber/master/images/cucumberReport.png)

## Multiple Cucumber Html reporter

Multiple Cucumber HTML Reporter is a reporting module for Cucumber to parse the JSON output to a beautiful report. The difference between all the other reporting modules on the market is that this module has:

* a quick overview of all tested features and scenarios
* a features overview that can hold multiple runs of the same feature / runs of the same feature on different browsers / devices
* a features overview that can be searched / filtered / sorted
* a feature(s) overview with metadata of the used browser(s) / devices

We must define this report in protractor.conf.js
```sh
plugins: [{
    package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
    options: {
      automaticallyGenerateReport: true,
      removeExistingJsonReportFile: true,
      removeOriginalJsonReportFile: true,
      openReportInBrowser: true,
      metadataKey: true,
      reportName: 'CucumberJS Report',
      pageFooter: '<div><p>Created by Predrag popovic</p></div>',
      pageTitle: 'Cucumber JS with Protractor Report',
      customData: {
        title: 'Execution info',
        data: [
          { label: 'Project', value: 'Custom project' },
          { label: 'Release', value: '1.2.3' },
          { label: 'Cycle', value: 'B11221.34321' },
          { label: 'Execution Start Time', value: 'Nov 19th 2017, 02:31 PM EST' },
          { label: 'Execution End Time', value: 'Nov 19th 2017, 02:56 PM EST' }
        ],
        metadata: [
          {name: 'Environment v.', value: '12.3'},
          {name: 'Plugin v.', value: '32.1'},
          {name: 'Variable set', value: 'Foo'}
      ],
      },
      displayDuration:true
    }
  }],
  ```

![cucumberreporterscreen](https://raw.githubusercontent.com/predrag-popovic/AssessmentComputerDatabaseProtractorCucumber/master/images/multipleCucumberHtmlReporter1.png)
---
![cucumberreporterscreen](https://raw.githubusercontent.com/predrag-popovic/AssessmentComputerDatabaseProtractorCucumber/master/images/multipleCucumberHtmlReporter2.png)

## Contributions
For contributors who want to improve this repo by contributing some code, reporting bugs, issues or improving documentation - PR's are highly welcome, please maintain the coding style , folder structure , detailed description of documentation and bugs/issues with examples if possible.
