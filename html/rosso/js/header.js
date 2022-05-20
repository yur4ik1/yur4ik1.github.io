const blur = document.getElementById("blur");
const header = document.querySelector("header");
const body = document.querySelector("body");
const popups = document.querySelectorAll("[data-popup]")
const popupTriggers = document.querySelectorAll("[data-popupTrigger]")

function showBlur() {
    blur.classList.add("active")
}

function hideBlur() {
    blur.classList.remove("active")
}

function blockScroll() {
    body.classList.add("scroll-block")
}

function unblockScroll() {
    body.classList.remove("scroll-block")
}

function makeHeaderWhite(){
    header.classList.add("white-bg");
}

function removeWhiteHeader(){
    header.classList.remove("white-bg")
}

function closeAll(){
    popups.forEach(el=>{
        el.classList.remove("active")
    })
    popupTriggers.forEach(el=>{
        el.classList.remove("active")
    })
    hideBlur()
    unblockScroll()
    removeWhiteHeader()
}

function toogleMenu(trigger,menuElement, openFunc=()=>{}){
    // That statement allows us to close a mobile catalogue without opening burger(because them are on one button)
    // *if catalogue opened burger button are active and burger arent, so we need to click burger button and don`t 
    //  open the burger, kust close the catalogue, so we check if the button has cative and if it has we close all
    //  popups and dont open the related to button popup
    if(menuElement.classList.contains("active") || trigger.classList.contains("active") ){
        closeAll()
        trigger.classList.remove("active")
        menuElement.classList.remove("active")
        hideBlur()
        unblockScroll();
    } else{
        closeAll()
        openFunc()
        trigger.classList.add("active")
        menuElement.classList.add("active")
        showBlur()
        blockScroll();
        makeHeaderWhite()
    }
}

popupTriggers.forEach(el=>{
    el.addEventListener("click", ()=>{
        if(el.dataset.customopenfunction){
            //  https://stackoverflow.com/questions/359788/how-to-execute-a-javascript-function-when-i-have-its-name-as-a-string#:~:text=You%20just%20need%20convert%20your,use%20it%20like%20a%20pointer.
            toogleMenu(el,document.querySelector(el.dataset.popuptrigger), window[el.dataset.customopenfunction])
        } else{
            toogleMenu(el,document.querySelector(el.dataset.popuptrigger))
        }
        
    })
})

// Search
const searchBar = document.getElementById("search-bar");
const searchResults = document.getElementById("search-block")

searchBar.addEventListener("input", ()=>{
    searchBar.value != "" ? searchResults.classList.add("opened") : searchResults.classList.remove("opened")
})

// Catalogue
// Beacause catalugue pop up hasn`t his own close btn, so we must simulate it by 
// Setting active burger btn to active (if we will clicl on it then all popups will close with catalogue)
function createCatalogueClosebtn(){
    let burgerBtn = document.getElementById("burger-open")
    burgerBtn.classList.add("active")
}

const unfoldButton = document.querySelectorAll(".catalogue-item__unfold");

unfoldButton.forEach(el=>{
    const list = el.parentNode.querySelector("ul");

    el.addEventListener("click",()=>{
        if(list.classList.contains("folded")){
            list.classList.remove("folded")
            el.style.display = "none"
        }
    })
    
})

function foldAll(){
    const unfoldButton = document.querySelectorAll(".catalogue-item__unfold")

    unfoldButton.forEach(el=>{
        el.style.display = "block"
        el.parentNode.querySelector("ul").classList.add("folded")
    })
}