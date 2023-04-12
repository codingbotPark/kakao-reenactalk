import * as express from "express"
import { MiddleWareType } from "../types"
import UserService from "../service/userService"
import { userInputType } from "../types/user"

export default class UserController{
    private service:UserService = new UserService()

    constructor(){}

    public getUsers:MiddleWareType = async(req,res) => {

        // const {userId} = req.query
        const {finded, status, data} = await this.service.getUsers()
        return res.json({finded, status, data})
    }

    public signUpUser:MiddleWareType = async(req,res) => {
        const {nickname,email,password,power}:userInputType = req.body

        const {created,status} = await this.service.signUpUser({nickname,email,password,power})



        return res.json({created,status})
    }

    public signInUser:MiddleWareType = async(req,res) => {
        const {logined,status} = await this.service.signInUser()
        return res.json({logined:"1",status:"200"})
    }

    public deleteUser:MiddleWareType = async(req,res) => {
        const {deleted,status} = await this.service.deleteUser()
        return res.json({deleted,status})
    }

    public updateUser:MiddleWareType = async(req,res) => {
        const {updated,status} = await this.service.updateUser()
        return res.json({updated,status})
    }

}