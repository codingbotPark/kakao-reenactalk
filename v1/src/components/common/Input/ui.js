import I from "./Input.style.scss"

export default {
    addWrapper:({namedClass,placeHolder}) => {
        return `
            <div class=${I.InputWrapper} >
                <input class='${I.Input} ${namedClass}' />
                <div class=${I.InputDeco} >${placeHolder}</div>
            </div>
        `
    }
}