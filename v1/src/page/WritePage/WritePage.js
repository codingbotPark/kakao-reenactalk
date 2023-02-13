import Iphone from "../../components/Iphone/Iphone";
import I from "./WritePage.style.scss"

class WritePage extends HTMLElement{
    connectedCallback(){
        
        let WrapperDiv = document.createElement('div')
        this.appendChild(WrapperDiv)

    }

}

customElements.define('write-page',WritePage)
export default '<write-page></write-page>'