// mobile menu

let burder = document.querySelector('.burger');
let mobileMenu = document.querySelector('.header__mobile-menu');
let headerMain = document.querySelector('.header__main')

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


// price btn

let retailText = document.querySelector('.retail-text');
let wholesaleText = document.querySelector('.wholesale-text');
let filterBtn = document.querySelector('.price__filter-btn');
let priceCards = document.querySelectorAll('.price__cards');

if (filterBtn) {
    filterBtn.addEventListener('click', () => {
        retailText.classList.toggle('active');
        filterBtn.classList.toggle('active');
        wholesaleText.classList.toggle('active');

        // Перевіряємо, який елемент price__cards вже має клас 'active'
        priceCards.forEach((card) => {
            // Перемикаємо клас 'active' для кожного елемента
            card.classList.toggle('active');
        });
    });
}
