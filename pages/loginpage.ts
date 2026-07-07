import { Locator,Page } from "@playwright/test";

export default class LoginPage
{
        readonly page:Page
        readonly username:Locator
        readonly password:Locator
        readonly submit:Locator
        constructor(page:Page)
        {
            this.page = page
            this.username = page.getByLabel("E-Mail Address")
            this.password = page.getByLabel("Password")
            this.submit = page.locator("[value='Login']")
        }
        async appLogin():Promise<void>
        {
            try{
                if(process.env.LMPSURL && process.env.LMPSUSERNAME && process.env.LMPSPASSWORD)
                {
                    await this.page.goto(process.env.LMPSURL)
                    await this.username.fill(process.env.LMPSUSERNAME)
                    await this.password.fill(process.env.LMPSPASSWORD)
                    await this.submit.click()
                }
            }
            catch(error)
            {
                throw new Error('application login not successful')
            }
        }


}