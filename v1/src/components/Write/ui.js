import W from "./Write.style.scss"

export default {
    addWrapper:() => {
        return `
            <div class=${W.Wrapper} >
                
            </div>
        `
    },
    LeftSideBar:() => {
        return `
            <div class=${W.SideBar} >
            </div>
        `
    },
    RightSideBar:() => {

    }
}