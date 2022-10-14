
function forcedOriginalScale(wrapperId) {
    var App = document.getElementById(wrapperId);
    App.style.zoom = 1 / devicePixelRatio;
}
document.addEventListener(
    "DOMContentLoaded",
    function () {
        forcedOriginalScale('wrapper');
    }
);


const width = window.innerWidth

window.onscroll = () => {
    
    if (width > 1500) {
        function forcedOriginalScale(wrapperId) {
            var App = document.getElementById(wrapperId);
            App.style.zoom = 1 / devicePixelRatio;
        }
        document.addEventListener(
            "DOMContentLoaded",
            function () {
                forcedOriginalScale('wrapper');
            }
        );
    }

}







let dropdownHeader = document.querySelectorAll(".buy__dropdown_block_header");
let dropdownMain = document.querySelectorAll(".buy__dropdown_block_main");

if (dropdownHeader) {
    for (let i = 0; i < dropdownHeader.length; i++) {
        dropdownHeader[i].addEventListener('click', () => {
            if (dropdownHeader[i].classList.contains("buy__dropdown_block_header-active")) {
                dropdownHeader[i].classList.remove("buy__dropdown_block_header-active");
                dropdownMain[i].classList.remove("buy__dropdown_block_main-active");
            } else {
                dropdownHeader[i].classList.add("buy__dropdown_block_header-active");
                dropdownMain[i].classList.add("buy__dropdown_block_main-active");
                for (let b = 0; b < dropdownHeader.length; b++) {
                    if (b != i) {
                        dropdownHeader[b].classList.remove("buy__dropdown_block_header-active");
                        dropdownMain[b].classList.remove("buy__dropdown_block_main-active");
                    }
                }
            }
        });
    }
}


let dropdownHeader2 = document.querySelectorAll(".faq__dropdown_block_header");
let dropdownMain2 = document.querySelectorAll(".faq__dropdown_block_main");

if (dropdownHeader2) {
    for (let i = 0; i < dropdownHeader2.length; i++) {
        dropdownHeader2[i].addEventListener('click', () => {
            if (dropdownHeader2[i].classList.contains("faq__dropdown_block_header-active")) {
                dropdownHeader2[i].classList.remove("faq__dropdown_block_header-active");
                dropdownMain2[i].classList.remove("faq__dropdown_block_main-active");
            } else {
                dropdownHeader2[i].classList.add("faq__dropdown_block_header-active");
                dropdownMain2[i].classList.add("faq__dropdown_block_main-active");
                for (let b = 0; b < dropdownHeader2.length; b++) {
                    if (b != i) {
                        dropdownHeader2[b].classList.remove("faq__dropdown_block_header-active");
                        dropdownMain2[b].classList.remove("faq__dropdown_block_main-active");
                    }
                }
            }
        });
    }
}

