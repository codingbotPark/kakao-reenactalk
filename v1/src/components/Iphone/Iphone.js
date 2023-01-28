import I from "./Iphone.style.scss";
import chat1 from "../../model/chat1";
import directEffect from "../../logic/effect/directEffect";
import ui from "./ui";

// innerHtml은 이전 내용을 없앤다
class Iphone extends HTMLElement {

  displayElement = null

  connectedCallback() {
    this.addInnerHtmlToThis(ui.addDisplay())
    this.addInnerHtmlToThis(ui.addButtons())
    this.addInnerHtmlToThis(ui.addMarks())
    this.addInnerHtmlToThis(ui.addDynamicIsland())
    this.addInnerHtmlToThis(ui.addHomeIndicator())

    this.addInnerHtmlToThis(ui.addChattingBar(),`.${I.bezel}`)
    this.addInnerHtmlToThis(ui.addCustomScrollBar(),`.${I.bezel}`)
    this.addInnerHtmlToThis(ui.addDisplayContent(),`.${I.display}`)

    this.setCustomAttributes()

    this.controllContent()
  }

  static get observedAttributes(){
    return ['content']
  }
  attributeChangedCallback(){
  }

  setCustomAttributes(){
    this.displayElement = document.querySelector(`.${I.display}`)
  }

  
  /**
   * @todo 마지막 한 칸은 스크롤 auto로 해서 볼 수 있게
   * @todo 스크롤을 그냥 직접 작은 사이즈로 만든다
   */
  controllContent(){
    // nodeList가 리턴된다
    let comments = document.querySelectorAll(`.${I.content}`)

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
            if (idx < scrollToIdx && comment.style.opacity === "0"){
                directEffect(
                    chat1.content[idx].effectMode,
                    chat1.content[idx].effect.in,
                    comment
                )
                freeViewWorked = false
                this.staticViewMode()
                this.repositionScroll({
                  contents:comments,
                  lastVisibleElementIdx:idx
                })
            } else if (idx >= scrollToIdx && comment.style.opacity === "1") {
                directEffect(
                    chat1.content[idx].effectMode,
                    chat1.content[idx].effect.out,
                    comment
                )
                freeViewWorked = false
                this.staticViewMode()
                this.repositionScroll({
                  contents:comments,
                  lastVisibleElementIdx:idx-1
                })
            }   

            // 만약 끝까지 스크롤을 내렸다면
            if (document.body.clientHeight === Math.round(window.scrollY + window.innerHeight) && !freeViewWorked){ 
              freeViewWorked = true
              this.freeViewMode()
              // 스크롤이 생기면 width가 밀리기 때문에 heigth가 늘어난다,
              // 따라서 reposition을 해준다
              this.repositionScroll({
                contents:comments,
                lastVisibleElementIdx:comments.length-1 // 무조건 마지막 요소
              })
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
    this.displayElement.style.overflowY = "auto"
  }
  staticViewMode(){
    // 1. 채팅방 스크롤 삭제
    this.displayElement.style.overflowY = "hidden"
  }

  /** 변경 후 가장 마지막 opacity가 1인 요소를 인자로 받는다 */
  repositionScroll({contents,lastVisibleElementIdx}){
    if (lastVisibleElementIdx<0) return

    const displayHeightWOChattingBar = this.displayElement.offsetHeight - 100
    const contentOffsetBottom = contents[lastVisibleElementIdx].offsetTop + contents[lastVisibleElementIdx].clientHeight

    // 스크롤 이동
    this.displayElement.scrollTop = contentOffsetBottom - displayHeightWOChattingBar
  }

}

customElements.define("iphone-div", Iphone);
export default document.createElement("iphone-div");
