function getBrowserInfo() {
    const browserName = navigator.userAgent;
    const browserVersion = navigator.appVersion;
    return { browserName, browserVersion };
  }
  
  function displayBrowserInfo() {
    const { browserName, browserVersion } = getBrowserInfo();
    console.log('Browser Name:', browserName);
    console.log('Browser Version:', browserVersion);
  }
  displayBrowserInfo();