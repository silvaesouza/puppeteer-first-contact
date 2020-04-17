const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://books.toscrape.com/');
    await page.screenshot({ path: 'exemplo1.png' });
    await browser.close();
})();