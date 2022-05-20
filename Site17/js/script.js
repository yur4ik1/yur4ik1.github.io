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
// Programs cards layout
// 

let programsBlk = document.querySelector(".programs");
let blocksInSlide = 2;
if(programsBlk){

    if(window.innerWidth > 900){
        blocksInSlide = 2;
        AddSlidesToPrograms(blocksInSlide);
    }

    if(window.outerWidth <= 900){
        blocksInSlide = 1;
        AddSlidesToPrograms(blocksInSlide);
    }

    window.addEventListener("resize", ()=>{

        if(window.innerWidth > 900){
            blocksInSlide = 2;
            AddSlidesToPrograms(blocksInSlide);
        }
    
        if(window.outerWidth <= 900){
            blocksInSlide = 1;
            AddSlidesToPrograms(blocksInSlide);
        }

    })

    

}

function AddSlidesToPrograms(blocksInSlide){

    let sliderWrapper = programsBlk.querySelector(".swiper-wrapper");
    let block = programsBlk.querySelectorAll(".right_program");

    let slidesMustBe = Math.ceil(block.length / blocksInSlide);

    // Create slides
    for (let i = 0; i < slidesMustBe; i++) {
        
        wrapperBlock = document.createElement("div");
        wrapperBlock.className = "swiper-slide";

        sliderWrapper.append(wrapperBlock);
    }

    let slides = sliderWrapper.querySelectorAll(".swiper-slide");

    let slideNumber = 0;
    for (let i = 0; i < block.length; i++) {

        if(blocksInSlide > 1){

            if(i != 0 && i%slidesMustBe == 0){
                slideNumber ++;
            }

            slides[slideNumber].append(block[i]);
        }

        else{
            slideNumber ++; 
            
            slides[slideNumber-1].append(block[i]);
            
        }
        
    }

}

// 
// Burger
// 

let burgerOpen = document.querySelector(".burger");
let burger = document.querySelector(".header_nav");
let burgerClose = document.querySelector(".burger-close");

burgerOpen.addEventListener('click',()=>{
    
    burger.classList.add("header_nav-active");
});

burgerClose.addEventListener('click',()=>{
    burger.classList.remove("header_nav-active");
});

// 
// Pop ups
// 


let AuthorizePopupOpen = document.querySelector(".login_log-in");
let AuthorizePopupOpen1 = document.querySelectorAll(".enter-acc");
let AutorizePopup = document.querySelector(".authorize__popup");


let RegPopupOpen = document.querySelector(".login_register");
let RegPopupOpen1 = document.querySelectorAll(".create-acc");
let RegPopup = document.querySelector(".reg__popup");

let RemindPopupOpen = document.querySelectorAll(".remind-link");
let RemindPopup = document.querySelector(".remind__popup");

let RecoveryPopupOpen = document.querySelectorAll(".link_forgot-pass");
let RecoveryPopup = document.querySelector(".remind__popup");


let AllPopups = document.querySelectorAll(".popup")
let popupClose = document.querySelectorAll(".pp_close");

if(popupClose && AuthorizePopupOpen){

    AuthorizePopupOpen.addEventListener('click',()=>{
        closeAllPopups();
        AutorizePopup.classList.add("popup-active");
        checkHeight(AutorizePopup);
    });

    for (let i = 0; i < AuthorizePopupOpen1.length; i++) {
        
        AuthorizePopupOpen1[i].addEventListener('click',()=>{
            closeAllPopups();
            AutorizePopup.classList.add("popup-active");
            checkHeight(AutorizePopup);
        });
        
    }

    for (let i = 0; i < RegPopupOpen1.length; i++) {
        
        RegPopupOpen1[i].addEventListener('click',()=>{
            closeAllPopups();
            RegPopup.classList.add("popup-active");
            checkHeight(RegPopup);
        });
        
    }

    for (let i = 0; i < RecoveryPopupOpen.length; i++) {
        
        RecoveryPopupOpen[i].addEventListener('click',()=>{
            closeAllPopups();
            RecoveryPopup.classList.add("popup-active");
            checkHeight(RecoveryPopup);
        });
        
    }

    for (let i = 0; i < RemindPopupOpen.length; i++) {
        
        RemindPopupOpen[i].addEventListener('click',()=>{
            closeAllPopups();
            RemindPopup.classList.add("popup-active");
            checkHeight(RemindPopup);
        });
        
    }
    

    if(RegPopupOpen){

        RegPopupOpen.addEventListener('click',()=>{
            closeAllPopups();
            RegPopup.classList.add("popup-active");
            checkHeight(RegPopup);
        });

    }
    

    for (let i = 0; i < popupClose.length; i++) {
            
        popupClose[i].addEventListener('click',()=>{
            AllPopups[i].classList.remove("popup-active");
        });
        
    }

}

function closeAllPopups(){
    popupClose = document.querySelectorAll(".pp_close");
    
    for (let i = 0; i < popupClose.length; i++) {
        
        AllPopups[i].classList.remove("popup-active");
        
    }
}

function checkHeight(el){

    insideBlock = el.querySelector(".popup_popup_blk");

    if(insideBlock){
        elHeight = Number(window.getComputedStyle(insideBlock).height.slice(0,-2));

        if(elHeight >window.innerHeight){
            
            el.style.alignItems = "flex-start";
            el.style.overflowY = "scroll";

        }
        

    }
}


// Header page selection

let forBText = document.querySelector(".for-b");
let forEText = document.querySelector(".for-e");

let SelectionSlider = document.querySelector(".selection_slider");

let loginE = document.querySelector(".login-e");
let loginB = document.querySelector(".login-b");

if (loginE){

    forEText.classList.add("text_selected");

    forBText.onmouseover = ()=>{
        forEText.classList.remove("text_selected");
        SelectionSlider.classList.add("slider-active");
    }
    forBText.onmouseout = ()=>{
        forEText.classList.add("text_selected");
        SelectionSlider.classList.remove("slider-active");
    }

}

if (loginB){

    forBText.classList.add("text_selected");
    SelectionSlider.classList.add("slider-active");

    forEText.onmouseover = ()=>{
        forBText.classList.remove("text_selected");
        SelectionSlider.classList.remove("slider-active");
    }
    forEText.onmouseout = ()=>{
        forBText.classList.add("text_selected");
        SelectionSlider.classList.add("slider-active");
    }

}


// 
//  Personal cabinet
// 

let pcHeaderBlk = document.querySelectorAll(".pc_item");
let pcMainBlk = document.querySelectorAll(".pc_main");

if(pcHeaderBlk && pcMainBlk && (pcHeaderBlk.length == pcMainBlk.length)){

    for (let i = 0; i < pcHeaderBlk.length; i++) {
        
        pcHeaderBlk[i].addEventListener('click',()=>{

            pcMainBlk[i].classList.add("block");
            pcHeaderBlk[i].classList.add("item-active");

            for (let b = 0; b < pcHeaderBlk.length; b++) {
                
                if(i != b){
                    pcMainBlk[b].classList.remove("block"); 
                    pcHeaderBlk[b].classList.remove("item-active");
                } 
            }
        }); 
    }
}

// 
// Calendar
// 


let calendarHeaderBlk = document.querySelectorAll(".calendar-header-item");
let calendarMainBlk = document.querySelectorAll(".calendar_main");

if(calendarHeaderBlk && calendarMainBlk && (calendarHeaderBlk.length == calendarMainBlk.length)){

    for (let i = 0; i < calendarHeaderBlk.length; i++) {
        
        calendarHeaderBlk[i].addEventListener('click',()=>{

            calendarMainBlk[i].classList.add("block");
            calendarHeaderBlk[i].classList.add("itemlist-item-active");

            for (let b = 0; b < calendarHeaderBlk.length; b++) {
                
                if(i != b){
                    calendarMainBlk[b].classList.remove("block"); 
                    calendarHeaderBlk[b].classList.remove("itemlist-item-active");
                } 
            }
        }); 
    }
}

let createShedulePopupOpen = document.querySelector(".calendar_add");
let createShedulePopupOpen1 = document.querySelector(".calendar_select");
let createShedulePopup = document.querySelector(".create-shedule__popup");
let closeShedulePopup= document.querySelector(".save")

let calendarPopupOpen = document.querySelector(".date-selection");
let calendarPopupOpen1 = document.querySelectorAll(".create-shedule__popup");
let calendarPopup = document.querySelector(".calendar__popup");


if(popupClose && createShedulePopupOpen){

    createShedulePopupOpen.addEventListener('click',()=>{
        closeAllPopups();
        createShedulePopup.classList.add("popup-active");
        checkHeight(createShedulePopup);
    });

    closeShedulePopup.addEventListener('click',()=>{
        closeAllPopups();
    });

    createShedulePopupOpen1.addEventListener('click',()=>{
        closeAllPopups();
        createShedulePopup.classList.add("popup-active");
        checkHeight(createShedulePopup);
    });

    calendarPopupOpen.addEventListener('click',()=>{
        closeAllPopups();
        calendarPopup.classList.add("popup-active");
        checkHeight(calendarPopup);
    });

}

// 
// Profile
// 

let appointmentPopupOpen = document.querySelector(".make-appointment");
let appointmentPopup = document.querySelector(".appointment__popup");

let payPopupOpen = document.querySelector(".popup_btn");
let payPopup = document.querySelector(".pay__popup");

let paymentSuccessPopupOpen = document.querySelector(".pay__popup .popup_btn");
let paymentSuccessPopup = document.querySelector(".payment-success__popup");


if(popupClose && appointmentPopup){

    appointmentPopupOpen.addEventListener('click',()=>{
        closeAllPopups();
        appointmentPopup.classList.add("popup-active");
        checkHeight(appointmentPopup);
    });

    payPopupOpen.addEventListener('click',()=>{
        closeAllPopups();
        payPopup.classList.add("popup-active");
        checkHeight(payPopup);
    });

    paymentSuccessPopupOpen.addEventListener('click',()=>{
        closeAllPopups();
        paymentSuccessPopup.classList.add("popup-active");
        checkHeight(paymentSuccessPopup);
    });

}

// 
// Un-bought program
// 

payPopupOpen = document.querySelector(".program_status");
payPopup = document.querySelector(".pay__popup");

paymentSuccessPopupOpen = document.querySelector(".pay__popup .popup_btn");
paymentSuccessPopup = document.querySelector(".payment-success__popup");


if(popupClose && payPopupOpen){


    payPopupOpen.addEventListener('click',()=>{
        closeAllPopups();
        payPopup.classList.add("popup-active");
        checkHeight(payPopup);
    });

    paymentSuccessPopupOpen.addEventListener('click',()=>{
        closeAllPopups();
        paymentSuccessPopup.classList.add("popup-active");
        checkHeight(paymentSuccessPopup);
    });

}

// 
// Rates
// 

makeAnOrderPopupOpen = document.querySelectorAll(".application-submit");
makeAnOrderPopup = document.querySelector(".make-an-order__popup");


if(popupClose && makeAnOrderPopupOpen){

    for (let i = 0; i < makeAnOrderPopupOpen.length; i++) {
        
        makeAnOrderPopupOpen[i].addEventListener('click',()=>{
            closeAllPopups();
            makeAnOrderPopup.classList.add("popup-active");
            checkHeight(makeAnOrderPopup);
        });

    }
}

// 
//  Vertical reviews
// 

let verticalBlock = document.querySelector(".vertical-reviews")

if(verticalBlock){

    let SwiperWrapper = verticalBlock.querySelector(".swiper-wrapper");
    let rewiewBlocks = SwiperWrapper.querySelectorAll(".vertical-reviews_rewiew");

    let blocksInSlideMustBe;

    if(SwiperWrapper.hasAttribute("data-blocks-in-slide")){
        blocksInSlideMustBe = SwiperWrapper.getAttribute("data-blocks-in-slide") ;
        console.log(blocksInSlideMustBe);
    }
    else{
        blocksInSlideMustBe = 3 ;
    }
    
    let slidesAmount = Math.ceil(rewiewBlocks.length / blocksInSlideMustBe);

    // Append swiper-slides 
    for (let i = 0; i < slidesAmount; i++) {
        
        tmp = document.createElement("div");
        tmp.className = "swiper-slide";
        SwiperWrapper.append(tmp);
        
    }

    // Append blocks to swiper-slide
    let slide = document.querySelectorAll(".swiper-slide");
    currentSlide = 0;

    for (let i = 0; i < rewiewBlocks.length; i++) {

        if(i!=0 && ((i) % blocksInSlideMustBe == 0)){
            currentSlide++;
        }

        
        slide[currentSlide].append(rewiewBlocks[i]);
        
    }

    // Set reviews amount
    let reviewsAmount = document.getElementById("rev-amount");
    
    reviewsAmount.innerHTML = rewiewBlocks.length;

    // Crop text
    let symbolsAmount = 256;
    let correction = 49;

    rewiewBlocks = SwiperWrapper.querySelectorAll(".vertical-reviews_rewiew");

    let fullText = SwiperWrapper.querySelectorAll(".full_text");
    let croppedText = SwiperWrapper.querySelectorAll(".cropped_text");

    if(fullText.length == croppedText.length){

        for (let i = 0; i < fullText.length; i++) {
        
            if(fullText[i].innerHTML.length - correction > symbolsAmount){
                croppedText[i].innerHTML = fullText[i].innerHTML.substr(0 + correction, symbolsAmount + correction) + "...";
            }
            else{
                croppedText[i].innerHTML = fullText[i].innerHTML
            }
           
            
        }
    
        // Cropped text functional
        for (let i = 0; i < fullText.length; i++) {
            
            

            croppedText[i].onmouseover = ()=>{
                fullText[i].classList.add("block");
                console.log('good');
            }
            fullText[i].onmouseout = ()=>{
                fullText[i].classList.remove("block");
            }

        }

    }
    else{
        console.log("Full text block amount != Cropped text block amout in vertical-reviews_rewiew")
    }

    
        
}
