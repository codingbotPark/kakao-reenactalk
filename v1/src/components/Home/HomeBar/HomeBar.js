import customElement from "../../../classes/CustomElementClass";
import ui from "./ui"
import H from "./HomeBar.style.scss"
import clickEffects from "./clickEffects";

class HomeBar extends customElement{
    connectedCallback(){
        this.addInnerHtmlToThis(ui.addWrapepr())
        this.addInnerHtmlToThis(ui.addSignButtons(),`.${H.innerWrapper}`)
        this.useClickEffects(clickEffects)
    }
}

customElements.define("home-bar",HomeBar)
export default document.createElement("home-bar")