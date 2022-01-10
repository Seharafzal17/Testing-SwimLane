
//Page imports
let homePage = require ('../swimLane.pages/home.page');
let loginPage = require('../swimLane.pages/login.page');

//Values
let userName = 'sehar.afzel';
let userPas = 'kentuckybluegrass1!';


describe('Feature:Homepage (Smoke)', function () {


    it('Checking is page is not Angular', function () {
        browser.waitForAngularEnabled(false);
        browser.get('https://qa-practical.qa.swimlane.io/login');
        browser.sleep(2000);
    });

    it('Checking is page Title', function () {
        expect(browser.getTitle()).toEqual(homePage.page.getPageTitle());
        browser.sleep(2000);
    });

    it('Wait for userName', function () {
        browser.sleep(3000);
        loginPage.userName.getLocator();
        browser.sleep(2000);
    });

    it('Enter userName', function () {
        loginPage.userName.enterUserName(userName);
        browser.sleep(2000);
    });

    it('Enter Password', function () {
        loginPage.userPassword.enterUserPassword(userPas);
        browser.sleep(2000);
    });

    it('Click on Login button', function () {
        loginPage.loginButton.clickButton();
        browser.sleep(2000);
    });

});