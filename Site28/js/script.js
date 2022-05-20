console.log('%cDeveloped by Djigit & yur4ik96', 'color: #c434c4; font-size: 50px ');

console.log(
  '%cTG: @Djigit34 / @yura_k18',
  'color: #c434c4; background: #eee; font-size: 30px '
);

const body = document.querySelector("body")

// if div has "has-child" class and you click on header__navigation_list-opener in mobile menu,
// the menu opens by adding class

// get all "has-child" elems
const hasChildElems = document.querySelectorAll(".has-child");

// check clicks. If list doesn`t open - open, else you close it by removing "opened" class
hasChildElems.forEach(el=>{
    el.querySelector(".header__navigation_list-opener").addEventListener("click", ()=>{
        console.log(`clicked`);
        if(el.classList.contains("opened")){
            el.classList.remove("opened")
        } else{
            el.classList.add("opened")
        }
    })
})


// open & close burger

const burgerOpener = document.querySelector(".header__burger")
const burger = document.querySelector(".header__navigation")
const burgerCloser = document.querySelector(".header__close-burger")

// if opener click - open
burgerOpener.addEventListener("click", ()=>{
    burger.classList.add("opened")
    body.classList.add("scroll-block")
})

// if closer click - close
burgerCloser.addEventListener("click", ()=>{
    burger.classList.remove("opened")
    body.classList.remove("scroll-block")
})


const searchOpen = document.querySelector(".header__search")
const searchClose = document.querySelector(".search-close")
const search = document.querySelector(".search-popup")

if(search){
  searchOpen.addEventListener("click", ()=>{
    search.classList.add("active")
    body.classList.add("scroll-block")
  })
  
  searchClose.addEventListener("click", ()=>{
    search.classList.remove("active")
    body.classList.remove("scroll-block")
  })
}

const searchInput = document.querySelector(".search__input")
const inputSubtitle = document.querySelector(".search__input-subtitle")
const searchResults = document.querySelector(".search__results")
const searchPopup = document.querySelector(".search-popup")

if(searchInput && inputSubtitle && searchResults){
  searchInput.addEventListener('input', () => {
    searchInput.value.length > 0 ? searchPopup.classList.add("searchbar-full") : searchPopup.classList.remove("searchbar-full")
  });
}
