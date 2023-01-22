export default {
    fadeIn:(dom) => {
        console.log(dom)
        dom.style.transition="display 1s"
        dom.style.opacity = 1
    },
    fadeOut:(dom) => {
        dom.style.transition="opacity 1s"
        dom.style.opacity = 0
    }
}