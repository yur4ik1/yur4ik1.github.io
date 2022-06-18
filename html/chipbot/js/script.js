// burger

const burgerBtn = document.querySelector('.burger-btn');
const burgerMenu = document.querySelector('.burger-menu');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('remove');
    burgerMenu.classList.toggle('active');
});

// popup

const popup = document.querySelector('.popup');
const start = () => {
    popup.classList.add('active');
};

popup.addEventListener('click', () => {
    popup.classList.remove('active');
})

// tariff btn

const tariffsBtn = document.querySelector('.tariffs-btn');
const bool = document.querySelector('.bool');
let tariffsPrice = document.querySelector('.tariffs-price');

tariffsBtn.addEventListener('click', () => {
    bool.classList.toggle('active');

});

const year = () => {
    document.querySelector('.tariffs-price1').classList.toggle("year");
    document.querySelector('.tariffs-price2').classList.toggle("year");
    console.log('click');
}







