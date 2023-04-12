'use client';

// import ButtonNavs from "@/ui/ButtonNavs"
import React, { Children, JSXElementConstructor, ReactElement, cloneElement, isValidElement, useState } from "react"
import { UserType } from "types/user";

export default function Layout({children}:{children:React.ReactNode}){
    const [users,setUsers] = useState<UserType[]>([
        {
            createdAt:"2005-07-05",
            updatedAt:"2005-07-05",
            id:1,
            email:"pbk575@gmail.com",
            nickname:"park",
            password:"12345678",
            power:1
        }
    ])

    return (
        <div>
            {/* <ButtonNavs/> */}

            {
                React.cloneElement(children as ReactElement<any, string | JSXElementConstructor<any>>,{
                    users
                })
            }
        </div>
    )
}