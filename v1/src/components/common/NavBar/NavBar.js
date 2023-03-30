import customElement from "../../../classes/CustomElementClass";
import ui from "./ui";
import N from "./NavBar.style.scss"
import clickEffects from "./clickEffects";


class NavBar extends customElement{
    connectedCallback(){
        console.log("네브바생성")
        this.addInnerHtmlToThis(ui.addWrapper())  
        this.addInnerHtmlToThis(ui.addMenus(),`.${N.Wrapper}`)
        this.useClickEffects(clickEffects)
    }
}

customElements.define("nav-bar",NavBar)
export default document.createElement("nav-bar")