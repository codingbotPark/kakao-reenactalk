import I from "./Iphone.style.scss"

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
        
    }

    phoneFrame(){
        let bezel = document.createElement('div')
        bezel.className = I.bezel
        this.appendChild(bezel)

        let iphoneDisplay = document.createElement('div')
        iphoneDisplay.className = I.display
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

}

customElements.define('iphone-div',Iphone)
export default document.createElement('iphone-div')