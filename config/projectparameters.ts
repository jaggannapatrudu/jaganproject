import { chromium } from "@playwright/test"
async function globalSetup()
{
        let browser = await chromium.launch()
        let context  = await browser.newContext()
        let page = await context.newPage()
        if(process.env.LMPSURL)
        await page.goto(process.env.LMPSURL)
}
export default globalSetup