

// feedback animation

const bg = document.querySelector(".feedback__right-bg1");
const width = window.innerWidth

window.onscroll = () => {
    let posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if (posTop > 1700) {
        window.addEventListener("scroll", () => {
            bg.style.transform = 'rotate(' + 100 +window.pageYOffset / 50 + 'deg)';
            console.log('111')
        });
    }
}
