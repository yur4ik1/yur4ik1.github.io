
const tariffsBtn = document.querySelector('.tariffs-btn');
const bool = document.querySelector('.bool');

tariffsBtn.addEventListener('click', () => {
    bool.classList.toggle('active');
    console.log('click');
});