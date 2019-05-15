//Util file - selectWrapperUtil.js
var selectWrapperUtil = function(selector) {
    this.webElement = element(selector);
};
selectWrapperUtil.prototype.getOptions = function() {
    return this.webElement.all(by.tagName('option'));
};
selectWrapperUtil.prototype.getSelectedOptions = function() {
    return this.webElement.all(by.css('option[selected="selected"]'));
};
selectWrapperUtil.prototype.selectByValue = function(value) {
    return this.webElement.all(by.css('option[value="' + value + '"]')).click();
};
selectWrapperUtil.prototype.selectByPartialText = function(text) {
    return this.webElement.all(by.cssContainingText('option', text)).click();
};
selectWrapperUtil.prototype.selectByText = function(text) {
    return this.webElement.all(by.xpath('option[.="' + text + '"]')).click();
};

module.exports = selectWrapperUtil;

//Usage:-

/*.
.
Import-
var SelectWrapper = require('../Utils/selectWrapperUtil.js');
var mySelect = new SelectWrapper(by.id(""));

.
.
Use-
mySelect.selectByValue("3");
.
.
*/

