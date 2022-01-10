
let hotkeys = require('protractor-hotkeys');

let loginPage = function () {



    this.userName = {
        getLocator: function () {
            return element(by.id('input-1'));
        },

        clickTextField: function () {
            let elem = this.getLocator();
            elem.click();
        },
        enterUserName: function (userName) {
            let elem = this.getLocator();
            elem.sendKeys(userName);
        },
    };


    this.userPassword = {
        getLocator: function () {
            return element(by.id('input-2'));
        },
        enterUserPassword: function (userPassword) {
            let elem = this.getLocator();
            elem.click();
            elem.sendKeys(userPassword);
        },
    };

    this.loginButton = {
        getLocator: function () {
            return element(by.cssContainingText('button', 'Login'));
        },
        clickButton: function () {
            this.getLocator().click();
        },
    };



    this.newEmployeeTab = {
        getLocator: function () {
            return element(by.css('a[href*="/record/aaUiorxB5O4lm4Cye/"]'))
        },
        clickTab: function () {
            this.getLocator().click();
        },
    };

    this.firstNameTextField = {
        getLocator: function () {
           // return element(by.cssContainingText('input', 'a75lt'));
           return element(by.name('a75lt'));
        },
        clickTextField: function () {
            this.getLocator().click();
        },
        enterFirstName: function (firstName) {
            let elem = this.getLocator();
            elem.click();
            elem.sendKeys(firstName);
        },
    };

    this.LastNameTextField = {
        getLocator: function () {
           return element(by.name('a8rki'));
        },
        clickTextField: function () {
            this.getLocator().click();
        },
        enterLastName: function (lastName) {
            let elem = this.getLocator();
            elem.click();
            elem.sendKeys(lastName);
        },
    };

        this.cityTextField = {
            getLocator: function () {
               return element(by.name('adwok'));
            },
            clickTextField: function () {
                this.getLocator().click();
            },
            enterCity: function (city) {
                let elem = this.getLocator();
                elem.click();
                elem.sendKeys(city);
            },
    };


    this.saveButton = {
        getLocator: function () {
       //  return element(by.cssContainingText('span', 'save'));   
      return element(by.buttonText('Save'));     
        },
        clickButton: function () {
            this.getLocator().click();
        },
    };

    this.saveButtonDialogBox = {
        getLocator: function () {
     return element(by.css('[ng-click="click(button)"]')); 
       
        },
        clickButton: function () {
            this.getLocator().click();
        },
    };


    



    this.continueAnywayButton = {
        getLocator: function () {
            return element(by.cssContainingText('button', 'Continue Anyway'));
        },
        clickButton: function () {
            this.getLocator().click();
        },
    };

};
module.exports = new loginPage();
