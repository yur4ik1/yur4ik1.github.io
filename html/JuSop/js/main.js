

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