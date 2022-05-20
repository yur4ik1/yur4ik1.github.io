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
//  Sidebar
//

hasChild = document.querySelectorAll(".has_child");

if(hasChild){ 
    function setSubMenuPos(child){
        let hasChildToBottom = window.innerHeight - (child.getBoundingClientRect().height + child.getBoundingClientRect().y);
        childList  = child.querySelector(".listitem_child");
        childHeight = childList.getBoundingClientRect().height;
    
        if(hasChildToBottom <= (childHeight - child.getBoundingClientRect().height)){
    
            childList.style.top = "unset";
            childList.style.bottom = "0";
    
            if(window.innerHeight <= childHeight){
                childList.style.overflowY = "scroll";
                childList.style.maxHeight = window.innerHeight + "px";
            }
            else{
                childList.style.overflowY = "unset";
                childList.style.maxHeight = "unset";
            }
        }
        else{
            if(window.innerWidth > 1200){
                childList.style.top = child.getBoundingClientRect().top + pageYOffset + "px";
                childList.style.bottom = "unset";
                if(window.innerHeight >= childHeight){
                    childList.style.overflowY = "unset";
                    childList.style.maxHeight = "unset";
                }
            }
        } 
    }
    
    for (let i = 0; i < hasChild.length; i++) {
        
        window.addEventListener("resize", ()=>{
            if(window.innerWidth > 1200){
                setSubMenuPos(hasChild[i]);
    
                hasChild[i].addEventListener("mouseover", ()=>{
                    setSubMenuPos(hasChild[i]);
                })
            }
        })
    
        if(window.innerWidth > 1200){
            setSubMenuPos(hasChild[i]);
    
            hasChild[i].addEventListener("mouseover", ()=>{
                setSubMenuPos(hasChild[i]);
            })
        }
        
    }
}

//
// Sidebar class change
//

if(window.innerWidth < 1200){
    needToChange = document.querySelectorAll(".has_child");
    for (let b = 0; b < needToChange.length; b++) {
        needToChange[b].classList.add("has_child-mob"); 
        needToChange[b].classList.remove("has_child");
    }
}
else{
    needToChange = document.querySelectorAll(".has_child-mob");
    for (let b = 0; b < needToChange.length; b++) {
        needToChange[b].classList.add("has_child");
        needToChange[b].classList.remove("has_child-mob"); 
    }  
}

window.addEventListener("resize", ()=>{
    if(window.innerWidth < 1200){
        needToChange = document.querySelectorAll(".has_child");
        for (let b = 0; b < needToChange.length; b++) {
            needToChange[b].classList.add("has_child-mob"); 
            needToChange[b].classList.remove("has_child");
        }
    }
    else{
        needToChange = document.querySelectorAll(".has_child-mob");
        for (let b = 0; b < needToChange.length; b++) {
            needToChange[b].classList.add("has_child");
            needToChange[b].classList.remove("has_child-mob"); 
        }  
    }
})




//
//  Text copy
//

var clipboard = new ClipboardJS(".contacts_mail-copy");



//
//  Burger
//

let burgerOpen = document.querySelector(".burger");
let burger = document.querySelector(".sidebar_nav");
let burgerClose = document.querySelector(".burger-close");

burgerOpen.addEventListener('click',()=>{
    burger.classList.add("active");
});
burgerClose.addEventListener('click',()=>{
    burger.classList.remove("active");
});


//
//  Contacts blocks
//

let productsBlks = document.querySelectorAll(".products_block-wrap"); 

if(productsBlks.length != 0){
    let productsBlocksInBlockAmount = 28;
    let productsBlocksAmount = Math.ceil(productsBlks.length/productsBlocksInBlockAmount);
    let productsBlocksArray = [];

    // Create divs
    for (let i = 0; i < productsBlocksAmount; i++) {
        
        productsBlocksArray.push(document.createElement("div"));
        
    }

    let productsMainBlock = document.querySelector(".products_blocks");

    // Append divs to main block
    for (let i = 0; i < productsBlocksAmount; i++) {
        
        productsMainBlock.append(productsBlocksArray[i])
        
    }

    // Append classes to divs
    let productsMainBlockDivs = productsMainBlock.querySelectorAll("div");

    for (let i = 0; i < productsMainBlockDivs.length; i++) {
        
        productsMainBlockDivs[i].className = "products_blockgroup";
        
    }

    // Append products block to their blockgroups
    let productsMainBlockGroups = productsMainBlock.querySelectorAll(".products_blockgroup");
    let productBlockToFillNumber = 0;
    let productsTempBlock = document.querySelector(".products-temp-block");
    productsTempBlock.remove();
    
    for (let i = 0; i < productsBlks.length; i++) {

        if(i % productsBlocksInBlockAmount == 0 && i!=0){
            productBlockToFillNumber++;
        }
        
        productsMainBlockGroups[productBlockToFillNumber].append(productsBlks[i].cloneNode(true));

    }

    // Separate blocks to lines
    productsBlks = document.querySelectorAll(".products_block-wrap");

    for (let i = 0; i < productsMainBlockGroups.length; i++) {
        
        firstLine = document.createElement("div");
        firstLine.className = "products_line1";
        secondLine = document.createElement("div");
        secondLine.className = "products_line2";
        thirdLine = document.createElement("div");
        thirdLine.className = "products_line3";

        inGroupBlocks = productsMainBlockGroups[i].querySelectorAll(".products_block-wrap");

        for (let b = 0; b < inGroupBlocks.length; b+=3) {
            
            firstLine.append(inGroupBlocks[b].cloneNode(true));
            
        }

        for (let b = 1; b < inGroupBlocks.length; b+=3) {
            
            secondLine.append(inGroupBlocks[b].cloneNode(true));
            
        }

        for (let b = 2; b < inGroupBlocks.length; b+=3) {
            
            thirdLine.append(inGroupBlocks[b].cloneNode(true));
            
        }

        productsMainBlockGroups[i].innerHTML = "";
        productsMainBlockGroups[i].append(firstLine);
        productsMainBlockGroups[i].append(secondLine);
        productsMainBlockGroups[i].append(thirdLine);

        // If block group is full add last element of first line to the end of third column
        if(inGroupBlocks.length == productsBlocksInBlockAmount){

            firstLineLastElement = productsMainBlockGroups[i].querySelector(".products_line1").querySelector(".products_block-wrap:last-child");
            productsMainBlockGroups[i].querySelector(".products_line3").append(firstLineLastElement);
            
        }
    }

    // Add classes to blocks
    for (let i = 0; i < productsMainBlockGroups.length; i++) {
        
        firstLine = productsMainBlockGroups[i].querySelector(".products_line1");
        secondLine = productsMainBlockGroups[i].querySelector(".products_line2");
        thirdLine = productsMainBlockGroups[i].querySelector(".products_line3");

        firstLineBlocks = firstLine.querySelectorAll(".products_block-wrap");
        tmp = 1

        for (let b = 0; b < firstLineBlocks.length; b++) {
            
            firstLineBlocks[b].classList.add("product_block" + tmp)
            tmp+=3;
            
        }

        secondLineBlocks = secondLine.querySelectorAll(".products_block-wrap");
        tmp = 2

        for (let b = 0; b < secondLineBlocks.length; b++) {
            
            secondLineBlocks[b].classList.add("product_block" + tmp)
            tmp+=3;
            
        }

        thirdLineBlocks = thirdLine.querySelectorAll(".products_block-wrap");
        tmp = 3

        for (let b = 0; b < thirdLineBlocks.length; b++) {
            
            thirdLineBlocks[b].classList.add("product_block" + tmp)
            tmp+=3;
            
        }

        // If line3 have 10 elems change block30 to 28
        if(thirdLineBlocks.length == 10){
            thirdLineBlocks[9].classList.add("product_block28");
            thirdLineBlocks[9].classList.remove("product_block30");
        }

    }


}

//
//  Services blocks
//

let servicesBlks = document.querySelectorAll(".services_block-wrap"); 

if(servicesBlks.length != 0){
    let servicesBlocksInBlockAmount = 8;
    let servicesBlocksAmount = Math.ceil(servicesBlks.length/servicesBlocksInBlockAmount);
    let servicesBlocksArray = [];

    // Create divs
    for (let i = 0; i < servicesBlocksAmount; i++) {
        
        servicesBlocksArray.push(document.createElement("div"));
        
    }

    let servicesMainBlock = document.querySelector(".services_blocks");

    // Append divs to main block
    for (let i = 0; i < servicesBlocksAmount; i++) {
        
        servicesMainBlock.append(servicesBlocksArray[i])
        
    }

    // Append classes to divs
    let servicesMainBlockDivs = servicesMainBlock.querySelectorAll("div");

    for (let i = 0; i < servicesMainBlockDivs.length; i++) {
        
        servicesMainBlockDivs[i].className = "services_blockgroup";
        
    }

    // Append services block to their blockgroups
    let servicesMainBlockGroups = servicesMainBlock.querySelectorAll(".services_blockgroup");
    let productBlockToFillNumber = 0;
    let servicesTempBlock = document.querySelector(".services-temp-block");
    servicesTempBlock.remove();
    
    for (let i = 0; i < servicesBlks.length; i++) {

        if(i % servicesBlocksInBlockAmount == 0 && i!=0){
            productBlockToFillNumber++;
        }
        
        servicesMainBlockGroups[productBlockToFillNumber].append(servicesBlks[i].cloneNode(true));

    }

    // Separate blocks to lines
    servicesBlks = document.querySelectorAll(".services_block-wrap");

    for (let i = 0; i < servicesMainBlockGroups.length; i++) {
        
        firstLine = document.createElement("div");
        firstLine.className = "services_line1";
        secondLine = document.createElement("div");
        secondLine.className = "services_line2";
        thirdLine = document.createElement("div");
        thirdLine.className = "services_line3";

        inGroupBlocks = servicesMainBlockGroups[i].querySelectorAll(".services_block-wrap");

        for (let b = 0; b < inGroupBlocks.length; b+=3) {
            
            firstLine.append(inGroupBlocks[b].cloneNode(true));
            
        }

        for (let b = 1; b < inGroupBlocks.length; b+=3) {
            
            secondLine.append(inGroupBlocks[b].cloneNode(true));
            
        }

        for (let b = 2; b < inGroupBlocks.length; b+=3) {
            
            thirdLine.append(inGroupBlocks[b].cloneNode(true));
            
        }

        servicesMainBlockGroups[i].innerHTML = "";
        servicesMainBlockGroups[i].append(firstLine);
        servicesMainBlockGroups[i].append(secondLine);
        servicesMainBlockGroups[i].append(thirdLine);

        // If block group is full add last element of first line to the end of third column
        if(inGroupBlocks.length == servicesBlocksInBlockAmount){

            firstLineLastElement = servicesMainBlockGroups[i].querySelector(".services_line1").querySelector(".services_block-wrap:last-child");
            servicesMainBlockGroups[i].querySelector(".services_line3").append(firstLineLastElement);
            
        }
    }

    // Add classes to blocks
    for (let i = 0; i < servicesMainBlockGroups.length; i++) {
        
        firstLine = servicesMainBlockGroups[i].querySelector(".services_line1");
        secondLine = servicesMainBlockGroups[i].querySelector(".services_line2");
        thirdLine = servicesMainBlockGroups[i].querySelector(".services_line3");

        firstLineBlocks = firstLine.querySelectorAll(".services_block-wrap");
        tmp = 1

        for (let b = 0; b < firstLineBlocks.length; b++) {
            
            firstLineBlocks[b].classList.add("service_block" + tmp)
            tmp+=3;
            
        }

        secondLineBlocks = secondLine.querySelectorAll(".services_block-wrap");
        tmp = 2

        for (let b = 0; b < secondLineBlocks.length; b++) {
            
            secondLineBlocks[b].classList.add("service_block" + tmp)
            tmp+=3;
            
        }

        thirdLineBlocks = thirdLine.querySelectorAll(".services_block-wrap");
        tmp = 3

        for (let b = 0; b < thirdLineBlocks.length; b++) {
            
            thirdLineBlocks[b].classList.add("service_block" + tmp)
            tmp+=3;
            
        }

        // If line3 have 10 elems change block30 to 28
        if(thirdLineBlocks.length == 10){
            thirdLineBlocks[9].classList.add("product_block28");
            thirdLineBlocks[9].classList.remove("product_block30");
        }

    }


}

//
//  Btn up
//

let btnUp = document.querySelector(".btn-up");

if(btnUp){

    document.addEventListener("DOMContentLoaded", () =>{

        window.addEventListener("scroll", () => {
            
            if(window.pageYOffset > window.innerHeight){

                btnUp.style.opacity = 1;

            }
            else{

                btnUp.style.opacity = 0;

            }
        })

    })

}


// 
// Categories
// 

let categoryOpen = document.querySelector(".open_cathegories");
let categoriesBlk = document.querySelector(".shop_categories");
let categories = document.querySelectorAll(".category");

if(categoryOpen){

    categoryOpen.addEventListener("click", () =>{
        categoriesBlk.classList.add("shop_categories-active");
    })

    for (let i = 0; i < categories.length; i++) {
        
        categories[i].addEventListener("click", ()=>{
            categoriesBlk.classList.remove("shop_categories-active");
        })
        
    }
}

//
//  G-PRICES
//

let prices = document.querySelector(".g-prices");

if(prices){
    
    let tabs = document.querySelectorAll(".prices_tab");
    let mainBlks = document.querySelectorAll(".main_left");
    let mainItems = document.querySelectorAll(".left_item");


    // set deafault tabs and items
    let activeTab = 0;
    let activeItem = 0;

    mainBlks[activeTab].classList.add("main-blk-active");

    if(mainItems.length > activeItem){
        mainItems[activeItem].classList.add("item-active");
        SetData(mainItems[activeItem]);
    }

    
    // tab selection
    for (let i = 0; i < tabs.length; i++) {

        tabs[i].addEventListener("click", ()=>{

            tabs[i].classList.add("prices_tab-active");
            mainBlks[i].classList.add("main-blk-active");

            for (let b = 0; b < tabs.length; b++) {
            
                if(i != b){

                    tabs[b].classList.remove("prices_tab-active");
                    mainBlks[b].classList.remove("main-blk-active");

                }

            }

        })
        
    }

    // item activisation
    for (let i = 0; i < mainItems.length; i++) {
        
        mainItems[i].addEventListener("click",()=>{

            mainItems[i].classList.add("item-active");
            ClearActivated(".price")
            ClearActivated(".amount")
            SetData(mainItems[i]);
            

            for (let b = 0; b < mainItems.length; b++) {
                
                if(i != b){
                    mainItems[b].classList.remove("item-active");
                }
                
            }
        })
        
    }

    function SetData(fromBlock){
        let rightSide = document.querySelector(".main_right");

        let adv = rightSide.querySelector(".advantages");
        let disadv = rightSide.querySelector(".disadvantages");
        let price = rightSide.querySelector(".price");
        let amount = rightSide.querySelector(".amount");
        let description = rightSide.querySelector(".description");

        let fromAdv = fromBlock.querySelector(".data-advantages");
        let fromDisadv = fromBlock.querySelector(".data-disadvantages");
        let fromPrice = fromBlock.querySelector(".data-price");
        let fromAmount = fromBlock.querySelector(".data-amount");
        let fromDescription = fromBlock.querySelector(".data-description");

        adv.innerHTML = fromAdv.innerHTML;
        disadv.innerHTML = fromDisadv.innerHTML;

        price.innerHTML = fromPrice.innerHTML;
        price.setAttribute("data-to",fromPrice.innerHTML);
        Counter(price);

        amount.innerHTML = fromAmount.innerHTML;
        amount.setAttribute("data-to",fromAmount.innerHTML);
        Counter(amount);
        description.innerHTML = fromDescription.innerHTML;
    }

  
    function Counter(elem) {
        let start = Number(elem.getAttribute("data-from"));
        let end = Number(elem.getAttribute("data-to"));

        if(end >= 0){

            let duration = 1000;

            if(elem.getAttribute("activated") == null){

                if(elem.getAttribute("working") == null){
                    let obj = elem;
                    let current = start;
                    let range = end - start;
                    let increment = end > start ? 1 : -1
                    let step = Math.abs(Math.floor(duration / range));

                    const timer = setInterval(() => {
                        elem.setAttribute("working","");
                        current += increment;
                        obj.innerHTML = current;

                        if (current >= end) {
                            clearInterval(timer);
                            elem.setAttribute("activated","");
                            elem.removeAttribute("working");
                        }
                    }, step);  
                }
                  
            }  

        }
         
    }

    function ClearActivated(elemClass){
        let elemArr = document.querySelectorAll(elemClass)

        for (let i = 0; i < elemArr.length; i++) {
            
            elemArr[i].removeAttribute("activated")
            
        }

    }

}

// 
// G-TABLE
// 

let gTable = document.querySelector(".g-table_table");

if(gTable){

    let gTableCols = document.querySelectorAll(".table_col .amount");

    for (let i = 0; i < gTableCols.length; i++) {
        
        gTableCols[i].onmouseover = function() {

            ClearActivated(".amount");
            gTableCols.innerHTML = "0";
            Counter(gTableCols[i]);

        };
        
    }

}

// 
// Shop popup
// 

let popupOpen = document.querySelectorAll(".item_buy");
let popup = document.querySelector(".shop__popup");
let popupClose = document.querySelector(".pp_close");

if(popup){

    for (let i = 0; i < popupOpen.length; i++) {
        
        popupOpen[i].addEventListener('click',()=>{
            popup.classList.add("shop__popup-active");
        });

    }
    
    popupClose.addEventListener('click',()=>{
        popup.classList.remove("shop__popup-active");
    });
}


// 
// Online order popup
// 

let onlinePopup = document.querySelector(".online-order-popup-wrapper");

if(onlinePopup){

    let onlinePopupOpen = document.querySelectorAll(".call-us_right");
    let onlinePopupClose = onlinePopup.querySelector(".popup-close")

    for (let i = 0; i < onlinePopupOpen.length; i++) {
        
        onlinePopupOpen[i].addEventListener("click", ()=>{

            onlinePopup.classList.add("popup-active");
            checkHeight(onlinePopup);

        })

        onlinePopupClose.addEventListener('click',()=>{
            onlinePopup.classList.remove("popup-active");
        });
        
    }

    // filedrop filling
    let fileDropFilling = document.querySelector(".online-popup-filedrop-filling");
    let blockToFill = document.querySelector(".left_filedrop");

    if(blockToFill && blockToFill){

        blockToFill.innerHTML = "";
        blockToFill.append(fileDropFilling);

    }

}

// 
// Banner popup
// 

let bannerPopup = document.querySelector("banner-popup-wrapper");

if(bannerPopup){

    let bannerPopupOpen = document.querySelectorAll(".");
    let bannerPopupClose = bannerPopup.querySelector(".banner_close")

    for (let i = 0; i < bannerPopupOpen.length; i++) {
        
        bannerPopupOpen[i].addEventListener("click", ()=>{

            bannerPopup.classList.add("popup-active");
            checkHeight(bannerPopup);

        })

        bannerPopupClose.addEventListener('click',()=>{
            bannerPopup.classList.remove("popup-active");
        });
        
    }

}

function checkHeight(el){

    insideBlock = el.querySelector(".popup");

    if(insideBlock){
        elHeight = Number(window.getComputedStyle(insideBlock).height.slice(0,-2));

        if(elHeight >window.innerHeight){
            
            el.style.alignItems = "flex-start";
            el.style.overflowY = "scroll";

        }
        

    }
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
document.querySelector("main").addEventListener('scroll',scrolling);
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

let header = document.querySelector(".header");
let content_line1 = document.querySelectorAll(".content_line1 p");
let content_line2 = document.querySelectorAll(".content_line2 p");

function queryA(clas){
    tmp = document.querySelectorAll(clas);
    return tmp;
}
function query(clas){
    tmp = document.querySelector(clas);
    return tmp;
}

let first = true;

function scrolling(e){
    animPartiallyVisibleALL(header,"animate__fadeInRight");
    animPartiallyVisibleALL(content_line1,"animate__backInLeft");
    animPartiallyVisibleALL(content_line2,"animate__backInRight");
    animPartiallyVisibleALL(queryA(".content_line3 p"),"animate__backInLeft");
    animPartiallyVisibleALL(queryA(".content_line4 a"), "animate__flipInX" );
    animPartiallyVisibleALL(queryA(".footer_col1_logo"), "animate__flipInY", "1.2s");
    animPartiallyVisibleALL(queryA(".footer_col1_title"), "animate__jackInTheBox", "2s");
    animPartiallyVisibleALL(queryA(".footer_col1_desc"), "animate__backInLeft", "1.5s");
    animPartiallyVisibleALL(queryA(".footer_col1_payments img"), "animate__backInLeft", "2s" );
    animPartiallyVisibleALL(queryA(".player_btn img"), "animate__zoomIn", "1s");
    animPartiallyVisibleALL(queryA(".player_title"), "animate__lightSpeedInLeft", "1.3s");
    animPartiallyVisibleALL(queryA(".index_text"), "animate__backInLeft", "1.3s");
    animPartiallyVisibleALL(queryA(".index_last_blk"), "animate__bounceInDown", "2s" );
    animPartiallyVisibleALL(queryA(".index_last_header h2"), "animate__fadeInRight", "1.3s");
    // here must be sale
    animPartiallyVisibleALL(queryA(".index_map"), "animate__bounceIn", "2s" );
    animPartiallyVisibleALL(queryA(".line1_textblock1"),"animate__backInDown", "2s" );
    animPartiallyVisibleALL(queryA(".line1_dots2"),"animate__bounceIn", "2s" );
    animPartiallyVisibleALL(queryA(".line1_ledder1"),"animate__rotateIn", "2s" );
    animPartiallyVisibleALL(queryA(".line1_textblock2 "),"animate__slideInRight", "2s" );
    animPartiallyVisibleALL(queryA(".line1_half-circle1 "),"animate__rotateIn", "2s" );
    animPartiallyVisibleALL(queryA(".line1_half-circle2"),"animate__rotateIn", "2s" );
    animPartiallyVisibleALL(queryA(".line1_ledder2"),"animate__rollIn", "2s" );
    animPartiallyVisibleALL(queryA(".line1_ledder3"),"animate__rollIn", "2s" );
    animPartiallyVisibleALL(queryA(".line1_stage"),"animate__lightSpeedInLeft", "2s" );
    animPartiallyVisibleALL(queryA(".line1_footer_main-text"),"animate__slideInRight", "2s" );
    animPartiallyVisibleALL(queryA(".line1_footer_small-text"),"animate__zoomIn", "2s" );
    animPartiallyVisibleALL(queryA(".line2_textbox1 h2"),"animate__flipInX", "2s" );
    animPartiallyVisibleALL(queryA(".line2_textbox1 p"),"animate__fadeInRight", "2s" );
    animPartiallyVisibleALL(queryA(".line2_textbox2_item"),"animate__bounceIn", "2s" );
    animPartiallyVisibleALL(queryA(".line2_textbox3"),"animate__slideInLeft", "2s" );
    animPartiallyVisibleALL(queryA(".line2_textbox4"),"animate__slideInLeft", "2s" );
    animPartiallyVisibleALL(queryA(".line3_text1"),"animate__slideInRight", "2s" );
    animPartiallyVisibleALL(queryA(".line3_ledder1"),"animate__rotateInDownLeft", "2s" );
    animPartiallyVisibleALL(queryA(".line3_dots1"),"animate__rotateInDownRight", "2s" );
    animPartiallyVisibleALL(queryA(".line3_ledder2"),"animate__rollIn", "2s" );
    animPartiallyVisibleALL(queryA(".line3_text2"),"animate__jackInTheBox", "2s" );
    animPartiallyVisibleALL(queryA(".line3_text3"),"animate__zoomInLeft", "2s" );
    animPartiallyVisibleALL(queryA(".line3_books"),"animate__fadeIn", "2s" );
    animPartiallyVisibleALL(queryA(".line3_arrow1"),"animate__fadeIn", "2s" );
    animPartiallyVisibleALL(queryA(".line3_arrow2"),"animate__fadeIn", "2s" );
    animPartiallyVisibleALL(queryA(".line3_arrow3"),"animate__fadeIn", "2s" );
    animPartiallyVisibleALL(queryA(".line3_text4"),"animate__fadeInRight", "2s" );
    animPartiallyVisibleALL(queryA(".line3_textbox1 p:first-child"),"animate__fadeInLeft", "2s" );
    animPartiallyVisibleALL(queryA(".line3_textbox1 p:last-child"),"animate__fadeInRight", "2s" );
    animPartiallyVisibleALL(queryA(".line3_text5"),"animate__rotateInUpLeft", "2s" );
    animPartiallyVisibleALL(queryA(".attention_header"),"animate__zoomIn", "2s" );
    animPartiallyVisibleALL(queryA(".attention_blk img"),"animate__slideInLeft", "2s" );
    animPartiallyVisibleALL(queryA(".attention_blk p"),"animate__slideInRight", "2s" );
    animPartiallyVisibleALL(queryA(".attention_footer "),"animate__rotateInDownRight", "2s" );
    animPartiallyVisibleALL(queryA(".line3_square"),"animate__fadeIn", "2s" );
    animPartiallyVisibleALL(queryA(".line3_text6"),"animate__slideInLeft", "2s" );
    animPartiallyVisibleALL(queryA(".line3_arrow4"),"animate__rotateInUpLeft", "2s" );
    animPartiallyVisibleALL(queryA(".line3_text7"),"animate__jackInTheBox", "2s" );
    animPartiallyVisibleALL(queryA(".line3_ledder3"),"animate__rotateIn", "2s" );
    animPartiallyVisibleALL(queryA(".line3_ledder4"),"animate__rollIn", "2s" );
    animPartiallyVisibleALL(queryA(".line3_ledder5"),"animate__rotateIn", "2s" );
    animPartiallyVisibleALL(queryA(".line3_text8"),"animate__flip", "2s" );
    animPartiallyVisibleALL(queryA(".line3_illustrations"),"animate__fadeInUp", "2s" );
    animPartiallyVisibleALL(queryA(".line3_triangles1"),"animate__rotateInDownRight", "2s" );
    animPartiallyVisibleALL(queryA(".line3_triangles2"),"animate__rotateInDownLeft", "2s" );
    animPartiallyVisibleALL(queryA(".line3_triangles3"),"animate__zoomIn", "2s" );
    animPartiallyVisibleALL(queryA(".line3_text9"),"animate__bounceIn", "2s" );
    animPartiallyVisibleALL(queryA(".outcome_title"),"animate__backInLeft", "2s" );
    animPartiallyVisibleALL(queryA(".outcome_heart"),"animate__fadeIn", "2s" );
    animPartiallyVisibleALL(queryA(".outcome_text"),"animate__fadeInLeft", "2s" );
    animPartiallyVisibleALL(queryA(".outline_imagetext"),"animate__fadeInRightBig", "2s" );
    animPartiallyVisibleALL(queryA(".line3_text10"),"animate__fadeIn", "2s" );
    animPartiallyVisibleALL(queryA(".design_btn"),"animate__tada", "2s" );
    animPartiallyVisibleALL(queryA(".design_btn-up p"),"animate__flip", "2s" );
    animPartiallyVisibleALL(queryA(".products_block-wrap"),"animate__fadeIn", "2s" );
    animPartiallyVisibleALL(queryA(".services_block-wrap"),"animate__fadeIn", "2s" );
    animPartiallyVisibleALL(queryA(".fr_block"),"animate__fadeIn", "2s" );
    animPartiallyVisibleALL(queryA(".fr_welcome"),"animate__fadeInLeft", "2s" );
    animPartiallyVisibleALL(queryA(".fr_stages"),"animate__fadeIn", "2s" );
    animPartiallyVisibleALL(queryA(".block_main"),"animate__fadeInLeft", "2s" );
    animPartiallyVisibleALL(queryA(".blk_left"),"animate__fadeInLeft", "2s" );
    animPartiallyVisibleALL(queryA(".must-be_title"),"animate__fadeInRight", "2s" );
    animPartiallyVisibleALL(queryA(".must-be_images"),"animate__fadeInRight", "2s" );
    animPartiallyVisibleALL(queryA(".right_stages"),"animate__fadeInRight", "2s" );
    animPartiallyVisibleALL(queryA(".guide_header"),"animate__fadeInRight", "2s" );
    animPartiallyVisibleALL(queryA(".guide_main"),"animate__fadeIn", "2s" );
    animPartiallyVisibleALL(queryA(".guide_footer"),"animate__fadeInLeft", "2s" );
    animPartiallyVisibleALL(queryA(".paper_block_item"),"animate__fadeIn", "2s" );
    animPartiallyVisibleALL(queryA(".paper_block_header"),"animate__fadeInLeft", "2s" );
    animPartiallyVisibleALL(queryA(".paper_block_main-text p"),"animate__fadeIn", "2s" );
    animPartiallyVisibleALL(queryA(".sales_title"),"animate__fadeIn", "2s" );
    animPartiallyVisibleALL(queryA(".sales_sale"),"animate__fadeInLeft", "2s" );
    animPartiallyVisibleALL(queryA(".videomaker_title"),"animate__fadeIn", "2s" );
    animPartiallyVisibleALL(queryA(".videomaker_subtitle"),"animate__fadeInLeft", "2s" );
    animPartiallyVisibleALL(queryA(".videomaker_title"),"animate__fadeIn", "2s" );
    animPartiallyVisibleALL(queryA(".videomaker_subtitle"),"animate__fadeInLeft", "2s" );
    animPartiallyVisibleALL(queryA(".videomaker_stage"),"animate__fadeInRight", "2s" );
    animPartiallyVisibleALL(queryA(".videomaker_slogan"),"animate__fadeIn", "2s" );
    animPartiallyVisibleALL(queryA(".videomaker_subtitle"),"examples_example", "2s" );
    animPartiallyVisibleALL(queryA(".discount_image"),"animate__fadeInLeft", "2s" );
    animPartiallyVisibleALL(queryA(".discount_price"),"animate__fadeInRight", "2s" );
    animPartiallyVisibleALL(queryA(".discount_title"),"animate__fadeIn", "2s" );
    animPartiallyVisibleALL(queryA(".discount_subtitle"),"animate__fadeIn", "2s" );
    animPartiallyVisibleALL(queryA(".discount_text"),"animate__fadeIn", "2s" );
    animPartiallyVisibleALL(queryA(".discount_order"),"animate__fadeIn", "2s" );
    animPartiallyVisibleALL(queryA(".discount_price"),"animate__fadeIn", "2s" );
    animPartiallyVisibleALL(queryA(".sizes_title"),"animate__fadeIn", "2s" );
    animPartiallyVisibleALL(queryA(".sizes_line-title"),"animate__fadeIn", "2s" );
    animPartiallyVisibleALL(queryA(".sizes_line-item"),"animate__fadeInRight", "2s" );
    animPartiallyVisibleALL(queryA(".about-us_title"),"animate__fadeInLeft", "2s" );
    animPartiallyVisibleALL(queryA(".text-with-img-big_image"),"animate__fadeInLeft", "3s" );
    animPartiallyVisibleALL(queryA(".text-with-img-big_text"),"animate__fadeInRight", "2s" );
    animPartiallyVisibleALL(queryA(".text-blk_title"),"animate__fadeInLeft", "2s" );
    animPartiallyVisibleALL(queryA(".line2_text-with-img_text-blk"),"animate__fadeIn", "2s" );
    animPartiallyVisibleALL(queryA(".line2_text-with-img_image"),"animate__fadeInRight", "2s" );
    animPartiallyVisibleALL(queryA(".line3_text-with-img_image"),"animate__fadeInLeft", "2s" );
    animPartiallyVisibleALL(queryA(".text-blk_text"),"animate__fadeInRight", "2s" );
    animPartiallyVisibleALL(queryA(".line3_text"),"animate__fadeInLeft", "2s" );
    animPartiallyVisibleALL(queryA(".line4_text-with-img_image"),"animate__fadeInRight", "2s" );
    animPartiallyVisibleALL(queryA(".about-us_attention"),"animate__fadeInLeft", "2s" );
    animPartiallyVisibleALL(queryA(".cart"),"animate__fadeInRight", "2s" );
    animPartiallyVisibleALL(queryA(".main_item"),"animate__fadeIn", "2s" );
    animPartiallyVisibleALL(queryA(".g-advantages_left"),"animate__fadeInLeft", "2s" );
    animPartiallyVisibleALL(queryA(".g-advantages_right"),"animate__fadeInRight", "2s" );
    animPartiallyVisibleALL(queryA(".g-advantages_bottom"),"animate__fadeIn", "2s" );
    animPartiallyVisibleALL(queryA(".g-line-title"),"animate__fadeIn", "2s" );
    animPartiallyVisibleALL(queryA(".g-gallery_item"),"animate__fadeIn", "2s" );
    animPartiallyVisibleALL(queryA(".call-us_right"),"animate__fadeInRight", "2s" );
    animPartiallyVisibleALL(queryA(".call-us_left"),"animate__fadeInLeft", "2s" );
    animPartiallyVisibleALL(queryA(".g-demands_right"),"animate__fadeInRight", "2s" );
    animPartiallyVisibleALL(queryA(".g-demands_left"),"animate__fadeInLeft", "2s" );
    animPartiallyVisibleALL(queryA(".left_item"),"animate__fadeIn", "2s" );
    animPartiallyVisibleALL(queryA(".right_line"),"animate__fadeIn", "2s" );
    animPartiallyVisibleALL(queryA(".g-slider-container"),"animate__fadeIn", "2s" );
    animPartiallyVisibleALL(queryA(".g-for"),"animate__fadeIn", "2s" );
    animPartiallyVisibleALL(queryA(".main_left"),"animate__fadeInLeft", "2s" );
    animPartiallyVisibleALL(queryA(".versus_left"),"animate__fadeInLeft", "2s" );
    animPartiallyVisibleALL(queryA(".versus_thumb"),"animate__fadeIn", "2s" );
    animPartiallyVisibleALL(queryA(".versus_right"),"animate__fadeInRight", "2s" );

    if(query(".right_line .price")){
        if(isPartiallyVisible(query(".right_line .price"))){
            if(first){
                ClearActivated(".price");
                ClearActivated(".amount");
                first = false;
                Counter(query(".right_line .price")); 
                Counter(query(".right_line .amount")); 
            }
        }
    }
    
    
    // if(isPartiallyVisible(query(".right_line .price"))){
    //     Counter(query(".right_line .price")); 
    // }

    // if(isPartiallyVisible(query(".right_line .amount"))){
    //     Counter(query(".right_line .amount")); 
    // }

    if(document.innerWidth >800){
        animPartiallyVisibleALL(queryA(".shop_categories"),"animate__fadeInLeft", "2s" );
    }
}


function loading(){
    let loading = document.querySelector(".loading");

    if(loading){
        opacity = 1;
        let ID = setInterval(() => {
            if (opacity >= 0){  
                opacity-=0.1;
                loading.style.opacity = opacity;
            }
            if(opacity < 0){
                loading.style.display = "none";
                clearInterval(ID)
            }
        }, 30);
    }
    
}

setTimeout(()=>{
    loading();
}, loadingTime);


// 
// Console print
// 

console.log('%cDeveloped by Djigit & yur4ik96', 'color: #c434c4; font-size: 50px ');

    console.log(
      '%cTG: @Djigit34 / @yura_k18',
      'color: #c434c4; background: #eee; font-size: 30px '
    );

    