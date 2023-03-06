import T from "./TitleContent.style.scss"
import Iphone from "../../Iphone/Iphone"
import mainPageChatModel from "../../../model/mainPageChatModel"

export default {
    addWrapper:() => {
        return `
            <div class=${T.Wrapper}>
                <div class=${T.InnerWrapper} >
                    <h1>카카오톡 재연</h1>
                    <p>기억하고싶은 카카오톡 내용을 웹에서 만들어 공유해보세요</p>
                </div>
            </div>
        `
    },
    addPhones:() => {
        const phoneArr = [...Array(Math.floor(window.innerWidth / 400))].map((i,idx) => {
            const orderLine = idx / (window.innerWidth / 400)
            // console.log(orderLine)
            console.log(Math.floor(Math.random() * 20) + 20)
            // style="transform:rotate()"
            return `
            <iphone-div
            chatModel='${JSON.stringify(mainPageChatModel[idx])}' 
            responsiveness='${Math.floor(Math.random() * 20) + 20}'
            clickAble='false'
            ></iphone-div>
            `
        })
        console.log(phoneArr)
        return `
        <div class=${T.PhonesWrapper} >
            ${phoneArr.join("")}
        </div>
        `
            
    }
}