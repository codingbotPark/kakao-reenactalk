import I from "./Input.style.scss"

export default {
    addWrapper:({namedClass,placeHolder}) => {
        return `
            <div class=${I.InputWrapper} >
                <input id='${namedClass}' class='${I.Input} ${namedClass}' />
                <label for='${namedClass}' class=${I.InputDeco} >${placeHolder}</label>
            </div>
        `
    }
}