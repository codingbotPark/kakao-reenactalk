import S from "./SignUpPage.style.scss"

class SignUpPage extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <div class=${S.Wrapper} >
                
            </div>
        `
    }
}

customElements.define('sign-up-page',SignUpPage);
export default '<sign-up-page></sign-up-page>'