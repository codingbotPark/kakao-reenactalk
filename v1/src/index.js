// import "./style/_variable.scss"
import I from "./index.style.scss"
import "./App"

const body = document.getElementsByTagName('body')[0]
body.innerHTML = `
    <div class=${I.index}>
      <app-div/>
    </div>
`

