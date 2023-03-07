import customElement from "../../../classes/CustomElementClass";
import ui from "./ui";
import T from "./TitleContent.style.scss"

class TitleContent extends customElement{

    phoneNums = null
    connectedCallback(){
        this.addInnerHtmlToThis(ui.addWrapper());
        this.addInnerHtmlToThis(ui.addPhones(),`.${T.Wrapper}`)
        window.addEventListener("resize",()=>{
            const phoneNums = Math.floor(window.innerWidth / 520)
            if (phoneNums !== this.phoneNums){
                this.phoneNums = phoneNums
                this.removePhones()
                this.addInnerHtmlToThis(ui.addPhones(),`.${T.Wrapper}`)
            }
        })
    }   

    removePhones(){
        const phonesWrapper = document.querySelector(`title-content .${T.PhonesWrapper}`)
        phonesWrapper.remove()
    }
}

customElements.define("title-content",TitleContent)
export default document.createElement("title-content")