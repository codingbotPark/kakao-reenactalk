import S from "./SignIn.style.scss"
import SignInSvg from "../../assets/sign/signInSvg.svg"
import leftArrowSvg from "../../assets/common/leftArrowSvg.svg"
import rightArrowSvg from "../../assets/common/rightArrowSvg.svg"

export default {
    addWrapper:() => {
        return `
            <div class=${S.Wrapper} >
                <div class=${S.InnerWrapper} >
                    <h1>로그인</h1>
                </div>
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
            <div class=${S.AdditionMenu} >
                <div class=${S.GoHome} >
                    <img src=${leftArrowSvg} /> 
                    <p>홈으로</p>
                </div>
                <div class=${S.GoSignUp} >
                    <p>회원가입</p>
                    <img src=${rightArrowSvg} />
                </div>
            </div>
        `
    }
}