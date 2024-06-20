var browser = new Browser(Browser.chromeOptions());
browser.navigate('http://'+value);
browser.collectPerfEntries();
return JSON.stringify(browser.getResult());
