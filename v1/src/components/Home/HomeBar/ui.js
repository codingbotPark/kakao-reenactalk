import H from "./HomeBar.style.scss"

export default {
    addWrapepr:() => {
        return `
            <div class=${H.innerWrapper} >           
            </div>
        `
    },
    addSignButtons:() => {
        return `    
            <div class=${H.signButtonsWrapepr} >
                <button class=${H.signUpButton} >회원가입</button>
                <button class=${H.signInButton} >로그인</button>
            </div>
        `
    }
}