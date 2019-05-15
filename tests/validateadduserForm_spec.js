describe('Filling contact us form', function () {
    var logger = require('../Utils/logUtil.js');
    var loginPage = require('../pageObjects/basePage.js');
    var addnewUserPage = require('../pageObjects/adduserform.js');
    var baseObjRep = require('../pageLocators/basepage.json');
    var testDat = require('../testData/validateadduserFormTD.json');
    var newuserObjRep = require('../pageLocators/newuserForm.json');

    beforeEach(function () {

        logger.log('info', '[- test started -]********************************************');

    });

    afterEach(function () {

        logger.log('info', '[- test completed -]********************************************');

    });

    it('Validate submitting Add user form and entry validate', function () {

        loginPage.loginToAPP(); 
        // test users - iterate
        for (var userdata in testDat) {
           element(by.xpath(baseObjRep.basepage.addnewuserLink)).click();
           addnewUserPage.fillform(testDat[userdata]);
           browser.sleep(2000);
           //logger.log('info', '--- Added new User ---',testDat[userdata]);
        }     
    });

});