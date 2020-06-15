import Bowser from "bowser"; // ES6 (and TypeScript with --esModuleInterop enabled)

const browser = Bowser.getParser(window.navigator.userAgent);

const PlatformHelpers = {

    /** -------   OS Type     -------**/

    /**
     * is OS type Mac
     * @returns {true} if on mac, otherwise {false}
     */
    isOnMac: function() {
        return browser.is(Bowser.OS_MAP['MacOS']);
    },

    /**
     * is OS type iOS
     * @returns {true} if on iOS, otherwise {false}
     */
    isOnIos: function() {
        return browser.is(Bowser.OS_MAP['iOS']);
    },

    /**
     *  is OS type iOS
     * @returns {true} if on Android, otherwise {false}
     */
    isOnAndroid: function() {
        return browser.is(Bowser.OS_MAP['Android']);
    },



    /** -------   Browser Type     -------**/

    /**
     *  is Browser type Chrome or Chromium
     * @returns {true} if Chrome, otherwise {false}
     */
    isChrome: function() {
        return browser.is(Bowser.BROWSER_MAP['chrome']) || browser.is(Bowser.BROWSER_MAP['chromium']);
    },

    /**
     *  is Browser type Safari
     * @returns {true} if Safari, otherwise {false}
     */
    isSafari: function() {
        return browser.is(Bowser.BROWSER_MAP['safari']);
    },

    /**
     *  is Browser type Firefox
     * @returns {true} if Firefox, otherwise {false}
     */
    isFirefox: function() {
        return browser.is(Bowser.BROWSER_MAP['firefox']);
    },

    /**
     *  is Browser type IE
     * @returns {true} if IE, otherwise {false}
     */
    isInternetExplorer: function() {
        return browser.is(Bowser.BROWSER_MAP['ie']);
    },

    /**
     *  is Browser type Edge
     * @returns {true} if Edge, otherwise {false}
     */
    isMicrosoftEdge: function() {
        return browser.is(Bowser.BROWSER_MAP['edge']);
    },



    /** -------   Platform Type     -------**/

    /**
     *  is Platform type mobile
     * @returns {true} if mobile, otherwise {false}
     */
    isMobile: function() {
        return browser.is(Bowser.PLATFORMS_MAP['mobile']);
    },

    /**
     *  is Platform type tablet
     * @returns {true} if tablet, otherwise {false}
     */
    isTablet: function() {
        return browser.is(Bowser.PLATFORMS_MAP['tablet']);
    },



    /** -------   engine     -------**/
    engine: function() {
        if (browser.getEngineName() === Bowser.ENGINE_MAP['WebKit']) {
            return 'webkit';
        } else if (browser.getEngineName() === Bowser.ENGINE_MAP['Blink']) {
            return 'blink';
        } else if (browser.getEngineName() === Bowser.ENGINE_MAP['Gecko']) {
            return 'gecko';
        } else if (browser.getEngineName() === Bowser.BROWSER_MAP['ie']) {
            return 'msie';
        } else if (browser.getEngineName() === Bowser.BROWSER_MAP['edge']) {
            return 'msedge';
        } else {
            return null;
        }
    },

    /** -------   os     -------**/
    os: function() {
        if (browser.is(Bowser.OS_MAP['MacOS'])) {
            return 'mac';
        } else if (browser.is(Bowser.OS_MAP['Windows'])) {
            return 'windows';
        } else if (browser.is(Bowser.OS_MAP['WindowsPhone'])) {
            return 'windowsphone';
        } else if (browser.is(Bowser.OS_MAP['Linux'])) {
            return 'linux';
        } else if (browser.is(Bowser.OS_MAP['ChromeOS'])) {
            return 'chromeos';
        } else if (browser.is(Bowser.OS_MAP['Android'])) {
            return 'android';
        } else if (browser.is(Bowser.OS_MAP['iOS'])) {
            return 'ios';
        } else if (browser.is(Bowser.OS_MAP['BlackBerry'])) {
            return 'blackberry';
        } else {
            return null;
        }
    },

    /** -------   os version    -------**/
    osVersion: function() {
        return browser.getOSVersion() || null;
    },

    /** -------   browser name    -------**/
    browser: function() {
        return browser.getBrowserName();
    },

    browserVersion: function() {
        return parseFloat(String(browser.getBrowserVersion()));
    },
};

export default PlatformHelpers;
