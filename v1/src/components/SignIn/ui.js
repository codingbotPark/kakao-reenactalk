import S from "./SignIn.style.scss"

export default {
    addWrapper:() => {
        return `
            <div class=${S.Wrapper} >
                <h1>로그인</h1>
            <div>
        `
    },
    addInputs:() => {
        return `
            <custom-input className='${JSON.stringify({className:S.IdInput})}' placeHolder='${JSON.stringify('이메일 또는 아이디')}' ></custom-input>
        `
    }

}