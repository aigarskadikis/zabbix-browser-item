var browser = new Browser(Browser.chromeOptions());
browser.navigate('http://'+value);
browser.setScreenSize(Number(1280), Number(1024));
return browser.getScreenshot();
