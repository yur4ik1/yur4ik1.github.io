console.log('%cDeveloped by yur4ik69', 'color: #c434c4; font-size: 50px ');

console.log(
  '%cTG: @yur4ik69',
  'color: #c434c4; background: #eee; font-size: 30px '
);

// loading

let screen = document.querySelector(".loading");
let fixedHeader = document.querySelector(".header");

document.addEventListener("DOMContentLoaded", function(event) {
    fixedHeader.classList.add('nofixed');
    setTimeout(()=>{
        screen.classList.add("disabled");
        fixedHeader.classList.remove('nofixed');
    }, 2000)

});


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
});


mouseParallax = (elem, factor = 0.1, reversed = false)=> {
    // Add event listener
    if(elem.length>0){
        document.addEventListener("mousemove", parallax);
    
        // Magic happens here
        function parallax(e) {
            let _w = window.innerWidth/2;
            let _h = window.innerHeight/2;
            let _mouseX = e.clientX;
            let _mouseY = e.clientY;
            let _depth;

            if(reversed == true){
                _depth = `${(_mouseX - _w) * -factor}% ,${(_mouseY - _h) * -factor}%`;
            }
            else{
                _depth = `${(_mouseX - _w) * factor}% ,${(_mouseY - _h) * factor}%`;
            }

            
            
            let x = `${_depth}`;
            elem.forEach((e)=>{
                e.style.transform = `translate(${x})`;
            })
            
        }
    }
    

};

if(window.innerWidth > 1100){
    mouseParallax(document.querySelectorAll(".back"), 0.001);
}




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
