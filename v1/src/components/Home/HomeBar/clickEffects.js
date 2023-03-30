import useNavigate from "../../../functions/useNavigate";
import H from "./HomeBar.style.scss"

const clickEffects = [
    {
        selector:`.${H.signUpButton}`,
        FN:() => {
            useNavigate("/signup")
        }
    },{
        selector:`.${H.signInButton}`,
        FN:() => {
            useNavigate("/signin")
        }
    }

]

export default clickEffects