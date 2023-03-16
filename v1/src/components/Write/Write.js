import customElement from "../../classes/CustomElementClass";
import ui from "./ui";
import W from "./Write.style.scss"
import Iphone from "../Iphone/Iphone";

class Write extends customElement{
    props = this.parseProps()

    connectedCallback(){
        

        this.addInnerHtmlToThis(ui.addWrapper())
        this.addInnerHtmlToThis(ui.addLeftSideBar(),`.${W.LeftSideBar}`)
        console.log(this.props[0])
        this.addIphone()
        this.addInnerHtmlToThis(ui.addRightSideBar(),`.${W.RightSideBar}`)
    }

    static get observedAttributes() {
        return ['chatModel'];
    }
    attributeChangedCallback(chatModel) {
        // 위의 속성들 중 하나가 수정되면 호출된다.
        console.log(chatModel)
    }

    addIphone(){
        this.addInnerHtmlToThis(`<iphone-div chatModel='${JSON.stringify(this.props[0])}' ></iphone-div>`,`.${W.IphoneWrapper}`)
    }
}

customElements.define("write-form",Write)
export default document.createElement("write-form")