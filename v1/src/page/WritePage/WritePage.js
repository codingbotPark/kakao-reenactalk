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
                <write-form chatModel='${JSON.stringify(model)}' >
                </write-form>
            </div>
        `

    }


    

}

customElements.define('write-page',WritePage)
export default '<write-page></write-page>'