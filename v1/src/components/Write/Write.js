import customElement from "../../classes/CustomElementClass";
import ui from "./ui";
import W from "./Write.style.scss"
import Iphone from "../Iphone/Iphone";

class Write extends customElement{
    props = this.parseProps()
    model = null

    connectedCallback(){
        [this.model] = this.props

        this.addInnerHtmlToThis(ui.addWrapper())
        this.addInnerHtmlToThis(ui.addLeftSideBar(),`.${W.LeftSideBar}`)
        this.addIphone()
        this.addInnerHtmlToThis(ui.addRightSideBar(),`.${W.RightSideBar}`)

        this.setTextAreaHeights()
        this.setOnChangeEvent()
    }

    static get observedAttributes() {
        return ['chatModel'];
    }
    attributeChangedCallback(chatModel) {
        // 위의 속성들 중 하나가 수정되면 호출된다.
        console.log(chatModel,setModelContent)
    }

    addIphone(){
        this.addInnerHtmlToThis(`<iphone-div chatModel='${JSON.stringify(this.model)}' ></iphone-div>`,`.${W.IphoneWrapper}`)
    }



    setTextAreaHeights(){
        function inner(e){
            e.target.style.height = "1px"
            e.target.style.height = (e.target.scrollHeight-4)+"px"
        }
        const myChat = this.querySelector(`.${W.MyChat} > textarea`)
        const otherChat = this.querySelector(`.${W.OtherChat} > textarea`)
        myChat.addEventListener("input",inner)
        otherChat.addEventListener("input",inner)
    }

    myTextArea = null;
    myTextList = null
    otherTextArea = null;
    otherTextList = null
    
    setOnChangeEvent(){
        const myChat = this.querySelector(`.${W.MyChat} > textarea`)
        const otherChat = this.querySelector(`.${W.OtherChat} > textarea`)

        this.myTextList = this.model.content.filter((content) => !content.profile)
        this.otherTextList = this.model.content.filter((content) => content.profile)

        console.log(this.myTextList)
        console.log(this.otherTextList)

        myChat.addEventListener("input",(e) => {
            if (!this.myTextArea){
                this.model.content.push("하이")
            }
            console.log(this.myTextList)
            console.log(this.model)
            this.myTextArea = e.target.value
        })
    }
    setSubmitEvnet(){
        const myForm = this.querySelector(`.${W.MyContentAdder}`)
        const otherForm = this.querySelector(`.${W.OtherContentAdder}`)
        myForm.addEventListener("submit",(e) => console.log("내 콘텐츠"))
        otherForm.addEventListener("submit",(e) => console.log("다른사람 콘텐츠"))
    }
}

customElements.define("write-form",Write)
export default document.createElement("write-form")