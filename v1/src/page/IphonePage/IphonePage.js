import Iphone from "../../components/Iphone/Iphone";
import chat1 from "../../model/chat1";
import "./IphonePage.style.scss"

class IphonePage extends HTMLElement{
    connectedCallback(){

        let WrapperDiv = document.createElement('div')
        WrapperDiv.style.height = ((chat1.content.length+2) * 100)+"vh"
        this.append(WrapperDiv)
        // 중복 에러 때문에 innerHtml으로 처리했다
        WrapperDiv.innerHTML = '<iphone-div></iphone-div>'
        
    }
}

customElements.define('iphone-page',IphonePage)
export default '<iphone-page></iphone-page>'