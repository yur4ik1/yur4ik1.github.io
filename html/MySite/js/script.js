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

btn.addEventListener("click", () => { ChangeTheme(); });

function ChangeTheme() {
    let lightTheme = "css/dark.css";
    let darkTheme = "css/light.css";

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
const width = window.innerWidth

window.onscroll = () => {
    let posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if (posTop > 750) {
        header.classList.add('white');
    } else {
        header.classList.remove('white');
    }

    if (width < 1023) {
        if (posTop > 0) {
            header.classList.add('white');
        } else {
            header.classList.remove('white');
        }
    }

}

// Parallax

let bg = document.querySelector(".back");
let bgScale = document.querySelector(".intro-back");

window.addEventListener("scroll", () => {
    bg.style.top = -0 - +window.pageYOffset/2+"px";
    bgScale.style.width = 1500 + +window.pageYOffset/1+"px";
    if (width < 1204) {
        bgScale.style.width = 1024 + +window.pageYOffset/1+"px";
    }
})


// CV 

let btnMob = document.querySelector('.btn-mob');
let btnDesck = document.querySelector('.btn-desck');

if (width < 1023) {
    btnMob.classList.add('active');
    btnDesck.classList.add('active');
    btnMob.addEventListener('click', () => {
        window.open('CV_Filin.pdf');
    });
} else {
    btnMob.classList.remove('active');
    btnDesck.classList.remove('active');

    btnDesck.addEventListener('click', () => {
        setTimeout(function(){document.location.assign(document.location.origin + "/CV_Filin.pdf");},250);
    });
}
