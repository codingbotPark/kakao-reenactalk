import Iphone from "../../components/Iphone/Iphone";
import Write from "../../components/Write/Write";
import I from "./WritePage.style.scss"

class WritePage extends HTMLElement{

    model = {
        backgroundColor:"#203e6b",
        displayColor:"#BACEE0",
        title:"새 채팅",
        content:[
            {
                profie:"https://avatars.githubusercontent.com/u/85085375?v=4",
                user:"하이",
                text:"하이",
                effectMode:"static",
                effect:{
                    in:"fadeIn",
                    out:"fadeOut"
                }
            }
        ]
    }


    connectedCallback(){
        this.innerHTML = `
            <div style="background-color:${this.model.backgroundColor};" >
                <write-form chatModel='${JSON.stringify(this.model)}'  >
                </write-form>
            </div>
        `

    }
    // <write-form chatModel='${JSON.stringify(model)}' ></write-form> 


    

}

customElements.define('write-page',WritePage)
export default '<write-page></write-page>'