/**
 * @name Amazon product search
 * @desc Searches Amazon.com for a product and checks if the results show up, click into product. 
 */

const assert = require('assert')
const puppeteer = require('puppeteer')
let browser
let page

before(async () => {
  browser = await puppeteer.launch()
  page = await browser.newPage()
})

describe('Amazon Homepage', () => {
  it('has search input', async () => {
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto('https://www.amazon.com',{ waitUntil: 'networkidle0' })
    const searchInput = await page.$('#twotabsearchtextbox')
    assert.ok(searchInput)
    await page.screenshot({ path: 'amz1.png'})
  }).timeout(20000)

  it('shows search results after search input', async () => {
    await page.type('#twotabsearchtextbox', 'wireless headphones')
    await page.click('#nav-search > form > div.nav-right > div > input')
    await page.waitForSelector('#search > div.sg-row > div.sg-col-20-of-24.sg-col-28-of-32.sg-col-16-of-20.sg-col.s-right-column.sg-col-32-of-36.sg-col-8-of-12.sg-col-12-of-16.sg-col-24-of-28 > div > span:nth-child(4) > div.s-result-list.s-search-results.sg-row')
    const firstProduct = await page.$('a.a-link-normal')
    assert.ok(firstProduct)
    await page.screenshot({ path: 'amz2.png'})
  }).timeout(20000)

  it('select first product', async () => {
    await page.click('#search > div.sg-row > div.sg-col-20-of-24.sg-col-28-of-32.sg-col-16-of-20.sg-col.s-right-column.sg-col-32-of-36.sg-col-8-of-12.sg-col-12-of-16.sg-col-24-of-28 > div > span:nth-child(4) > div.s-result-list.s-search-results.sg-row > div:nth-child(1) > div > div > div > div > div > div:nth-child(2) > div.sg-col-4-of-24.sg-col-4-of-12.sg-col-4-of-36.sg-col-4-of-28.sg-col-4-of-16.sg-col.sg-col-4-of-20.sg-col-4-of-32 > div > div > span > a')
    await page.waitForSelector('#add-to-cart-button',{
      visible: true,
    })
    await page.screenshot({ path: 'amz3.png'})
    console.log (page.url())
  }).timeout(20000)


})

after(async () => {
  await browser.close()
})



