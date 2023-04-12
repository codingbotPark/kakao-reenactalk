import * as express from "express"
import "reflect-metadata";
import 'dotenv/config'
import { AppDataSource } from "./data-source";
import * as cors from "cors"
import router from "./router";

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
        this.app.use(express.urlencoded({extended:true}))
    }

    private setRouters(){
        this.app.get('/', (req:express.Request, res:express.Response) => {
          res.send('hello!');
        })

        const userRouter = new router.userRouter()

        this.app.use('/api/user',userRouter.registerRoutes)
    }
}