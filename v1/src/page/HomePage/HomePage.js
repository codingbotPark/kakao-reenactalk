import H from "./HomePage.style.scss"
import TitleContent from "../../components/Home/TitleContent/TitleContent"
import NavBar from "../../components/common/NavBar/NavBar"
import HomeBar from "../../components/Home/HomeBar/HomeBar"

class HomePage extends HTMLElement{

    connectedCallback(){

        let WrapperDiv = document.createElement('div')
        this.appendChild(WrapperDiv)

        WrapperDiv.innerHTML = `
            <div class=${H.Wrapper} >
                <title-content></title-content>
                <nav-bar></nav-bar>
                <home-bar></home-bar>
            </div>
        `
    }
}

customElements.define('home-page',HomePage)
export default '<home-page></home-page>'