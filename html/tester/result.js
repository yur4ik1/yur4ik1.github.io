// Retrieve data from local storage
let wpm = localStorage.getItem("wpm");
let accuracy = localStorage.getItem("accuracy");
let title = localStorage.getItem("title");
let uptitle = localStorage.getItem("uptitle");
let imagePath = localStorage.getItem("imagePath");
let time = localStorage.getItem("time");

// Populate the data into the respective elements
document.getElementById("speed-num").innerText = wpm;
document.getElementById("accuracy-num").innerText = accuracy;
document.getElementById("time-num").innerText = time;
document.getElementById("title-text").innerText = title;
document.getElementById("uptitle-text").innerText = uptitle;
document.getElementById("image-path").setAttribute("src", imagePath);


var domain = window.location.hostname;
const imageName = Math.random().toString(36).substring(2, 15) + ".webp";

function share() {
    const imageUrl = `https://${domain}/screenshots/${imageName}`;
    window.location.href = `share.php?imageUrl=${imageUrl}`;
    document.cookie = "shared=true";
}

function shareImage() {
    const logoUrl = `https://${domain}/img/logo.webp`;
    const logoWidth = 400;
    const logoHeight = 64;
  
    html2canvas(document.querySelector("#screenshot-div"), {
        width: 1200,
        height: 600
      }).then(canvas => {
      // Draw logo image onto canvas
      const ctx = canvas.getContext("2d");
      const logoImg = new Image();
      logoImg.onload = function() {
        const x = canvas.width - logoWidth - 80;
        const y = canvas.height - logoHeight - 140;
        ctx.drawImage(logoImg, x, y, logoWidth, logoHeight);
        
        // Convert image to webp format
        const imgData = canvas.toDataURL("image/webp");
  
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "save_image.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  
        xhr.send(`image=${encodeURIComponent(imgData)}&image_name=${imageName}`);
      };
      logoImg.src = logoUrl;
    });
  }  

shareImage();


setTimeout(function () {
    var shareLink = document.querySelector('#share__link')
    shareLink.classList.add("active");
}, 1000);
