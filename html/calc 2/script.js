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

function getMultipliedPrice(times, value) {
    return  '$' + (value * times).toFixed(1); // Rounded to 1 decimal place
}


const peakSliderValue = 1000
const valuesList = [1, 142, 285, 428, 571, 714, 856, 1000];

// Create desktop slider
function residentialTotalPriceCalculation(value) {
    if (value > 856) {
        return getMultipliedPrice(3, value);
    } else if (value > 714) {
        return getMultipliedPrice(3.5, value);
    } else if (value > 571) {
        return getMultipliedPrice(4, value);
    } else if (value > 428) {
        return getMultipliedPrice(4.5, value);
    } else if (value > 285) {
        return getMultipliedPrice(5, value);
    } else if (value > 142) {
        return getMultipliedPrice(5.5, value);
    } else {
        return getMultipliedPrice(6, value);
    }
}

let residentialValuesValues = function (value) {
    if (value === 1) {
        return '$6.0/Gb';
    } else if (value === 142) {
        return '$5.5/Gb';
    } else if (value === 285) {
        return '$5.0/Gb';
    } else if (value === 428) {
        return '$4.5/Gb';
    } else if (value === 571) {
        return '$4/Gb';
    } else if (value === 714) {
        return '$3.5/Gb';
    } else if (value === 856) {
        return '$3/Gb';
    } else if (value === 1000) {
        return '$2.5/Gb';
    }
};
let residentialPipsSlider = document.getElementById('slider-click-pips');
let residentialTotalText = document.querySelector('.total > span');
let residentialContactButton = document.querySelector('.contact-btn');
let residentialTotalValue = document.querySelector('.total > #totalPriceResidential');
let residentialTrafficAmountText = document.getElementById('gbAmountResidential');

initializeSlider(
    residentialPipsSlider, 
    peakSliderValue, 
    valuesList, 
    residentialValuesValues, 
    residentialTotalPriceCalculation,
    residentialTotalText,
    residentialContactButton,
    residentialTotalValue,
    residentialTrafficAmountText);


// Create mobile slider
var mobilePipsSlider = document.getElementById('slider-click-pips-mob');
function mobileTotalPriceCalculation(value) {
    if (value > 856) {
        return getMultipliedPrice(5, value);
    } else if (value > 714) {
        return getMultipliedPrice(5.5, value);
    } else if (value > 571) {
        return getMultipliedPrice(6, value);
    } else if (value > 428) {
        return getMultipliedPrice(6.5, value);
    } else if (value > 285) {
        return getMultipliedPrice(7, value);
    } else if (value > 142) {
        return getMultipliedPrice(7.5, value);
    } else {
        return getMultipliedPrice(8, value);
    }
}
let mobileValuesValues = function (value) {
    if (value === 1) {
        return '$8.0/Gb';
    } else if (value === 142) {
        return '$7.5/Gb';
    } else if (value === 285) {
        return '$7.0/Gb';
    } else if (value === 428) {
        return '$6.5/Gb';
    } else if (value === 571) {
        return '$6.0/Gb';
    } else if (value === 714) {
        return '$5.5/Gb';
    } else if (value === 856) {
        return '$5/Gb';
    } else if (value === 1000) {
        return '$4.5/Gb';
    }
};
let mobileTotalText = document.querySelector('.total-mob > span');
let mobileContactButton = document.querySelector('.contact-btn-mob');
let mobileTotalValue = document.querySelector('.total > #totalPriceResidential-mob');
let mobileTrafficAmountText = document.getElementById('gbAmountResidential-mob');


initializeSlider(
    mobilePipsSlider,
    peakSliderValue,
    valuesList,
    mobileValuesValues,
    mobileTotalPriceCalculation,
    mobileTotalText,
    mobileContactButton,
    mobileTotalValue,
    mobileTrafficAmountText);

function initializeSlider(
    sliderElement, 
    peakValue, 
    valuesList,
    valuesValuesFunction,
    priceCalculationFunction,
    totalTextElement,
    contactButtonElement,
    totalValueElement,
    trafficAmountTextElement) {
    noUiSlider.create(sliderElement, {
        start: [1], // Start from 1 instead of 0
        connect: [true, false],
        tooltips: [true, wNumb({decimals: 1})],
        range: {
            min: 1,
            max: peakValue
        },
        tooltips: true,
        format: wNumb({
            decimals: 0
        }),
        pips: {
            mode: 'values',
            values: valuesList,
            format: {
                to: valuesValuesFunction
            }
        }
    });


    sliderElement.noUiSlider.on('update', function (values, handle) {
        var value = parseInt(values[handle]); // Convert value to integer for accurate multiplication
        var totalPrice = priceCalculationFunction(value);


        if (value > peakValue - 1) {
            totalTextElement.innerHTML = 'GET A BETTER PRICE';
            contactButtonElement.classList.add('active');
        } else {
            totalTextElement.innerHTML = 'TOTAL:';
            contactButtonElement.classList.remove('active');
        }

        totalValueElement.innerHTML = totalPrice;

        // Update gbAmountResidential
        var gbAmountResidential = value;
        if (value >= peakValue) {
            gbAmountResidential = `${peakValue}+`;
        }
        trafficAmountTextElement.innerHTML = gbAmountResidential + ' Gb';
    });


    var pips = sliderElement.querySelectorAll('.noUi-value');

    function clickOnPip() {
        var value = Number(this.getAttribute('data-value'));
        sliderElement.noUiSlider.set(value);
    }

    for (var i = 0; i < pips.length; i++) {

        // For this example. Do this in CSS!
        pips[i].style.cursor = 'pointer';
        pips[i].addEventListener('click', clickOnPip);
    }
}
