
/* sidebar menu */

const sidemenuItem = document.querySelectorAll('.sidemenu__item');

if (sidemenuItem) {
  sidemenuItem.forEach(menu => {
    menu.addEventListener('click', function () {
      sidemenuItem.forEach(menu => menu.classList.remove('active'));
      this.classList.add('active');
    });
  });
}

/* popup users */

const popupUsers = document.querySelector('.add-users');
const addUserBtn = document.querySelector('.add-user-btn');
const userPopupClose = document.querySelector('.users__popup-close');

if (popupUsers && addUserBtn) {
  addUserBtn.addEventListener('click', () => {
    popupUsers.classList.add('active');
  });
  userPopupClose.addEventListener('click', () => {
    popupUsers.classList.remove('active');
  });
}

const popupEditUsers = document.querySelector('.edit-users');
const addEditUserBtns = document.querySelectorAll('.edit');
const EdituserPopupClose = document.querySelector('.edit-close');

if (popupEditUsers && addEditUserBtns) {
  addEditUserBtns.forEach(addEditUserBtn => {
    addEditUserBtn.addEventListener('click', () => {
      popupEditUsers.classList.add('active');
    });
  });
  
  EdituserPopupClose.addEventListener('click', () => {
    popupEditUsers.classList.remove('active');
  });
}


/* header avatar */

const profileBtn = document.querySelector('.header__avatar');
const profilePopup = document.querySelector('.header__profile-popup');

if (profileBtn && profilePopup) {
  profileBtn.addEventListener('click', () => {
    profilePopup.classList.toggle('active');
  });
}


/* alert popup */

document.addEventListener("DOMContentLoaded", function() {
  const deleteBtn = document.querySelector('.delete-icon, .archive-alert');
  const deletePopup = document.querySelector('.alert-popup');
  const closeDeletePopup = document.querySelector('.false');

  if (deleteBtn && deletePopup) {
    deleteBtn.addEventListener('click', () => {
      deletePopup.classList.toggle('active');
      deleteBtn.classList.toggle('active');
    });

    closeDeletePopup.addEventListener('click', () => {
      deletePopup.classList.remove('active');
      deleteBtn.classList.remove('active');
    });

    document.addEventListener('click', (event) => {
      if (!event.target.closest('.alert-popup') && !event.target.closest('.delete-icon, .archive')) {
        deletePopup.classList.remove('active');
        deleteBtn.classList.remove('active');
      }
    });
  }
});


/* custom period popup */

const periodPopup = document.querySelector('.custom__period-popup');
const invoicesBtn = document.querySelector('.invoices-btn');
const invoicesCloseBtn = document.querySelector('.custom__period-close');

if (invoicesBtn && periodPopup) {
  invoicesBtn.addEventListener('click', () => {
    periodPopup.classList.add('active');
  });
  if (invoicesCloseBtn) {
    invoicesCloseBtn.addEventListener('click', () => {
      periodPopup.classList.remove('active');
    });
  }
}


/* payment method */

const paymentCarts = document.querySelectorAll('.payment__method-item');
const cancelBtn = document.querySelector('.cancel');

paymentCarts.forEach(paymentCart => {
  paymentCart.addEventListener('click', () => {

    paymentCarts.forEach(cart => {
      if (cart !== paymentCart) {
        cart.classList.remove('active');
      }
    });

    paymentCart.classList.add('active');
    cancelBtn.classList.add('active');
  });
});


/* Custom branding */

const brandingIco = document.querySelector('.content__section-title.icon');
const brandingPopup = document.querySelector('.branding__popup');

if (brandingIco && brandingPopup) {
  brandingIco.addEventListener('click', () => {
    brandingPopup.classList.toggle('active');
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.branding__popup') && !event.target.closest('.content__section-title.icon')) {
      brandingPopup.classList.remove('active');
    }
  });
}


/* Subscription branding */

const subscriptionBtn = document.querySelector('.upgrade__btn');
const subscriptionPopup = document.querySelector('.subscription__popup');
const subscriptionClose = document.querySelector('.subscription__popup-close');

if (subscriptionBtn && subscriptionPopup) {
  subscriptionBtn.addEventListener('click', () => {
    subscriptionPopup.classList.toggle('active');
  });

  subscriptionClose.addEventListener('click', () => {
    subscriptionPopup.classList.remove('active');
  });
}

/* invoices table colored  */

const invoices = document.querySelectorAll(".invoices__list-item");
for (let i = 0; i < invoices.length; i += 2) {
  invoices[i].classList.add("colored");
}

/* table colored  */

const rowItem = document.querySelectorAll(".row-item");
for (let i = 0; i < rowItem.length; i += 2) {
  rowItem[i].classList.add("colored");
}

/* Calendar  */

const calendarFrom = document.querySelectorAll('.calendar-from td');
if (calendarFrom) {
  calendarFrom.forEach(td => {
    td.addEventListener('click', function () {
      calendarFrom.forEach(td => td.classList.remove('active'));
      this.classList.add('active');
    });
  });
}

const calendarTo = document.querySelectorAll('.calendar-to td');
if (calendarTo) {
  calendarTo.forEach(td => {
    td.addEventListener('click', function () {
      calendarTo.forEach(td => td.classList.remove('active'));
      this.classList.add('active');
    });
  });
}


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
  });
  for (let j = 0; j < selectOptionElements.length; j++) {
    selectOptionElements[j].addEventListener("click", function () {
      let selectOptionValue = this.innerHTML;
      selectSelectedElement.innerHTML = selectOptionValue;
      selectItemsElement.classList.add("select-hide");
    });
  }
}

/* custom select new */
const new__customSelects = document.querySelectorAll(".new__custom-select");

function closeAllSelectsExcept(selectedSelect) {
  new__customSelects.forEach((select) => {
    if (select !== selectedSelect && select.classList.contains("open")) {
      select.classList.remove("open");
    }
  });
}

new__customSelects.forEach((new__customSelect) => {
  const new__customTrigger = new__customSelect.querySelector(".new__custom-select__trigger");
  const new__customOptionsContainer = new__customSelect.querySelector(".new__custom-options");
  const new__customOptionsList = new__customSelect.querySelectorAll(".new__custom-option");
  const customScrollbar = new__customSelect.querySelector(".custom-scrollbar");
  const customScrollbarThumb = document.createElement("div");
  customScrollbarThumb.classList.add("custom-scrollbar-thumb");
  customScrollbar.appendChild(customScrollbarThumb);

  function updateScroll() {
    const containerScrollTop = new__customOptionsContainer.scrollTop;
    const containerHeight = new__customOptionsContainer.clientHeight;
    const containerScrollHeight = new__customOptionsContainer.scrollHeight;
    const scrollbarHeight = customScrollbar.clientHeight;
    const thumbHeight = Math.max((containerHeight / containerScrollHeight) * scrollbarHeight, 20);
    const maxThumbTop = scrollbarHeight - thumbHeight;
    const thumbTop = (containerScrollTop / (containerScrollHeight - containerHeight)) * maxThumbTop;
    customScrollbarThumb.style.height = `${thumbHeight}px`;
    customScrollbarThumb.style.top = `${thumbTop}px`;
  }

  new__customTrigger.addEventListener("click", () => {
    if (new__customSelect.classList.contains("open")) {
      new__customSelect.classList.remove("open");
    } else {
      closeAllSelectsExcept(new__customSelect);
      new__customSelect.classList.add("open");
    }
  });

  new__customOptionsContainer.addEventListener("scroll", updateScroll);

  new__customOptionsList.forEach((o) => {
    o.addEventListener("click", () => {
      const new__customOptionValue = o.getAttribute("data-value");
      new__customTrigger.textContent = o.textContent;
      new__customSelect.classList.remove("open");
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
        new__customOptionsContainer.scrollTop = 0;
      } else if (thumbTop > maxThumbTop) {
        customScrollbarThumb.style.top = maxThumbTop + "px";
        new__customOptionsContainer.scrollTop = new__customOptionsContainer.scrollHeight;
      } else {
        customScrollbarThumb.style.top = thumbTop + "px";
        new__customOptionsContainer.scrollTop = thumbTop / maxThumbTop * (new__customOptionsContainer.scrollHeight - new__customOptionsContainer.clientHeight);
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


/* passwordInput */

const passwordInput = document.getElementById("password");
const passwordIcon = document.querySelector(".password-icon");

passwordIcon.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});


/* let-know */

const addButton = document.querySelector('.user-add');
const inputFields = document.querySelectorAll('.popup__users-col input[type="text"], .popup__users-col input[type="password"]');
const selectFields = document.querySelectorAll('.popup__users-col .new__custom-select, .popup__users-col .custom-select');

addButton.addEventListener('click', function () {
  inputFields.forEach(function (field) {
    if (field.value.trim() === '') {
      field.parentElement.querySelector('.let-know').classList.add('active');
    } else {
      field.parentElement.querySelector('.let-know').classList.remove('active');
    }
  });

  selectFields.forEach(function (field) {
    const selectedOption = field.querySelector('.select-selected, .new__custom-select__trigger');
    const options = field.querySelectorAll('.select-option, .new__custom-option');

    if (selectedOption.textContent === 'Please Select...' || selectedOption.textContent === 'Type here to search for Clan...') {
      selectedOption.parentElement.querySelector('.let-know').classList.add('active');
    } else {
      selectedOption.parentElement.querySelector('.let-know').classList.remove('active');
    }
  });
});

