

export interface UserInputType{
    nickname:string,
    email:string,
    password:string,
    power:number
}

export interface UserInputTypeWithId extends UserInputType{
    id:number
}
