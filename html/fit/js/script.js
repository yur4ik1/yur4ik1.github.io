// buger menu

const burgerBtn = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger-menu');
const menuClose = document.querySelector('.menu-close');

burgerBtn.addEventListener('click', () => {
    burgerMenu.classList.add('active');
});

menuClose.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
});

// product atribut

let dropdownHeader = document.querySelectorAll(".atribute__dropdown_block_header");
let dropdownMain = document.querySelectorAll(".atribute__dropdown_block_main");

for (let i = 0; i < dropdownHeader.length; i++) {
    dropdownHeader[i].addEventListener('click', () => {
        if (dropdownHeader[i].classList.contains("atribute__dropdown_block_header-active")) {
            dropdownHeader[i].classList.remove("atribute__dropdown_block_header-active");
            dropdownMain[i].classList.remove("atribute__dropdown_block_main-active");
        } else {
            dropdownHeader[i].classList.add("atribute__dropdown_block_header-active");
            dropdownMain[i].classList.add("atribute__dropdown_block_main-active");
        }
    });
}

// DropDown

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

// Search

let input, search, pr, result, result_arr, locale_HTML, result_store;

locale_HTML = document.body.innerHTML;

function FindOnPage(name, status) {

    input = document.getElementById(name).value;

    if (input.length < 3 && status == true) {
        alert('Для поиска вы должны ввести три или более символов');
        function FindOnPageBack() { document.body.innerHTML = locale_HTML; }
    }

    if (input.length >= 3) {
        function FindOnPageGo() {
            search = '/' + input + '/g';
            pr = document.body.innerHTML;
            result = pr.match(/>(.*?)</g);
            result_arr = [];

            for (let i = 0; i < result.length; i++) {
                result_arr[i] = result[i].replace(eval(search), '<span class="result" style="background-color:yellow;">' + input + '</span>');
            }
            for (let i = 0; i < result.length; i++) {
                pr = pr.replace(result[i], result_arr[i])
            }
            document.body.innerHTML = pr;
            let hiddenElement = document.querySelector(".result");
            if (!hiddenElement) { alert('Ничего не найдено'); }
            hiddenElement.scrollIntoView({ block: "center", behavior: "smooth" });
        }
    }

    function FindOnPageBack() { document.body.innerHTML = locale_HTML; }
    if (status) { FindOnPageBack(); FindOnPageGo(); }
    if (!status) { FindOnPageBack(); }
}