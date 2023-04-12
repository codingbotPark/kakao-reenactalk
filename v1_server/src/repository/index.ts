import { AppDataSource } from "../data-source";
import entity from "../entity";

export const userRepository = AppDataSource.getRepository(entity.User)