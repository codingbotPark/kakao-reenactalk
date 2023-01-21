// import "./style/_variable.scss"
import I from "./index.style.scss"
import App from "./App"
import chat1 from "./model/chat1"

const body = document.getElementsByTagName('body')[0]

let index = document.createElement('div')
index.class = I.index
index.style.height = ((chat1.content.length+1) * 100)+"vh"
body.appendChild(index)
index.appendChild(App)

