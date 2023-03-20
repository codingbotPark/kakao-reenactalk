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

        const setModelContent = {setModelContent(content){
            model.content = content
        }}
        
        this.innerHTML = `
            <div style="background-color:${model.backgroundColor};" >
                <write-form chatModel='${JSON.stringify(model)}' setModelContent='${JSON.stringify(setModelContent)}'  >
                </write-form>
            </div>
        `

    }
    // <write-form chatModel='${JSON.stringify(model)}' ></write-form> 


    

}

customElements.define('write-page',WritePage)
export default '<write-page></write-page>'