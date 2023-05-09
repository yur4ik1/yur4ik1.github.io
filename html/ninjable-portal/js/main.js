
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
const infoPopup = document.querySelector('.lock__popup');

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


/* mask info popup */

const maskInfoBtn = document.querySelector('.mask-info');
const maskInfoPopup = document.querySelector('.mask__info-popup');

if (maskInfoBtn && maskInfoPopup) {
  maskInfoBtn.addEventListener('click', () => {
    maskInfoPopup.classList.toggle('active');
  });

  document.addEventListener('click', (event) => {
    const isClickInsidePopup = maskInfoPopup.contains(event.target);
    const isClickInsideBtn = maskInfoBtn.contains(event.target);
    if (!isClickInsidePopup && !isClickInsideBtn) {
      maskInfoPopup.classList.remove('active');
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


/* profile attributes popup */

const attributesPopup = document.querySelector('.power__popup');
const attributesPopupOpen = document.querySelector('.power');
const attributesPopupClose = document.querySelector('.main__popup-close');

if (attributesPopup && attributesPopupOpen) {
  attributesPopupOpen.addEventListener('click', () => {
    attributesPopup.classList.add('active');
  });
  attributesPopupClose.addEventListener('click', () => {
    attributesPopup.classList.remove('active');
  });
}

/* dont have popup */

const donthaveBtn = document.querySelector('.donthave');
const donthavePopup = document.querySelector('.donthave-popup');

if (donthaveBtn && donthavePopup) {

  donthaveBtn.addEventListener('click', () => {
    donthavePopup.classList.toggle('active');
    donthaveBtn.classList.toggle('active');
  });

  document.addEventListener('click', (event) => {
    const isClickInsidePopup = donthavePopup.contains(event.target);
    const isClickInsideBtn = donthaveBtn.contains(event.target);
    if (!isClickInsidePopup && !isClickInsideBtn) {
      donthavePopup.classList.remove('active');
      donthaveBtn.classList.remove('active');
    }
  });
}

/* attributes popup-info */

const attributesPupupInfoBtn = document.querySelector('.attributes-info');
const attributesPupupInfo = document.querySelector('.attributes__popup-info');

if (attributesPupupInfoBtn && attributesPupupInfo) {
  attributesPupupInfoBtn.addEventListener('click', () => {
    attributesPupupInfo.classList.toggle('active');
  });

  document.addEventListener('click', (event) => {
    const isClickInsidePopup = attributesPupupInfo.contains(event.target);
    const isClickInsideBtn = attributesPupupInfoBtn.contains(event.target);
    if (!isClickInsidePopup && !isClickInsideBtn) {
      attributesPupupInfo.classList.remove('active');
    }
  });
}

/* exchange popup  */

const exchangePupupBtn = document.querySelector('.three');
const exchangePupup = document.querySelector('.exchange-popup');

if (exchangePupupBtn && exchangePupup) {
  exchangePupupBtn.addEventListener('click', () => {
    exchangePupup.classList.toggle('active');
  });

  document.addEventListener('click', (event) => {
    const isClickInsidePopup = exchangePupup.contains(event.target);
    const isClickInsideBtn = exchangePupupBtn.contains(event.target);
    if (!isClickInsidePopup && !isClickInsideBtn) {
      exchangePupup.classList.remove('active');
    }
  });
}

/* dismantle popup  */

const dismantlePupupBtn = document.querySelector('.dismantle');
const dismantlePupup = document.querySelector('.dismantle-popup');

if (dismantlePupupBtn && dismantlePupup) {
  dismantlePupupBtn.addEventListener('click', () => {
    dismantlePupup.classList.toggle('active');
  });

  document.addEventListener('click', (event) => {
    const isClickInsidePopup = dismantlePupup.contains(event.target);
    const isClickInsideBtn = dismantlePupupBtn.contains(event.target);
    if (!isClickInsidePopup && !isClickInsideBtn) {
      dismantlePupup.classList.remove('active');
    }
  });
}