import W from "./Write.style.scss"
import downArrowSvg from "../../assets/Write/downArrowSvg.svg"
import changeModeSvg from "../../assets/Write/changeModeSvg.svg"
import changeModeSvgProvider from "../../assets/Write/changeModeSvgProvider"

export default {
    addWrapper:() => {
        return `
            <div class=${W.Wrapper} >
                <div class=${W.LeftSideBar} ></div>
                <div class=${W.IphoneWrapper} ></div>
            </div>
        `
    },
    addSideBar:() => {
        return `
            <div class=${W.ChattingWrapper} >
            </div>
        `
    },
    addOtherChatForm:() => {
        return `
            <form class=${W.OtherContentAdder} >
                <div class=${W.OtherProfile} >
                    <img src="https://avatars.githubusercontent.com/u/85085375?v=4" />
                    <img class=${W.arrowSvg} src=${downArrowSvg} />
                </div>
                <div class=${W.OtherText} >
                    <input placeholder="이름" />
                    <div class=${W.OtherChat}>
                        <div class=${W.OtherChatDeco} ></div>
                        <textarea placeholder="텍스트" ></textarea>
                    </div>
                </div>
                <div class=${W.ModeChanger} >
                    <div class=${W.whenOther}>
                    ${changeModeSvgProvider()}
                    </div>
                </div>
            </form>
        `
    },
    addMyChatForm:() => {
        return `
            <form class=${W.MyContentAdder} >
                <div class=${W.ModeChanger} >
                    <div class=${W.whenMy}>
                        ${changeModeSvgProvider("#FEE500")}
                    </div>
                </div>
                <div class=${W.MyText} >
                    <input value="나" />
                    <div class=${W.MyChat} >
                        <div class=${W.MyChatDeco} ></div>
                        <textarea placeholder="텍스트" ></textarea>
                    </div>
                </div>
            </form>
        `
    },
}