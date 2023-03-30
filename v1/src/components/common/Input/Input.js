import customElement from "../../../classes/CustomElementClass";
import I from "./Input.style.scss"
import ui from "./ui";

class CustomInput extends customElement{

    props = this.parseProps()

    connectedCallback(){
        const [className,placeHolder] = this.props
        const namedClass = className.className
        this.clearDom()
        this.addInnerHtmlToThis(ui.addWrapper({namedClass,placeHolder}))
        this.setMoveDeco()
    }

    setMoveDeco(){
        const input = this.querySelector(`.${I.Input}`)
        const inputDeco = this.querySelector(`.${I.InputDeco}`)

        input.addEventListener("input",(e) => {
            console.log(e.target.value);
            if(e.target.value){
                inputDeco.style.top = "-27px";
                inputDeco.style.left = "0px";
                inputDeco.style.fontWeight = "bold";
                inputDeco.style.color = "white";
            } else {
                inputDeco.style.top = "13px";
                inputDeco.style.left = "20px";
                inputDeco.style.fontWeight = "normal";
                inputDeco.style.color = "black";
            }
        })
    }

}

customElements.define('custom-input',CustomInput)
export default '<custom-input></custom-input>'