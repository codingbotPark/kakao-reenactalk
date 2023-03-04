import useNavigate from "../../functions/useNavigate"
import H from "./HomePage.style.scss"

class HomePage extends HTMLElement{

    connectedCallback(){

        let WrapperDiv = document.createElement('div')
        this.appendChild(WrapperDiv)

        WrapperDiv.innerHTML = `
            <div class=${H.Wrapper} >
                <
            </div>
        `
    }
}

customElements.define('home-page',HomePage)
export default '<home-page></home-page>'