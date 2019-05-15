//*****  configuration file  *****  

exports.config = {

		directConnect: true,  

		params: {
			login: {
				url: 'http://www.way2automation.com/angularjs-protractor/webtables/'
			}
		},

		capabilities: {
			'browserName': 'chrome', //can use 'firefox' or 'chrome'
		},

		suites: {

			functional: [
				'../tests/validateadduserForm_spec.js'
			]
		},

		jasmineNodeOpts: {
			defaultTimeoutInterval: 60000
		}
};