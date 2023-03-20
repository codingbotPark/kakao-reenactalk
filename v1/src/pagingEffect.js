import routes from "./routes"

export default {
    timer:undefined,
    doPagingEffect(effect,path){
        switch(effect){
            case 'slideToRight':

                const app = document.querySelector("app-div")

                // innerHTML을 사용하면 전체 html을 건들게 되어서 렌더링이 두 번 일어나게 되었다                
                const newPage = document.createElement(routes[path].split("<")[1].slice(0,-1))
                this.appendChild(newPage)

                console.log(this.children)
                
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

                window.scrollTo({ left: 0, top: 0, behavior: "auto" });
                // 1초 뒤에 없애준다
                setTimeout(() => {
                    children[0].remove()
                },1000)
                break;
            default:
                this.innerHTML = routes[path]
        }
    }
}
