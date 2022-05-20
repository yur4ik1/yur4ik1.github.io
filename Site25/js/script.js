console.log('%cDeveloped by Djigit & yur4ik96', 'color: #c434c4; font-size: 50px ');

console.log(
  '%cTG: @Djigit34 / @yura_k18',
  'color: #c434c4; background: #eee; font-size: 30px '
);


// burger

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
// Cathegories sidebar
// 

const cathegoriesOpen = document.querySelector(".cathegories__open");
const cathegoriesMain = document.querySelector(".cathegories__main");

if(cathegoriesMain && cathegoriesOpen){
  const cathegoriesClose = document.querySelector(".cathegories__close");

  cathegoriesOpen.addEventListener("click", ()=>{
    cathegoriesMain.classList.add("active");

    Number(getComputedStyle(cathegoriesMain).height.slice(0, -2)) > (window.innerHeight - 81) ? 
    cathegoriesMain.style.height = (window.innerHeight - 81) + "px" : 
    cathegoriesMain.style.height = "unset";

  })

  cathegoriesClose.addEventListener("click", ()=>{
    cathegoriesMain.classList.remove("active");
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
  mouseParallax(document.querySelectorAll(".intro__confetti"), 0.0005);
  mouseParallax(document.querySelectorAll(".intro__confetti-flakes"), 0.0005);
}

//
// Item gallery
// 

let gallery = document.querySelector(".left-side__item-gallery");

if(gallery){

  let mainPhoto = gallery.querySelector(".item-gallery_main-photo a");

  photoSelection = gallery.querySelectorAll(".photo-selection_item");

  photoSelection.forEach((el)=>{

    el.addEventListener("click", ()=>{
      
      photoSelection.forEach((el)=>{
        el.classList.remove("selected");
      })

      el.classList.add("selected");
      mainPhoto.setAttribute("href", el.querySelector("img").getAttribute("src"))
      mainPhoto.querySelector("img").setAttribute("src", el.querySelector("img").getAttribute("src"))

    });
  })
}

//
//  Shop sale checker
//

const shopMain = document.querySelector(".shop-cathalog");

if(shopMain){
  
  const itemPrices = shopMain.querySelectorAll(".cathalog__item_price");
  console.log(itemPrices);
  
  itemPrices.forEach((el)=>{
    if(el.querySelector('.price_sale span').innerHTML != " "){
      console.log("is empty");
      console.log(el);
      el.classList.add('is-sale')
    }
  })
}

// Закрытие поиска при клике вне его блока
function CheckClass(el, Class){
  return el.classList != undefined ? el.classList.contains(Class) : false;
}

const popup = document.querySelector(".popup-wrapper");

if(popup){
  
  setTimeout(() => {
    popup.classList.add("active")
  }, 120000);

  document.addEventListener("click", (e)=>{
    if(popup.classList.contains("active")){
      e.path.some((el)=>{
        return CheckClass(el, "popup")
      }) 
      ? console.log("open") : popup.classList.remove("active");
    }
})

}