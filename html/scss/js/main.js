/*
// Scroll header

const header = document.querySelector(".header__main");
const width = window.innerWidth

if (header) {
  window.onscroll = () => {
    let posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if (posTop > 1) {
      header.classList.add('active');
    } else {
      header.classList.remove('active');
    }

    if (width < 1023) {
      if (posTop > 0) {
        header.classList.add('active');
      } else {
        header.classList.remove('active');
      }
    }

  }
} */

const menuBurger = document.querySelector('.header__burger');
const mobileNavigation = document.querySelector('.mobile-navigation');

menuBurger.addEventListener('click', () => {
  mobileNavigation.classList.toggle('active');
  menuBurger.classList.toggle('active');
});


const menu = document.querySelector('.menu-list');

menu.addEventListener('click', (event) => {
  if (event.target.classList.contains('menu-item') && event.target.classList.contains('sub')) {
    // Спочатку видаляємо клас 'active' з усіх елементів
    document.querySelectorAll('.menu-item.sub.active').forEach((item) => {
      item.classList.remove('active');
    });

    // Потім додаємо клас 'active' тільки до того елемента, який був натиснутий
    event.target.classList.add('active');
  }
});

