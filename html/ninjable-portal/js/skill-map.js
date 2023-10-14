


function WZoom(elementSelector, options) {
  var zoomableContainer = document.querySelector(elementSelector);
  var zoomableDiv = zoomableContainer.querySelector('#zoomableDiv');
  var skillMap = document.querySelector('.skill-map'); // Добавили выбор .skill-map

  var currentScale = 1;
  var minScale = options.minScale || 0.7;
  var maxScale = options.maxScale || 1.7;

  var translateX = 0;
  var translateY = 0;
  var isDragging = false;
  var startX, startY;

  var smoothTime = options.smoothTime || 0.2;
  var isZooming = false;

  function applyTransform() {
    var transformValue = `scale(${currentScale}) translate(${translateX}px, ${translateY}px)`;
    zoomableDiv.style.transform = transformValue;

    // Ограничиваем перемещение по горизонтали
    if (translateX > zoomableContainer.clientWidth * 0.5) {
      translateX = zoomableContainer.clientWidth * 0.5;
    } else if (translateX < -zoomableDiv.clientWidth * currentScale + zoomableContainer.clientWidth * 0.5) {
      translateX = -zoomableDiv.clientWidth * currentScale + zoomableContainer.clientWidth * 0.5;
    }

    // Ограничиваем перемещение по вертикали
    if (translateY > zoomableContainer.clientHeight * 0.5) {
      translateY = zoomableContainer.clientHeight * 0.5;
    } else if (translateY < -zoomableDiv.clientHeight * currentScale + zoomableContainer.clientHeight * 0.5) {
      translateY = -zoomableDiv.clientHeight * currentScale + zoomableContainer.clientHeight * 0.5;
    }

    // Применяем ограничения и обновляем позицию
    zoomableDiv.style.transform = `scale(${currentScale}) translate(${translateX}px, ${translateY}px)`;

    // Добавляем высоту .skill-map к zoomableDiv
    zoomableDiv.style.height = skillMap.clientHeight + 'px';

    var tippyRoot = document.querySelector('.tippy-box');
    if (tippyRoot) {
      tippyRoot.style.transform = `scale(${currentScale})`;
    }
  }

  function zoom(scale, originX, originY) {
    var prevScale = currentScale;
    currentScale = Math.max(minScale, Math.min(maxScale, scale));
    var scaleChange = currentScale - prevScale;

    translateX -= scaleChange * (originX - zoomableContainer.clientWidth / 2);
    translateY -= scaleChange * (originY - zoomableContainer.clientHeight / 2);

    applyTransform();
  }

  function zoomIn() {
    zoom(currentScale + 0.1, zoomableContainer.clientWidth / 2, zoomableContainer.clientHeight / 2);
  }

  function zoomOut() {
    zoom(currentScale - 0.1, zoomableContainer.clientWidth / 2, zoomableContainer.clientHeight / 2);
  }

  function startDragging(event) {
    isDragging = true;
    startX = event.clientX;
    startY = event.clientY;
    zoomableDiv.style.cursor = 'grabbing';
  }

  function stopDragging() {
    isDragging = false;
    zoomableDiv.style.cursor = 'grab';
  }

  function handleMouseMove(event) {
    if (isDragging) {
      var deltaX = event.clientX - startX;
      var deltaY = event.clientY - startY;
  
      startX = event.clientX;
      startY = event.clientY;
  
      translateX += deltaX;
      translateY += deltaY;
  
      // Запланировать обновление интерфейса с помощью requestAnimationFrame
      requestAnimationFrame(applyTransform);
    }
  }
  

  function handleMouseUp() {
    stopDragging();
  }

  zoomableContainer.addEventListener('wheel', function(event) {
    var delta = event.deltaY || event.detail || event.wheelDelta;
    var mouseX = event.clientX - zoomableContainer.getBoundingClientRect().left;
    var mouseY = event.clientY - zoomableContainer.getBoundingClientRect().top;

    var newScale = currentScale + (delta > 0 ? -0.1 : 0.1);

    if (newScale < minScale) {
      newScale = minScale;
    } else if (newScale > maxScale) {
      newScale = maxScale;
    }

    var zoomFactor = newScale / currentScale;

    translateX = mouseX - zoomFactor * (mouseX - translateX);
    translateY = mouseY - zoomFactor * (mouseY - translateY);

    currentScale = newScale;

    applyTransform();

    event.preventDefault();
  });

  zoomableContainer.addEventListener('mousedown', function(event) {
    startDragging(event);
  });

  document.addEventListener('mousemove', function(event) {
    handleMouseMove(event);
  });

  document.addEventListener('mouseup', function() {
    handleMouseUp();
  });

  zoomableDiv.addEventListener('dblclick', function(event) {
    if (!isZooming) {
      isZooming = true;

      var mouseX = event.clientX - zoomableContainer.getBoundingClientRect().left;
      var mouseY = event.clientY - zoomableContainer.getBoundingClientRect().top;

      var newScale = currentScale < maxScale ? maxScale : minScale;

      var startTimestamp = null;
      var startScale = currentScale;

      function zoomAnimation(timestamp) {
        if (!startTimestamp) startTimestamp = timestamp;
        var progress = (timestamp - startTimestamp) / (smoothTime * 1000);

        if (progress < 1) {
          var newCurrentScale = startScale + (newScale - startScale) * progress;
          zoom(newCurrentScale, mouseX, mouseY);
          requestAnimationFrame(zoomAnimation);
        } else {
          zoom(newScale, mouseX, mouseY);
          isZooming = false;
        }
      }

      requestAnimationFrame(zoomAnimation);
    }
  });

  // Получаем высоту .skill-map и устанавливаем высоту zoomableContainer
  // var skillMapHeight = skillMap.clientHeight;
  // zoomableContainer.style.height = skillMapHeight + 'px';

  applyTransform();

  var zoomUpButton = document.querySelector('.btn-zoom-up');
  var zoomDownButton = document.querySelector('.btn-zoom-down');

  zoomUpButton.addEventListener('click', function() {
    zoomIn();
  });

  zoomDownButton.addEventListener('click', function() {
    zoomOut();
  });
}

WZoom('#myViewport', {
  minScale: 0.9,
  maxScale: 1.7,
  smoothTime: 0.5
});


const template = document.getElementById('template');
const template2 = document.getElementById('template2');
const template3 = document.getElementById('template3');
  
tippy('.skill-map-step', {
  trigger: 'click',
  content: template.innerHTML,
  allowHTML: true,
});

tippy('#start', {
  trigger: 'click',
  content: template2.innerHTML,
  allowHTML: true,
});

tippy('.skill', {
  trigger: 'click',
  content: template3.innerHTML,
  allowHTML: true,
});