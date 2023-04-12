import styled from "styled-components"

export const Wrapper = styled.div`
    width:700px;
    height:600px;
    display:flex;
    flex-direction:column;
    padding:20px;
    box-sizing:border-box;
    align-items:center;
    justify-content:space-around;

    border-radius:30px;
    background-color:white;
    box-shadow:4px 4px 15px rgba(0,0,0,0.6);
    
    >h2{
        margin-bottom:50px;
    }
    >input{
        height:40px;
        width:300px;
        font-size:large;
        outline:none;
        border-radius:10px;
        border:1px solid gray;
        
    }
    >button{
        margin-top:60px;
        width:300px;
        height:50px;
        border-radius:15px;
        color:white;
        cursor:pointer;
        background-color: #0095f6;
        border:solid 1px lightgray;
        display:flex;
        justify-content:center;
        align-items:center;
    }
`