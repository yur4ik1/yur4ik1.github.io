console.log('%cDeveloped by yur4ik69', 'color: #c434c4; font-size: 50px ');

console.log(
  '%cTG: @yur4ik69',
  'color: #c434c4; background: #eee; font-size: 30px '
);

// 
// Scroll
// 

/*
var html = document.documentElement;
var body = document.body;

var scroller = {
  target: document.querySelector("#scroll-container"),
  ease: 0.09, // <= scroll speed
  endY: 0,
  y: 0,
  resizeRequest: 1,
  scrollRequest: 0,
};

var requestId = null;

TweenLite.set(scroller.target, {
  rotation: 0.00,
  force3D: true
});

window.addEventListener("load", onLoad);

function onLoad() {    
  updateScroller();  
  window.focus();
  window.addEventListener("resize", onResize);
  document.addEventListener("scroll", onScroll); 
}

function updateScroller() {
  
  var resized = scroller.resizeRequest > 0;
    
  if (resized) {    
    var height = scroller.target.clientHeight;
    body.style.height = height + "px";
    scroller.resizeRequest = 0;
  }
      
  var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

  scroller.endY = scrollY;
  scroller.y += (scrollY - scroller.y) * scroller.ease;

  if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
    scroller.y = scrollY;
    scroller.scrollRequest = 0;
  }
  
  TweenLite.set(scroller.target, { 
    y: -scroller.y 
  });
  
  requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
}

function onScroll() {
  scroller.scrollRequest++;
  if (!requestId) {
    requestId = requestAnimationFrame(updateScroller);
  }
}

function onResize() {
  scroller.resizeRequest++;
  if (!requestId) {
    requestId = requestAnimationFrame(updateScroller);
  }
}
*/

// 
// Pop Up
// 

let aboutYouPopupOpen = document.querySelectorAll(".about-you-open-btn");
let aboutYouPopup = document.querySelector(".about-you_popup");

if(aboutYouPopup && aboutYouPopupOpen){

    for (let i = 0; i < aboutYouPopupOpen.length; i++) {
        aboutYouPopupOpen[i].addEventListener('click',()=>{
            closeAllPopups();
            aboutYouPopup.classList.add("popup-active");
            checkHeight(aboutYouPopup);
        });  
        
    }

   /* aboutYouPopup.querySelector("").addEventListener("click",()=>{
        closeAllPopups();
    }) */

}

function closeAllPopups(){
  let popupsList = document.querySelectorAll(".popup");
  
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
// Show
// 

function viewDiv(){
  document.getElementById("show").classList.add("show-active");
  document.getElementById("more__btn").classList.add("more__btn-none");
  document.getElementById("s__more-btn").classList.remove("s__more-btn-none");
};

function showDiv(){
  document.getElementById("show").classList.remove("show-active");
  document.getElementById("more__btn").classList.remove("more__btn-none");
  document.getElementById("s__more-btn").classList.add("s__more-btn-none");
};