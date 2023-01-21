import Iphone from "./components/Iphone/Iphone"

// class App extends HTMLDivElement {
//     connectedCallback(){
//         this.style.width = "100px";
//         this.style.height = "100px";
//         this.style.backgroundColor = "red";
//     }
// }

// window.customElements.define('app-div',App,{extends:'div'})
// let app = document.createElement('div', {is:"app-div"})
// export default app

// 또한 this.textContext로 들어온 text를 넣을 수 있다

class App extends HTMLElement {
    connectedCallback(){
        this.appendChild(Iphone)
    }
}

customElements.define('app-div',App)
// export default document.createElement('app-div')