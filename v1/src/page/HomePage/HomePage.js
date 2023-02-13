import useNavigate from "../../functions/useNavigate"
import H from "./HomePage.style.scss"

class HomePage extends HTMLElement{

    connectedCallback(){

        let WrapperDiv = document.createElement('div')
        this.appendChild(WrapperDiv)

        WrapperDiv.innerHTML = `
            <div class=${H.Wrapper} >
                <button class=${H.Button} >talk</button>
            </div>
        `

        let button = document.querySelector(`.${H.Button}`)
        button.addEventListener("click",() => {
            useNavigate('/talk')
        })


        // let iphone = WrapperDiv.appendChild(Home)
        
    }
}

customElements.define('home-page',HomePage)
export default '<home-page></home-page>'