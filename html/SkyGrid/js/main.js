// price btn

let retailText = document.querySelector('.retail-text');
let wholesaleText = document.querySelector('.wholesale-text');
let filterBtn = document.querySelector('.price__filter-btn');

if (filterBtn) {
    filterBtn.addEventListener('click', () => {
        retailText.classList.toggle('active');
        filterBtn.classList.toggle('active');
        wholesaleText.classList.toggle('active');
    })
}