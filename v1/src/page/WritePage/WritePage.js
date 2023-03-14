import Iphone from "../../components/Iphone/Iphone";
import Write from "../../components/Write/Write";
import I from "./WritePage.style.scss"

class WritePage extends HTMLElement{
    connectedCallback(){

        let model = {
            backgroundColor:"#203e6b",
            displayColor:"#BACEE0",
            title:"새 채팅",
            content:[]
        }
        
        this.innerHTML = `
            <div style="background-color:${model.backgroundColor};" >
                <div>
                    <write-form>
                        <iphone-div chatModel='${JSON.stringify(model)}' ></iphone-div>
                    </write-form>
                </div>
            </div>
        `

    }

}

customElements.define('write-page',WritePage)
export default '<write-page></write-page>'