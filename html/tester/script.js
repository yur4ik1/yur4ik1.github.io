// Burger menu
const burger = document.querySelector(".header__burger")
const burgerNav = document.querySelector("header nav");
const body = document.querySelector("body")
let isOpened = false

burger.addEventListener("click",()=>{
    isOpened = !isOpened;
    handleNav();
});

function handleNav(){
    if (isOpened) {
        burger.classList.add("active");
        burgerNav.classList.add("active");
        body.classList.add("scroll-lock")
    } else{
        burger.classList.remove("active");
        burgerNav.classList.remove("active");
        body.classList.remove("scroll-lock")
    }
}