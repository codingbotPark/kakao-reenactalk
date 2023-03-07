import customElement from "../../../classes/CustomElementClass";
import ui from "./ui";
import T from "./TitleContent.style.scss"

class TitleContent extends customElement{

    phoneNums = null
    backdropFilter = null

    connectedCallback(){
        this.addInnerHtmlToThis(ui.addWrapper());
        this.addInnerHtmlToThis(ui.addPhones(),`.${T.Wrapper}`)


        const innerWrapper = document.querySelector(`.${T.InnerWrapper}`)

        window.addEventListener("resize",()=>{
            const phoneNums = Math.floor(window.innerWidth / 520)
            if (phoneNums !== this.phoneNums){
                this.phoneNums = phoneNums
                this.removePhones()
                this.addInnerHtmlToThis(ui.addPhones(),`.${T.Wrapper}`)
            }
            
        })

        window.addEventListener("scroll",() => {
            const backdropFilter = Math.floor(Math.floor((window.scrollY/window.innerHeight) * 10) * 3)

            if (this.backdropFilter !== backdropFilter){
                innerWrapper.style.backdropFilter = `blur(${Math.floor((window.scrollY/window.innerHeight) * 10) * 2}px)`
                console.log(innerWrapper.style)
                this.backdropFilter = backdropFilter
                console.log(innerWrapper.style.backdropFilter)
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