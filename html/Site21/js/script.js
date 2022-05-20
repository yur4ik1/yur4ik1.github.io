console.log('%cDeveloped by Djigit', 'color: #c434c4; font-size: 50px ');

console.log(
  '%cTG: @Djigit34',
  'color: #c434c4; background: #eee; font-size: 30px '
);


// 
// Timer
// 

let timerGroup = document.querySelector(".timer-group");

if(timerGroup){

  let timerH = timerGroup.querySelector(".timeH");
  let timerM = timerGroup.querySelector(".timeM");
  let timerS = timerGroup.querySelector(".timeS");

  let dateBlock = timerGroup.querySelector(".timer-data")

  let date = new Date();

  initTimer();

  let timerId

  if(!document.querySelector(".timer").classList.contains("ended")){
    timerId = setInterval(updateTimer, 1000);
  }
  
  function initTimer(){
    
    timerGroup.setAttribute("day", convertDay(date.getDay()));

    let dayBlock = GetCurrentDateblock(date.getDay());

    let timeList = [];

    dayBlock.querySelectorAll("span").forEach((el)=>{

      let hours = el.innerText.slice(0, el.innerText.indexOf(":"));
      let minutes = el.innerText.slice(el.innerText.indexOf(":")+1);

      timeList.push({hours:hours,minutes});

    });

    let nearTime = getNearTime(timeList);


    if(nearTime.hours != undefined){

      timeLeft = getLeftTime(nearTime);

      setTimerByList(timeLeft);

    } else{

      setTimer("00", "00", "00")
      document.querySelector(".timer").classList.add("ended")
    }
    
  }

  function updateTimer(){
    date = new Date();

    let currentDate = {};

    currentDate.hours = Number(timerH.textContent);
    currentDate.minutes = Number(timerM.textContent);
    currentDate.seconds = Number(timerS.textContent);

    newTime = getDecreasedSecond(currentDate);

    if(newTime.hours == 0 && newTime.minutes == 0 && newTime. seconds == 0){

      let dayBlock = GetCurrentDateblock(date.getDay());

      let timeList = [];

      dayBlock.querySelectorAll("span").forEach((el)=>{

        let hours = el.innerText.slice(0, el.innerText.indexOf(":"));
        let minutes = el.innerText.slice(el.innerText.indexOf(":")+1);

        timeList.push({hours:hours,minutes});

      });


      nearTime = getNearTime(timeList);

      console.log(nearTime);

      if(nearTime.hours != undefined){

        console.log("not");
        timeLeft = getLeftTime(nearTime);
  
        setTimerByList(timeLeft);
  
      } else{
  
        setTimer("00", "00", "00")
        document.querySelector(".timer").classList.add("ended")
        clearInterval(timerId);
        console.log("cleared");
      }

    } else{
      timerH.innerText = newTime.hours;
      timerM.innerText = newTime.minutes;
      timerS.innerText = newTime.seconds;
    }

    

  }

  function GetCurrentDateblock(dayNum){
    return dateBlock.querySelectorAll(".day")[dayNum]
  }

  function convertDay(dayNum){

    let dayArr = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

    return dayArr[dayNum];

  }

  function setTimerByList(timeObj){
    let date = new Date;

    let M, S, H
    
    if(timeObj.hours > 0 && timeObj.hours <= 9){

      H = `0${timeObj.hours}`;

    } else{

      H= timeObj.hours;

    }

    M = timeObj.minutes - 1;
  
    S = 60 - date.getSeconds();

    convertedTime = getFormattedTime({hours:H,minutes:M,seconds:S})

    // console.log("converted ", convertedTime);

    timerH.innerText = convertedTime.hours;
    timerM.innerText = convertedTime.minutes;
    timerS.innerText = convertedTime.seconds;
    
  }

  function setTimer(H, M, S){

    timerH.innerText = H;
    timerM.innerText = M;
    timerS.innerText = S;

  }

  function getNearTime(timeArray){
    let currentH = date.getHours();
    let currentM = date.getMinutes();

    let nearTime = {hours : undefined, minutes : undefined};
   
    for (let i = 0; i < timeArray.length; i++) {
      

      if(timeArray[i].hours - currentH >= 0){
        

        if(timeArray[i].hours == currentH){

          if(timeArray[i].minutes > currentM){
            // console.log("We have a ",timeArray[i].hours, ":", timeArray[i].minutes );

            nearTime = {hours : timeArray[i].hours, minutes : timeArray[i].minutes};
            break;
          }

        } else{
          // console.log("We have a ",timeArray[i].hours, ":", timeArray[i].minutes );

          nearTime = {hours : timeArray[i].hours, minutes : timeArray[i].minutes};
          break;
        }

      }
    }        
   
    return nearTime;
  }

  function getLeftTime(timeObject){
    let date = new Date;
    
    let leftMinutes = timeObject.minutes - date.getMinutes();
    let leftHours = timeObject.hours - date.getHours();

    if(leftMinutes < 0){

      leftMinutes = 60+ (leftMinutes);
      leftHours--;

    }

    // console.log(" ");
    // console.log("----------------GET LEFT TIME DEBUG-------------------");
    // console.log(` Input time - ${timeObject.hours}:${timeObject.minutes}`);
    // console.log(` Current time - ${date.getHours()}:${date.getMinutes()}`);
    // console.log(` Differance - ${leftHours}:${leftMinutes}`);
    // console.log("------------------------------------------------------");
    // console.log(" ");

    return {hours : leftHours, minutes : leftMinutes}
  }

  function getDecreasedSecond(timeObject = {hours: 0, minutes: 0, seconds:0}){

    let newH, newM, newS;

    if(timeObject.seconds == 1){

      if(timeObject.minutes == 0){

        if(timeObject.hours == 0){
          newM = 0;
          newH = 0;
          newS = 0;
        } else{
          newH = timeObject.hours - 1;
          newM = 0;
          newS = 0;
        }
      } else{

        newH = timeObject.hours;
        newM = timeObject.minutes - 1;
        newS = 59;

      }
    } else{
      
      newH = timeObject.hours;
      newM = timeObject.minutes;
      newS = timeObject.seconds - 1;

    }
      

    return getFormattedTime({hours: newH, minutes: newM, seconds:newS})
  }

  function getFormattedTime(tObj){

    let formattedH;
    let formattedM;
    let formattedS;

    if(tObj.hours <= 9){
      formattedH = `0${tObj.hours}`
    } 
    else{
      formattedH = tObj.hours
    }
    
    if(tObj.minutes <= 9){
      formattedM = `0${tObj.minutes}`
    }
    else{
      formattedM = tObj.minutes
    }

    if(tObj.seconds <= 9){
      formattedS = `0${tObj.seconds}`
    }
    else{
      formattedS = tObj.seconds
    }

    // console.log(formattedH);
    // console.log(formattedM);
    // console.log(formattedS);

    return {hours : formattedH, minutes : formattedM, seconds : formattedS}

  }

}

// 
// Runline
// 

let Runline = document.querySelector(".run-line");

if(Runline){

  let runWrapper = Runline.querySelector(".run-wrapper");
  let WrapperText = runWrapper.querySelector("p").cloneNode(true);
  let TextWidth = getComputedStyle(runWrapper.querySelector("p")).width.slice(0,-2)


  for (let i = 0; i < 5; i++) {
    runWrapper.appendChild(WrapperText.cloneNode(true))
  }
 
  currentX = 0;

  setInterval(()=>{
    
    currentX--;
    runWrapper.style.transform = `translateX(${currentX}px)`;

    if(-currentX >=  TextWidth*3){
      currentX = 0;
    }

  }, 20)  

}

//
// Item gallery
// 

let gallery = document.querySelector(".item-gallery");

if(gallery){

  let mainPhoto = gallery.querySelector(".main-photo a");

  photoSelection = gallery.querySelectorAll(".photo-block");

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
// Burger
// 

let header = document.querySelector("header");

if(header){

  let headerList = header.querySelector("nav");
  let openBtn = header.querySelector(".menu-open");

  openBtn.addEventListener("click", ()=>{

    if(openBtn.classList.contains("active")){
      headerList.classList.remove("active");
      openBtn.classList.remove("active");
    } else{
      headerList.classList.add("active");
      openBtn.classList.add("active");
    }
    
  })
}