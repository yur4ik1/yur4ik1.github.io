//  Burger menu

/*

let mobileMenu = document.querySelector('.header__menu-mob');
let burgerClose = document.querySelector('.header__burger-close');
let burgerOpen = document.querySelector('.header__burger');

burgerOpen.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

burgerClose.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});

*/
function ibg(){

    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
        ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
    }
}
    
ibg();


const priceBg = document.querySelector('.intro__price-bg');
const iBtn = document.querySelector('.intro__right-i');
const star = document.querySelector('.star');

iBtn.addEventListener('click', () => {
    priceBg.classList.toggle('active');
    iBtn.classList.toggle('active');
    star.classList.toggle('active');
});


const arrow1 = document.querySelector('.work__top-arrow-1');
const arrow2 = document.querySelector('.work__top-arrow-2');
const arrow3 = document.querySelector('.work__top-arrow-3');
const arrow4 = document.querySelector('.work__top-arrow-4');
const rightImg1 = document.querySelector('.work__right-img-1');
const rightImg2 = document.querySelector('.work__right-img-2');
const rightImg3 = document.querySelector('.work__right-img-3');
const rightImg4 = document.querySelector('.work__right-img-4');


arrow1.addEventListener('mouseover', () => {
    rightImg1.classList.add('active');
    rightImg2.classList.remove('active');
    rightImg3.classList.remove('active');
    rightImg4.classList.remove('active');
    arrow1.classList.add('active');
    arrow2.classList.remove('active');
    arrow3.classList.remove('active');
    arrow4.classList.remove('active');
});
arrow2.addEventListener('mouseover', () => {
    rightImg2.classList.add('active');
    rightImg1.classList.remove('active');
    rightImg3.classList.remove('active');
    rightImg4.classList.remove('active');
    arrow2.classList.add('active');
    arrow1.classList.remove('active');
    arrow3.classList.remove('active');
    arrow4.classList.remove('active');
});
arrow3.addEventListener('mouseover', () => {
    rightImg3.classList.add('active');
    rightImg2.classList.remove('active');
    rightImg1.classList.remove('active');
    rightImg4.classList.remove('active');
    arrow3.classList.add('active');
    arrow2.classList.remove('active');
    arrow1.classList.remove('active');
    arrow4.classList.remove('active');
});
arrow4.addEventListener('mouseover', () => {
    rightImg4.classList.add('active');
    rightImg2.classList.remove('active');
    rightImg3.classList.remove('active');
    rightImg1.classList.remove('active');
    arrow4.classList.add('active');
    arrow2.classList.remove('active');
    arrow3.classList.remove('active');
    arrow1.classList.remove('active');
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