// feedback animation, Scroll header

const width = window.innerWidth
const header = document.querySelector(".header-hide");
const bg = document.querySelector(".feedback__right-bg1");

window.onscroll = () => {
    let posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if (posTop > 1700) {
        window.addEventListener("scroll", () => {
            bg.style.transform = 'rotate(' + 100 + window.pageYOffset / 50 + 'deg)';
        });
    }
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

// Tabs

document.addEventListener('DOMContentLoaded', function (e) {
    'use strict';
    let list = document.querySelectorAll('#tabNav a');
    list = Array.prototype.slice.call(list, 0);
    list.forEach(function (el, i, ar) {
        el.addEventListener('click', function (event) {
            e.preventDefault();
            let tab = document.querySelector(el.getAttribute('href'));
            document.querySelector('#tabNav .act').classList.remove('act');
            document.querySelector('#tabsWrap .act').classList.remove('act');
            el.classList.add('act');
            tab.classList.add('act');
        })
    })
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




let socialBtns = document.querySelector('.popup__social-item1');

const socialBtn = () => {
    socialBtns.classList.toggle('active');
};

let socialBtns2 = document.querySelector('.popup__social-item2');

const socialBtn2 = () => {
    socialBtns2.classList.toggle('active');
};





let socialBtns3 = document.querySelector('.popup__social-item3');

const socialBtn3 = () => {
    socialBtns3.classList.toggle('active');
};

let socialBtns4 = document.querySelector('.popup__social-item4');

const socialBtn4 = () => {
    socialBtns4.classList.toggle('active');
};



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
