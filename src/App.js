import React, {PureComponent} from 'react';
import './App.css';
import PlatformHelpers from "./common/PlatformHelpers";
import Bowser from "bowser";

class App extends PureComponent {
    constructor() {
        super();
        console.log(Bowser.getParser(window.navigator.userAgent));
    }

    state = {
        isOnMac: PlatformHelpers.isOnMac(),
        isOnIos: PlatformHelpers.isOnIos(),
        isOnAndroid: PlatformHelpers.isOnAndroid(),
        isChrome: PlatformHelpers.isChrome(),
        isSafari: PlatformHelpers.isSafari(),
        isFirefox: PlatformHelpers.isFirefox(),
        isInternetExplorer: PlatformHelpers.isInternetExplorer(),
        isMobile: PlatformHelpers.isMobile(),
        isTablet: PlatformHelpers.isTablet(),
        engine: PlatformHelpers.engine(),
        os: PlatformHelpers.os(),
        osVersion: PlatformHelpers.osVersion(),
        browser: PlatformHelpers.browser(),
        browserVersion: PlatformHelpers.browserVersion()
    };

  render() {
    return (
        <div className="App">
          <header className="App-header">
          </header>



            <p className="main__type">OS TYPE</p>
            {/*
            isOnMac - line 195
            */}
            {
                this.state.isOnMac ? (
                    <div>
                        <p className="title">isOnMac</p>
                        <p className="code">return browser.getOSName() === Bowser.OS_MAP['MacOS'];</p>
                        <p className="result">Result: {this.state.isOnMac.toString()}</p>
                    </div>
                ) : null
            }

            {/*
            isOnIos - line 199
            */}
            {
                this.state.isOnIos ? (
                    <div>
                        <p className="title">isOnIos</p>
                        <p className="code">return browser.getOSName() === Bowser.OS_MAP['iOS'];</p>
                        <p className="result">Result: {this.state.isOnIos.toString()}</p>
                    </div>
                ) : null
            }

            {/*
            isOnAndroid - line 203
            */}
            {
                this.state.isOnAndroid ? (
                    <div>
                        <p className="title">isOnAndroid</p>
                        <p className="code">return browser.getOSName() === Bowser.OS_MAP['Android'];</p>
                        <p className="result">Result: {this.state.isOnAndroid.toString()}</p>
                    </div>
                ) : null
            }

            <p> ---------------------------------  </p>


            <p className="main__type">BROWSER TYPE</p>
            {/*
            isChrome - line 207
            */}
            {
                this.state.isChrome ? (
                    <div>
                        <p className="title">isChrome</p>
                        <p className="code">return browser.getBrowserName() === Bowser.BROWSER_MAP['chrome'] ||
                            browser.getBrowserName() === Bowser.BROWSER_MAP['chromium'];</p>
                        <p className="result">Result: {this.state.isChrome.toString()}</p>
                    </div>
                ) : null
            }

            {/*
            isSafari - line 211
            */}
            {
                this.state.isSafari ? (
                    <div>
                        <p className="title">isSafari</p>
                        <p className="code">return browser.getBrowserName() === Bowser.BROWSER_MAP['safari'];</p>
                        <p className="result">Result: {this.state.isSafari.toString()}</p>
                    </div>
                ) : null
            }

            {/*
            isFirefox - line 215
            */}
            {
                this.state.isFirefox ? (
                    <div>
                        <p className="title">isFirefox</p>
                        <p className="code">return browser.getBrowserName() === Bowser.BROWSER_MAP['firefox'];</p>
                        <p className="result">Result: {this.state.isFirefox.toString()}</p>
                    </div>
                ) : null
            }

            {/*
            isInternetExplorer - line 219
            */}
            {
                this.state.isInternetExplorer ? (
                    <div>
                        <p className="title">isInternetExplorer</p>
                        <p className="code">return browser.getBrowserName() === Bowser.BROWSER_MAP['ie'];</p>
                        <p className="result">Result: {this.state.isInternetExplorer.toString()}</p>
                    </div>
                ) : null
            }

            {/*
            isMicrosoftEdge - line 223
            */}
            {
                this.state.isMicrosoftEdge ? (
                    <div>
                        <p className="title">isMicrosoftEdge</p>
                        <p className="code">return browser.getBrowserName() === Bowser.BROWSER_MAP['edge'];</p>
                        <p className="result">Result: {this.state.isMicrosoftEdge.toString()}</p>
                    </div>
                ) : null
            }


            <p> ---------------------------------  </p>



            <p className="main__type">BROWSER TYPE</p>
            {/*
            isMobile - line 289
            */}
            {
                this.state.isMobile ? (
                    <div>
                        <p className="title">isMobile</p>
                        <p className="code">return browser.getPlatformType() === Bowser.PLATFORMS_MAP['mobile'];</p>
                        <p className="result">Result: {this.state.isMobile.toString()}</p>
                    </div>
                ) : null
            }

            {/*
            isTablet - line 293
            */}
            {
                this.state.isTablet ? (
                    <div>
                        <p className="title">isTablet</p>
                        <p className="code">return browser.getPlatformType() === Bowser.PLATFORMS_MAP['mobile'];</p>
                        <p className="result">Result: {this.state.isTablet.toString()}</p>
                    </div>
                ) : null
            }


            <p> ---------------------------------  </p>

            {/*
            engine - line 323
            */}
            <p className="engine__type">ENGINE TYPE -- .engine</p>
            {
                this.state.engine ? (
                    <div>
                        <p className="title">Engine type function</p>
                        <p className="code">browser.getEngineName() === Bowser.ENGINE_MAP[engine_type]</p>
                        <p className="result">Result: {this.state.engine}</p>
                    </div>
                ) : null
            }


            <p> ---------------------------------  </p>


            {/*
            os - line 339
            */}
            <p className="os__type">OS TYPE -- .os</p>
            {
                this.state.os ? (
                    <div>
                        <p className="title">OS type function</p>
                        <p className="code">browser.getOSName() === Bowser.OS_MAP[os_type]</p>
                        <p className="result">Result: {this.state.os}</p>
                    </div>
                ) : null
            }

            {/*
            os - line 339
            */}
            <p className="os__type">OS VERSION -- .osVersion</p>
            {
                this.state.osVersion ? (
                    <div>
                        <p className="title">OS version function</p>
                        <p className="code">return browser.getOSVersion() || null;</p>
                        <p className="result">Result: {this.state.osVersion}</p>
                    </div>
                ) : null
            }

            <p> ---------------------------------  </p>

            {/*
            browser name - line 339
            */}
            <p className="browser__type">BROWSER NAME -- .browser</p>
            {
                this.state.browser ? (
                    <div>
                        <p className="title">Browser name</p>
                        <p className="code">return browser.getBrowserName();</p>
                        <p className="result">Result: {this.state.browser}</p>
                    </div>
                ) : null
            }

            <p className="browser__type">BROWSER VERSION -- .browserVersion</p>
            {
                this.state.browserVersion ? (
                    <div>
                        <p className="title">Browser version function</p>
                        <p className="code">return parseFloat(String(browser.getBrowserVersion()));</p>
                        <p className="result">Result: {this.state.browserVersion}</p>
                    </div>
                ) : null
            }

            <p> ---------------- END -----------------  </p>
        </div>
    );
  }
}

export default App;
