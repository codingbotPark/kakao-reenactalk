'use client';


import { UserType } from "types/user"

export default function Page({
    users
}:{
    users:UserType[]
}){

    console.log(users)

    return(
        <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500" >
            {
                // users.map((user) => (
                //     <div></div>
                // ))
            }
        </div>
    )
}