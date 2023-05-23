// mobile menu

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

const prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', function() {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.querySelector('.header').classList.remove('hidden');
  } else {
    document.querySelector('.header').classList.add('hidden');
  }
  prevScrollPos = currentScrollPos;
});

// filter btns

document.addEventListener('DOMContentLoaded', function() {
    const filterButton = document.querySelector('.filter');
    const filterList = document.querySelector('.filter-list');
    const sortButton = document.querySelector('.sort');
    const sortList = document.querySelector('.sort-list');

    filterButton.addEventListener('click', function() {
      filterList.classList.toggle('active');
      sortList.classList.remove('active'); 
    });

    sortButton.addEventListener('click', function() {
      sortList.classList.toggle('active');
      filterList.classList.remove('active'); 
    });

    document.addEventListener('click', function(event) {
      const target = event.target;
      if (
        target !== filterButton &&
        target !== sortButton &&
        target !== filterList &&
        target !== sortList &&
        !filterList.contains(target) &&
        !sortList.contains(target)
      ) {
        filterList.classList.remove('active');
        sortList.classList.remove('active');
      }
    });
  });