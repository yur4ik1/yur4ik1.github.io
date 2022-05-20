console.log('%cDeveloped by yur4ik69', 'color: #c434c4; font-size: 50px ');

console.log(
  '%cTG: @yur4ik69',
  'color: #c434c4; background: #eee; font-size: 30px '
);


let screen = document.querySelector(".loading");

document.addEventListener("DOMContentLoaded", function(event) {
    
    setTimeout(()=>{
        screen.classList.add("disabled");
    }, 2000)

});
