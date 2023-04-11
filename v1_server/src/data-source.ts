import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type:"mysql",
    host:"mdadb.con2vgefhc1h.ap-northeast-2.rds.amazonaws.com",
    port:3306,
    username:process.env.dbUser,
    password:process.env.dbPassword,
    database:process.env.dbName,
    entities:["src/entity/*.ts"],
    logging:true,
    synchronize:true, // 개발 중이 땐 true
})