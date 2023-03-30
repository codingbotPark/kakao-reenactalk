import customElement from "../../classes/CustomElementClass";
import S from "./SignIn.style.scss"
import ui from "./ui";
import Input from "../common/Input/Input";

class SignIn extends customElement{


    connectedCallback(){

        this.addInnerHtmlToThis(ui.addWrapper())
        this.addInnerHtmlToThis(ui.addInputs(),`.${S.Wrapper}`)
        this.addInnerHtmlToThis(ui.addSignInButton(),`.${S.Wrapper}`)
    }

}

customElements.define('sign-in',SignIn)
export default '<sign-in></sign-in>'