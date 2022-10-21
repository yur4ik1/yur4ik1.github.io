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

const popupOpen = document.querySelector('.intro__btns-btn');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');

popupOpen.addEventListener('click', () => {
    popup.classList.add('active');
});
popupClose.addEventListener('click', () => {
    popup.classList.remove('active');
});

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