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
        return `
            <div class=${T.PhonesWrapper} >
                <iphone-div 
                chatModel='${JSON.stringify(mainPageChatModel[0])}' 
                responsiveness='20'
                />
            </div>
        `
    }
}