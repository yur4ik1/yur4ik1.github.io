

//
//  Animation
//


document.addEventListener("DOMContentLoaded", ()=>{
  scrolling()
});

window.addEventListener('scroll',scrolling);


function isPartiallyVisible(el){
    var elementBoundary = el.getBoundingClientRect();
    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    var height = elementBoundary.height;

    return((top + height >= 0) && (height + window.innerHeight >= bottom));
}
function isFullyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();
    
    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;

    return ((top >= 0) && (bottom <= window.innerHeight));
}

// Elements
function animPartiallyVisible(elem,Class,duration = undefined, delay = undefined){
    if(isPartiallyVisible(elem)){
        elem.classList.add(Class);
    }
    if(duration != undefined){
        elem.style.animationDuration = duration;
        elem.style.animationDelay = delay;
    }
}
function animPartiallyVisibleALL(elem,Class,duration = undefined, delay = undefined){
    
    if(elem){

        for(var i = 0; i < elem.length;i++){
            if(isPartiallyVisible(elem[i])){
                elem[i].classList.add(Class);
            }
            if(duration != undefined){
                elem[i].style.animationDuration = duration;
                elem[i].style.animationDelay = delay;
            }
        }

    }
    
    
}


function queryA(clas){
    tmp = document.querySelectorAll(clas);
    return tmp;
}
//
let first = true;

const whatWeIllustartion = document.querySelector(".what-we-create__illustartion")

function scrolling(e){
  animPartiallyVisibleALL(queryA(".dinos__dino-left"),"animate__fadeInLeft", "1.2s");
  animPartiallyVisibleALL(queryA(".dinos__dino-right"),"animate__fadeInRight", "1.2s");
  animPartiallyVisibleALL(queryA(".dinos__dino-center"),"center__fade");
  animPartiallyVisibleALL(queryA(".ship-container_ship"),"animate__slideInRight", "2.5s");
  animPartiallyVisibleALL(queryA(".what-we-create__illustartion"),"active");
  animPartiallyVisibleALL(queryA(".brief__contacts .brief-image"),"animate__fadeInLeft", "1.2s");
  animPartiallyVisibleALL(queryA(".brief__brand-platform .brief-image"),"animate__fadeInRight", "1.2s");
  animPartiallyVisibleALL(queryA(".brief__brand-media .brief-image"),"animate__fadeInLeft", "1.2s");
  animPartiallyVisibleALL(queryA(".brief_total .brief-image"),"animate__fadeInRight", "1.2s");

  if(whatWeIllustartion){
    if(!isPartiallyVisible(whatWeIllustartion)){
      whatWeIllustartion.classList.remove("active");
    }
  }
  
}

// 
// Ticker
// 

const textWrapepr = document.querySelector(".runline__wrapper");
const textLine= document.querySelector(".runline__line");

if(textWrapepr){

  const innerElemLenght = Number(getComputedStyle(textLine.querySelector('p')).width.slice(0,-2));
  const innerElemAmount = Number(textLine.querySelectorAll('p').length);

  const lineLength = innerElemLenght * innerElemAmount;
  
  let currPos = 0;
  textLine.style.transform = "translateX("+0+"px)";

  let timer = setInterval(() => {
    if(window.innerWidth > 500){
      currPos-=3;
      textLine.style.transform = "translateX("+currPos+"px)";

      if(currPos <= -(lineLength-innerElemLenght)){
        currPos = 0
      }
    }    
  }, 25);
}

//
//  Single Range
//

const rangeLabel = document.querySelector(".single-range__label")

if(rangeLabel){

  const rangeLine = rangeLabel.querySelector(".range-line");
  const range = rangeLabel.querySelector("input");
  const MSex = document.querySelector(".percent-left");
  const WSex = document.querySelector(".percent-right");
  const womanRange = document.getElementById("womanRange");

  let rangeWidth = Number(getComputedStyle(rangeLabel).width.slice(0,-2));

  let syncLine = (rangeLine, range, msex, wsex) => {
    rangeLine.style.width = (rangeWidth) / Number(range.getAttribute("max")) * range.value + "px";
    msex.firstChild.data = range.value + "%";
    wsex.firstChild.data = (100 - range.value) + "%";
  }

  syncLine(rangeLine, range,MSex, WSex)

  range.addEventListener("input", (el)=>{
    syncLine(rangeLine, range,MSex, WSex)
    womanRange.value = 100-el.path[0].value;
  }) 
  
}

//
// girl anim
// 

const girl = document.querySelector(".illustrarion_girl")

if(girl){

  if(window.innerWidth > 500){
    const firstSrc = girl.getAttribute("firstSrc")
    const secondSrc = girl.getAttribute("secondSrc")
    let changed = false

    setInterval(()=>{
      changed ? girl.setAttribute("src", firstSrc) : girl.setAttribute("src", secondSrc);
      changed = !changed;
    }, 1000)  
  }
}

// 
// Geografy input
// 

const globalGeografyInput = document.getElementById("geografyGlobalInput")
const geografyLocal = document.getElementById("geografyLocal");
const geografyFederal = document.getElementById("geografyFederal");
const geografyMulti = document.getElementById("geografyMulti");

if(geografyLocal){
  geografyLocal.addEventListener("change", ()=>{
    globalGeografyInput.value = "Локальный";
  });

  geografyMulti.addEventListener("change", ()=>{
    globalGeografyInput.value = "Международный";
  });  
  
  geografyFederal.addEventListener("change", ()=>{
    globalGeografyInput.value = "Федеральный";
  });
}


// 
// News input
// 
const globalNewsInput = document.getElementById("newsGlobal")
const totalYesNews = document.getElementById("totalYesNews");
const totalNoNews = document.getElementById("totalNoNews");

// 
// Merriage input
// 

const globalMerriageInput = document.getElementById("merriageGlobalInput")
const inMarriage = document.getElementById("coreInMarriage");
const notInMarriage = document.getElementById("coreNotInMarriage");

if(inMarriage){
  inMarriage.addEventListener("change", ()=>{
    globalMerriageInput.value = "В браке";
  });
  
  
  notInMarriage.addEventListener("change", ()=>{
    globalMerriageInput.value = "Не в браке";
  });
}

// 
// check required inputs
// 

const requiredInputs = document.querySelectorAll(".requiredContent");

if(requiredInputs.length > 0){
  const formSumbit = document.querySelector(".total-submit");
  const fieldAlert = document.querySelector(".total-submit_field-alert")
  const fakeSubmit = document.querySelector(".total-submit_fake-submit")
  let requiredAmount = 0

  requiredInputs.forEach((el)=>{
    el.setAttribute("needToFill", true)
    requiredAmount++;
  })

  requiredInputs.forEach((el)=>{
    el.addEventListener("change", ()=>{
      checkFields(el,requiredInputs, formSumbit)
    })
  })

  function countChecks(elemList){
    var needToFill = 0;

    elemList.forEach((it)=>{
      if(it.getAttribute("needToFill") == "true"){
        needToFill ++;
      }
    })
    
    console.log(`need to fill - `, needToFill);
    return needToFill
  }

  function toggleSendButton(needToFill, submit){
    needToFill != 0 ? submit.setAttribute("disabled","") : submit.removeAttribute("disabled")
  }

  function checkFields(element, elemList, submit){
    // Check if input is empty
    // If it is, we change needToFill to false
    // if we cleared it and it is empty needToFill will be true
    (element.value != "" && element.value != "-1") ? element.setAttribute("needToFill", false) : element.setAttribute("needToFill", true)

    // chek in each input chang how much inputs must be filled
    let needToFill = countChecks(elemList);
    
    // if inputs which must be filled = 0, we remove disabled attribute from button
    toggleSendButton(needToFill, submit)


    submit.hasAttribute("disabled") ? fieldAlert.classList.add("active") : fieldAlert.classList.remove("active");
    submit.hasAttribute("disabled") ? fakeSubmit.style.display = "block" : fakeSubmit.style.display = "none";
  }

  geografyLocal.addEventListener("change", ()=>{
    globalGeografyInput.value = "Локальный";
    checkFields(globalGeografyInput,requiredInputs, formSumbit)
  });

  geografyMulti.addEventListener("change", ()=>{
    globalGeografyInput.value = "Междонародный";
    checkFields(globalGeografyInput,requiredInputs, formSumbit)
  });
  
  geografyFederal.addEventListener("change", ()=>{
    globalGeografyInput.value = "Федеральный";
    checkFields(globalGeografyInput,requiredInputs, formSumbit)
  });

  inMarriage.addEventListener("change", ()=>{
    globalMerriageInput.value = "В браке";
    checkFields(globalMerriageInput,requiredInputs, formSumbit)
  });

  notInMarriage.addEventListener("change", ()=>{
    globalMerriageInput.value = "Не в браке";
    checkFields(globalMerriageInput,requiredInputs, formSumbit)
  });

  totalYesNews.addEventListener("change", ()=>{
    globalNewsInput.value = "Да";
    checkFields(globalNewsInput,requiredInputs, formSumbit)
  });

  totalNoNews.addEventListener("change", ()=>{
    globalNewsInput.value = "Да";
    checkFields(globalNewsInput,requiredInputs, formSumbit)
  });
}


// 
// dual range
// 

window.addEventListener('DOMContentLoaded', () => {
  if(document.querySelector(".dual-range")){
    new dualRangeSlider(document.querySelector(".dual-range"))
  }
	
})


class dualRangeSlider {
	constructor(rangeElement) {
		this.range = rangeElement
		this.min = Number(rangeElement.dataset.min)
		this.max = Number(rangeElement.dataset.max)
		this.handles = [...this.range.querySelectorAll(".handle")]
		this.startPos = 0;
		this.activeHandle;
		
		this.handles.forEach(handle => {
			handle.addEventListener("mousedown", this.startMove.bind(this))
			handle.addEventListener("touchstart", this.startMoveTouch.bind(this))
		})
		
		window.addEventListener("mouseup", this.stopMove.bind(this))
		window.addEventListener("touchend", this.stopMove.bind(this))
		window.addEventListener("touchcancel", this.stopMove.bind(this))
		window.addEventListener("touchleave", this.stopMove.bind(this))
		
		const rangeRect = this.range.getBoundingClientRect();
		const handleRect = this.handles[0].getBoundingClientRect()
		this.range.style.setProperty("--x-1", "0px");
		this.range.style.setProperty("--x-2", rangeRect.width - handleRect.width/2 + "px");
		this.handles[0].dataset.value = this.range.dataset.min;
		this.handles[1].dataset.value = this.range.dataset.max;
	}
	
	startMoveTouch(e) {
		const handleRect = e.target.getBoundingClientRect()
		this.startPos = e.touches[0].clientX - handleRect.x;
		this.activeHandle = e.target;
		this.moveTouchListener = this.moveTouch.bind(this)
		window.addEventListener("touchmove", this.moveTouchListener);
	}
	
	startMove(e) {
		this.startPos = e.offsetX;
		this.activeHandle = e.target;
		this.moveListener = this.move.bind(this)
		window.addEventListener("mousemove", this.moveListener);
	}
	
	moveTouch(e) {
		this.move({clientX: e.touches[0].clientX})
	}
	
	move(e) {
		const isLeft = this.activeHandle.classList.contains("left")
		const property = isLeft ? "--x-1" : "--x-2";
		const parentRect = this.range.getBoundingClientRect();
		const handleRect = this.activeHandle.getBoundingClientRect();
		let newX = e.clientX - parentRect.x - this.startPos;
		if(isLeft) {
			const otherX = parseInt(this.range.style.getPropertyValue("--x-2"));
			newX = Math.min(newX, otherX - handleRect.width)
			newX = Math.max(newX, 0 - handleRect.width/2)
		} else {
			const otherX = parseInt(this.range.style.getPropertyValue("--x-1"));
			newX = Math.max(newX, otherX + handleRect.width)
			newX = Math.min(newX, parentRect.width - handleRect.width/2)
		}
		this.activeHandle.dataset.value = this.calcHandleValue((newX + handleRect.width/2) / parentRect.width)
		this.range.style.setProperty(property, newX + "px");
    document.getElementById(this.activeHandle.getAttribute("toId")).value = this.calcHandleValue((newX + handleRect.width/2) / parentRect.width)
	}
	
	calcHandleValue(percentage) {
		return Math.round(percentage * (this.max - this.min) + this.min)
	}
	
	stopMove() {
		window.removeEventListener("mousemove", this.moveListener);
		window.removeEventListener("touchmove", this.moveTouchListener);
	}
}

//
// Cookie close
//

const cookieWindow = document.getElementById("cookie")
const cookieClose = document.getElementById("cookie-close")

if(cookieWindow){
  cookieClose.addEventListener("click", ()=>{cookieWindow.classList.add("closed")})
}

// 
// Popup open
// 

function chechHeight(element, wrapper){
  const elHeight = getComputedStyle(element).height.slice(0,-2);
  const windowHeight = window.innerHeight;

  if(elHeight < windowHeight){
      wrapper.classList.add("center")
  } else{
      wrapper.classList.remove("center") 
  }
}

const popupWpapper = document.getElementById("popup-wrapper")

if(popupWpapper){
  const popupOpen = document.getElementById("popup-open")
  const popupClose = document.getElementById("popup-close")
  const popupInner = document.getElementById("popup-inner")

  console.log(popupOpen);
  console.log(popupClose);
  console.log(popupInner);

  popupOpen.addEventListener("click", ()=>{
      popupWpapper.classList.add("opened")
      chechHeight(popupInner,popupWpapper)
  })

  popupClose.addEventListener("click", ()=>{
      popupWpapper.classList.remove("opened")
      chechHeight(popupInner,popupWpapper)
  })
}
