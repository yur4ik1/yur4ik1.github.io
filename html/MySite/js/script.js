// Dark btn

const darkBtn = document.querySelector('.dark-btn');
const bool = document.querySelector('.bool');
const back = document.querySelector('body');

const dark = () => {
    bool.classList.toggle('active');
    darkBtn.classList.toggle('active');
    back.classList.toggle('dark');
}


// Scroll header

const header = document.querySelector("header");

window.onscroll = () => {
    let posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if (posTop > 0) {
        header.classList.add('white');
    } else {
        header.classList.remove('white');
    }
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
    mouseParallax(document.querySelectorAll(".intro-back"), 0.001);
}
