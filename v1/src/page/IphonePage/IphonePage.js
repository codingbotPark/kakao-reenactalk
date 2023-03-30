import Iphone from "../../components/Iphone/Iphone";
import NavBar from "../../components/common/NavBar/NavBar";
import chatModel from "../../model/chatModel";
import "./IphonePage.style.scss"

class IphonePage extends HTMLElement{


    connectedCallback(){
        this.innerHTML = `
            <div style="height:${(chatModel.content.length+2) * 100}vh; background-color:${chatModel.backgrondColor};" >
                <div>
                    <iphone-div chatModel='${JSON.stringify(chatModel)}' ></iphone-div>
                </div>
            </div>
            <nav-bar></nav-bar>
        `
    }
}

customElements.define('iphone-page',IphonePage)
export default '<iphone-page></iphone-page>'