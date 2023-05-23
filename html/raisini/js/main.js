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

var prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', function() {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // Прокручено вгору
    document.querySelector('.header').classList.remove('hidden');
  } else {
    // Прокручено вниз
    document.querySelector('.header').classList.add('hidden');
  }

  prevScrollPos = currentScrollPos;
});
