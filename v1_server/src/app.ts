import * as express from "express"
import "reflect-metadata";
import 'dotenv/config'
import { AppDataSource } from "./data-source";
import * as cors from "cors"

export default class App{
    public app:express.Application
    constructor(){
        this.app = express();

        this.connectDB()
        this.setMiddleWare()
        this.setRouters();
    }

    private connectDB(){
        AppDataSource.initialize()
        .then(() => console.log("✅ DB Connected"))
        .catch((err) => {
            console.log("❌ DB error")
            throw err
        })
    }

    private setMiddleWare(){
        this.app.use(cors<express.Request>())
    }

    private setRouters(){
        this.app.get('/', (req:express.Request, res:express.Response) => {
          res.send('hello!');
        })

        this.app.use('/api/user')
    }
}