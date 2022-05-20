console.log('%cDeveloped by Djigit & yur4ik96', 'color: #c434c4; font-size: 50px ');

console.log(
  '%cTG: @Djigit34 / @yura_k18',
  'color: #c434c4; background: #eee; font-size: 30px '
);

let screen = document.querySelector(".loading");

document.addEventListener("DOMContentLoaded", function(event) {
    
    setTimeout(()=>{
        screen.classList.add("disabled");
    
        let right_video = document.querySelector(".intro_right");
    
        if(right_video){
            right_video.querySelector("video").play();
        }
    }, 2000)

});



function ibg(){

    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
    ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
    }
}
    
ibg();

// 
// Burger
// 

let OpenBtn = document.querySelectorAll(".header-burger-open");

if(OpenBtn.length > 0){

    let menu = document.querySelector(".header-burger-menu");
    let CloseBtn = document.querySelector(".burger-close");
    let burgerItems = document.querySelectorAll(".burger_item");
    
    for (let i = 0; i < OpenBtn.length; i++) {
        
        OpenBtn[i].addEventListener('click',()=>{
            menu.classList.add("active-x")
            document.getElementById("closeSVG").style.display = "none";
            document.getElementById("openSVG").style.display = "block";
    
            let startS = 0.5;
            for (let i = 0; i < burgerItems.length; i++) {
                startS +=0.15;
                burgerItems[i].style.transitionDuration = startS + "s";
                burgerItems[i].style.transform = "translateX(0px)";
                opacityCounter(burgerItems[i],25);
            }
        });
        
    }

    

    CloseBtn.addEventListener('click',()=>{
        menu.classList.remove("active-x")
        document.getElementById("closeSVG").style.display = "block";
        document.getElementById("openSVG").style.display = "none";

        for (let i = 0; i < burgerItems.length; i++) {
            opacityReversedCounter(burgerItems[i],5);
            setTimeout(() => {
                burgerItems[i].style.transitionDuration = "0";
                burgerItems[i].style.transform = "translateX(200%)";
            }, 200);
        }        
    });
}

opacityCounter = (element,speed) =>{
    let tmp = 0;
    let timer = setInterval(()=>{
        tmp+=0.1;
        element.style.opacity = tmp;
        if(tmp >=1){
            clearTimeout(timer)
        }
    },speed)
}

opacityReversedCounter = (element,speed) =>{
    let tmp = 1;
    let timer = setInterval(()=>{
        tmp-=0.1;
        element.style.opacity = tmp;
        if(tmp <=0){
            clearTimeout(timer)
        }
    },speed)
}

let sideburgerBtn = document.querySelector(".header-burger-open-side");

document.addEventListener("scroll", ()=>{
    if(window.scrollY > 200){
        sideburgerBtn.style.opacity = "1"
    }
    else{
        sideburgerBtn.style.opacity = "0"
    }
    
})


// 
// Cursor
// 

let cursor = document.querySelector(".cursor");

if(window.innerWidth > 1000){
    window.addEventListener("mousemove", (e)=>{
        cursor.style.left = e.clientX+"px";
        cursor.style.top = e.clientY+ window.pageYOffset +"px";
    });
    
    document.onmouseleave = function(event) {
        cursor.style.display = "none"
    };
    
    document.onmouseenter = function(event) {
        cursor.style.display = "block"
    };
} else{
    cursor.style.display = "none";
}


// 
// Crooked letters
// 

let croockedBlock = document.querySelectorAll(".crooked-letters");

if(croockedBlock.length > 0){
    
    croockedBlock.forEach((e)=>{
        let tmp = e.innerHTML;

        e.innerHTML = "";

        for (let i = 0; i < tmp.length; i++) {
            
            e.innerHTML+=`<span>${tmp[i]}</span>`
            
        }
    })
}


// 
// Parallax
// 

mouseParallax = (elem, factor = 0.1, reversed = false)=> {
    // Add event listener
    if(elem.length>0){
        document.addEventListener("mousemove", parallax);
    
        // Magic happens here
        function parallax(e) {
            let _w = window.innerWidth/2;
            let _h = window.innerHeight/2;
            let _mouseX = e.clientX;
            let _mouseY = e.clientY;
            let _depth;

            if(reversed == true){
                _depth = `${(_mouseX - _w) * -factor}% ,${(_mouseY - _h) * -factor}%`;
            }
            else{
                _depth = `${(_mouseX - _w) * factor}% ,${(_mouseY - _h) * factor}%`;
            }

            
            
            let x = `${_depth}`;
            elem.forEach((e)=>{
                e.style.transform = `translate(${x})`;
            })
            
        }
    }
    

};

if(window.innerWidth > 1100){
    mouseParallax(document.querySelectorAll(".line1_ring"), 0.007);
    mouseParallax(document.querySelectorAll(".line2_ring"), 0.001, true);
    mouseParallax(document.querySelectorAll(".line2_explosion"), 0.001, true);
    mouseParallax(document.querySelectorAll(".goal-ring.ring1"), 0.007);
    mouseParallax(document.querySelectorAll(".goal-ring.ring2"), 0.007);
    mouseParallax(document.querySelectorAll(".goal-ring.ring3"), 0.007);
    mouseParallax(document.querySelectorAll(".goal-ring.ring4"), 0.007);

    mouseParallax(document.querySelectorAll(".who-is-who .ring1"), 0.002);
    mouseParallax(document.querySelectorAll(".who-is-who .ring2"), 0.002);
    mouseParallax(document.querySelectorAll(".our-pets .ring3"), 0.003);
    mouseParallax(document.querySelectorAll(".our-pets .ring4"), 0.002, true);
    mouseParallax(document.querySelectorAll(".move-container1"), 0.001);
    mouseParallax(document.querySelectorAll(".move-container2"), 0.001, true);
    mouseParallax(document.querySelectorAll(".move-container3"), 0.001);
    mouseParallax(document.querySelectorAll(".move-container4"), 0.001);
    mouseParallax(document.querySelectorAll(".lets-talk-ring"), 0.001);
    mouseParallax(document.querySelectorAll(".shape-block-shape"), 0.001);
    mouseParallax(document.querySelectorAll(".alert-ring"), 0.001);
    mouseParallax(document.querySelectorAll(".conquer-text .ring"), 0.001);
    mouseParallax(document.querySelectorAll(".conquer-list .item:nth-child(2n+1) .ring"), 0.002);
    mouseParallax(document.querySelectorAll(".conquer-list .item:nth-child(2n+2) .ring"), 0.001, true);
    mouseParallax(document.querySelectorAll(".shape-group .shape-ring"), 0.001, true);

}


// 
// Ticker
// 

let tickerBlock = document.querySelectorAll(".ticker");

if(tickerBlock.length > 0){
    tickerBlock.forEach((elem)=>{
        let tickerLine = elem.querySelector(".ticker_line")
        let tmp = elem.querySelector("p").cloneNode(true);
        
        tickerLine.innerHTML = "";

        for (let i = 0; i < 4; i++) {
            tickerLine.appendChild(tmp.cloneNode(true));
        }
        
        let strokeWidth = getComputedStyle(tickerLine.querySelector("p")).width.slice(0, -2);
        let tickAmount = 0;        
    })
}

//
//  Animation
//

let loadingTime = 2500;

document.addEventListener("DOMContentLoaded", 
()=>{
    setTimeout(() => {
        scrolling()
    }, loadingTime);
    
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
function animPartiallyVisible(elem,Class,duration = undefined){
    if(isPartiallyVisible(elem)){
        elem.classList.add(Class);
    }
    if(duration != undefined){
        elem.style.animationDuration = duration;
    }
}
function animPartiallyVisibleALL(elem,Class,duration = undefined){
    
    if(elem){

        for(var i = 0; i < elem.length;i++){
            if(isPartiallyVisible(elem[i])){
                elem[i].classList.add(Class);
            }
            if(duration != undefined){
                elem[i].style.animationDuration = duration;
            }
        }

    }
    
    
}
function animPartiallyVisibleReadress(elem,toElem,Class){
    if(isPartiallyVisible(elem)){
        toElem.classList.add(Class);
    }
}
function animPartiallyVisibleRaALL(elem,toElem,Class,arrLen){
    for(var i = 0; i < arrLen;i++){
        if(isPartiallyVisible(elem[i])){
            toElem[i].classList.add(Class);
        }
    }
    
}
function animPartiallyVisibleRaChildALL(elem,toElem,Class){
    for(var i = 0; i < toElem.length;i++){
        if(isPartiallyVisible(elem)){
            toElem[i].classList.add(Class);
        }
    }
    
}
function animPartiallyVisibleRaChild(elem,toElem,Class){
    if(isPartiallyVisible(elem)){
        toElem.classList.add(Class);
    }
}

function queryA(clas){
    tmp = document.querySelectorAll(clas);
    return tmp;
}

let first = true;

function scrolling(e){
    animPartiallyVisibleALL(queryA(".goal:nth-child(2n-1)"),"animate__fadeInLeft", "1s");
    animPartiallyVisibleALL(queryA(".goal:nth-child(2n)"),"animate__fadeInRight", "1s");
    animPartiallyVisibleALL(queryA(".why-we .line1"),"animate__fadeInLeft", "1s");
    animPartiallyVisibleALL(queryA(".why-we .line2"),"animate__fadeInRight", "1s");
    animPartiallyVisibleALL(queryA(".how-to-find"),"animate__fadeIn", "1s");
    animPartiallyVisibleALL(queryA(".adress_title"),"animate__fadeIn", "1s");
    animPartiallyVisibleALL(queryA(".adress_street"),"animate__fadeIn", "1s");
    animPartiallyVisibleALL(queryA(".map-header"),"animate__fadeIn", "1s");
    animPartiallyVisibleALL(queryA(".map-blk"),"animate__fadeIn", "1s");
}

// 
// What We Do Ticker
// 

let text = document.getElementById("textLine");
let textInside = document.getElementById("textInside");

if(text){
    let tmp = textInside.textContent;

    let newTmp;

    newTmp = ""

    for(i = 0; i < 25; i++){
    newTmp += tmp+"\u00A0";
    }

    textInside.textContent = newTmp;

    let currPos = -10440;
    text.setAttribute("x", currPos)

    let timer = setInterval(() => {
    currPos+=1;
    text.setAttribute("x", currPos);
    
    if(currPos >= 0){
        currPos = -(10440 + 154)
        
    }
    
    }, 25);
}

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

    aboutYouPopup.querySelector(".popup-close").addEventListener("click",()=>{
        closeAllPopups();
    })

}

let briefPopupOpen = document.querySelectorAll(".lets-do-button");
let briefPopup = document.querySelector(".brief_popup");

if(briefPopup && briefPopupOpen){

    for (let i = 0; i < briefPopupOpen.length; i++) {
        briefPopupOpen[i].addEventListener('click',()=>{
            closeAllPopups();
            briefPopup.classList.add("popup-active");
            checkHeight(briefPopup);
        });  
        
    }

    briefPopup.querySelector(".popup-close").addEventListener("click",()=>{
        closeAllPopups();
    })

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

document.addEventListener("click", (e)=>{
    obj = e.path
    
    if(!CheckExistClass(obj, "popup_inner") && !CheckExistClass(obj, "popup-btn")){
        closeAllPopups()
    }
    
})

// 
// Border
// 

let ShadowBorderElems = document.querySelectorAll(".shadow-border");

ShadowBorderElems.forEach((elem)=>{
    elem.setAttribute("text", elem.textContent)
})

// 
// Hover video play
// 

let Goalblk = document.querySelectorAll(".goal-with-video")

if(Goalblk.length > 0){
    for (let i = 0; i < Goalblk.length; i++) {
        
        Goalblk[i].onmouseover = ()=>{
            Goalblk[i].classList.add("video-active");
            Goalblk[i].querySelector("video").play();
        }
   
        Goalblk[i].onmouseleave = ()=>{
            Goalblk[i].classList.remove("video-active");
            Goalblk[i].querySelector("video").pause();
        }
    }
    
}