const hamburger = document.querySelector(".hamburger");
const menuList = document.querySelector(".menu__list");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menuList.classList.toggle("active");
})

document.querySelectorAll(".menu__link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menuList.classList.remove("active");
}))
