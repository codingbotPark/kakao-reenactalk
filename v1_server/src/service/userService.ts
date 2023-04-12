import User from "../entity/user";
import { userRepository } from "../repository";
import { userInputType } from "../types/user";

export default class UserService {
  constructor() {}

  public async getUsers() {
    return {
      finded: "1",
      status: "200",
      data: [
        {
          createdAt: "20035-07-05",
          updatedAt: "20035-07-05",
          id: 1,
          email: "pbk575@gmail.com",
          nickname: "codingbotPark",
          password: "12345678",
          power: 1,
        },
        {
          createdAt: "20035-07-05",
          updatedAt: "20035-07-05",
          id: 2,
          email: "pbk575@gmail.com",
          nickname: "codingbotPark",
          password: "12345678",
          power: 1,
        },
        {
          createdAt: "20035-07-05",
          updatedAt: "20035-07-05",
          id: 3,
          email: "pbk575@gmail.com",
          nickname: "codingbotPark",
          password: "12345678",
          power: 1,
        },
      ],
    };
  }

  public async signUpUser({ nickname, email, password, power }: userInputType) {
    const user = new User();
    user.nickname = nickname;
    user.email = email;
    user.password = password;
    user.power = power;

    const res = await userRepository.save(user);
    console.log(res);
    return { created: "1", status: "200" };
  }

  public async signInUser() {
    return { logined: "1", status: "200" };
  }

  public async deleteUser() {
    return { deleted: "1", status: "200" };
  }

  public async updateUser() {
    return { updated: "1", status: "200" };
  }
}
