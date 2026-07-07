import {test, expect} from '@playwright/test'

test('App login', async({page,context})=>{
    
        await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
        let all = page.locator("(//*[@id='product'])[2]/tbody/tr")
        let val = await all.filter({hasText:'Chennai'}).all()
        for(let vall of val)
        {
            console.log(await vall.locator('td').nth(0).innerText())
        }
        
})
