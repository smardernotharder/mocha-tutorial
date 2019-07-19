/**
 * @name Etsy Product Searchh
 * @desc Searches Etsy.com for a product and checks if the results show up, click into product. 
 */

const assert = require('assert')
const puppeteer = require('puppeteer')
let browser
let page

before(async () => {
  browser = await puppeteer.launch()
  page = await browser.newPage()
})

describe('Etsy Homepage', () => {
  it('has search input', async () => {
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto('https://www.etsy.com',{ waitUntil: 'networkidle0' })
    const searchInput = await page.$('#gnav-search > div > div.wt-input-btn-group.global-enhancements-search-input-btn-group.wt-menu__trigger')
    assert.ok(searchInput)
    await page.screenshot({ path: 'etsy.png'})
  }).timeout(20000)

  it('shows search results after search input', async () => {
    await page.type('#global-enhancements-search-query', 'firefly')
    await page.click('#gnav-search > div > div.wt-input-btn-group.global-enhancements-search-input-btn-group.wt-menu__trigger > button')
    await page.waitForSelector('#content > div > div.content.bg-white.col-md-12.pl-xs-1.pr-xs-0.pr-md-1.pl-lg-0.pr-lg-0.bb-xs-1 > div > div > div.col-group.pl-xs-0.search-listings-group > div:nth-child(2)')
    await page.screenshot({ path: 'etsy2.png'})
  }).timeout(20000)


  // after click new product opens in new tab; not sure how to handle
  it('select first product', async () => {
    await page.click('#content > div > div.content.bg-white.col-md-12.pl-xs-1.pr-xs-0.pr-md-1.pl-lg-0.pr-lg-0.bb-xs-1 > div > div > div.col-group.pl-xs-0.search-listings-group > div:nth-child(2) > div.bg-white.display-block.pb-xs-2.mt-xs-0 > div > ul > li:nth-child(1)')
    await page.waitForSelector('#listing-page-cart > div.pt-xs-1.pr-xs-2.pb-xs-2.pl-xs-2.p-md-0.bg-white.buy-box-toolkit > div.buy-box__buttons > div > form > button',{
      visible: true,
    })
    await page.screenshot({ path: 'etsy3.png'})
    console.log (page.url())
  }).timeout(20000)


})

after(async () => {
  await browser.close()
})



