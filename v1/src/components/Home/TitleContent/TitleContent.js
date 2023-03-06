import customElement from "../../../classes/CustomElementClass";
import ui from "./ui";
import T from "./TitleContent.style.scss"

class TitleContent extends customElement{

    connectedCallback(){
        this.addInnerHtmlToThis(ui.addWrapper());
        this.addInnerHtmlToThis(ui.addPhones(),`.${T.Wrapper}`)
        window.addEventListener("resize",()=>{
            this.removePhones()
            this.addInnerHtmlToThis(ui.addPhones(),`.${T.Wrapper}`)
        })
    }

    removePhones(){
        const phonesWrapper = document.querySelector(`title-content .${T.PhonesWrapper}`)
        phonesWrapper.remove()
    }
}

customElements.define("title-content",TitleContent)
export default document.createElement("title-content")