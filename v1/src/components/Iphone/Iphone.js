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

    this.controlleContent()
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
  controlleContent(){
    // nodeList가 리턴된다
    let comments = document.querySelectorAll(`.${I.content}`)
    // comments.forEach((i) => i.style.opacity = "0")

    let scroll = window.scrollY
    let windowSide = window.innerHeight
    let scrollToIdx = Math.floor(scroll/windowSide);

    comments.forEach((comment) => comment.style.opacity = "0")

    window.addEventListener("scroll",() => {
        // 계속 사이즈(스크롤 등?) 을 세팅해준다
        scroll = window.scrollY
        windowSide = window.innerHeight
        scrollToIdx = Math.floor(scroll/windowSide)

        comments.forEach((comment,idx) => {
            // 위의 요소들
            if (idx < scrollToIdx && comment.style.opacity === "0"){
                directEffect(
                    chat1.content[idx].effectMode,
                    chat1.content[idx].effect.in,
                    comment
                )
            } 
            // 아래의 요소들
            else if (idx >= scrollToIdx && comment.style.opacity === "1") { 
                directEffect(
                    chat1.content[idx].effectMode,
                    chat1.content[idx].effect.out,
                    comment
                )
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

}

customElements.define("iphone-div", Iphone);
export default document.createElement("iphone-div");
