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

    this.addInnerHtmlToThis(ui.addDisplayContent(),`.${I.display}`)
    this.addInnerHtmlToThis(ui.addChattingBar(),`.${I.bezel}`)

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

            if (document.body.clientHeight === Math.round(window.scrollY + window.innerHeight) && !freeViewWorked){ // 만약 끝까지 스크롤을 내렸다면
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

  /** 변경 후 가장 마지막 opacity가 1인 요소를 인자로 받는다 */
  repositionScroll({contents,lastVisibleElementIdx}){
    if (lastVisibleElementIdx<0) return
  
    const displayHeightWOChattingBar = this.displayElement.offsetHeight - 100
    const contentOffsetBottom = contents[lastVisibleElementIdx].offsetTop + contents[lastVisibleElementIdx].clientHeight
    console.log("---------1",displayHeightWOChattingBar);
    console.log("---------",contentOffsetBottom);
    if (displayHeightWOChattingBar < contentOffsetBottom){
      console.log("들어옴")
      this.displayElement.scrollTop = contentOffsetBottom - displayHeightWOChattingBar
    }

    // display의 clientHeight는 자식 요소들의 clientHeight의 합이다
    // 따라서 그 요소들의 길이를 +,- 연산으로 스크롤의 위치를 잡는다
    // 함수가 실행될 때마다 재연산하여 만약 freeViewMode에서 스크롤이 변경되어도 다시 맞춰줄 수 있게 한다
    console.log("currHeight",contents[lastVisibleElementIdx].clientHeight)
    console.log("curroffsetTop",contents[lastVisibleElementIdx].offsetTop)
    console.log("clientHeight",this.displayElement.clientHeight + 190)
    console.log("offsetHeight",this.displayElement.offsetHeight)
    console.log("INNERHEIGHT",this.displayElement.scrollHeight) // 90 + 100
    console.log("SCROLL",this.displayElement.scrollTop)
    

  }

}

customElements.define("iphone-div", Iphone);
export default document.createElement("iphone-div");
