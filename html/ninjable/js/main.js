
/* profile popup */

const profileBtn = document.querySelector('.header__avatar');
const profilePopup = document.querySelector('.header__profile-popup');

profileBtn.addEventListener('click', () => {
  profilePopup.classList.toggle('active');
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

/* custom select country */

const countrySelect = document.querySelector(".country-select");
const countryTrigger = document.querySelector(".country-select__trigger");
const countryOptionsContainer = document.querySelector(".country-options");
const countryOptionsList = document.querySelectorAll(".country-option");
const customScrollbar = document.querySelector(".custom-scrollbar");
const customScrollbarThumb = document.createElement("div");
customScrollbarThumb.classList.add("custom-scrollbar-thumb");
customScrollbar.appendChild(customScrollbarThumb);

function updateScroll() {
  const containerScrollTop = countryOptionsContainer.scrollTop;
  const containerHeight = countryOptionsContainer.clientHeight;
  const containerScrollHeight = countryOptionsContainer.scrollHeight;
  const scrollbarHeight = customScrollbar.clientHeight;
  const thumbHeight = Math.max((containerHeight / containerScrollHeight) * scrollbarHeight, 20);
  const maxThumbTop = scrollbarHeight - thumbHeight;
  const thumbTop = (containerScrollTop / (containerScrollHeight - containerHeight)) * maxThumbTop;
  customScrollbarThumb.style.height = `${thumbHeight}px`;
  customScrollbarThumb.style.top = `${thumbTop}px`;
}

countryTrigger.addEventListener("click", () => {
  countrySelect.classList.toggle("open");
});

countryOptionsContainer.addEventListener("scroll", updateScroll);

countryOptionsList.forEach((o) => {
  o.addEventListener("click", () => {
    const countryOptionValue = o.getAttribute("data-value");
    countryTrigger.textContent = o.textContent;
    countrySelect.classList.remove("open");
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
      countryOptionsContainer.scrollTop = 0;
    } else if (thumbTop > maxThumbTop) {
      customScrollbarThumb.style.top = maxThumbTop + "px";
      countryOptionsContainer.scrollTop = countryOptionsContainer.scrollHeight;
    } else {
      customScrollbarThumb.style.top = thumbTop + "px";
      countryOptionsContainer.scrollTop = thumbTop / maxThumbTop * (countryOptionsContainer.scrollHeight - countryOptionsContainer.clientHeight);
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

