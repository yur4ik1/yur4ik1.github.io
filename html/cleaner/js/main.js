//  Burger menu

/*

let mobileMenu = document.querySelector('.header__menu-mob');
let burgerClose = document.querySelector('.header__burger-close');
let burgerOpen = document.querySelector('.header__burger');

burgerOpen.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

burgerClose.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});

*/

const priceBg = document.querySelector('.intro__price-bg');
const iBtn = document.querySelector('.intro__right-i');
const star = document.querySelector('.star');

iBtn.addEventListener('click', () => {
    priceBg.classList.toggle('active');
    iBtn.classList.toggle('active');
    star.classList.toggle('active');
});
