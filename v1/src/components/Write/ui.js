import W from "./Write.style.scss"

export default {
    addWrapper:() => {
        return `
            <div class=${W.Wrapper} >
                <div class=${W.LeftSideBar} ></div>
                <div class=${W.IphoneWrapper} ></div>
                <div class=${W.RightSideBar} ></div>
            </div>
        `
    },
    addLeftSideBar:() => {
        return `
            
        `
    },
    addRightSideBar:() => {
        return `
 
        `
    }
}