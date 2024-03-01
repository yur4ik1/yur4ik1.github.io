// tabs
document.addEventListener('DOMContentLoaded', function () {
  var buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(function (button, index) {
    button.addEventListener('click', function () {
      switchTab(index);
    });
  });
});

function switchTab(activeIndex) {
  var tabs = document.querySelectorAll('.tab-item');
  var buttons = document.querySelectorAll('.tab-btn');

  tabs.forEach(function (tab, index) {
    tab.classList.remove('active');
    buttons[index].classList.remove('active');
  });

  tabs[activeIndex].classList.add('active');
  buttons[activeIndex].classList.add('active');

  // Оновити позицію тултіпа для активного слайдера
  if (activeIndex === 0) { // Перевірка, чи активна вкладка резидентного калькулятора
    calculatePrice('sliderResidential', 'gbAmountResidential', 'totalPriceResidential', 'slider-tooltip-Residential', 'contactBtnResidential', false);
  } else if (activeIndex === 1) { // Перевірка, чи активна вкладка мобільного калькулятора
    calculatePrice('sliderMobile', 'gbAmountMobile', 'totalPriceMobile', 'slider-tooltip-Mobile', 'contactBtnMobile', true);
  }
}




// calc

var lastGbValue = 0;
function calculatePrice(sliderId, gbAmountId, totalPriceId, tooltipId, contactButtonId, isMobile) {
  var slider = document.getElementById(sliderId);
  var gbAmount = document.getElementById(gbAmountId);
  var totalPrice = document.getElementById(totalPriceId);
  var tooltip = document.getElementById(tooltipId);
  var contactButton = document.getElementById(contactButtonId);

  if (!slider || !gbAmount || !totalPrice || !tooltip || !contactButton) {
    console.warn('Some elements are not found!');
    return;
  }

  var gb = parseInt(slider.value);
  var pricePerGb;

  if (isMobile) {
    if (gb < 15) {
      pricePerGb = 8;
    } else if (gb < 30) {
      pricePerGb = 7.5;
    } else if (gb < 50) {
      pricePerGb = 7;
    } else {
      pricePerGb = 6.5;
    }
  } else {
    if (gb < 15) {
      console.log("1-14");
      pricePerGb = 6;
    } else if (gb < 30) {
      console.log("15-29");
      pricePerGb = 5.5;
    } else if (gb < 50) {
      console.log("30-49");
      pricePerGb = 5;
    } else {
      console.log("50-100");
      pricePerGb = 4.5;
    }
  }

  var total = gb * pricePerGb;
  totalPrice.innerText = '$' + total.toFixed(2);
  gbAmount.innerText = gb + ' Gb';
  tooltip.innerText = gb + ' Gb';

  if (gb === 100) {
    contactButton.classList.add('active');
    totalPrice.style.display = 'none';
  } else {
    contactButton.classList.remove('active');
    totalPrice.style.display = '';
  }

  updateTooltipPosition(slider, tooltip);
}

function updateTooltipPosition(slider, tooltip) {
  var sliderWidth = slider.offsetWidth;
  var thumbWidth = 40; 
  var max = slider.max;
  var min = slider.min;
  var percent = ((slider.value - min) / (max - min));
  var tooltipPosition = percent * (sliderWidth - thumbWidth) + thumbWidth / 2 - tooltip.offsetWidth / 2;
  tooltip.style.left = tooltipPosition + 'px';
}

function initializeCalculators() {
  

  calculatePrice('sliderResidential', 'gbAmountResidential', 'totalPriceResidential', 'slider-tooltip-Residential', 'contactBtnResidential', false);
  calculatePrice('sliderMobile', 'gbAmountMobile', 'totalPriceMobile', 'slider-tooltip-Mobile', 'contactBtnMobile', true);

  var sliderResidential = document.getElementById('sliderResidential');
  var sliderMobile = document.getElementById('sliderMobile');

  if (sliderResidential) {
    sliderResidential.oninput = function() {
      calculatePrice('sliderResidential', 'gbAmountResidential', 'totalPriceResidential', 'slider-tooltip-Residential', 'contactBtnResidential', false);
    };
  }

  if (sliderMobile) {
    sliderMobile.oninput = function() {
      calculatePrice('sliderMobile', 'gbAmountMobile', 'totalPriceMobile', 'slider-tooltip-Mobile', 'contactBtnMobile', true);
    };
  }
  
}

window.onload = initializeCalculators;



