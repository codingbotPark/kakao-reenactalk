import customElement from "../../classes/CustomElementClass";
import ui from "./ui";
import W from "./Write.style.scss"

class Write extends customElement{
    connectedCallback(){
        const childrens = this.parseChildren()

        this.addInnerHtmlToThis(ui.addWrapper())
        this.addInnerHtmlToThis(ui.addLeftSideBar(),`.${W.Wrapper}`)
        this.addInnerHtmlToThis(childrens[0].outerHTML,`.${W.Wrapper}`)
        this.addInnerHtmlToThis(ui.addRightSideBar(),`.${W.Wrapper}`)

    }

}

customElements.define("write-form",Write)
export default document.createElement("write-form")