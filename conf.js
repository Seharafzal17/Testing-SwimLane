
let HtmlReporter = require('protractor-beautiful-reporter');
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
// Utils
//let confUtils = require('../../oucms.utils/conf.utils');

exports.config = {
    // Test framework
    framework: 'jasmine',
    // Selenium server address
  //  seleniumServerJar: confUtils.jarPath.getJarPath(),
  seleniumAddress: 'http://localhost:4444/wd/hub',
    jasmineNodeOpts: {
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 120000,
        print: function() {},
    },
    allScriptsTimeout: 120000,


    suites: {
      LoginPage: './swimLane.specs/login.spec.js',
      NewEmployeePage: './swimLane.specs/newEmployee.spec.js',
   
  },

   
    // Browsers capabilities and browser parameters
    capabilities: {
        browserName: 'chrome',
        
    },
    baseUrl: '',
    // Controls the number of sessions. -1 will run tests in parallel, 1 will run tests in sequence
    maxSessions: 1,
    // HTML Report


    onPrepare: function() {
        // Flag set bases on if the site uses angular or not
        browser.manage().window().setSize(1600, 1000);
        global.isAngularSite = function(flag) {
            browser.ignoreSynchronization = !flag;
        };
      
        // Add a screenshot reporter:
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'SwimLaneReport/newEmployee/',
            preserveDirectory: false,
        }).getJasmine2Reporter());
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
              displayStacktrace: true,
            },
          }));

        },



          

    
};

