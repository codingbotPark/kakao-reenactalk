// import "./style/_variable.scss"
import I from "./index.style.scss"
import App from "./App"

const body = document.getElementsByTagName('body')[0]

let index = document.createElement('div')
index.class = I.index
// 위 아래, 2를 추가한다
// index.style.height = ((chat1.content.length+2) * 100)+"vh"
body.appendChild(index)
index.appendChild(App)

