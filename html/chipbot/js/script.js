// Burger

const burgerBtn = document.querySelector('.burger-btn');
const burgerMenu = document.querySelector('.burger-menu');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('remove');
    burgerMenu.classList.toggle('active');
});

// Popup

const popup = document.querySelector('.popup');
const start = () => {
    popup.classList.add('active');
};

popup.addEventListener('click', () => {
    popup.classList.remove('active');
});

// Tariffs btn

const tariffsBtn = document.querySelector('.tariffs-btn');
const bool = document.querySelector('.bool');
const tariffsPrice = document.querySelector('.tariffs-price');

const year = () => {
    document.querySelector('.tariffs-price1').classList.toggle("year");
    document.querySelector('.tariffs-price2').classList.toggle("year");
    bool.classList.toggle('active');
    console.log('clk');
}

//  DropDown

let dropdownHeader = document.querySelectorAll(".faq__dropdown_block_header");
let dropdownMain = document.querySelectorAll(".faq__dropdown_block_main");

if(dropdownHeader){
    for (let i = 0; i < dropdownHeader.length; i++) {
        dropdownHeader[i].addEventListener('click',()=>{
            if(dropdownHeader[i].classList.contains("faq__dropdown_block_header-active")){
                dropdownHeader[i].classList.remove("faq__dropdown_block_header-active");
                dropdownMain[i].classList.remove("faq__dropdown_block_main-active");
            }else{
                dropdownHeader[i].classList.add("faq__dropdown_block_header-active");
                dropdownMain[i].classList.add("faq__dropdown_block_main-active");
                for (let b = 0; b < dropdownHeader.length; b++) {
                    if(b != i){
                        dropdownHeader[b].classList.remove("faq__dropdown_block_header-active");
                        dropdownMain[b].classList.remove("faq__dropdown_block_main-active"); 
                    }
                }
            }
        });
    }
}




