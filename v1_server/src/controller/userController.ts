import * as express from "express"
import { MiddleWareType } from "../types"
import UserService from "../service/userService"
import { UserInputType } from "../types/user"

export default class UserController{
    private service:UserService = new UserService()

    constructor(){}

    public getUsers:MiddleWareType = async(req,res) => {

        // const {userId} = req.query
        const {finded, status, data} = await this.service.getUsers()

        return res.json({finded, status, data})
    }

    public signUpUser:MiddleWareType = async(req,res) => {
        
        const {nickname,email,password,power}:UserInputType = req.body

        console.log(req.body)

        const {created,status} = await this.service.signUpUser({nickname,email,password,power})

        return res.json({created,status})
    }

    public signInUser:MiddleWareType = async(req,res) => {
        const {logined,status} = await this.service.signInUser()
        return res.json({logined:"1",status:"200"})
    }

    public deleteUser:MiddleWareType = async(req,res) => {
        const {id} = req.query

        const {deleted,status} = await this.service.deleteUser({id})
        return res.json({deleted,status})
    }

    public updateUser:MiddleWareType = async(req,res) => {
        const {id,email,nickname,password,power} = req.body
        const {updated,status} = await this.service.updateUser({id,email,nickname,password,power})
        return res.json({updated,status})
    }

}