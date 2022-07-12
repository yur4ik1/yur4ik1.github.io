// Dark btn

const darkBtn = document.querySelector('.dark-btn');
const bool = document.querySelector('.bool');
const back = document.querySelector('body');

const dark = () => {
    bool.classList.toggle('active');
    darkBtn.classList.toggle('active');
    back.classList.toggle('dark');
}

let btn = document.getElementById("dark-btn");
let link = document.getElementById("theme-link");

btn.addEventListener("click", function () { ChangeTheme(); });

function ChangeTheme() {
    let lightTheme = "https://yur4ik1111.000webhostapp.com/css/dark.css";
    let darkTheme = "https://yur4ik1111.000webhostapp.com/css/light.css";

    let currTheme = link.getAttribute("href");
    let theme = "";

    if (currTheme == lightTheme) {
        currTheme = darkTheme;
        theme = "dark";
    }
    else {
        currTheme = lightTheme;
        theme = "light";
    }

    link.setAttribute("href", currTheme);

}

// Scroll header

const header = document.querySelector("header");

window.onscroll = () => {
    let posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if (posTop > 700) {
        header.classList.add('white');
    } else {
        header.classList.remove('white');
    }
}

// Parallax

let bg = document.querySelector(".back");
let bgScale = document.querySelector(".intro-back");
const width = window.innerWidth


window.addEventListener("scroll", () => {
    bg.style.top = -0 - +window.pageYOffset/2+"px";
    bgScale.style.width = 1500 + +window.pageYOffset/1+"px";
    if (width < 1204) {
        bgScale.style.width = 1024 + +window.pageYOffset/1+"px";
    }
})





