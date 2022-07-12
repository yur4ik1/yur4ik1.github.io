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
    if (posTop > 0) {
        header.classList.add('white');
    } else {
        header.classList.remove('white');
    }
}

// Parallax

let bg = document.querySelector(".intro-back");
window.addEventListener("scroll", () => {
    bg.style.backgroundSize = 90 + +window.pageYOffset/15+"%";
    bg.style.top = -0 - +window.pageYOffset/2+"px";
    bg.style.height = 1000 + +window.pageYOffset/3+"px";
})




