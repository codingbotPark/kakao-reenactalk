import I from "./Iphone.style.scss";
import directEffect from "../../logic/effect/directEffect";
import ui from "./ui";
import clickEffects from "./clickEffects";
import customElement from "../../classes/CustomElementClass";

// innerHtml은 이전 내용을 없앤다
class Iphone extends customElement{
  // displayElement = null;
  // scrollBarElement = null;

  customScrollIsOpaciting = false;
  scrollBarFn = null;

  props = this.parseProps()
  clickAble = true

  connectedCallback() {
    const [chatModel,responsiveness,clickAble] = this.props
    // props로 들어온 clickAble가 특정 값이 있을 때 적용,
    // 없을 땐 기본값인 true로 지정
    this.clickAble = clickAble?? true

    /** @todo 왜 props로 넘기면 connectedCallback이 2번 실행될까 */
    this.addInnerHtmlToThis(ui.addDisplay(chatModel));
    this.addInnerHtmlToThis(ui.addButtons());
    this.addInnerHtmlToThis(ui.addMarks());
    this.addInnerHtmlToThis(ui.addDynamicIsland());
    this.addInnerHtmlToThis(ui.addHomeIndicator());

    this.addInnerHtmlToThis(ui.addChattingBar(), `.${I.bezel}`);
    this.addInnerHtmlToThis(ui.addCustomScrollBar(), `.${I.bezel}`);

    this.renderContent(chatModel,responsiveness);
    
    this.setCustomAttributes();
    
    
    // clickHandler는 일단 현재 static한 요소만 handler가 있기 때문에 놔둔다
    if (this.clickAble){
      this.useClickEffects(clickEffects)
    }
  }

  
  // 수정에서 활용하기 위해서 content를 따로 빼줬다
  static get observedAttributes() {
    return ["chatModel"];
  }
  attributeChangedCallback(chatModel,responsiveness=1) {
  }

  renderContent(chatModel,responsiveness=1) {
    this.removeContentElement()

    this.addInnerHtmlToThis(ui.addDisplayContent(chatModel), `.${I.display}`);
    this.setScrollBar(chatModel);
    this.controllContent(chatModel,responsiveness);
  }
  removeContentElement(){
    // content 삭제
    const display = this.querySelector(`.${I.display}`);
    [...display.children].forEach((content) => {
      content.remove()
    })
  }

  setCustomAttributes() {
  }
  
  setScrollBar() {
    const displayElement = this.querySelector(`.${I.display}`);
    const scrollBarElement = this.querySelector(`.${I.scrollGaugeThumb}`);


    const customSCrollBarWrapper = this.querySelector(
      `.${I.customScrollBarWrapper}`
    );

    scrollBarElement.style.height = `${Math.round(
      (displayElement.clientHeight * customSCrollBarWrapper.clientHeight) /
        displayElement.scrollHeight
    )}px`;

    // this.displayElement.scrollY : this.displayElement.clientHeight = 스크롤의 전체 크기(576) : scrollBarElement.height

    this.scrollBarFn = (e) => {
      this.moveCustomScroll();
      if (!this.customScrollIsOpaciting) {
        this.customScrollIsOpaciting = true;
        scrollBarElement.style.transition = "";
        scrollBarElement.style.opacity = 1;
        setTimeout(() => {
          this.customScrollIsOpaciting = false;
          scrollBarElement.style.transition = "opacity 0.5s";
          scrollBarElement.style.opacity = 0;
        }, 1500);
      }

      // scrollBarElement;
    };
  }
  freeViewMode() {
    const displayElement = this.querySelector(`.${I.display}`);
    const scrollBarElement = this.querySelector(`.${I.scrollGaugeThumb}`);

    // 1. 채팅방에 스크롤이 생기게 한다
    displayElement.style.overflowY = "auto";
    // 2. 눈에보이는 customScrollBar를 생기게 한다
    scrollBarElement.style.opacity = "1";
    // 3. customScrollBar의 위치 초기화
    this.moveCustomScroll();
    // 4. eventListener를 붙여서 customScrollBar를 움직인다
    displayElement.addEventListener("scroll", this.scrollBarFn);
  }
  staticViewMode() {
    const displayElement = this.querySelector(`.${I.display}`);
    const scrollBarElement = this.querySelector(`.${I.scrollGaugeThumb}`);

    // 1. 채팅방 스크롤 삭제
    displayElement.style.overflowY = "hidden";
    // 2. customScrollBar를 보이지 않게 한다
    scrollBarElement.style.opacity = "0";
    // 3. removeEventListener
    const result = displayElement.removeEventListener(
      "scroll",
      this.scrollBarFn
    );
  }

  /** 변경 후 가장 마지막 opacity가 1인 요소를 인자로 받는다 */
  repositionScroll({ contents, lastVisibleElementIdx }) {
    const displayElement = this.querySelector(`.${I.display}`);
    const scrollBarElement = this.querySelector(`.${I.scrollGaugeThumb}`);
    

    if (lastVisibleElementIdx < 0) return;

    const displayHeightWOChattingBar = displayElement.offsetHeight - 100;
    const contentOffsetBottom =
      contents[lastVisibleElementIdx].offsetTop +
      contents[lastVisibleElementIdx].clientHeight;

    // 스크롤 이동
    displayElement.scrollTop =
      contentOffsetBottom - displayHeightWOChattingBar;
  }
  moveCustomScroll() {
    const displayElement = this.querySelector(`.${I.display}`);
    const scrollBarElement = this.querySelector(`.${I.scrollGaugeThumb}`);

    const customSCrollBarWrapper = this.querySelector(
      `.${I.customScrollBarWrapper}`
    );
    const DSEMaxScrollTop =
      displayElement.scrollHeight - displayElement.clientHeight;
    const CSBMaxScrollTop =
      customSCrollBarWrapper.clientHeight - scrollBarElement.offsetHeight;

    scrollBarElement.style.top = `${Math.round(
      (displayElement.scrollTop * CSBMaxScrollTop) / DSEMaxScrollTop
    )}px`;

    // DE의 최대 scrollTop : 현재 스크롤 Top =
    // CS의 전체 세로 - CS의 세로 : CS의 position top
  }

  controllContent(chatModel,responsiveness) {
    // nodeList가 리턴된다
    let comments = this.querySelectorAll(`.${I.content}`);

    let scroll = window.scrollY * responsiveness;
    let windowSide = window.innerHeight;
    let scrollToIdx = Math.floor(scroll / windowSide);
    let freeViewWorked = false;

    // --------- dom 초기화
    comments.forEach((comment) => (comment.style.opacity = "0"));

    window.addEventListener("scroll", () => {
      // 계속 사이즈(스크롤 등?) 을 세팅해준다
      scroll = window.scrollY * responsiveness;
      windowSide = window.innerHeight;
      scrollToIdx = Math.floor(scroll / windowSide);

      comments.forEach((comment, idx) => {
        if (idx < scrollToIdx && comment.style.opacity === "0") {
          directEffect(
            chatModel.content[idx].effectMode,
            chatModel.content[idx].effect.in,
            comment
          );
          freeViewWorked = false;
          this.staticViewMode();
          this.repositionScroll({
            contents: comments,
            lastVisibleElementIdx: idx,
          });
        } else if (idx >= scrollToIdx && comment.style.opacity === "1") {
          directEffect(
            chatModel.content[idx].effectMode,
            chatModel.content[idx].effect.out,
            comment
          );
          freeViewWorked = false;
          this.staticViewMode();
          this.repositionScroll({
            contents: comments,
            lastVisibleElementIdx: idx - 1,
          });
        }

        // 만약 끝까지 스크롤을 내렸다면
        else if (
          Math.round((chatModel.content.length+2) * window.innerHeight / responsiveness)  <=
            Math.round(window.scrollY + (window.innerHeight / responsiveness)) &&
          !freeViewWorked
        ) 
        {
          freeViewWorked = true;
          this.freeViewMode();
          // 스크롤이 생기면 width가 밀리기 때문에 heigth가 늘어난다,
          // 따라서 reposition을 해준다
          this.repositionScroll({
            contents: comments,
            lastVisibleElementIdx: comments.length - 1, // 무조건 마지막 요소
          });
        }

      });
    });
  }


  // util
  getNumbersFromString(str) {    const regex = /[^0-9]/g;
    return Number(str.replace(regex, ""));
  }


}

customElements.define("iphone-div", Iphone);
export default document.createElement("iphone-div");
