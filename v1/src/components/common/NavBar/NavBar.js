import customElement from "../../../classes/CustomElementClass";
import ui from "./ui";
import N from "./NavBar.style.scss"


class NavBar extends customElement{
    connectedCallback(){
        this.addInnerHtmlToThis(ui.addWrapper())  
        this.addInnerHtmlToThis(ui.addMenus(),`.${N.Wrapper}`)
    }
}

customElements.define("nav-bar",NavBar)
export default document.createElement("nav-bar")