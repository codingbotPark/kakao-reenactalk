import Iphone from "../../components/Iphone/Iphone";
import Write from "../../components/Write/Write";
import I from "./WritePage.style.scss"

class WritePage extends HTMLElement{

    model = {
        backgroundColor:"#203e6b",
        displayColor:"#BACEE0",
        title:"새 채팅",
        content:[]
    }

    setModelContent = {setModelContent(key,payload){
        this.model[key] = payload
    }}

    connectedCallback(){
        this.innerHTML = `
            <div style="background-color:${this.model.backgroundColor};" >
                <write-form chatModel='${JSON.stringify(this.model)}' setModelContent='${JSON.stringify(this.setModelContent)}'  >
                </write-form>
            </div>
        `

    }
    // <write-form chatModel='${JSON.stringify(model)}' ></write-form> 


    

}

customElements.define('write-page',WritePage)
export default '<write-page></write-page>'