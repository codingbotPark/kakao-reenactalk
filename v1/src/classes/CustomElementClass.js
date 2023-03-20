export default class customElement extends HTMLElement {
  
  parseProps() {
    const parsedProps = this.getAttributeNames().map((propsName) =>{
      if (propsName === "children"){
        return false
      }
      return JSON.parse(this.getAttribute(propsName))
    });
    console.log(parsedProps)
    console.log(this.getAttributeNames())
    return parsedProps.filter((props) => props)
  }
  parseChildren(){
    const childrens = [...this.children]
    this.clearDom()
    return childrens
  }


  addEventToDOM({ eventKind, selector, FN }) {
    const dom = document.querySelector(selector);
    dom.addEventListener(eventKind, FN);
  }
  clearDom(){
    this.innerHTML = ""
  }

  /** targetDom은 있으면 targetDom으로 간다 */
  addInnerHtmlToThis(html, querySelectValue) {
    if (querySelectValue) {

      try{
        let targetDom = this.querySelector(querySelectValue);

        targetDom.innerHTML = `
              ${targetDom.innerHTML}
              ${html}
          `;
      }catch(err){
        console.error("addInnerHtmlToThis에 들어온 쿼리로 요소를 찾을 수 없습니다")
      }
      
    } else {
      this.innerHTML = `
          ${this.innerHTML}
          ${html}
      `;
    }
  }

  useClickEffects(clickEffects){
    clickEffects.forEach((clickEffect) => {
      this.addEventToDOM({
        eventKind:'click',
        selector:clickEffect.selector,
        FN:clickEffect.FN
      });
    });
  }

  
}
