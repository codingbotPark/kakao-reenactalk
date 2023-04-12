import { USER_ENTITY } from "../constants/entity";
import {Column,Entity,PrimaryGeneratedColumn} from "typeorm"
import { UUIdEntity } from "./baseEntity/uuid-id-entity";
import { AutoIdEntity } from "./baseEntity/auto-id-entity";


@Entity({name:"user"})
export default class User extends AutoIdEntity{
    @Column({type:'varchar', unique:true,length:USER_ENTITY.emailMaxLength})
    email!:string;

    @Column({type:'varchar', unique:true, length:USER_ENTITY.nicknameMaxLength})
    nickname!:string;

    @Column({type:'char',unique:true, length:USER_ENTITY.hashPasswordLength})
    password!:string;

    @Column({type:'int',unique:false})
    power!:number;
}