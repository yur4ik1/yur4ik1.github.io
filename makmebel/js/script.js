// 
// burger
// 

const headerBurger = document.querySelector(".header__burger");

if(headerBurger){
  const burgerSlider = document.querySelector(".header__burger-slider");

  headerBurger.addEventListener("click", ()=>{
    console.log("clk");
    if(headerBurger.classList.contains("active")){
      headerBurger.classList.remove("active");
      burgerSlider.classList.remove("active");
      document.body.style.overflow = "visible";
      document.body.style.height = "unset";
    } else{
      headerBurger.classList.add("active");
      burgerSlider.classList.add("active");
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    }
 
  })
}


// 
// Filter
// 

const cathalogBurger = document.querySelector(".cathalog-filter");

if(cathalogBurger){
  const cathalogSlider = document.querySelector(".cathalog_sidebar");

  cathalogBurger.addEventListener("click", ()=>{
    console.log("clk");
    if(cathalogBurger.classList.contains("active")){
      cathalogBurger.classList.remove("active");
      cathalogSlider.classList.remove("active");
    } else{
      cathalogBurger.classList.add("active");
      cathalogSlider.classList.add("active");
 
    }
 
  })
}

// 
// Sort
// 

const sortBurger = document.querySelector(".sort-mobile");

if(sortBurger){
  const sortSlider = document.querySelector(".sort-method");

  sortBurger.addEventListener("click", ()=>{
    console.log("clk");
    if(sortBurger.classList.contains("active")){
      sortBurger.classList.remove("active");
      sortSlider.classList.remove("active");
    } else{
      sortBurger.classList.add("active");
      sortSlider.classList.add("active");
 
    }
 
  })
}

// 
// More text
// 

const moreBurger = document.querySelector(".more-text");

if(moreBurger){
  const moreSlider = document.querySelector(".tabs__content");
  const showText = document.querySelector(".show-text");
  const more = document.querySelector(".more");

  moreBurger.addEventListener("click", ()=>{
    console.log("clk");
    if(moreBurger.classList.contains("full")){
      moreBurger.classList.remove("full");
      moreSlider.classList.remove("full");
      showText.classList.remove("active");
      more.classList.remove("show");
    } else{
      moreBurger.classList.add("full");
      moreSlider.classList.add("full");
      showText.classList.add("active");
      more.classList.add("show");
    }
 
  })
}


// 
// Size
// 

const sizeBurger = document.querySelector(".more-size");

if(sizeBurger){
  const sizeSlider = document.querySelector(".size-active");

  sizeBurger.addEventListener("click", ()=>{
    console.log("clk");
    if(sizeBurger.classList.contains("active")){
      sizeBurger.classList.remove("active");
      sizeSlider.classList.remove("active");
    } else{
      sizeBurger.classList.add("active");
      sizeSlider.classList.add("active");
 
    }
 
  })
}

// 
// Pop Up
// 

let aboutYouPopupOpen = document.querySelectorAll(".inrto-btn");
let aboutYouPopup = document.querySelector(".popop-form");

if(aboutYouPopup && aboutYouPopupOpen){

    for (let i = 0; i < aboutYouPopupOpen.length; i++) {
        aboutYouPopupOpen[i].addEventListener('click',()=>{
            closeAllPopups();
            aboutYouPopup.classList.add("popup-active");
            checkHeight(aboutYouPopup);
        });  
        
    }

    aboutYouPopup.querySelector(".popup-close").addEventListener("click",()=>{
        closeAllPopups();
    }) 

}

function closeAllPopups(){
  let popupsList = document.querySelectorAll(".popop-form");
  
  for (let i = 0; i < popupsList.length; i++) {
      popupsList[i].classList.remove("popup-active");
  }
} 


function checkHeight(el){
  console.log("check");

  insideBlock = el.querySelector(".popup_inner");

  if(insideBlock){
      elHeight = Number(window.getComputedStyle(insideBlock).height.slice(0,-2));

      if(elHeight >window.innerHeight){
          
          el.style.alignItems = "flex-start";
          el.style.overflowY = "scroll";

      }

  }
}

function CheckExistClass(objList, classToFind){
  let exist = false;
  
  if(objList.length > 0){

      for (let b = 0; b < (objList.length-2); b++) {

          for (let i = 0; i < objList[b].classList.length; i++) {
              if(objList[b].classList[i] == classToFind){
                  exist = true;
              }
          }
      }
  }
  

  if(exist == true){
      return true;
  }
  else{
      return false;
  }
}

// 
// Slider
// 

'use strict';

const min = document.querySelector('.min-range-item');
const max = document.querySelector('.max-range-item');
const rangeBlock = document.querySelector('.range');
let fill = document.querySelector('.range-fill');
const infoBox = document.querySelector('.info');


let minInfo = document.querySelector('.min-price');
let maxInfo = document.querySelector('.max-price');


const dataWidth = +rangeBlock.dataset.width;
const dataType = rangeBlock.dataset.type;
const dataUnits = rangeBlock.dataset.units;
const dataMinVal = +min.dataset.value;
const dataMaxVal = +max.dataset.value;

const startX = rangeBlock.getBoundingClientRect().x;

let shiftMax = max.clientWidth;
let shiftMin = min.clientWidth;

if (dataType === 'single') {
  min.style.display = 'none';
  document.querySelector('.min-box').style.display = 'none';
  shiftMin = 0;
}
if (dataType === 'duble') {
  min.style.display = 'block';
  document.querySelector('.min-box').style.display = 'block';
}


let minValue = startX;
let maxValue = startX + dataWidth - shiftMax;


rangeBlock.style.width = dataWidth + 'px';
infoBox.style.width = dataWidth + 'px';
minInfo.insertAdjacentHTML('beforebegin', dataUnits);
minInfo.insertAdjacentHTML('afterbegin', dataMinVal);
maxInfo.insertAdjacentHTML('beforebegin', dataUnits);
maxInfo.insertAdjacentHTML('afterbegin', dataMaxVal);

min.style.left = 0 + 'px';
max.style.left = dataWidth - shiftMax + 'px';

/**
 * @param event 
 */
const check = (event) => {

    
    let targetMain = event.target;

    
    let currentMaxValue, currentMinValue;

    /**
     * @param event 
     */
    const move = (event) => {

        
        let e;
        (event.type === 'touchmove') ? e = event.touches[0] : e = event;
        
        if (targetMain === max) {
            currentMaxValue = maxValue;
            currentMinValue = parseInt(min.style.left) + shiftMin + startX;
        }

        if (targetMain === min) {
            currentMinValue = minValue;
            currentMaxValue = parseInt(max.style.left) - shiftMax + startX;
        }

        if (e.clientX - (shiftMin / 2) > currentMinValue && e.clientX - (shiftMax / 2) < currentMaxValue) {
            targetMain.style.left = e.clientX - startX - (shiftMax / 2) + 'px';
        } else if (e.clientX < currentMinValue && targetMain === min) {
            targetMain.style.left = 0 + 'px';
        } else if (e.clientX > currentMaxValue && targetMain === max) {
            targetMain.style.left = dataWidth - shiftMax + 'px';
        } else if (e.clientX < currentMinValue && targetMain === max && shiftMin === 0) {
          targetMain.style.left = 0 + 'px';
          }

        fill.style.left = min.style.left;
        fill.style.width = parseInt(max.style.left) - parseInt(min.style.left) + shiftMax + 'px';

        let targetPrice;
        (targetMain === max) ? targetPrice = maxInfo : targetPrice = minInfo;
        targetPrice.textContent = parseInt(targetMain.style.left) * (dataMaxVal - dataMinVal ) / (dataWidth - shiftMax) + dataMinVal + '';
    }

    document.addEventListener('mousemove', move);
    document.addEventListener('touchmove', move);

    let mouseUpFn = () => {
        document.removeEventListener('mousemove', move);
        document.removeEventListener('touchmove', move);
    }

    document.addEventListener('mouseup', mouseUpFn);
    document.addEventListener('touchend', mouseUpFn);
}

rangeBlock.addEventListener('mousedown', check);
rangeBlock.addEventListener('touchstart', check);

