import customElement from "../../../classes/CustomElementClass";

class CircleButton extends customElement{
    props = this.parseProps()
    connectedCallback(){
        [className,svg,positionObj,content] = props;

    }

}

customElements.define('circle-button',CircleButton)
export default '<circle-button></circle-button>'