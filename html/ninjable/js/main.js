

/* select */

var selectElements = document.getElementsByClassName("custom-select");
for (var i = 0; i < selectElements.length; i++) {
  var selectElement = selectElements[i];
  var selectSelectedElement = selectElement.getElementsByClassName("select-selected")[0];
  var selectItemsElement = selectElement.getElementsByClassName("select-items")[0];
  var selectOptionElements = selectItemsElement.getElementsByClassName("select-option");
  selectSelectedElement.addEventListener("click", function() {
    this.classList.toggle("select-arrow-active");
    selectItemsElement.classList.toggle("select-hide");
  });
  for (var j = 0; j < selectOptionElements.length; j++) {
    selectOptionElements[j].addEventListener("click", function() {
      var selectOptionValue = this.innerHTML;
      selectSelectedElement.innerHTML = selectOptionValue;
      selectItemsElement.classList.add("select-hide");
    });
  }
}