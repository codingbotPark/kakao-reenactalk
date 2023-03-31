import customElement from "../../classes/CustomElementClass";
import S from "./SignIn.style.scss"
import ui from "./ui";
import Input from "../common/Input/Input";
import clickEffects from "./clickEffects";

class SignIn extends customElement{


    connectedCallback(){

        this.addInnerHtmlToThis(ui.addWrapper())
        this.addInnerHtmlToThis(ui.addInputs(),`.${S.InnerWrapper}`)
        this.addInnerHtmlToThis(ui.addSignInButton(),`.${S.InnerWrapper}`)
        this.addInnerHtmlToThis(ui.addSignUpButton(),`.${S.Wrapper}`)

        this.useClickEffects(clickEffects)
    }

}

customElements.define('sign-in',SignIn)
export default '<sign-in></sign-in>'