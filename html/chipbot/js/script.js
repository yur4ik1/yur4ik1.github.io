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
})

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







