import React, { useState } from 'react';
import * as A from "./AddUser.style"
import api from '../../util/customAxios';

const AddUser = ({setIsModalOpen,setUser}) => {
    const [inputs,setInputs] = useState({
        nickname:"",
        email:"",
        password:"",
        power:"",
    })

    function submit(){
        console.log(inputs)
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

    return (
        <A.Wrapper>
            <h2>등록하기</h2>
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
                    email:e.target.value
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
            <button onClick={submit} >등록하기</button>
        </A.Wrapper>
    );
};

export default AddUser;