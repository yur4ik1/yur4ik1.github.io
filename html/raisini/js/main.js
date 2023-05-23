const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile__menu');
const burgerClose = document.querySelector('.burger-close');

burger.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

burgerClose.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});