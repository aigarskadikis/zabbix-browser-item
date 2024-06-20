var browser = new Browser(Browser.chromeOptions());
browser.navigate(value);
browser.collectPerfEntries();
var source = browser.getPageSource();
const result = browser.getResult();
return JSON.stringify({
	'result':result,
	'source':source
});
