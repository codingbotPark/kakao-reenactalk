import chat1 from "../../model/chat1";
import I from "./Iphone.style.scss";

export default {
  /** 기본적인 display */
  addDisplay: () => {
    return `
        <div class=${I.bezel}>
            <header 
              class=${I.contentHeader} 
              style="background-color:${chat1.displayColor}"
            >
              <div></div>
        </header>
        <div
            class=${I.display}
            style="background-color:${chat1.displayColor}"
        >
          <div class=${I.contentTemp} ></div>
          </div>
        </div> 
        `;
  },
  addDisplayContent: () => {
    return (chat1.content.map((cont,idx) => (
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
    )).join(""))
  },
  addButtons:() => {
    return `
      <button class=${I.muteButton} ></button>
      <button class=${I.volumeUpButton} ></button>
      <button class=${I.volumeDownButton} ></button>
      <button class=${I.powerButton} ></button>
    `
  },
  addMarks:() => {
    return `
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
    `
  },
  addDynamicIsland:() => {
    return `
      <div class=${I.dynamicIslandWrapper}>
        <div class=${I.dynamicIsland}>
          <div class=${I.selfCamera}>
            <div class=${I.selfCameraLens}></div>
          </div>
        </div>
      </div>
    `
  }
};
