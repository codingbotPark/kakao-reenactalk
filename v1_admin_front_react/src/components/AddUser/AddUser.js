import React, { useState } from 'react';
import * as A from "./AddUser.style"
import api from '../../util/customAxios';
import { useEffect } from 'react';

const AddUser = ({setIsModalOpen,setUser,target,setTarget}) => {
    const [inputs,setInputs] = useState({
        nickname:"",
        email:"",
        password:"",
        power:"",
    })

    useEffect(() => {
        setInputs({
            nickname:target.nickname,
            email:target.email,
            password:target.password,
            power:target.power
        })
    },[])

    console.log(target)

    const mode = target.id
    function submit(){
        console.log(inputs)

        if (mode){
            api.put("/user",{id:target.id,...inputs})
            .then((res) => {
                api.get('/user')
                .then((res) => {
                    setUser(res.data.data)
                })
                setIsModalOpen(false)
            })
            .catch((err) => {
                console.log(err)
            })
        } else {
            api.post("/user",inputs)
            .then((res) => {
                api.get('/user')
                .then((res) => {
                    setUser(res.data.data)
                })
                setIsModalOpen(false)
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }

    return (
        <A.Wrapper>
            <h2>{mode ? "수정하기" : "등록하기"}</h2>
            <input placeholder='닉네임' 
            onChange={(e) => setInputs((prev) => {
                return {
                    ...prev,
                    nickname:e.target.value
                }
            })} 
            defaultValue={inputs.nickname} />
            <input placeholder='이메일' 
             onChange={(e) => setInputs((prev) => {
                return {
                    ...prev,
                    email:e.target.value
                }
            })} 
            defaultValue={inputs.email} />
            <input placeholder='비밀번호' 
             onChange={(e) => setInputs((prev) => {
                return {
                    ...prev,
                    password:e.target.value
                }
            })} 
            defaultValue={inputs.password} />
            <input placeholder='권한' 
             onChange={(e) => setInputs((prev) => {
                return {
                    ...prev,
                    power:e.target.value
                }
            })} 
            defaultValue={inputs.power} />
            <button onClick={submit} >{mode ? "수정하기" : "등록하기"}</button>
        </A.Wrapper>
    );
};

export default AddUser;