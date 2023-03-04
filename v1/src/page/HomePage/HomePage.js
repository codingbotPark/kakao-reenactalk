import H from "./HomePage.style.scss"
import TitleContent from "../../components/Home/TitleContent/TitleContent"

class HomePage extends HTMLElement{

    connectedCallback(){

        let WrapperDiv = document.createElement('div')
        this.appendChild(WrapperDiv)

        WrapperDiv.innerHTML = `
            <div class=${H.Wrapper} >
                <title-content/>
            </div>
        `
    }
}

customElements.define('home-page',HomePage)
export default '<home-page></home-page>'