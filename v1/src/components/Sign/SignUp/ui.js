import S from "./SignUp.style.scss"
import leftArrowSvg from "../../../assets/common/leftArrowSvg.svg"
import rightArrowSvg from "../../../assets/common/rightArrowSvg.svg"
import CustomInput from "../../common/Input/Input"


export default {
    addInputs:() => {
        return `
            <div class=${S.NameInputWrapper} >
            </div>
        `
    }
}