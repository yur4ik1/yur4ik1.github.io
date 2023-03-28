// feedback animation, Scroll header

const width = window.innerWidth
const header = document.querySelector(".header");

window.onscroll = () => {
    let posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

    if (posTop > 10) {
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

//  Burger menu

let mobileMenu = document.querySelector('.mobile__menu');
let burgerClose = document.querySelector('.burger__close');

const burger = () => {
    mobileMenu.classList.add('active');
};
burgerClose.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});


// Popup

const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');

const start = () => {
    popup.classList.add('active');
    console.log('clk')
};

popupClose.addEventListener('click', () => {
    popup.classList.remove('active');
});


// Scroll

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
