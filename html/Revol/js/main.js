


// feedback animation

const bg = document.querySelector(".feedback__right-bg1");
const width = window.innerWidth

window.onscroll = () => {
    let posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if (posTop > 1700) {
        window.addEventListener("scroll", () => {
            bg.style.transform = 'rotate(' + 100 +window.pageYOffset / 50 + 'deg)';
        });
    }
}

// Tabs

document.addEventListener('DOMContentLoaded', function(e){ 'use strict';
    let list = document.querySelectorAll('#tabNav a');
    list = Array.prototype.slice.call(list, 0);
    list.forEach(function(el, i, ar) {
        el.addEventListener('click', function(event){
            e.preventDefault();
            let tab = document.querySelector(el.getAttribute('href'));
            document.querySelector('#tabNav .act').classList.remove('act');
            document.querySelector('#tabsWrap .act').classList.remove('act');
            el.classList.add('act');
            tab.classList.add('act');
        })
    })
})

/*
var image = document.querySelector('.image');

image.addEventListener('click', function() {
  image.classList.toggle('show');
});

*/