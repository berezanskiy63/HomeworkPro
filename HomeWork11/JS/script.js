const menuHumburger = document.querySelector('.menu__humburger');
const menuBody = document.querySelector('.menu__body');
const body = document.body

menuHumburger.addEventListener("click", () => {
    menuHumburger.classList.toggle("menu__humburger--active")
    menuBody.classList.toggle("menu__body--active")
    body.classList.toggle("lock")
})

