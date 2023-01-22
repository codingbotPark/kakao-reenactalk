import I from "./Iphone.style.scss";
import chat1 from "../../model/chat1";
import directEffect from "../../logic/effect/directEffect";

// innerHtml은 이전 내용을 없앤다
class Iphone extends HTMLElement {

  connectedCallback() {
    this.addDisplay()
    this.addDynamicIsland()
    this.addMarks()
    this.addButtons()
    
    this.controlleContent()
  }

  static get observedAttributes(){
    return ['content']
  }
  attributeChangedCallback(){
  }


  addDisplay(){
    // dispaly
    this.editDisplayContent()
    this.addInnerHtmlToThis(`
        <div class=${I.bezel}>
            <header class=${I.contentHeader} >
                <div></div>
            </header>
            <div
                class=${I.display}
                style="background-color:${chat1.displayColor}"
            >

            <div class=${I.contentTemp} ></div>
            ${this.displayContent}
          </div>
        </div>
    `);

    // 선택한 displayColor에 맞게 style파일에 전달
    let header = document.querySelector(`.${I.contentHeader}`)
    header.style.setProperty("--displayColor",chat1.displayColor)
  }

  addDynamicIsland(){
        // dynamicIsland
        this.addInnerHtmlToThis(`
        <div class=${I.dynamicIslandWrapper}>
        <div class=${I.dynamicIsland}>
            <div class=${I.selfCamera}>
                <div class=${I.selfCameraLens}></div>
            </div>
        </div>
    </div>
        `);
  }

  addMarks(){
    // marks
    this.addInnerHtmlToThis(`
        <div>
        <div 
            class=${I.sideMark1}  
            style="top:100px;left:0px;"
        ></div>
        <div 
            class=${I.sideMark1} 
            style="bottom:100px;left:0px;"
        ></div>
        <div 
            class=${I.sideMark1} 
            style="top:100px;right:0px;"
        ></div>
        <div 
            class=${I.sideMark1} 
            style="bottom:100px;right:0px;"
        ></div>
        <div 
            class=${I.sideMark2} 
            style="right:100px;top:0px;"
        ></div>
        <div 
            class=${I.sideMark2}
            style="left:100px;bottom:0px;"
        ></div>
    </div>
        `);
  }

  addButtons(){
        // buttons
        this.addInnerHtmlToThis(`
        <button class=${I.muteButton} ></button>
        <button class=${I.volumeUpButton} ></button>
        <button class=${I.volumeDownButton} ></button>
        <button class=${I.powerButton} ></button>
    `)
  }

  editDisplayContent(){
    this.displayContent = chat1.content.map((cont,idx) => (
        `<div
            class="${cont.user ? I.otherContent : I.myContent} ${I.content} ${I[cont.effectMode]}"
        >${cont.profile ? 
            `
            <img class=${I.profile} src=${cont.profile} />
            <div class=${I.otherTextWrapper} >
                <div class=${I.otherUser} >
                    ${cont.user}
                </div>
                <div class=${I.otherText} >
                    <div class=${I.otherTextDeco} ></div>
                    ${cont.text}
                </div>
            </div>
            `
        :
            `
            <div class=${I.myText} >
                <div class=${I.myTextDeco}></div>
                ${cont.text}
            </div>
            `
    }</div>`
    )).join("")
  }
  
  /**
   * @todo 마지막 한 칸은 스크롤 auto로 해서 볼 수 있게
   */
  controlleContent(){
    let display = document.querySelectorAll(`.${I.content}`)
    window.addEventListener("scroll",() => {
        // ui버그가 발생할 수 있어서 for문으로 다 돌려준다
        let scroll = window.scrollY
        let windowSide = window.innerHeight
        let scrollToIdx = Math.floor(scroll/windowSide)

        // make display flex
        for (let i = 0;i<scrollToIdx;i++){
            // 이전 값과 비교를 해서 효과가 한 번만 일어나게 한다
            if (!(display[i].style.opacity === "1")){
                directEffect(
                    chat1.content[i].effectMode,
                    chat1.content[i].effect.split("/")[0],
                    display[i]
                    )
            }
        }
        // make display none
        for (let i = scrollToIdx;i<display.length;i++){
            if (!(display[i].style.opacity === "0")){
                // doEffect
                directEffect(
                    chat1.content[i].effectMode,
                    chat1.content[i].effect.split("/")[1],
                    display[i],
                )
            }
        }
    })


  }


  addInnerHtmlToThis(html) {
    this.innerHTML = `
            ${this.innerHTML}
            ${html}
    `;
  }

}

customElements.define("iphone-div", Iphone);
export default document.createElement("iphone-div");
