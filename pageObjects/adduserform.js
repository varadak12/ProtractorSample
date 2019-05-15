//Page object file - adduserform.js

var newuserObjRep = require('../pageLocators/newuserForm.json');
var SelectWrapper = require('../Utils/selectWrapperUtil.js');
var basePage = require('../pageObjects/basePage.js');
var mySelect = new SelectWrapper(by.xpath(newuserObjRep.validatenewUserForm.role));
var logger = require('../Utils/logUtil.js');

class newUserPage {
    constructor() {
        this.fillform = function (testDat) {
            browser.ignoreSynchronization = true; //page is async
            browser.sleep(2000);
            //form entry
             element(by.xpath(newuserObjRep.validatenewUserForm.username)).clear().sendKeys(testDat.uname);
             element(by.xpath(newuserObjRep.validatenewUserForm.password)).clear().sendKeys(testDat.password);
             element(by.xpath(newuserObjRep.validatenewUserForm.fname)).clear().sendKeys(testDat.fname);
             element(by.xpath(newuserObjRep.validatenewUserForm.lname)).clear().sendKeys(testDat.lname);
             element(by.xpath(newuserObjRep.validatenewUserForm.email)).clear().sendKeys(testDat.emailAdd)
             element(by.xpath(newuserObjRep.validatenewUserForm.cellphone)).clear().sendKeys(testDat.cellphone);
             mySelect.selectByText(testDat.role);
             testDat.customer == "Company AAA" ? element(by.xpath(newuserObjRep.validatenewUserForm.companyAAA)).click() 
                                               : element(by.xpath(newuserObjRep.validatenewUserForm.companyBBB)).click();

            browser.sleep(2000);
            // form submission
            element(by.xpath(newuserObjRep.validatenewUserForm.saveButton)).getAttribute('disabled').then(function(attr){
                logger.log('info', '----disable attribute value  ',attr);
                expect(attr).toEqual(null);
                if ( attr ) { 
                        logger.log('info', '----Failed to add the user ',testDat.uname);
                        element(by.xpath(newuserObjRep.validatenewUserForm.closeButton)).click().then(function () {
                            browser.sleep(2000);
                            return;  
                        });
                }
                if( attr == null ){
                        var rowCountbefore ;
                        browser.driver.findElements(by.xpath('/html/body/table/tbody/tr')).then(function(rowCount) {
                            rowCountbefore = rowCount.length + 1; // offset indexation
                        });
                        element(by.xpath(newuserObjRep.validatenewUserForm.saveButton)).click().then(function () {
                            browser.sleep(2000);
                            browser.driver.findElements(by.xpath('/html/body/table/tbody/tr')).then(function(elems) {
                               logger.log('info',"Row Count",rowCountbefore, elems.length)
                               expect(elems.length).toEqual(rowCountbefore); // table count assertion
                               basePage.verifyTableData(testDat);
                            }); 
                           
                    });
                }
            })
        };
    }
}

module.exports = new newUserPage();
