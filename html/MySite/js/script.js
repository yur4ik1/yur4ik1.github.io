// Dark btn

const darkBtn = document.querySelector('.dark-btn');
const bool = document.querySelector('.bool');
const back = document.querySelector('body');

const dark = () => {
    bool.classList.toggle('active');
    darkBtn.classList.toggle('active');
    back.classList.toggle('dark');
}


// Scroll header

const header = document.querySelector("header");

window.onscroll = () => {
    let posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if (posTop > 0) {
        header.classList.add('white');
    } else {
        header.classList.remove('white');
    }
}

