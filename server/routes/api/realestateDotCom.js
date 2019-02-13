let axios = require('axios')
let puppeteer = require('puppeteer')
let $ = require('cheerio')
let URL = 'https://www.realestate.com.au/buy/in-brisbane+-+greater+region%2c+qld%3b+/auction-times-1?source=location-search'

module.exports = (app) => {

    let listings = []

    puppeteer
    .launch()
    .then(browser => {
        console.log('browser launched')
        return browser.newPage();
    })
    .then(page => {
        return page.goto(URL).then(function() {
            return page.content()
        })
    })
    .then(html => {
        $('a.name', html).each(function() {
            console.log($(this).text())
            listings.push($(this).text())
        })
    })
    .catch(err => console.log(err))

    app.get('/api/listings', (req, res) => {
        console.log('request made for listings')
        res.send(listings)
    })
}