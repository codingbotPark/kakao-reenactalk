export default class customElement extends HTMLElement {
  
  parseProps() {
    const parsedProps = this.getAttributeNames().map((propsName) =>{
      if (propsName === "children"){
        return false
      }
      return JSON.parse(this.getAttribute(propsName))
    });
    return parsedProps.filter((props) => props)
  }
  parseChildren(){
    this.clearDom()
    return childrens
  } 


  addEventToDOM({ eventKind, selector, FN }) {
    const dom = this.querySelector(selector);
    dom.addEventListener(eventKind, FN);
  }
  clearDom(querySelectValue){
    if (querySelectValue){
      const dom = this.querySelector(querySelectValue)
      dom.innerHTML = ""
    } else {
      this.innerHTML = ""
    }
  }

  /** targetDom은   있으면 targetDom으로 간다 */
  addInnerHtmlToThis(html, querySelectValue, position="before") {
    
    function exec(target,html,position){
      const temp = position === "after" ? `
        ${html}
        ${target.innerHTML}
      ` : `
        ${target.innerHTML}
        ${html}
      `
      target.innerHTML = temp
    }

    if (querySelectValue) {
      try{
        let targetDom = this.querySelector(querySelectValue);
        exec(targetDom,html,position)
      }catch(err){
        console.error("addInnerHtmlToThis에 들어온 쿼리로 요소를 찾을 수 없습니다")
      }
      
    } else {
      exec(this,html,position)
    }
  }

  useClickEffects(clickEffects){
    clickEffects.forEach((clickEffect) => {
      console.log(clickEffect,"click이벤트 적용")
      this.addEventToDOM({
        eventKind:'click',
        selector:clickEffect.selector,
        FN:clickEffect.FN
      });
    });
  }

  disconnectedCallback() {
    console.log('Custom square element removed from page.');
  }

  
}
