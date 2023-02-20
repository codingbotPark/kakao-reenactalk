import I from "./Iphone.style.scss";
import plusSvg from "../../assets/Iphone/plusSvg.svg"
import getMouseSvg from "../../assets/Iphone/mouseSvg";
import leftArrowSvg from "../../assets/Iphone/leftArrowSvg.svg"
import searchSvg from "../../assets/Iphone/searchSvg.svg"
import menuSvg from "../../assets/Iphone/menuSvg.svg"

export default {
  /** 기본적인 display */
  // header는 휴대폰 기준으로 fixed 되어야 하기 때문에 bezel에 추가해줬다
  addDisplay: (chatModel) => {
    return `
        <div class=${I.bezel}>
            <header 
              class=${I.contentHeader} 
              style="background-color:${chatModel.displayColor}"
            >
              <div class=${I.contentHeaderElements}>
                <div class=${I.contentHeaderLeft} >
                  <img src=${leftArrowSvg} />
                </div>
                <h4>${chatModel.title}</h4>
                <div class=${I.contentHeaderRight} >
                  <img src=${searchSvg} />
                  <img src=${menuSvg} />
                </div>
              </div>
          </header>
        <div
            class=${I.display}
            style="background-color:${chatModel.displayColor}"
        >
          <div class=${I.contentTemp} ></div>
          </div>
        </div> 
        `;
  },
  addDisplayContent: (chatModel) => {
    return (chatModel.content.map((cont,idx) => (
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
    + 
    `<div class=${I.chattingBarTemp} ></div>`
    )
  },
  addChattingBar:() => {
    return `
      <div class=${I.chattingBar} >
        <div>
          <div class=${I.inputWrapper} >
            <img src=${plusSvg} alt="추가" />
            <input class=${I.chatInput} />
          </div>
        </div>
      </div>
    `
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
  },
  addHomeIndicator:() => {
    return `
      <div class=${I.HomeIndicatorWrapper}>
        <div></div>
      </div>
    `
  },
  addCustomScrollBar:()=>{
    return `
      <div class=${I.customScrollBarWrapper} >
        <div>
          <div class=${I.scrollGaugeThumb}></div>
        </div>
      </div>
    `
  },
  addNoticeScroll:() => {
    return `
    <div class=${I.noticeScroll} >
      <div>
        ${getMouseSvg(I.scrollDownPath)}
        <h3>마우스를 스크롤 해주세요</h3>
      </div>
    </div>
    `
  }
};
