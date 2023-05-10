
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


/* power popup */

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

/* protection popup */

const protectionPopup = document.querySelector('.protection__popup');
const protectionPopupOpen = document.querySelector('.protection');
const protectionPopupClose = document.querySelector('.protection-close');

if (protectionPopup && protectionPopupOpen) {
  protectionPopupOpen.addEventListener('click', () => {
    protectionPopup.classList.add('active');
  });
  protectionPopupClose.addEventListener('click', () => {
    protectionPopup.classList.remove('active');
  });
}

/* speed popup */

const speedPopup = document.querySelector('.speed__popup');
const speedPopupOpen = document.querySelector('.speed');
const speedPopupClose = document.querySelector('.speed-close');

if (speedPopup && speedPopupOpen) {
  speedPopupOpen.addEventListener('click', () => {
    speedPopup.classList.add('active');
  });
  speedPopupClose.addEventListener('click', () => {
    speedPopup.classList.remove('active');
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

const popupInfoBtns = document.querySelectorAll('.attributes-info');
const popupInfoElements = document.querySelectorAll('.attributes__popup-info');

popupInfoBtns.forEach((btn, index) => {
  const popupInfo = popupInfoElements[index];
  
  btn.addEventListener('click', () => {
    popupInfo.classList.toggle('active');
  });

  document.addEventListener('click', (event) => {
    const isClickInsidePopup = popupInfo.contains(event.target);
    const isClickInsideBtn = btn.contains(event.target);
    if (!isClickInsidePopup && !isClickInsideBtn) {
      popupInfo.classList.remove('active');
    }
  });
});


// Exchange popup

const exchangePopupBtns = document.querySelectorAll('.three');
const exchangePopupElements = document.querySelectorAll('.exchange-popup');

exchangePopupBtns.forEach((btn, index) => {
  const popup = exchangePopupElements[index];

  btn.addEventListener('click', () => {
    popup.classList.toggle('active');
  });

  document.addEventListener('click', (event) => {
    const isClickInsidePopup = popup.contains(event.target);
    const isClickInsideBtn = btn.contains(event.target);
    if (!isClickInsidePopup && !isClickInsideBtn) {
      popup.classList.remove('active');
    }
  });
});

// Dismantle popup

const dismantlePopupBtns = document.querySelectorAll('.dismantle');
const dismantlePopupElements = document.querySelectorAll('.dismantle-popup');

dismantlePopupBtns.forEach((btn, index) => {
  const popup = dismantlePopupElements[index];

  btn.addEventListener('click', () => {
    popup.classList.toggle('active');
  });

  document.addEventListener('click', (event) => {
    const isClickInsidePopup = popup.contains(event.target);
    const isClickInsideBtn = btn.contains(event.target);
    if (!isClickInsidePopup && !isClickInsideBtn) {
      popup.classList.remove('active');
    }
  });
});



/* rewardspopup */

const rewardsPopup = document.querySelector('.rewards__pupup');
const rewardsPopupOpen = document.querySelector('.coins');
const rewardsPopupClose = document.querySelector('.rewards-close');

if (rewardsPopup && rewardsPopupOpen) {
  rewardsPopupOpen.addEventListener('click', () => {
    rewardsPopup.classList.add('active');
  });
  rewardsPopupClose.addEventListener('click', () => {
    rewardsPopup.classList.remove('active');
  });
}


/* filter select */

let select = document.querySelector(".filter-select");
let selectSelected = select ? select.querySelector(".select-selected") : null;
let selectItems = select ? select.querySelector(".select-items") : null;

if (selectSelected) {
  selectSelected.addEventListener("click", function () {
    if (selectItems && selectItems.classList.contains("select-hide")) {
      selectItems.classList.remove("select-hide");
      select.classList.add('active');
    } else if (selectItems) {
      selectItems.classList.add("select-hide");
      select.classList.remove('active');
    }
  })
};

/* big photo popup */

const rewardsImgTrigger = document.querySelector('.rewards-img-trigger');
const bigPhotoPopup = document.querySelector('.big__photo-popup');

rewardsImgTrigger.addEventListener('click', function() {
  bigPhotoPopup.classList.add('active');
});

document.addEventListener('click', function(event) {
  const isClickInside = bigPhotoPopup.contains(event.target);
  if (!isClickInside && event.target !== rewardsImgTrigger) {
    bigPhotoPopup.classList.remove('active');
  }
});

/* custom select */

let selectElements = document.getElementsByClassName("custom-select");

for (let i = 0; i < selectElements.length; i++) {
  let selectElement = selectElements[i];
  let selectSelectedElement = selectElement.getElementsByClassName("select-selected")[0];
  let selectItemsElement = selectElement.getElementsByClassName("select-items")[0];
  let selectOptionElements = selectItemsElement.getElementsByClassName("select-option");
  
  selectSelectedElement.addEventListener("click", function () {
    this.classList.toggle("select-arrow-active");
    selectItemsElement.classList.toggle("select-hide");
    
    // Оновлюємо стан `custom-select` на основі класів `select-selected`
    if (this.classList.contains("select-arrow-active")) {
      selectElement.classList.add("active");
    } else {
      selectElement.classList.remove("active");
    }
  });
  
  for (let j = 0; j < selectOptionElements.length; j++) {
    selectOptionElements[j].addEventListener("click", function () {
      let selectOptionValue = this.innerHTML;
      selectSelectedElement.innerHTML = selectOptionValue;
      selectSelectedElement.classList.remove("select-arrow-active");
      selectItemsElement.classList.add("select-hide");
      
      // Оновлюємо стан `custom-select` на основі класів `select-selected`
      if (selectSelectedElement.classList.contains("select-arrow-active")) {
        selectElement.classList.add("active");
      } else {
        selectElement.classList.remove("active");
      }
    });
  }
}

/* custom select new */

const newCustomSelects = document.querySelectorAll('.new__custom-select');

function closeAllSelectsExcept(selectedSelect) {
  newCustomSelects.forEach((select) => {
    if (select !== selectedSelect && select.classList.contains('open')) {
      select.classList.remove('open');
    }
  });
}

newCustomSelects.forEach((newCustomSelect) => {
  const newCustomTrigger = newCustomSelect.querySelector('.new__custom-select__trigger');
  const newCustomOptionsContainer = newCustomSelect.querySelector('.new__custom-options');
  const newCustomOptionsList = newCustomSelect.querySelectorAll('.new__custom-option');
  const customScrollbar = newCustomSelect.querySelector('.custom-scrollbar');
  const customScrollbarThumb = document.createElement('div');
  customScrollbarThumb.classList.add('custom-scrollbar-thumb');
  customScrollbar.appendChild(customScrollbarThumb);

  function updateScroll() {
    const containerScrollTop = newCustomOptionsContainer.scrollTop;
    const containerHeight = newCustomOptionsContainer.clientHeight;
    const containerScrollHeight = newCustomOptionsContainer.scrollHeight;
    const scrollbarHeight = customScrollbar.clientHeight;
    const thumbHeight = Math.max((containerHeight / containerScrollHeight) * scrollbarHeight, 20);
    const maxThumbTop = scrollbarHeight - thumbHeight;
    const thumbTop = (containerScrollTop / (containerScrollHeight - containerHeight)) * maxThumbTop;
    customScrollbarThumb.style.height = `${thumbHeight}px`;
    customScrollbarThumb.style.top = `${thumbTop}px`;
  }

  newCustomTrigger.addEventListener('click', () => {
    if (newCustomSelect.classList.contains('open')) {
      newCustomSelect.classList.remove('open');
    } else {
      closeAllSelectsExcept(newCustomSelect);
      newCustomSelect.classList.add('open');
    }
  });

  newCustomOptionsContainer.addEventListener('scroll', updateScroll);

  newCustomOptionsList.forEach((option) => {
    option.addEventListener('click', (event) => {
      if (newCustomSelect.closest('.skills-filter-select')) {
        const selectedOptions = newCustomSelect.querySelectorAll('.new__custom-option.selected');
        const selectedOptionValues = Array.from(selectedOptions).map((option) => option.getAttribute('data-value'));
        const newCustomOptionValue = option.getAttribute('data-value');
        const newCustomTrigger = newCustomSelect.querySelector('.new__custom-select__trigger');
        const skillsTagsList = newCustomSelect.closest('.new__custom-select-wrapper').querySelector('.skills-tags-list');

        if (selectedOptionValues.includes(newCustomOptionValue)) {
          return;
        }

        const tagItem = document.createElement('div');
        tagItem.classList.add('tag-item');

        const tagItemText = document.createElement('p');
        tagItemText.textContent = option.textContent;

        const removeButton = document.createElement('button');
        removeButton.classList.add('remove');
        tagItem.appendChild(tagItemText);
        tagItem.appendChild(removeButton);
        skillsTagsList.appendChild(tagItem);
        addRemoveButtonListener(removeButton);

        option.classList.add('selected');
        newCustomTrigger.textContent = 'Type here to search for Clan...';
      } else {
        const newCustomOptionValue = option.getAttribute('data-value');
        const newCustomTrigger = newCustomSelect.querySelector('.new__custom-select__trigger');
        if (newCustomSelect.closest('.acievements-select')) {
          newCustomTrigger.textContent = 'icon';
        } else {
          newCustomTrigger.textContent = option.textContent;
        }
        newCustomSelect.classList.remove('open');
        if (newCustomSelect.classList.contains('filter-select-scroll')) {
          newCustomSelect.classList.add('open');
          newCustomTrigger.textContent = 'Type here to search for Clan...';
        }
      }
    });
  });


  customScrollbarThumb.addEventListener("mousedown", (e) => {
    const thumbStartPosition = e.clientY - customScrollbarThumb.getBoundingClientRect().top;
    const scrollbarHeight = customScrollbar.clientHeight;
    const thumbHeight = customScrollbarThumb.clientHeight;
    const maxThumbTop = scrollbarHeight - thumbHeight;

    function onMouseMove(e) {
      const thumbTop = e.clientY - customScrollbar.getBoundingClientRect().top - thumbStartPosition;
      if (thumbTop < 0) {
        customScrollbarThumb.style.top = "0";
        newCustomOptionsContainer.scrollTop = 0;
      } else if (thumbTop > maxThumbTop) {
        customScrollbarThumb.style.top = maxThumbTop + "px";
        newCustomOptionsContainer.scrollTop = newCustomOptionsContainer.scrollHeight;
      } else {
        customScrollbarThumb.style.top = thumbTop + "px";
        newCustomOptionsContainer.scrollTop = thumbTop / maxThumbTop * (newCustomOptionsContainer.scrollHeight - newCustomOptionsContainer.clientHeight);
      }
    }

    function onMouseUp() {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    }

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

  });
  updateScroll();
});