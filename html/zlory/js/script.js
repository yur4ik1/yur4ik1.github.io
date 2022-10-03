//  Burger menu

let burger = document.querySelector('.burger');
let burgerClose = document.querySelector('.burger__close')
let mobileMenu = document.querySelector('.mobile__menu');

burger.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});
burgerClose.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});

//  DropDown

let dropdownHeader = document.querySelectorAll(".folowers__dropdown_block_header");
let dropdownMain = document.querySelectorAll(".folowers__dropdown_block_main");

if (dropdownHeader) {
    for (let i = 0; i < dropdownHeader.length; i++) {
        dropdownHeader[i].addEventListener('click', () => {
            if (dropdownHeader[i].classList.contains("folowers__dropdown_block_header-active")) {
                dropdownHeader[i].classList.remove("folowers__dropdown_block_header-active");
                dropdownMain[i].classList.remove("folowers__dropdown_block_main-active");
            } else {
                dropdownHeader[i].classList.add("folowers__dropdown_block_header-active");
                dropdownMain[i].classList.add("folowers__dropdown_block_main-active");
                for (let b = 0; b < dropdownHeader.length; b++) {
                    if (b != i) {
                        dropdownHeader[b].classList.remove("folowers__dropdown_block_header-active");
                        dropdownMain[b].classList.remove("folowers__dropdown_block_main-active");
                    }
                }
            }
        });
    }
}

//  DropDown faq

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
const popupClose = document.querySelector('.close-btn');

popupOpen.addEventListener('click', () => {
    popup.classList.add('active');
});
popupClose.addEventListener('click', () => {
    popup.classList.remove('active');
});
