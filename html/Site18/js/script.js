function ibg(){

    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
    ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
    }
}
    
ibg();

let upBtn = document.querySelector(".up-btn");
if(upBtn){
    upBtn.style.top = window.scrollY + window.innerHeight -200 + "px";

    window.addEventListener("scroll", ()=>{
        upBtn.style.top = window.scrollY + window.innerHeight -200 + "px";
    })
}