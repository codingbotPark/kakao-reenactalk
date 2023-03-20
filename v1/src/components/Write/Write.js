import customElement from "../../classes/CustomElementClass";
import ui from "./ui";
import W from "./Write.style.scss"
import Iphone from "../Iphone/Iphone";

class Write extends customElement{
    props = this.parseProps()
    model = this.props[0]
    setModel = this.props[1]

    connectedCallback(){
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
    otherTextArea = null;
    setOnChangeEvent(){
        function inner(e){
        }
        const myChat = this.querySelector(`.${W.MyChat} > textarea`)
        const otherChat = this.querySelector(`.${W.OtherChat} > textarea`)
        myChat.addEventListener("input",(e) => {
            this.model.push("")
        })
    }
    setSubmitEvnet(){
        const myForm = this.querySelector(`.${W.MyContentAdder}`)
        const otherForm = this.querySelector(`.${W.OtherContentAdder}`)
        myForm.addEventListener("onSubmit",(e) => console.log("내 콘텐츠"))
        otherForm.addEventListener("onSubmit",(e) => console.log("다른사람 콘텐츠"))
    }
}

customElements.define("write-form",Write)
export default document.createElement("write-form")