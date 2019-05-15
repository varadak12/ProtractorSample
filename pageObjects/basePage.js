//Page object file - loginPage.js

var logger = require('../Utils/logUtil.js');
var ObjRep = require('../pageLocators/basepage.json');
var commonPage = require('./commonPage.js');

class loginPage {
	constructor() {
		this.loginToAPP = function () {
			browser.driver.manage().window().maximize();
			browser.get(browser.params.login.url);
			commonPage.getPageURL().then(function (resultText) {
				expect(resultText).toEqual('http://www.way2automation.com/angularjs-protractor/webtables/');
				logger.log('info', '--- url verified ---');
			});
			//browser.ignoreSynchronization = false;
		};

		//table entry validation - only validate if the firstname and email matches
		this.verifyTableData = function (testDat) {
			element.all(by.repeater('dataRow in displayedCollection')).map(function(e,rIndex){
				e.all(by.css("td")).map(function(col,cIndex){
					return col.getText();
					 }).then(function (cellValues) {
						 (cellValues[0] == testDat.fname) ?
							expect(cellValues).toEqual([testDat.fname, testDat.lname , testDat.uname, "", testDat.customer , testDat.role , testDat.emailAdd  , testDat.cellphone,"", "Edit", ""])
							: true;
					});
				});
								   
			// element.all(by.xpath('/html/body/table/tbody/tr[1]/td')).map(function (cell) {
			//     return cell.getText();
			// }).then(function (cellValues) {
			//     //console.log("@@@@", cellValues);  
			//     expect(cellValues).toEqual([testDat.fname, testDat.lname , testDat.uname, "", testDat.customer , testDat.role , testDat.emailAdd  , testDat.cellphone,"", "Edit", ""]);
			// });
			
		};
	}
}
module.exports = new loginPage();