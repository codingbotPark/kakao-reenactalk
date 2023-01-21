import I from "./Iphone.style.scss"
import chat1 from "../../model/chat1"

// innerHtml은 이전 내용을 없앤다
class Iphone extends HTMLElement{
    connectedCallback() {
        this.innerIphone()
        this.outerIphone()
    }

    innerIphone(){
        this.phoneFrame()
        this.dynamicIsland()
    }
    outerIphone(){
        this.buttons()
        this.sideMarks()
    }

    // 내부
    phoneFrame(){
        let bezel = document.createElement('div')
        bezel.className = I.bezel
        this.appendChild(bezel)

        let iphoneDisplay = document.createElement('div')
        iphoneDisplay.className = I.display
        iphoneDisplay.style.backgroundColor=chat1.displayColor
        bezel.appendChild(iphoneDisplay)
    }
    dynamicIsland(){
        let dynamicIslandWrapper = document.createElement('div')
        dynamicIslandWrapper.className = I.dynamicIslandWrapper
        this.appendChild(dynamicIslandWrapper)

        let dynamicIsland = document.createElement('div')
        dynamicIsland.className = I.dynamicIsland
        dynamicIslandWrapper.appendChild(dynamicIsland)

        let selfCamera = document.createElement('div')
        selfCamera.className = I.selfCamera
        dynamicIsland.appendChild(selfCamera) 

        let selfCameraLens = document.createElement('div')
        selfCameraLens.className = I.selfCameraLens
        selfCamera.appendChild(selfCameraLens)
    }

    // 외부
    buttons(){
        let muteButton1 = document.createElement('div')
        muteButton1.className = I.muteButton
        muteButton1.style.top = "0px";
        muteButton1.style.left = "0px";
        this.appendChild(muteButton1,)
        
    }
    sideMarks(){

    }

}

customElements.define('iphone-div',Iphone)
export default document.createElement('iphone-div');