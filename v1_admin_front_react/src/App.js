import { useEffect, useState } from "react";
import * as A from "./App.style"
import Modal from "./components/common/Modal/Modal";
import AddUser from "./components/AddUser/AddUser";

import deleteSvg from "./assets/delete.svg"
import updateSvg from "./assets/update.svg"

import api from "./util/customAxios"

import axios from "axios"

function App() {
  
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [users,setUser] = useState([
    
  ])

  useEffect(() => {
    api.get('/user')
    .then((res) => {
      console.log(res.data.data)
      setUser(res.data.data)
      
    })
    .catch((err) => {
      console.log(err)
    })
  },[])

  

  return (
    <A.Wrapper>
      <A.NavBar>
        {/* <li>유저리스트</li> */}
        <li onClick={() => setIsModalOpen(true)} >유저 등록</li>
      </A.NavBar>
      <A.InnerWrapper>
        {
          users.map((user) => (
            <A.ItemWrapper key={user.id} >
              <div>ID : {user.id}</div>
              <div>닉네임 : {user.email}</div>
              <div>이메일 : {user.nickname}</div>
              <div>비밀번호 : {user.password}</div>
              <div>권한 : {user.power}</div>
              <div>생성날짜 : {user.createdAt}</div>
              <div>수정날짜 : {user.updatedAt}</div>
              <A.ItemImage src={deleteSvg} />
              <A.ItemImage src={updateSvg} />
            </A.ItemWrapper>
          ))
        }
      </A.InnerWrapper>
      {
        isModalOpen && (
          <Modal setter={setIsModalOpen}>
            <AddUser/>
          </Modal>
        )
      }
    </A.Wrapper>
  );
}

export default App;
