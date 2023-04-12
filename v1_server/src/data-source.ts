import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type:"mysql",
    host:"localhost",
    port:3306,
    username:process.env.dbUser,
    password:process.env.dbPassword,
    database:process.env.dbName,
    entities:["src/entity/index.ts"],
    logging:true,
    synchronize:true, // 개발 중이 땐 true
})