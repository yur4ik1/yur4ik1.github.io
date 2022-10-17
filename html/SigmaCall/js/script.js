
//  Zoom

/*
function forcedOriginalScale(wrapperId) {
    var App = document.getElementById(wrapperId);
    App.style.zoom = 1 / devicePixelRatio;
}

zoom = () => {
    document.addEventListener(
        "DOMContentLoaded",
        function () {
            forcedOriginalScale('wrapper');
        }
    );
}

const width = window.innerWidth

if (width > 1000) {
    zoom();
    console.log('>1500')
}

*/

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