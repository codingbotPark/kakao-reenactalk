import React from 'react';
import * as A from "./AddUser.style"

const AddUser = () => {
    return (
        <A.Wrapper>
            <h2>등록하기</h2>
            <input placeholder='닉네임' />
            <input placeholder='이메일' />
            <input placeholder='비밀번호' />
            <input placeholder='권한' />
            <button>등록하기</button>
        </A.Wrapper>
    );
};

export default AddUser;