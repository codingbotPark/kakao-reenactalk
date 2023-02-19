import Iphone from "../../components/Iphone/Iphone";
import chatModel from "../../model/chatModel";
import "./IphonePage.style.scss"

class IphonePage extends HTMLElement{
    connectedCallback(){

        let WrapperDiv = document.createElement('div')
        WrapperDiv.style.height = ((chatModel.content.length+2) * 100)+"vh"
        this.append(WrapperDiv)
        // 중복 에러 때문에 innerHtml으로 처리했다
        WrapperDiv.innerHTML = `<iphone-div chatModel='${JSON.stringify(chatModel)}' ></iphone-div>`
    }
}

customElements.define('iphone-page',IphonePage)
export default '<iphone-page></iphone-page>'