import * as express from "express"
import UserController from "../controller/userController";

export default class UserRouter{
    public router!: express.Router;
    private controller:UserController = new UserController()

    constructor(){
        this.router = express.Router()
        this.registerRoutes()
    }

    protected registerRoutes():void{
        this.router.get('/',this.controller.getUsers)
        this.router.post('/',this.controller.signUpUser)
        this.router.delete('/',this.controller.deleteUser)
        this.router.put('/',this.controller.updateUser)
    }
}