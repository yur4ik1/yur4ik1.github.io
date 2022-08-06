// buger menu

const burgerBtn = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger-menu');
const menuClose = document.querySelector('.menu-close');

burgerBtn.addEventListener('click', () => {
    burgerMenu.classList.add('active');
});

menuClose.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
});
