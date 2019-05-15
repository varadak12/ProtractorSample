//Page object file - portfolioDetailsPage.js
class commonPage {
	constructor() {
		this.getPageURL = function () {
			return browser.getCurrentUrl();
		};
		this.getPageLoaded = function () {
			return browser.getTitle();
		};

	}
}
module.exports = new commonPage();