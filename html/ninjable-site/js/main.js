// mobile menu
let burder = document.querySelector('.header__burger');
let mobileMenu = document.querySelector('.header__mobile-menu');
let headerMain = document.querySelector('.header')

if (mobileMenu) {
  burder.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    burder.classList.toggle('active');
    headerMain.classList.toggle('act');

    if (mobileMenu.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  });
}

// Scroll to id

function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash;
    if (hash) {
      window.history.pushState("", document.title, window.location.pathname + window.location.search);
      setTimeout(() => {
        smoothScrollTo(hash.substring(1)); 
      }, 500);
    }
  });

document.getElementById('get__top').addEventListener('click', function() {
    document.querySelector('.header').scrollIntoView({ 
        behavior: 'smooth' 
    });
});

