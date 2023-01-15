const start1 = document.querySelector('#start1');
const start2 = document.querySelector('#start2');
const startBtn = document.querySelector('.compass__first-start--btn');

startBtn.addEventListener('click', () => {
    start1.classList.remove('active');
    start2.classList.add('active');
});


