import Iphone from "../../components/Iphone/Iphone";
import Write from "../../components/Write/Write";
import W from "./WritePage.style.scss"

class WritePage extends HTMLElement{

    defaultModel = {
        backgroundColor:"#203e6b",
        displayColor:"#BACEE0",
        title:"새 채팅",
        content:[
            {
                // profile:"https://avatars.githubusercontent.com/u/85085375?v=4",
                // user:"하이",
                text:"하이", 
                effectMode:"static",
                effect:{
                    in:"fadeIn",
                    out:"fadeOut"
                }
            },{
                profile:"https://avatars.githubusercontent.com/u/85085375?v=4",
                user:"하이",
                text:"안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 ", 
                effectMode:"static",
                effect:{
                    in:"fadeIn",
                    out:"fadeOut"
                }
            },
        ]
    }


    connectedCallback(){
        this.innerHTML = `
            <div  
            class=${W.Wrapper}
            style="
            background-color:${this.defaultModel.backgroundColor};
            height:${(this.defaultModel.content.length * 100) + 200}vh;
            " 
            >
                <write-form chatModel='${JSON.stringify(this.defaultModel)}'  >
                </write-form>
            </div>
            <nav-bar></nav-bar>
        `

    }
    // <write-form chatModel='${JSON.stringify(model)}' ></write-form> 


    

}

customElements.define('write-page',WritePage)
export default '<write-page></write-page>'