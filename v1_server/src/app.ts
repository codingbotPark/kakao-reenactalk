import * as express from "express"
import "reflect-metadata";
import 'dotenv/config'
import { AppDataSource } from "./data-source";
import * as cors from "cors"
import router from "./router";
import bodyParser = require("body-parser");

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
        this.app.use(cors())
        this.app.use(cors<express.Request>())
        this.app.use(express.urlencoded({extended:true}))
        this.app.use(bodyParser.json())
    }

    private setRouters(){
        this.app.post('/', (req,res) => {
            console.log(req.body)
            res.send("Hello")
        })

        const userRouter = new router.UserRouter()
        this.app.use('/api/user',userRouter.registerRoutes())
        
    }
}