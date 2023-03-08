import N from "./NavBar.style.scss"
import model from "./model"

export default {
    addWrapper:() => {
        return `<ul class=${N.Wrapper} ></ul>`
    },
    addMenus:()=>{
        return `${
                    model.map((menu) => `
                    <li class=${N.Li}>
                        <div>
                            <img src=${menu.img} /><h3>${menu.title}</h3>
                        </div>
                    </li>
                    `).join("")
                }`
    }

}