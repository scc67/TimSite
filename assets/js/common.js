$('.navbar-js').load('/assets/common/navbar.html')


let links = document.getElementsByClassName("js-vaklink")
Array.from(links).forEach(function (link) {
    console.log(link)
    link.addEventListener('click', function () {
        if (window.innerWidth < 1200) {
            let content = link.nextElementSibling
            let child = link.firstElementChild

            content.classList.toggle("gridFront__content--click")
            child.classList.toggle(child.classList[0] + "--click")
        }
    })
})