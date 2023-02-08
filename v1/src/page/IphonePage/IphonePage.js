import Iphone from "../../components/Iphone/Iphone";
import chat1 from "../../model/chat1";
import "./IphonePage.style.scss"

class IphonePage extends HTMLElement{
    connectedCallback(){

        let WrapperDiv = document.createElement('div')
        this.appendChild(WrapperDiv)
        WrapperDiv.style.height = ((chat1.content.length+2) * 100)+"vh"
        let iphone = WrapperDiv.appendChild(Iphone)
        
    }
}

customElements.define('iphone-page',IphonePage)
export default document.createElement('iphone-page')