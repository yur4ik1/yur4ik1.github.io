const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile__menu');
const burgerClose = document.querySelector('.burger-close');

burger.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

burgerClose.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});

// header

window.addEventListener('scroll', function () {
    var header = document.querySelector('.header');
    var scrollPos = window.pageYOffset;

    var opacity = 1 - scrollPos / 200; // Залежно від прокрутки, змінюємо значення прозорості

    if (opacity < 0) {
        // Прозорість досягла 0
        header.style.opacity = 0;
        header.classList.add('hidden');
    } else {
        // Прозорість все ще більше 0
        header.style.opacity = opacity;
        header.classList.remove('hidden');
    }
});
