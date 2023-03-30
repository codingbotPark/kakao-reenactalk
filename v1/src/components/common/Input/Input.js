import customElement from "../../../classes/CustomElementClass";
import I from "./Input.style.scss"
import ui from "./ui";

class CustomInput extends customElement{

    props = this.parseProps()

    connectedCallback(){
        const [className,placeHolder] = this.props
        const namedClass = className.className

        this.addInnerHtmlToThis(ui.addWrapper({namedClass,placeHolder}))
        this.setMoveDeco()
    }

    setMoveDeco(){
        const input = this.querySelector(`.${I.Input}`)
        input.addEventListener("change",() => {
            console.log("hi")
        })
    }

}

customElements.define('custom-input',CustomInput)
export default '<custom-input></custom-input>'