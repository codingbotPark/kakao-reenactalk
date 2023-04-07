import S from "./SignInPage.style.scss"
import SignIn from "../../components/Sign/SignIn/SignIn"

class SignInPage extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <sign-in></sign-in>
        `
    }

}

customElements.define('sign-in-page',SignInPage)
export default '<sign-in-page></sign-in-page>'