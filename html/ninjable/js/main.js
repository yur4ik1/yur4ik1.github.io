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

const countrySelect = document.querySelector(".country-select");
const countryTrigger = document.querySelector(".country-select__trigger");
const countryOptionsContainer = document.querySelector(".country-options");
const countryOptionsList = document.querySelectorAll(".country-option");

countryTrigger.addEventListener("click", () => {
  countrySelect.classList.toggle("open");
});

countryOptionsList.forEach((o) => {
  o.addEventListener("click", () => {
    const countryOptionValue = o.getAttribute("data-value");
    countryTrigger.textContent = o.textContent;
    countrySelect.classList.remove("open");
  });
});

countryOptionsContainer.addEventListener("scroll", () => {
  countryOptionsContainer.classList.add("scrolling");
  clearTimeout(countryOptionsContainer.dataset.scrollTimeout);
  countryOptionsContainer.dataset.scrollTimeout = setTimeout(() => {
    countryOptionsContainer.classList.remove("scrolling");
  }, 250);
});