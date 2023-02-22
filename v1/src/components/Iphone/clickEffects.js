import useNavigate from "../../functions/useNavigate";
import I from "./Iphone.style.scss";

const clickEffects= [
  {
    selector: `.${I.leftArrowImg}`,
    FN:() => {
      useNavigate('/','slideToRight',false)
    },
  },
];

export default clickEffects