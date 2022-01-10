let newEmployeePage = require('../swimLane.pages/login.page');

describe('Feature:NewEmployee (Smoke)', function () {


    it('Click on "NEW EMPLOYEE SUBMISSION + sign"', function () {
        newEmployeePage.newEmployeeTab.clickTab();
        browser.sleep(2000);
    });

    it('Enter "First Name" of the Employee', function () {
        newEmployeePage.firstNameTextField.getLocator();
        newEmployeePage.firstNameTextField.clickTextField();
        newEmployeePage.firstNameTextField.enterFirstName('TestSehar');
        browser.sleep(2000);
    });

    it('Enter "Last Name" of the Employee', function () {
        newEmployeePage.LastNameTextField.enterLastName('TestAfzal');
        browser.sleep(2000);
    });


    it('Enter "City" of the Employee', function () {
        newEmployeePage.cityTextField.enterCity('TestOklahomacity');
        browser.sleep(2000);
    });


    it('Click on "Save" button', function () {
        newEmployeePage.saveButton.clickButton();
        browser.sleep(5000);
    });


    it('Click on "Save" Dialog box', function () {
        newEmployeePage.saveButtonDialogBox.clickButton();
        browser.sleep(2000);
    });

    // it('CLick on Continue anyway', function () {
    //   //  browser.waitForAngularEnabled(false);
    //     newEmployeePage.continueAnywayButton.clickButton();
    //     browser.sleep(3000);


    //       // newEmployeePage.userPassword.enterUserPassword(userPas);
    //       // newEmployeePage.submitButton.clickButton();

    //   });
});