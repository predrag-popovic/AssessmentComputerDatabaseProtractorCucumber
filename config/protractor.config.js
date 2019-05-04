const path = require("path");
const jsonReports = process.cwd() + "/reports/singleBrowser";
const Reporter = require("../support/reporter");
const report = require('multiple-cucumber-html-reporter');

var PropertiesReader = require('properties-reader');
var prop = PropertiesReader('./properties/prop.properties');

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

if(prop.get('runMultiBrowserTest') === true) {

  exports.config = {
    seleniumAddress: prop.get('seleniumAddress'),
    baseUrl: prop.get('envURL'),
  
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    specs: [prop.get('featurePath')],
    exclude: "../features/database.feature",
    // resultJsonOutputFile: "./reports/json/protractor_report.json",
    
    onPrepare: function() {
      browser.ignoreSynchronization = true;
      browser.manage().window().maximize();
      require('babel-register');
      Reporter.createDirectory(jsonReports);
    },

    cucumberOpts: {
      strict: true,
      format: 'json:./reports/multiBrowser/results.json',
      require: [prop.get('stepDefinitionsPath'), "../support/*.js"],
      tags: ["@RegressionTest"] || ["@SmokeTest"]
    },

    onComplete: function () {
      Reporter.createHTMLReport();
    },
  
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
            { label: 'Execution Start Time', value: dateTime },
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
  
    maxSessions: 2,
  
    // run Multiple Browsers in the Same Test
  
    multiCapabilities: [{
      'browserName': 'firefox',
      'moz:firefoxOptions': {
  
        args: ['--headless', '--disable-gpu', 'disable-infobars', '--window-size=1920,1080']
      }
  
    }, {
  
      'browserName': 'chrome',
      'chromeOptions': {
  
        args: ['--headless','--disable-gpu', 'disable-infobars', '--window-size=1920,1080']
      }
    }]
  };

}else {

  exports.config = {
    seleniumAddress: prop.get('seleniumAddress'),
    baseUrl: prop.get('envURL'),
    capabilities: {
      browserName: process.env.TEST_BROWSER_NAME || "chrome",
      'chromeOptions': {args: ['--headless', '--disable-gpu', 'disable-infobars', '--window-size=1920,1080']}
    },

    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    specs: [prop.get('featurePath')],
    exclude: "../features/database.feature",
    // resultJsonOutputFile: "./reports/json/protractor_report.json",
    
    onPrepare: function() {
      browser.ignoreSynchronization = true;
      browser.manage().window().maximize();
      require('babel-register');
      Reporter.createDirectory(jsonReports);
    },

    cucumberOpts: {
      strict: true,
      format: 'json:./reports/singleBrowser/cucumber_report.json',
      require: [prop.get('stepDefinitionsPath'), "../support/*.js"],
      tags: ["@RegressionTest"] || ["@SmokeTest"]
    },

    onComplete: function () {
      Reporter.createHTMLReport();
    },

  };

}

