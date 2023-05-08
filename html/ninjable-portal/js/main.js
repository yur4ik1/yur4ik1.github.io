
/* menu popup */

const avatarBtn = document.querySelector('.avatar');
const menuPopup = document.querySelector('.header__popup-menu');

if (avatarBtn && menuPopup) {
  avatarBtn.addEventListener('click', () => {
    menuPopup.classList.toggle('active');
  });

  document.addEventListener('click', (event) => {
    const isClickInsidePopup = menuPopup.contains(event.target);
    const isClickInsideAvatar = avatarBtn.contains(event.target);
    if (!isClickInsidePopup && !isClickInsideAvatar) {
      menuPopup.classList.remove('active');
    }
  });
}

/* notification popup */

const notificationBtn = document.querySelector('.notification');
const notificationPopup = document.querySelector('.header__popup-notification');

if (notificationBtn && notificationPopup) {
  notificationBtn.addEventListener('click', () => {
    notificationPopup.classList.toggle('active');
  });

  document.addEventListener('click', (event) => {
    const isClickInsidePopup = notificationPopup.contains(event.target);
    const isClickInsideBtn = notificationBtn.contains(event.target);
    if (!isClickInsidePopup && !isClickInsideBtn) {
      notificationPopup.classList.remove('active');
    }
  });
}


/* info popup */

const infoBtn = document.querySelector('.profile__left-item.deactivate');
const infoPopup = document.querySelector('.popup__info');

if (infoBtn && infoPopup) {
  infoBtn.addEventListener('click', () => {
    infoPopup.classList.toggle('active');
  });

  document.addEventListener('click', (event) => {
    const isClickInsidePopup = infoPopup.contains(event.target);
    const isClickInsideBtn = infoBtn.contains(event.target);
    if (!isClickInsidePopup && !isClickInsideBtn) {
      infoPopup.classList.remove('active');
    }
  });
}

/* passwordInput */

const passwordInput = document.getElementById("password");
const passwordIcon = document.querySelector(".password-icon");

if (passwordInput && passwordIcon) {
  passwordIcon.addEventListener("click", function () {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      passwordIcon.classList.add('active');
    } else {
      passwordInput.type = "password";
      passwordIcon.classList.remove('active');
    }
  })
};

/* profile info popup */

const profilePopup = document.querySelector('.profile__info-popup');
const profilePopupOpen = document.querySelector('.info-btn');
const profilePopupClose = document.querySelector('.close-popup');

if (profilePopup && profilePopupOpen) {
  profilePopupOpen.addEventListener('click', () => {
    profilePopup.classList.add('active');
  });
  profilePopupClose.addEventListener('click', () => {
    profilePopup.classList.remove('active');
  });
}