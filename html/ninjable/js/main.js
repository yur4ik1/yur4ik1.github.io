
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

const archiveDeleteBtns = document.querySelectorAll('.delete-icon, .archive');

archiveDeleteBtns.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    event.preventDefault();
    const row = btn.closest('.row-item');
    const popup = document.createElement('div');
    popup.classList.add('alert-popup');
    popup.innerHTML = `
      <p>Are you sure?</p>
      <div class="btns">
        <button class="true">Yes</button>
        <button class="false">No</button>
      </div>
    `;
    row.appendChild(popup);
    const trueBtn = popup.querySelector('.true');
    const falseBtn = popup.querySelector('.false');
    trueBtn.addEventListener('click', () => {
      row.remove();
      popup.remove();
    });
    falseBtn.addEventListener('click', () => {
      popup.remove();
    });
  });
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


/* Custom branding info popup */

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

/* Departments info popup */

const infoTitle = document.querySelector('.departments-title');
const infoPopup = document.querySelector('.info-popup');

if (infoTitle && infoPopup) {
  infoTitle.addEventListener('click', () => {
    infoPopup.classList.toggle('active');
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.info-popup') && !event.target.closest('.departments-title')) {
      infoPopup.classList.remove('active');
    }
  });
}

/* Departments edit field */

document.addEventListener("DOMContentLoaded", function () {
  var departmentBlocks = document.querySelectorAll(".department");

  departmentBlocks.forEach(function (departmentBlock) {
    var editLink = departmentBlock.querySelector(".edit");

    editLink.addEventListener("click", function (event) {
      event.preventDefault();

      var editElements = departmentBlock.querySelectorAll(".edit");
      var departmentFieldElements = departmentBlock.querySelectorAll(".department-field");

      if (editLink.classList.contains("active")) {
        editElements.forEach(function (editElement) {
          editElement.classList.remove("active");
        });

        departmentFieldElements.forEach(function (departmentFieldElement) {
          departmentFieldElement.classList.remove("active");
        });
      } else {
        editElements.forEach(function (editElement) {
          editElement.classList.add("active");
        });

        departmentFieldElements.forEach(function (departmentFieldElement) {
          departmentFieldElement.classList.add("active");
        });
      }
    });

    document.addEventListener("click", function (event) {
      if (!departmentBlock.contains(event.target)) {
        var editElements = departmentBlock.querySelectorAll(".edit");
        var departmentFieldElements = departmentBlock.querySelectorAll(".department-field");

        editElements.forEach(function (editElement) {
          editElement.classList.remove("active");
        });

        departmentFieldElements.forEach(function (departmentFieldElement) {
          departmentFieldElement.classList.remove("active");
        });
      }
    });
  });
});


/* custom period popup */

const positionsPopup = document.querySelector('.positions__popup.add-department');
const addDepartmentBtns = Array.from(document.querySelectorAll('.add-department-btn'));
const positionsClose = document.querySelector('.edit-close');

if (positionsPopup && addDepartmentBtns.length > 0) {
  addDepartmentBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      positionsPopup.classList.add('active');
    });
  });
  if (positionsClose) {
    positionsClose.addEventListener('click', () => {
      positionsPopup.classList.remove('active');
    });
  }
}

const addJobPopup = document.querySelector('.positions__popup.add-job');
const addJobBtns = Array.from(document.querySelectorAll('.add-job-btn'));
const addJobClose = document.querySelector('.add-job-close');

if (addJobPopup && addJobBtns.length > 0) {
  addJobBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      addJobPopup.classList.add('active');
    });
  });
  if (addJobClose) {
    addJobClose.addEventListener('click', () => {
      addJobPopup.classList.remove('active');
    });
  }
}

const editJobPopup = document.querySelector('.positions__popup.edit-job');
const editJobBtns = Array.from(document.querySelectorAll('.edit-job-btn'));
const editJobClose = document.querySelector('.edit-job-close');

if (editJobPopup && editJobBtns.length > 0) {
  editJobBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      editJobPopup.classList.add('active');
    });
  });
  if (editJobClose) {
    editJobClose.addEventListener('click', () => {
      editJobPopup.classList.remove('active');
    });
  }
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


/* filter select */

let select = document.querySelector(".filter-select");
let selectSelected = select ? select.querySelector(".select-selected") : null;
let selectItems = select ? select.querySelector(".select-items") : null;

if (selectSelected) {
  selectSelected.addEventListener("click", function () {
    if (selectItems && selectItems.classList.contains("select-hide")) {
      selectItems.classList.remove("select-hide");
    } else if (selectItems) {
      selectItems.classList.add("select-hide");
    }
  })
};


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

  new__customOptionsList.forEach((option) => {
    option.addEventListener('click', (event) => {
      const new__customOptionValue = option.getAttribute('data-value');
      const new__customTrigger = new__customSelect.querySelector('.new__custom-select__trigger');
      new__customTrigger.textContent = option.textContent;
      new__customSelect.classList.remove('open');
      if (new__customSelect.classList.contains('filter-select-scroll')) {
        new__customSelect.classList.add('open');
        new__customTrigger.textContent = "Type here to search for Clan..."
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

if (passwordInput && passwordIcon) {
  passwordIcon.addEventListener("click", function () {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  })
};


/* let-know */

const addButton = document.querySelector('.user-add');
const inputFields = document.querySelectorAll('.popup__users-col input[type="text"], .popup__users-col input[type="password"]');
const selectFields = document.querySelectorAll('.popup__users-col .new__custom-select, .popup__users-col .custom-select');

if (addButton && inputFields) {
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
  })
};

