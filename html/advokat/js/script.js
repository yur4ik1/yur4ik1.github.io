// burger

const headerBurger = document.querySelector(".header__burger");

if(headerBurger){
  const burgerSlider = document.querySelector(".header__burger-slider");

  headerBurger.addEventListener("click", ()=>{
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

// mobile menu

let hasChildrenListA = document.querySelectorAll(".buger-menu_item-has-children .buger-menu_item-has-children_header");
let hasChildrenList = document.querySelectorAll(".buger-menu_item-has-children");


for (let i = 0; i < hasChildrenListA.length; i++) {
    hasChildrenListA[i].addEventListener('click',()=>{
        if(hasChildrenList[i].classList.contains("buger-menu_item-has-children-active")){
            hasChildrenList[i].classList.remove("buger-menu_item-has-children-active");
        }else{
            hasChildrenList[i].classList.add("buger-menu_item-has-children-active");
        }
    });      
}

// form validation

function validation() {
    document.querySelector('.news-sub__alert').classList.toggle('active');
    document.querySelector('.input').classList.toggle('input-error');
};

