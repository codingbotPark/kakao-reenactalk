import N from "./NotFoundPage.style.scss"
import leftArrow from "../../assets/common/leftArrowSvg.svg"
import useNavigate from "../../functions/useNavigate"

class NotFoundPage extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <h1>404 Not Found</h1>
            <p>페이지를 찾을 수 없습니다</p>
            <div class=${N.ArrowWrapper}>
                <img src=${leftArrow} />
                홈으로가기
            </div>
        `
        this.goHome()
    }
    goHome(){
        const button = this.querySelector(`.${N.ArrowWrapper}`)
        button.addEventListener('click', () => {
            useNavigate('/','slideToRight',false)
        })
    }
}

customElements.define('not-found-page',NotFoundPage)
export default '<not-found-page></not-found-page>'