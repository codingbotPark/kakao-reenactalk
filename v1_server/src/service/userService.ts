import User from "../entity/user";
import { userRepository } from "../repository";
import { UserInputType, UserInputTypeWithId } from "../types/user";

export default class UserService {
  constructor() {}

  public async getUsers() {

    let res;
    try{
        res = await userRepository.find()
        console.log(res)
    }catch(err){
        console.log(err)
    }

    return {finded:1,status:200,data:res};
  }

  public async signUpUser({ nickname, email, password, power }: UserInputType) {
    const user = new User();
    user.email = email;
    user.nickname = nickname;
    user.password = password;
    user.power = power;

    console.log(user)

    try{
        const res = await userRepository.save(user);
    }catch(err){
        return {created:"0",status:"500"}
    }

    return { created: "1", status: "200" };
  }

  public async signInUser() {
    return { logined: "1", status: "200" };
  }

  public async deleteUser({id}:{id:any}) {

    let res;
    try {
        await userRepository
        .createQueryBuilder('user')
        .softDelete()
        .where("id = :id",{id})
        .execute()
    } catch(err){
        console.log(err)
        return {deleted:"0",status:"500"}
    }  
    return { deleted: "1", status: "200" };
  }

  public async updateUser({id,email,nickname,password,power}:UserInputTypeWithId) {

    let res;
    try{
        await userRepository
        .createQueryBuilder('user')
        .update(User)
        .set({email,nickname,password,power})
        .where("id = :id",{id})
        .execute()
    }catch(err){
        console.log(err)
    }

    return { updated: "1", status: "200" };
  }
}
