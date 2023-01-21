import I from "./Iphone.style.scss";
import chat1 from "../../model/chat1";

// innerHtml은 이전 내용을 없앤다
class Iphone extends HTMLElement {
  connectedCallback() {
    this.addDisplay()
    this.addDynamicIsland()
    this.addMarks()
    this.addButtons()
  }

  addDisplay(){
    // dispaly
    this.addInnerHtmlToThis(`
        <div class=${I.bezel}>
          <div
            class=${I.display}
            style="background-color:${chat1.displayColor}"
          >
            ${
                chat1.content.map((cont,idx) => (
                    `<div
                        class=${cont.user ? I.otherContent : I.myContent }
                    >${cont.profile ? 
                        `
                        <div class=${I.profileImgWrapper}>

                        </div>
                        <div class=${I.otherText} >
                            ${cont.text}
                        </div>
                        `
                    :
                        `
                        <div class=${I.myText} >
                            ${cont.text}
                        </div>
                        `
                }</div>`
                ))
            }
          </div>
        </div>
    `);
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


  addInnerHtmlToThis(html) {
    this.innerHTML = `
            ${this.innerHTML}
            ${html}
    `;
  }

}

customElements.define("iphone-div", Iphone);
export default document.createElement("iphone-div");
