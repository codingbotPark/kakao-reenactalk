import Iphone from "./components/Iphone/Iphone"

import IphonePage from "./page/IphonePage/IphonePage"
import pagingEffect from "./pagingEffect"
import router from "./router"

class App extends HTMLElement {
    connectedCallback(){
        this.customHistoryChangeHandler()
        this.popStateHandler()
        this.route()
    }

    customHistoryChangeHandler(){
        window.addEventListener('customHistoryChange',({detail}) => {
            const {pathname,effect,doReplace} = detail

            // replace가 필요하거나, 현재와 같다면 pushState대신
            // replaceState를 해줘서 history를 관리해준다
            if (doReplace || pathname === window.location.pathname){
                window.history.replaceState({},pathname,window.location.origin+pathname)
            } else {
                window.history.pushState({}, pathname, window.location.origin+pathname);
            }
            this.route(pathname,effect)
        })
    }
    popStateHandler(){
        window.addEventListener('popstate',() => {
            this.route()
        })
    }

    timer = null;
    pagingEffect = pagingEffect.doPagingEffect.bind(this)
    route(path = window.location.pathname,effect){
        if (effect){ 
            this.pagingEffect(effect,path)
        } else {
            clearTimeout(this.timer)
            this.innerHTML = router(path)
        }
    }
}

customElements.define('app-div',App)
export default document.createElement('app-div')