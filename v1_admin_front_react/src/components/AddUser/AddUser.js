import React, { useState } from 'react';
import * as A from "./AddUser.style"
import api from '../../util/customAxios';

const AddUser = () => {
    const [inputs,setInputs] = useState({
        nickname:"",
        email:"",
        password:"",
        power:"",
    })

    function submit(){
        api.post("/user",inputs)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <A.Wrapper>
            <h2>등록하기</h2>
            <input placeholder='닉네임' defaultValue={inputs.nickname} />
            <input placeholder='이메일' defaultValue={inputs.email} />
            <input placeholder='비밀번호' defaultValue={inputs.password} />
            <input placeholder='권한' defaultValue={inputs.power} />
            <button onClick={submit} >등록하기</button>
        </A.Wrapper>
    );
};

export default AddUser;