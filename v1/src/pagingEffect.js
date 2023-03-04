import routes from "./routes"

export default {
    doPagingEffect(effect,path){
        switch(effect){
            case 'slideToRight':
                this.innerHTML += routes[path]
                
                // 기존의 페이지의 z-index를 1000
                this.children[0].style.cssText = `
                    width:100vw;
                    z-index:1000;
                    box-shadow:-10px 5px 100px rgba(0,0,0,0.5);
                    position:fixed;
                    top:0px;
                    left:0px;
                    transition:transform 1s;
                    transform:translateX(102vw);
                `
                // 1초 뒤에 없애준다
                setTimeout(() => {
                    this.children[0].remove()
                },1000)

                break;
            default:
                this.innerHTML = routes[path]
        }
    }
}
