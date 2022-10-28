//  Burger menu

let mobileMenu = document.querySelector('.header__menu-mob');
let burgerClose = document.querySelector('.header__burger-close');
let burgerOpen = document.querySelector('.header__burger');

burgerOpen.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    console.log('clk');
});

burgerClose.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});