/**
 * @name Alibaba Product Search
 * @desc Searches Alibaba.com for a product and checks if the results show up 
 */

const assert = require('assert')
const puppeteer = require('puppeteer')
let browser
let page

before(async () => {
  browser = await puppeteer.launch()
  page = await browser.newPage()
})

describe('Alibaba Homepage', () => {
  it('has search input and select supplier', async () => {
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto('https://www.alibaba.com/',{ waitUntil: 'networkidle0' })
    const searchInput = await page.$('#J_SC_header > header > div.sc-hd-row.sc-hd-main > div.sc-hd-cell.sc-hd-searchbar-wrap > div > div > form > div.ui-searchbar-type')
    assert.ok(searchInput)
    await searchInput.click()
    await page.click('#J_SC_header > header > div.sc-hd-row.sc-hd-main > div.sc-hd-cell.sc-hd-searchbar-wrap > div > div > form > div.ui-searchbar-type > div > ul > li:nth-child(2) > a')
    await page.screenshot({ path: 'alibaba.png'})
  }).timeout(20000)

  it('shows search results after search input', async () => {
    await page.type('#J_SC_header > header > div.sc-hd-row.sc-hd-main > div.sc-hd-cell.sc-hd-searchbar-wrap > div > div > form > div.ui-searchbar-main > input', 'how bout them apples')
    await page.click('#J_SC_header > header > div.sc-hd-row.sc-hd-main > div.sc-hd-cell.sc-hd-searchbar-wrap > div > div > form > input.ui-searchbar-submit')
    await page.waitFor(1000)
    await page.screenshot({ path: 'alibaba2.png'})
  }).timeout(20000)


  // having trouble clicking to find div
  it('select first product', async () => {
    await page.click('body > div.l-page > div.l-page-main.l-page-normal > div.l-main-content > div.l-grid.l-grid-sub > div.l-col-main > div.l-grid.l-grid-extra > div.l-col-main > div.l-main-wrap > div.l-theme-card-box.ns-theme-offer-attr.uf-theme-card-border.uf-theme-card-margin-bottom > div:nth-child(1) > div:nth-child(1) > div > div.item-grid > div.item-col > div > div > div.title-wrap > h2 > a')
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



