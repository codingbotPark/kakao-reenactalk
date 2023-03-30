import S from "./SignIn.style.scss"
import SignInSvg from "../../assets/sign/signInSvg.svg"

export default {
    addWrapper:() => {
        return `
            <div class=${S.Wrapper} >
                <h1>로그인</h1>
            </div>
        `
    },
    addInputs:() => {
        return `
            <div class=${S.IdInputWrapper} >
                <custom-input className='${JSON.stringify({className:S.IdInput})}' placeHolder='${JSON.stringify('이메일 또는 아이디')}' ></custom-input>
            </div>
            <div class=${S.PasswordInputWrapper} >
                <custom-input className='${JSON.stringify({className:S.PasswordInput})}' placeHolder='${JSON.stringify('비밀번호')}' ></custom-input>
            </div>
        `
    },
    addSignInButton:() => {
        return `
            <button class=${S.SignInButtonWrapper} >
                <div class=${S.SignInButtonInner} >
                    <img src=${SignInSvg} /> 
                    <div>Login</div>
                </div>
            </button>
        `
    },
    addSignUpButton:() => {
        return `
            
        `
    }
}