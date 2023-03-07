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
        const phoneArr = Array.from({length:(Math.floor(window.innerWidth / 520)) * Math.ceil((window.innerHeight * 0.7) / 840)},() => null)

        const phones = phoneArr.map((phone,idx) => {
            const orderLine = Math.floor(idx / Math.floor(window.innerWidth / 520))
            const degree = orderLine % 2 === 0 ? 35 : -35
            const responsiveness = Math.floor(Math.random() * 20) + 20
            return `
            <div style="transform:rotate(${degree}deg);">
            <iphone-div chatModel='${JSON.stringify(mainPageChatModel[idx]?? mainPageChatModel[1])}' responsiveness='${responsiveness}' clickAble='false' ></iphone-div>
            </div>
            `
        })
        return `<div class=${T.PhonesWrapper} >
            ${phones.join("\n")}
        </div>`
            
    }
}