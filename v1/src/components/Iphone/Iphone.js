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
        let muteButton = document.createElement("button")
        muteButton.className = I.muteButton
        muteButton.style.top = "170px";
        muteButton.style.left = "-3px";
        this.appendChild(muteButton)

        let volumeUpButton = document.createElement("button")
        volumeUpButton.className = I.muteButton
        volumeUpButton.style.top = "170px";
        volumeUpButton.style.left = "-3px";
        this.appendChild(volumeUpButton)

        let volumeDownButton = document.createElement("button")
        volumeDownButton.className = I.muteButton
        volumeDownButton.style.top = "170px";
        volumeDownButton.style.left = "-3px";
        this.appendChild(volumeDownButton)
    }
    sideMarks(){
        let sideMark1 = document.createElement("div")
        sideMark1.className = I.sideMark1
        sideMark1.style.top = "100px";
        sideMark1.style.left = "0px";
        this.appendChild(sideMark1);

        let sideMark2 = document.createElement('div')
        sideMark2.className = I.sideMark1
        sideMark2.style.bottom = "100px"
        sideMark2.style.left = "0px"
        this.appendChild(sideMark2);

        let sideMark3 = document.createElement('div')
        sideMark3.className = I.sideMark1
        sideMark3.style.top = "100px"
        sideMark3.style.right = "0px"
        this.appendChild(sideMark3);

        let sideMark4 = document.createElement('div')
        sideMark4.className = I.sideMark1
        sideMark4.style.bottom = "100px"
        sideMark4.style.right = "0px"
        this.appendChild(sideMark4);

        let sideMark5 = document.createElement('div')
        sideMark5.className = I.sideMark2
        sideMark5.style.top = "0px"
        sideMark5.style.right = "100px"
        this.appendChild(sideMark5);

        let sideMark6 = document.createElement('div')
        sideMark6.className = I.sideMark2
        sideMark6.style.bottom = "0px"
        sideMark6.style.left = "100px"
        this.appendChild(sideMark6);
    }

}

customElements.define('iphone-div',Iphone)
export default document.createElement('iphone-div');