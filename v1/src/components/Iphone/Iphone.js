import I from "./Iphone.style.scss";
import chat1 from "../../model/chat1";
import directEffect from "../../logic/effect/directEffect";
import ui from "./ui";

// innerHtml은 이전 내용을 없앤다
class Iphone extends HTMLElement {


  connectedCallback() {
    this.addInnerHtmlToThis(ui.addDisplay())
    this.addInnerHtmlToThis(ui.addButtons())
    this.addInnerHtmlToThis(ui.addMarks())
    this.addInnerHtmlToThis(ui.addDynamicIsland())
    this.addInnerHtmlToThis(ui.addHomeIndicator())

    this.addInnerHtmlToThis(ui.addDisplayContent(),`.${I.display}`)
    this.addInnerHtmlToThis(ui.addChattingBar(),`.${I.bezel}`)

    this.controllContent()
  }

  static get observedAttributes(){
    return ['content']
  }
  attributeChangedCallback(){
  }

  
  /**
   * @todo 마지막 한 칸은 스크롤 auto로 해서 볼 수 있게
   * @todo 스크롤을 그냥 직접 작은 사이즈로 만든다
   */
  controllContent(){
    // nodeList가 리턴된다
    let comments = document.querySelectorAll(`.${I.content}`)
    console.log(comments)

    let scroll = window.scrollY
    let windowSide = window.innerHeight
    let scrollToIdx = Math.floor(scroll/windowSide);
    let freeViewWorked = false

    comments.forEach((comment) => comment.style.opacity = "0")

    window.addEventListener("scroll",() => {
        // 계속 사이즈(스크롤 등?) 을 세팅해준다
        scroll = window.scrollY
        windowSide = window.innerHeight
        scrollToIdx = Math.floor(scroll/windowSide)

        comments.forEach((comment,idx) => {
            // 위의 요소들
            console.log(scrollToIdx)
            if (idx < scrollToIdx && comment.style.opacity === "0"){
                directEffect(
                    chat1.content[idx].effectMode,
                    chat1.content[idx].effect.in,
                    comment
                )
                freeViewWorked = false
                this.staticViewMode()
            } else if (idx >= scrollToIdx && comment.style.opacity === "1") { // 아래의 요소들
                directEffect(
                    chat1.content[idx].effectMode,
                    chat1.content[idx].effect.out,
                    comment
                )
                freeViewWorked = false
                this.staticViewMode()
            } 

            if (document.body.clientHeight === window.scrollY + window.innerHeight && !freeViewWorked){ // 만약 끝까지 스크롤을 내렸다면
              freeViewWorked = true
              this.freeViewMode()
            }
        })

    })

  }

  
  /** targetDom은 있으면 targetDom으로 간다 */
  addInnerHtmlToThis(html,querySelectValue){
    if (querySelectValue){
        let targetDom = document.querySelector(querySelectValue)
        targetDom.innerHTML=`
            ${targetDom.innerHTML}
            ${html}
        `
    } else{
        this.innerHTML = `
        ${this.innerHTML}
        ${html}
    `
    }
  }

  freeViewMode(){
    // 1. 채팅방에 스크롤이 생기게 한다
    let display = document.querySelector(`.${I.display}`)
    display.style.overflowY = "auto"
    
    console.log("hi")
  }

  /** 
   * @todo display를 전역으로 해서 사용해보기 
   * 기억하기론 document객체를 건드는 일은 실시간 성으로 작동된다고 들음
   * */
  staticViewMode(){
    // 1. 채팅방 스크롤 삭제
    let display = document.querySelector(`.${I.display}`)
    display.style.overflowY = "hidden"
    
  }

}

customElements.define("iphone-div", Iphone);
export default document.createElement("iphone-div");
