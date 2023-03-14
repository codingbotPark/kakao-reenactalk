import W from "./Write.style.scss"

export default {
    addWrapper:() => {
        return `
            <div class=${W.Wrapper} >
                
            </div>
        `
    },
    addLeftSideBar:() => {
        return `
            <div class=${W.LeftSideBar} >
            </div>
        `
    },
    addRightSideBar:() => {
        return `
            <div class=${W.RightSideBar} >
            </div>
        `
    }
}