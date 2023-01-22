import doEffect from "./doEffect"
/**
 * 
 * @param {효과 종류(static or dynamic)} effectMode 
 * @param {효과 이름(문자열만)} effect 
 * @param {적용할 dom} dom 
 */
export default function directEffect(effectMode,effect,dom){
    if (effectMode === "static"){
        switch(effect){
            case "fadeIn":
                console.log("들어옴")
                doEffect.fadeIn(dom)
                break;
            case "fadeOut":
                doEffect.fadeOut(dom)
                break
        }
    }  
}
