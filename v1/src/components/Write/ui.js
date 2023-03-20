import W from "./Write.style.scss"
import downArrowSvg from "../../assets/Write/downArrowSvg.svg"

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
            <div class=${W.OtherContent} >
                <div class=${W.OtherContentAdder} >
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
                </div>
            </div>
        `
    },
    addRightSideBar:() => {
        return `
            <div class=${W.MyContent} >
                <div class=${W.MyContentAdder} >
                <div class=${W.MyText} >
                    <input value="나" />
                    <div class=${W.MyChat} >
                        <div class=${W.MyChatDeco} ></div>
                        <textarea placeholder="텍스트" ></textarea>
                    </div>
                </div>
                </div>
            </div>
        `
    }
}