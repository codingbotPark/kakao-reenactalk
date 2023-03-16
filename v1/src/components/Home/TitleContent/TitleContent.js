import customElement from "../../../classes/CustomElementClass";
import ui from "./ui";
import T from "./TitleContent.style.scss"

class TitleContent extends customElement{

    phoneNums = null
    backdropFilter = null

    windowFunction = null

    connectedCallback(){
        this.addInnerHtmlToThis(ui.addWrapper());
        this.addInnerHtmlToThis(ui.addPhones(),`.${T.Wrapper}`)

        const innerWrapper = document.querySelector(`.${T.InnerWrapper}`)
        this.windowFunction = () => {
            const backdropFilter = Math.floor(Math.floor((window.scrollY/window.innerHeight) * 10) * 3)
            if (this.backdropFilter !== backdropFilter){
                innerWrapper.style.backdropFilter = `blur(${Math.floor((window.scrollY/window.innerHeight) * 10) * 2}px)`
                this.backdropFilter = backdropFilter
            }
        }

        this.addEventListener("resize",() => {
            const phoneNums = Math.floor(window.innerWidth / 520)
            if (phoneNums !== this.phoneNums){
                this.phoneNums = phoneNums
                this.removePhones()
                this.addInnerHtmlToThis(ui.addPhones(),`.${T.Wrapper}`)
            }
            
        })

        window.addEventListener("scroll",this.windowFunction)
    }


    removePhones(){
        const phonesWrapper = document.querySelector(`title-content .${T.PhonesWrapper}`)
        phonesWrapper.remove()
    }

    disconnectedCallback(){
        window.removeEventListener("scroll",this.windowFunction)  
    }

}

customElements.define("title-content",TitleContent)
export default document.createElement("title-content")