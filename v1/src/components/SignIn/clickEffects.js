import useNavigate from "../../functions/useNavigate";
import S from "./SignIn.style.scss"

const clickEffects = [
    {
        selector:`.${S.GoHome}`,
        FN:() => {
            useNavigate('/','slideToRight',false)
        }
    },{
        selector:`.${S.GoSignUp}`,
        FN:() => {
            useNavigate('/signup','slideToLeft',false)
        }
    }
]

export default clickEffects