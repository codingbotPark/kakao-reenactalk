import I from "./Iphone.style.scss"

class Iphone extends HTMLElement{
    connectedCallback() {
        this.innerIphone()
    }

    innerIphone(){
        let bezel = document.createElement('div')
        bezel.className = I.bezel
        this.appendChild(bezel)

        let iphoneDisplay = document.createElement('div')
        iphoneDisplay.className = I.display
        // iphoneDisplay.style.width="100px"
        // iphoneDisplay.style.height="100px"
        // iphoneDisplay.style.backgroundColor="yellow"
        bezel.appendChild(iphoneDisplay)
    }

}

customElements.define('iphone-div',Iphone)
export default document.createElement('iphone-div')