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

// Popup info

const categories = document.querySelectorAll('.solutions__item');
const popupClose = document.querySelector('.close');
const popupBack = document.querySelector('.popupClose');

categories.forEach(category => {

  category.addEventListener('click', () => {

    const categoryTitle = category.dataset.title;
    const categoryText = category.dataset.text;

    const popup = document.querySelector('.popup__info');
    popup.style.display = 'flex';

    const popupTitle = document.querySelector('.popup__title');
    popupTitle.textContent = categoryTitle;

    const popupText = document.querySelector('.popup__text');
    popupText.textContent = categoryText;
  });

  popupClose.addEventListener('click', () => {
    const popup = document.querySelector('.popup__info');
    popup.style.display = 'none';
    popupVideo.style.display = 'none';

  });
  popupBack.addEventListener('click', () => {
    const popup = document.querySelector('.popup__info');
    popup.style.display = 'none';
    popupVideo.style.display = 'none';
  });
});


// Popup video

let buttons = document.querySelectorAll('.popup-button');
let popupVideo = document.querySelector('.popup__video');
let video = popupVideo.querySelector('iframe');

const videoClose = document.querySelector('.videoclose');
const videoBack = document.querySelector('.videoBack');

buttons.forEach(function (button) {
  button.addEventListener('click', function () {

    let videoUrl = button.getAttribute('data-url');
    video.setAttribute('src', videoUrl);
    popupVideo.style.display = 'flex';
  });
});

videoClose.addEventListener('click', () => {
  video.setAttribute('src', '');
  popupVideo.style.display = 'none';
});
videoBack.addEventListener('click', () => {
  video.setAttribute('src', '');
  popupVideo.style.display = 'none';
});


// request popup 

let requestPopup = document.querySelector('.request__popup');
let requestBtns = document.querySelectorAll('.contact__download-item');
let requestPopupClose = requestPopup.querySelector('.requestclose');

requestBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    requestPopup.classList.add('active');
  });
});

requestPopupClose.addEventListener('click', () => {
  requestPopup.classList.remove('active');
});




// Contact forms

function sendData(form, phpFile) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    /* let captcha = grecaptcha.getResponse();
    if (!captcha) {
      alert('Please confirm that you are not a robot.');
      return false;
    } */
    let xhr = new XMLHttpRequest();
    let formData = new FormData(form);
    let company = form.querySelector('input[name="company"]').value;
    let role = form.querySelector('input[name="role"]').value;
    let phone = form.querySelector('input[name="phone"]').value;
    formData.append('company', company);
    formData.append('role', role);
    formData.append('phone', phone);
    xhr.open('POST', phpFile, true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        form.reset();
        let response = xhr.responseText;
        let successMessage = document.createElement('p');
        successMessage.classList.add('success');
        successMessage.textContent = response;
        form.appendChild(successMessage);
      } else {
        let errorMessage = document.createElement('p');
        errorMessage.classList.add('error');
        errorMessage.textContent = 'Sorry, there was a problem sending your message.';
        form.appendChild(errorMessage);
      }
    };
    xhr.send(formData);
  });
}

let contactForm = document.getElementById('contact__form');
sendData(contactForm, '../contact-form.php');

let subscribeForm = document.getElementById('subscribe');
sendData(subscribeForm, '../subscribe.php');

let startForm = document.getElementById('start');
sendData(startForm, '../start.php');
