$('.navbar-js').load('/assets/common/navbar.html')


let links = document.getElementsByClassName("js-vaklink")
Array.from(links).forEach(function (link) {
    console.log(link)
    link.addEventListener('click', function () {
        let content = link.nextElementSibling
        let child = link.firstElementChild
        if (window.innerWidth < 1200) {
            if (content.classList.contains("gridFront__content--click")) {
                content.classList.remove("gridFront__content--click")
                child.classList.remove(child.classList[0] + "--click")
            } else {
                resetlinks()
                content.classList.add("gridFront__content--click")
                child.classList.add(child.classList[0] + "--click")
            }
        }
    })
})

function resetlinks() {
    Array.from(links).forEach(function (link) {
        let content = link.nextElementSibling
        let child = link.firstElementChild

        content.classList.remove("gridFront__content--click")
        child.classList.remove(child.classList[0] + "--click")
    })
}