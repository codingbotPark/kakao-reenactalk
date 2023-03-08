import useNavigate from "../../../functions/useNavigate";
import N from "./NavBar.style.scss"

const clickEffects = [
    {
        selector:`.${N.home}`,
        FN:() => {
            useNavigate('/')
        }
    },{
        selector:`.${N.example}`,
        FN:() => {
            console.log("hi")
            useNavigate('/talk')
        },  
    },{
        selector:`.${N.create}`,
        FN:() => {
            useNavigate('/create','slideToRight',false)
        },
    }

]

export default clickEffects