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
  const [users,setUser] = useState([])
  const [target,setTarget] = useState({})


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


  function deleteUser(id,idx){
    axios.delete(`http://localhost:9000/api/user?id=${id}`)
    .then((data) => {
      api.get('/user')
      .then((res) => {
          setUser(res.data.data)
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }

  function updateUser(e){
    setTarget(e)
    setIsModalOpen(true)
  }
  

  return (
    <A.Wrapper>
      <A.NavBar>
        {/* <li>유저리스트</li> */}
        <li onClick={() => setIsModalOpen(true)} >유저 등록</li>
      </A.NavBar>
      <A.InnerWrapper>
        {
          users.map((user,idx) => (
            <A.ItemWrapper key={user.id} >
              <div>ID : {user.id}</div>
              <div>닉네임 : {user.email}</div>
              <div>이메일 : {user.nickname}</div>
              <div>비밀번호 : {user.password}</div>
              <div>권한 : {user.power}</div>
              <div>생성날짜 : {user.createdAt}</div>
              <div>수정날짜 : {user.updatedAt}</div>
              <A.ItemImage src={deleteSvg} onClick={() => deleteUser(user.id,idx)} />
              <A.ItemImage src={updateSvg} onClick={() => updateUser(user)} />
            </A.ItemWrapper>
          ))
        }
      </A.InnerWrapper>
      {
        isModalOpen && (
          <Modal setter={setIsModalOpen} setTarget={setTarget} >
            <AddUser setIsModalOpen={setIsModalOpen} setUser={setUser} target={target} setTarget={setTarget} />
          </Modal>
        )
      }
    </A.Wrapper>
  );
}

export default App;
