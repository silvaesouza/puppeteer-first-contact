const puppeteer = require('puppeteer')
let scrape = async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('http://books.toscrape.com/')

    const result = await page.$$eval('li img', titles =>
        titles.map(titles => titles.getAttribute('alt'))
    )

    browser.close()
    return result
};
scrape().then((value) => {
    console.log(value)
})

/*
=> Um ponto importante: essa abordagem é menos performática que o page.evaluate(). Vamos aos números obtidos ao medir o código deste exemplo:
com page.evaluate: 2.150ms
com page.$$eval: 5.928ms
*/