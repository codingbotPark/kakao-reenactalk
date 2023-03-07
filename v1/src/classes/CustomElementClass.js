export default class customElement extends HTMLElement {
  parseProps() {
    return this.getAttributeNames().map((propsName) =>
      JSON.parse(this.getAttribute(propsName))
    );
  }

  addEventToDOM({ eventKind, selector, FN }) {
    const dom = document.querySelector(selector);
    dom.addEventListener(eventKind, FN);
  }

  /** targetDom은 있으면 targetDom으로 간다 */
  addInnerHtmlToThis(html, querySelectValue) {
    if (querySelectValue) {
      let targetDom = this.querySelector(querySelectValue);
      targetDom.innerHTML = `
              ${targetDom.innerHTML}
              ${html}
          `;
    } else {
      this.innerHTML = `
          ${this.innerHTML}
          ${html}
      `;
    }
  }
}
