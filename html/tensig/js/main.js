//  Burger menu

let mobileMenu = document.querySelector('.mobile__menu');
const burger = () => {
    mobileMenu.classList.toggle('active');
};


// feedback animation, Scroll header

const width = window.innerWidth
const header = document.querySelector(".header");

window.onscroll = () => {
    let posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

    if (posTop > 10) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }

    if (width < 1023) {
        if (posTop > 0) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }
    }
}


const categories = document.querySelectorAll('.solutions__item');
const popupClose = document.querySelector('.close');
const popupBack = document.querySelector('.popupClose');

categories.forEach(category => {

  category.addEventListener('click', () => {
  
    const categoryTitle = category.dataset.title;
    const categoryText = category.dataset.text;
  
    const popup = document.querySelector('.popup');
    popup.style.display = 'flex';
    
    const popupTitle = document.querySelector('.popup__title');
    popupTitle.textContent = categoryTitle;

    const popupText = document.querySelector('.popup__text');
    popupText.textContent = categoryText;
  });

  popupClose.addEventListener('click', () => {
    const popup = document.querySelector('.popup');
    popup.style.display = 'none';
  });
  popupBack.addEventListener('click', () => {
    const popup = document.querySelector('.popup');
    popup.style.display = 'none';
  });
});


// Scroll

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}


var form = document.getElementById('contact__form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    var xhr = new XMLHttpRequest();
    var formData = new FormData(form);
    xhr.open('POST', '../contact-form.php', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            form.reset();
            var response = xhr.responseText;
            var successMessage = document.createElement('p');
            successMessage.classList.add('success');
            successMessage.textContent = response;
            form.appendChild(successMessage);
        } else {
            var errorMessage = document.createElement('p');
            errorMessage.classList.add('error');
            errorMessage.textContent = 'Sorry, there was a problem sending your message.';
            form.appendChild(errorMessage);
        }
    };
    xhr.send(formData);
});
