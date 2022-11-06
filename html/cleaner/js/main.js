function ibg(){

    let ibg=document.querySelectorAll(".ibg");
    for (let i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
        ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
    }
}
    
ibg();

//  Burger menu

const scrollMenu = document.querySelector('.header__scroll-menu');
const burgerOpen = document.querySelector('.header__burger-btn');

burgerOpen.addEventListener('click', () => {
    burgerOpen.classList.toggle('active');
    scrollMenu.classList.toggle('active');
});

burgerClose = () => {
    burgerOpen.classList.remove('active');
    scrollMenu.classList.remove('active');
};

//  Intro

const priceBg = document.querySelector('.intro__price-bg');
const iBtn = document.querySelector('.intro__right-i');
const star = document.querySelector('.star');

iBtn.addEventListener('click', () => {
    priceBg.classList.toggle('active');
    iBtn.classList.toggle('active');
    star.classList.toggle('active');
});

// Hover slider

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

// Mask

window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('.tel'), function(input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });

});