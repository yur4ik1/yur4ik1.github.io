
//  Zoom

function forcedOriginalScale(wrapperId) {
    var App = document.getElementById(wrapperId);
    App.style.zoom = 1 / devicePixelRatio;
}

zoom = () => {
    document.addEventListener(
        "DOMContentLoaded",
        function () {
            forcedOriginalScale('wrapper');
        }
    );
}

const width = window.innerWidth

if (width > 1000) {
    zoom();
    console.log('>1500')
}

//  Burger menu

let burger = document.querySelector('.sidebar__right-burger');
let burgerClose = document.querySelector('.burger__close')
let mobileMenu = document.querySelector('.mobile__menu');
let header = document.querySelector('.header');

burger.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    header.classList.add('active');
});
burgerClose.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    setTimeout(header.classList.remove('active'), 2000);
});


//  faq

let dropdownHeader = document.querySelectorAll(".buy__dropdown_block_header");
let dropdownMain = document.querySelectorAll(".buy__dropdown_block_main");

if (dropdownHeader) {
    for (let i = 0; i < dropdownHeader.length; i++) {
        dropdownHeader[i].addEventListener('click', () => {
            if (dropdownHeader[i].classList.contains("buy__dropdown_block_header-active")) {
                dropdownHeader[i].classList.remove("buy__dropdown_block_header-active");
                dropdownMain[i].classList.remove("buy__dropdown_block_main-active");
            } else {
                dropdownHeader[i].classList.add("buy__dropdown_block_header-active");
                dropdownMain[i].classList.add("buy__dropdown_block_main-active");
                for (let b = 0; b < dropdownHeader.length; b++) {
                    if (b != i) {
                        dropdownHeader[b].classList.remove("buy__dropdown_block_header-active");
                        dropdownMain[b].classList.remove("buy__dropdown_block_main-active");
                    }
                }
            }
        });
    }
}


let dropdownHeader2 = document.querySelectorAll(".faq__dropdown_block_header");
let dropdownMain2 = document.querySelectorAll(".faq__dropdown_block_main");

if (dropdownHeader2) {
    for (let i = 0; i < dropdownHeader2.length; i++) {
        dropdownHeader2[i].addEventListener('click', () => {
            if (dropdownHeader2[i].classList.contains("faq__dropdown_block_header-active")) {
                dropdownHeader2[i].classList.remove("faq__dropdown_block_header-active");
                dropdownMain2[i].classList.remove("faq__dropdown_block_main-active");
            } else {
                dropdownHeader2[i].classList.add("faq__dropdown_block_header-active");
                dropdownMain2[i].classList.add("faq__dropdown_block_main-active");
                for (let b = 0; b < dropdownHeader2.length; b++) {
                    if (b != i) {
                        dropdownHeader2[b].classList.remove("faq__dropdown_block_header-active");
                        dropdownMain2[b].classList.remove("faq__dropdown_block_main-active");
                    }
                }
            }
        });
    }
}


// Popup

const popupOpen = document.querySelector('#popup-open');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup-close');

popupOpen.addEventListener('click', () => {
    popup.classList.add('active');
});
popupClose.addEventListener('click', () => {
    popup.classList.remove('active');
});
