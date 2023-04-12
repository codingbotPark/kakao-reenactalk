import { userRepository } from "../repository"


export default class UserService{
    constructor(){

    }

    public async getUsers(){
        return {finded:"1",status:"200",data:"{}"}
    }

    public async signUpUser(){
        const user = await userRepository.save({})

        return {created:"1",status:"200"}
    }

    public async signInUser(){
        return {logined:"1",status:"200"}
    }

    public async deleteUser(){
        return {deleted:"1",status:"200"}
    }

    public async updateUser(){
        return {updated:"1",status:"200"}
    }
}