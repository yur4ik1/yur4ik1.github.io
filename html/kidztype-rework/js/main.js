
// mobile menu
let burger = document.querySelector('.header__burger');
let mobileMenu = document.querySelector('.header__menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  mobileMenu.classList.toggle('mobile-menu');
});

// scroll top btn
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("toTop").style.display = "block";
  } else {
    document.getElementById("toTop").style.display = "none";
  }
}

let button = document.getElementById("toTop");

button.addEventListener("click", function () {
  var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  if (currentScroll > 0) {
    window.requestAnimationFrame(scrollToTop);
  }
});

function scrollToTop() {
  let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  if (currentScroll > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, currentScroll - (currentScroll / 8));
  }
}

if (document.querySelector('.games-type') !== null) {
  // grig btn
  let btnGrid = document.querySelector('.btn-grid');
  let btnList = document.querySelector('.btn-list');
  let gamesList = document.querySelectorAll('.games');

  btnList.addEventListener('click', () => {
    btnGrid.classList.remove('active');
    btnList.classList.add('active');
    gamesList.forEach(game => {
      game.classList.add('list');
    });
  });

  btnGrid.addEventListener('click', () => {
    btnGrid.classList.add('active');
    btnList.classList.remove('active');
    gamesList.forEach(game => {
      game.classList.remove('list');
    });
  });
}


// iframe lazy load

setTimeout(function() {
  var dataUrl = document.getElementById('iframeID').getAttribute('data-url');
  document.getElementById('iframeID').src = dataUrl;
}, 1500);

