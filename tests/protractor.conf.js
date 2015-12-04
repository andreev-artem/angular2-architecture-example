exports.config = {
    allScriptsTimeout: 21000,
    directConnect: true,

    specs: [
        'lib/e2e/helpers.js',
        'e2e/**/*.js'
    ],

    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['no-sandbox']
        }
    },

    baseUrl: 'http://localhost',

    framework: 'jasmine2',

    onPrepare: function() {
        browser.driver.manage().window().setSize(1280, 900);

        //browser.getProcessedConfig().then(function(config) {
        //    console.log('Executing capability', config.capabilities);
        //});
        //
        //return browser.driver.getCapabilities().then(function (capabilitites) {
        //    console.log('WebDriver capabilities ', capabilitites);
        //})
    },
    rootElement: 'app',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};

if (process.env.TRAVIS) {
    exports.config.capabilities.chromeOptions.binary = require('path').join(__dirname, '../chrome-linux/chrome');
}
