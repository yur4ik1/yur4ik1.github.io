


const hasChidItem = document.querySelectorAll(".has-child");

if (hasChidItem.length > 0) {
  
  hasChidItem.forEach((el)=>{
    el.addEventListener('click', ()=>{
      
      if (el.classList.contains('active')) {
        el.classList.remove('active')
      } else{
        el.classList.add('active')
      }

    })
  })

}

// 
// Burger active
// 

const header = document.getElementById('header');

if(header){
  
  const burger = header.querySelector(".header__burger");
  const nav =  header.querySelector("nav");

  burger.addEventListener('click', ()=>{
    
    if(burger.classList.contains('active')){
      burger.classList.remove("active")
      nav.classList.remove('active')
      document.querySelector("body").style.position = 'unset'
      document.querySelector("body").style.width = 'unset'
    } else{
      burger.classList.add("active")
      nav.classList.add('active')
      document.querySelector("body").style.position = 'fixed'
      document.querySelector("body").style.width = '100vw'
    }

  })

}



// 
// popup
// 

let contactsPopupOpen = document.querySelectorAll(".contact-me-button");
let contactsPopup = document.querySelector(".contact-form");

if(contactsPopup && contactsPopupOpen){

  for (let i = 0; i < contactsPopupOpen.length; i++) {
    contactsPopupOpen[i].addEventListener('click',()=>{
      closeAllPopups();
      contactsPopup.classList.add("popup-active");
      contactsPopupOpen[i].classList.add("active");
      checkHeight(contactsPopup);
    });  
      
  }

  contactsPopup.querySelector(".popup-close").addEventListener("click",()=>{
    closeAllPopups();
  })

}

function closeAllPopups(){
  let popupsList = document.querySelectorAll(".popup");
  let popupsOpenList = document.querySelectorAll(".popup-btn");
  
  for (let i = 0; i < popupsList.length; i++) {
    popupsList[i].classList.remove("popup-active");
  }

  for (let i = 0; i < popupsOpenList.length; i++) {
    popupsOpenList[i].classList.remove("active");
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
  obj = e.path;
  
  console.log("click");

  if(!CheckExistClass(obj, "popup_inner") && !CheckExistClass(obj, "popup-btn")){
      closeAllPopups()
  }
    
})
