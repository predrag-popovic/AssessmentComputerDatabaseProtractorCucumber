<h3>Automation Framework</h3>

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

```
npm run webdriver-update
``` 

* Then you should start your selenium server!
```
npm run webdriver-start
```

* Following command will launch the chrome browser and run the scripts

```
npm test
```

#### Writing Features

``` 
Feature: To search allure reports in google
    @AllureScenario
    Scenario: Allure Reports Google
        Given I am on google page
        When I type "allure reports"
        Then I click search button
        Then I clear search textbox
```

#### Writing Step Definitions

```
"use strict";
"use strict";
const search = require("../pages/searchPage");
const { Given } = require("cucumber");

  Given(/^I am on google page$/, function() {
    return expect(browser.getTitle()).to.eventually.equal("Google");
  });
```

#### Writing Page Objects

```
function googleSearch() {
  this.searchTextBox = $("#lst-ib");
  this.searchButton = $("input[value='Google Search']");
}
module.exports = new googleSearch();
```

#### Cucumber Hooks
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

#### CucumberOpts Tags
Following configuration shows to call specific tags from feature files

```     
cucumberOpts: {
    strict: true,
    format: 'json:./reports/json/cucumber_report.json',
    require: ["../stepDefinitions/*.js", "../support/*.js"],
    tags: "(@AllureScenario or @CucumberScenario or @ProtractorScenario)"
}
```

#### Database
You need to install PostgreSQL nodejs modulewith this framework.

```
npm install -D pg
```

database feature file elaborates the connection and how the query results are retrieved.
 
```    
const pg = require('pg');
const connectDB = function() {
const conString = "postgres://username:password@localhost:5432/database_name";
this.client = new pg.Client(conString);
this.client.connect(function(err){
    if(err){
        return console.error('could not connect to postgres', err);
    }
    });
};
```

#### HTML Reports
Currently this project has been integrated with two types of cucumber HTML reports just for demo, which are generated when you run `npm test` in the `reports` folder.
They can be customized according to user's specific needs-
* [cucumber-html-reporter](https://github.com/gkushang/cucumber-html-reporter)
* [cucumber-html-report](https://github.com/leinonen/cucumber-html-report)

![cucumberreporterscreen](https://raw.githubusercontent.com/igniteram/protractor-cucumber-allure/master/images/cucumberReporter.PNG)
![cucumberreportscreen](https://raw.githubusercontent.com/igniteram/protractor-cucumber-allure/master/images/cucumberReport.png)

#### Allure Reports

##### Caveat

These reports do not support latest **cucumber 2.0 version**, however they work with older **version cucumber 1.3.5 & less**. You would have to use the older cucumber syntax as well.

The reporter.js file in Support folder generates the target directory "Reports" in which the xml files are generated.For detail instructions on how it works, please refer the Allure-CucumberJS official repo : https://github.com/allure-framework/cucumberjs-allure-reporter

How to setup Jenkins and Allure framework : http://wiki.qatools.ru/display/AL/Allure+Jenkins+Plugin
>      
    const reporter = require('cucumberjs-allure-reporter');
     reporter.config(
     {
        targetDir:'./reports/'
     }
     );
    module.exports = reporter;

![allurereportscreen](https://raw.githubusercontent.com/igniteram/protractor-cucumber-allure/master/images/allureReport.png)
![alluregraphscreen](https://raw.githubusercontent.com/igniteram/protractor-cucumber-allure/master/images/allureReportGraph.png)

## Contributions
For contributors who want to improve this repo by contributing some code, reporting bugs, issues or improving documentation - PR's are highly welcome, please maintain the coding style , folder structure , detailed description of documentation and bugs/issues with examples if possible.