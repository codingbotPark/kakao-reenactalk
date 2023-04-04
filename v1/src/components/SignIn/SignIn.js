import customElement from "../../classes/CustomElementClass";
import S from "./SignIn.style.scss"
import SignS from "../Sign/Sign.style.scss"
/** 
 * @todo 그냥 style을 상속받아서 sign의 style을 signIn에게 상속시키기,
 * 이렇게 안 하니깐 많은 import가 필요하게 된다
 */
import ui from "./ui";
import SignUi from "../Sign/ui"
import clickEffects from "./clickEffects";

class SignIn extends customElement{


    connectedCallback(){

        this.addInnerHtmlToThis(SignUi.addWrapper("로그인"))
        this.addInnerHtmlToThis(ui.addInputs(),`.${SignS.InnerWrapper}`)
        this.addInnerHtmlToThis(SignUi.addSignInButton("Login"),`.${SignS.InnerWrapper}`)
        this.addInnerHtmlToThis(ui.addSignUpButton(),`.${SignS.Wrapper}`)

        this.useClickEffects(clickEffects)

    }

}

customElements.define('sign-in',SignIn)
export default '<sign-in></sign-in>'