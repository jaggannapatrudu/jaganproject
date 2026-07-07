import {test as base} from '@playwright/test'
import LoginPage from '../pages/loginpage'

type classfixtures = {
    loginPage:LoginPage
}

export const test = base.extend<classfixtures>({
    loginPage:async({page},use)=>{

        let loginPage = new LoginPage(page)
        await use(loginPage)
    }
})