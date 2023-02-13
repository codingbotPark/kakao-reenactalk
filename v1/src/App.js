import Iphone from "./components/Iphone/Iphone"

import chat1 from "./model/chat1"
import IphonePage from "./page/IphonePage/IphonePage"
import routes from "./routes"

class App extends HTMLElement {
    connectedCallback(){
        this.customHistoryChangeHandler()
        this.route()
        this.popStateHandler()

    }

    customHistoryChangeHandler(){
        window.addEventListener('customHistoryChange',({detail}) => {
            const {pathname,doReplace} = detail

            // replace가 필요하거나, 현재와 같다면 pushState대신
            // replaceState를 해줘서 history를 관리해준다
            if (doReplace || pathname === location.pathname){
                window.history.replaceState({},pathname,window.location.pathname)
            } else {
                window.history.pushState({}, pathname, window.location.pathname);
            }

            this.route(pathname)
        })
    }
    popStateHandler(){
        window.addEventListener('popstate',() => {
            this.route()
        })
    }

    route(path = window.location.pathname){
        this.innerHTML = routes[path]
    }
}

customElements.define('app-div',App)
export default document.createElement('app-div')