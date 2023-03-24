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
        this.addInnerHtmlToThis(ui.addSideBar(),`.${W.LeftSideBar}`)
        this.addIphone()

        this.addInnerHtmlToThis(ui.addOtherChatForm(),`.${W.ContentAdder}`)

        this.setTextAreaHeights()
        this.setOnChangeEvent()

        this.setClickChangeMode()
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
        if (myChat) {
            myChat.addEventListener("input",inner)
        } else if(otherChat) {
            otherChat.addEventListener("input",inner)
        }
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

        // myChat.addEventListener("input",(e) => {
        //     if (!this.myTextArea){
        //         this.model.content.push("하이")
        //     }
        //     console.log(this.myTextList)
        //     console.log(this.model)
        //     this.myTextArea = e.target.value
        // })
    }
    setSubmitEvnet(){
        const myForm = this.querySelector(`.${W.MyContentAdder}`)
        const otherForm = this.querySelector(`.${W.OtherContentAdder}`)
        myForm.addEventListener("submit",(e) => console.log("내 콘텐츠"))
        otherForm.addEventListener("submit",(e) => console.log("다른사람 콘텐츠"))
    }


    setClickChangeMode(){
        const changeModeButton = document.querySelector(`.${W.ModeChanger}`)
        changeModeButton.addEventListener("click",(e) => this.changeMode(e.currentTarget))
    }
    changeMode(target){
        const changeTo = target.firstElementChild.className.split("--")[0]
        console.log(changeTo)
        if (changeTo === "ChangeToMy"){
            this.clearDom(`.${W.ContentAdder}`)
            this.addInnerHtmlToThis(ui.addMyChatForm(),`.${W.ContentAdder}`)
            this.setClickChangeMode()
            this.setTextAreaHeights()
        } else if (changeTo === "ChangeToOther"){
            this.clearDom(`.${W.ContentAdder}`)
            this.addInnerHtmlToThis(ui.addOtherChatForm(),`.${W.ContentAdder}`)
            this.setClickChangeMode()
            this.setTextAreaHeights()
        }
    }
}

customElements.define("write-form",Write)
export default document.createElement("write-form")