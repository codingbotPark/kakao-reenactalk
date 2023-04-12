import styled from "styled-components"

export const Wrapper = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
`

export const NavBar = styled.ul`
    position:fixed;
    margin:0px;
    top:0px;
    left:0px;
    width:100vw;
    height:100px;
    display:flex;
    align-items:center;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
    padding-left:50px;
    >li{
        list-style:none;
        margin:20px;
        color:white;
        cursor:pointer;
        font-size:13px;
        padding:10px 26px;
        border-radius:30px;
        background-color: #0095f6;
        border:solid 1px lightgray;
    }
`

export const InnerWrapper = styled.div`
    margin-top:120px;
    width:100%;
    overflow:auto;
    flex-direction:column;
    display:flex;
    padding:50px;
`

export const ItemWrapper = styled.div`
    box-sizing:border-box;
    width:100%;
    height:70px;
    margin:20px 0px;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
    display:flex;
    align-items:center;
    border-radius:15px;
    justify-content:space-evenly;
`

export const ItemImage = styled.img`
    cursor:pointer;
    width:30px;
`