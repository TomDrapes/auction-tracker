let axios = require('axios')
let $ = require('cheerio')
let puppeteer = require('puppeteer')
let baseURL = 'https://www.realestate.com.au'
let auctionURL = '/buy/in-brisbane+-+greater+region%2c+qld%3b+/auction-times-1?source=location-search'

module.exports = (app) => {

    let listings = []
    let listingDetailsURLs = []

    async function webscraper() {

      await axios.get(baseURL+auctionURL).then(res => {
        $('.detailsButton', res.data).each(function() {
          listingDetailsURLs.push($(this).attr('href'))
        })
      })
      //console.log(listingDetailsURLs)

      puppeteer
      .launch()
      .then(browser => {
          console.log('browser launched')
          return browser.newPage();
      })
      .then(page => {

        (async function() {
          for (let i = 0; i < listingDetailsURLs.length; i++) {
              const url = listingDetailsURLs[i];

              console.log("Navigating to page...")
              await page.goto(`${baseURL + url}`);

              console.log("Getting page content...")
              let content = await page.content()

              let street, suburb, type, medianPrice

              $('.property-info-address__street', content).each(function() {
                street = $(this).text()
              })
              $('.property-info-address__suburb', content).each(function() {
                suburb = $(this).text()
              })
              $('.property-info__property-type', content).each(function() {
                type = $(this).text()
              })
              $('#summary-property-price', content).each(function() {
                medianPrice = $(this).text()
              })

              let listing = {
                street: street,
                suburb: suburb,
                type: type,
                medianPrice: medianPrice
              }

              listings.push(listing)
              console.log('Added new listing')
          }
        })()
      })
      console.log(listings)
    }
    webscraper()

    app.get('/api/listings', (req, res) => {
        console.log('request made for listings')
        res.send(listings)
    })
}
