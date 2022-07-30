//  DropDown

let dropdownHeader = document.querySelectorAll(".faq__dropdown_block_header");
let dropdownMain = document.querySelectorAll(".faq__dropdown_block_main");

if (dropdownHeader) {
    for (let i = 0; i < dropdownHeader.length; i++) {
        dropdownHeader[i].addEventListener('click', () => {
            if (dropdownHeader[i].classList.contains("faq__dropdown_block_header-active")) {
                dropdownHeader[i].classList.remove("faq__dropdown_block_header-active");
                dropdownMain[i].classList.remove("faq__dropdown_block_main-active");
            } else {
                dropdownHeader[i].classList.add("faq__dropdown_block_header-active");
                dropdownMain[i].classList.add("faq__dropdown_block_main-active");
                for (let b = 0; b < dropdownHeader.length; b++) {
                    if (b != i) {
                        dropdownHeader[b].classList.remove("faq__dropdown_block_header-active");
                        dropdownMain[b].classList.remove("faq__dropdown_block_main-active");
                    }
                }
            }
        });
    }
}

let dropdownHeader2 = document.querySelectorAll(".tariffs__dropdown_block_header");
let dropdownMain2 = document.querySelectorAll(".tariffs__dropdown_block_main");

for (let i = 0; i < dropdownHeader2.length; i++) {
    dropdownHeader2[i].addEventListener('click', () => {
        if (dropdownHeader2[i].classList.contains("tariffs__dropdown_block_header-active")) {
            dropdownHeader2[i].classList.remove("tariffs__dropdown_block_header-active");
            dropdownMain2[i].classList.remove("tariffs__dropdown_block_main-active");
        } else {
            dropdownHeader2[i].classList.add("tariffs__dropdown_block_header-active");
            dropdownMain2[i].classList.add("tariffs__dropdown_block_main-active");
            for (let b = 0; b < dropdownHeader2.length; b++) {
                if (b != i) {
                    dropdownHeader2[b].classList.remove("tariffs__dropdown_block_header-active");
                    dropdownMain2[b].classList.remove("tariffs__dropdown_block_main-active");
                }
            }
        }
    });
}