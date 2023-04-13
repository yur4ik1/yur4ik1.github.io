
/* profile popup */

const profileBtn = document.querySelector('.header__avatar');
const profilePopup = document.querySelector('.header__profile-popup');

if (profileBtn && profilePopup) {
  profileBtn.addEventListener('click', () => {
    profilePopup.classList.toggle('active');
  });
}

/* delete popup */

const deleteBtn = document.querySelector('.delete-icon');
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
    if (!event.target.closest('.alert-popup') && !event.target.closest('.delete-icon')) {
      deletePopup.classList.remove('active');
      deleteBtn.classList.remove('active');
    }
  });
}

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

/* custom select new__custom */

const new__customSelects = document.querySelectorAll(".new__custom-select");

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
    new__customSelect.classList.toggle("open");
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


