import { FullConfig } from "@playwright/test";
import fs from 'fs'
import dotenv from 'dotenv'

async function globalSetup(config:FullConfig)
{
        if(process.env.ENVSELCTION=='test')
            dotenv.config({path:`${process.env.ENVSELCTION}.env`})
        if(process.env.ENVSELCTION=='val')
            dotenv.config({path:`${process.env.ENVSELCTION}.env`})
}

export default globalSetup