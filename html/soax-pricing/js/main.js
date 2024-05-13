const slider = document.getElementById('slider');
const pagination = document.getElementById('pagination');
let isDragging = false, startPos = 0, currentTranslate = 0, prevTranslate = 0, animationID = 0;
let currentIndex = 0;

document.addEventListener('DOMContentLoaded', createPagination); // Create pagination on document load
slider.addEventListener('touchstart', touchStart);
slider.addEventListener('touchend', touchEnd);
slider.addEventListener('touchmove', touchMove);

function createPagination() {
    for (let i = 0; i < slider.children.length; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        pagination.appendChild(dot);
    }
}

function updatePagination() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function touchStart(e) {
    isDragging = true;
    startPos = getPositionX(e);
    animationID = requestAnimationFrame(animation);
    slider.classList.add('grabbing');
}

function touchEnd() {
    cancelAnimationFrame(animationID);
    isDragging = false;
    const movedBy = currentTranslate - prevTranslate;
    
    if (movedBy < -50) {
        currentIndex = Math.min(currentIndex + 1, slider.children.length - 1);
    } else if (movedBy > 50) {
        currentIndex = Math.max(currentIndex - 1, 0);
    }

    centerSlide();
    updatePagination(); // Update pagination on slide change
    slider.classList.remove('grabbing');
}

function touchMove(e) {
    if (isDragging) {
        const currentPosition = getPositionX(e);
        currentTranslate = prevTranslate + currentPosition - startPos;
        setSliderPosition();
    }
}

function getPositionX(e) {
    return e.touches[0].clientX;
}

function animation() {
    if (isDragging) requestAnimationFrame(animation);
}

function setSliderPosition() {
    slider.style.transform = `translateX(${currentTranslate}px)`;
}

function centerSlide() {
    const slideWidth = slider.children[currentIndex].offsetWidth;
    const containerWidth = slider.parentNode.offsetWidth;
    const newTranslate = (containerWidth / 2) - (slideWidth / 2) - (currentIndex * slideWidth);
    currentTranslate = newTranslate;
    prevTranslate = currentTranslate;
    setSliderPosition();
}




// popup info for new pricing
document.querySelectorAll('.info-trigger').forEach(trigger => {
  const popup = trigger.nextElementSibling;
  let showTimeout, hideTimeout;

  const showPopup = () => {
      clearTimeout(hideTimeout);
      showTimeout = setTimeout(() => {
          if (popup && popup.classList.contains('table-popup-info')) {
              popup.style.opacity = '1';
              popup.style.visibility = 'visible';
          }
      }, 200);
  };

  const hidePopup = () => {
      clearTimeout(showTimeout);
      hideTimeout = setTimeout(() => {
          if (popup && popup.classList.contains('table-popup-info')) {
              popup.style.opacity = '0';
              popup.style.visibility = 'hidden';
          }
      }, 200); 
  };

  trigger.addEventListener('mouseenter', showPopup);
  trigger.addEventListener('mouseleave', hidePopup);

  if (popup) {
      popup.addEventListener('mouseenter', showPopup);
      popup.addEventListener('mouseleave', hidePopup);
  }
});


// pricing tabs
document.addEventListener('DOMContentLoaded', () => {
  // Переключення між Annually та Monthly
  const switch1Items = document.querySelectorAll('.switch-1 span');
  const cardLists = document.querySelectorAll('.cards-list');

  switch1Items.forEach(item => {
      item.addEventListener('click', () => {
          switch1Items.forEach(i => i.classList.remove('act'));
          item.classList.add('act');

          const targetClass = item.classList.contains('annually') ? 'annually' : 'monthly';

          cardLists.forEach(list => {
              if (list.classList.contains(targetClass)) {
                  list.classList.add('act');
              } else {
                  list.classList.remove('act');
              }
          });
      });
  });

  // Переключення між Individual та Enterprise
  const switch2Items = document.querySelectorAll('.switch-2 span');
  const cardLists2 = document.querySelectorAll('.cards-list');

  switch2Items.forEach(item => {
      item.addEventListener('click', () => {
          switch2Items.forEach(i => i.classList.remove('act'));
          item.classList.add('act');

          const targetClass = item.classList.contains('individual') ? 'individual' : 'enterprise';

          cardLists2.forEach(list => {
              if (list.classList.contains(targetClass)) {
                  list.classList.add('act');
              } else {
                  list.classList.remove('act');
              }
          });
      });
  });
});






document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll('.slider-item');

  sliders.forEach((sliderContainer) => {
    // Ініціалізація унікальних змінних для кожного слайдера
    const slider = sliderContainer.querySelector('.pricing__slider-wrapper');
    const prevButton = sliderContainer.querySelector('.prev-button');
    const nextButton = sliderContainer.querySelector('.next-button');
    const pagination = sliderContainer.querySelector('.pricing__pagination');
    const cardWidth = sliderContainer.querySelector('.pricing__slide').offsetWidth + 13;
    const totalCards = slider.querySelectorAll('.pricing__slide').length; // Отримайте загальну кількість карток
    const visibleCards = 4; // Кількість видимих карток (залежить від дизайну)
    let currentPosition = 0;
    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;

    function createPagination() {
      for (let i = 0; i < totalCards; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === 0) {
          dot.classList.add('active');
        }
        pagination.appendChild(dot);
      }
    }

    function updatePagination() {
      const currentIndex = currentPosition / cardWidth;
      const dots = pagination.querySelectorAll('.dot');
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
    }

    function updateButtonState() {
      const maxPosition = Math.max(0, totalCards - visibleCards) * cardWidth;

      prevButton.disabled = currentPosition <= 0;
      nextButton.disabled = currentPosition >= maxPosition;
      updatePagination();
    }

    function scrollSlider(direction) {
      const maxPosition = Math.max(0, totalCards - visibleCards) * cardWidth;
      currentPosition += direction * cardWidth;
      currentPosition = Math.max(0, Math.min(currentPosition, maxPosition));

      slider.style.transform = `translateX(-${currentPosition}px)`;
      updateButtonState();
    }

    // Swipe functionalities
    const touchStart = (index) => {
      return function (event) {
        isDragging = true;
        startPos = getPositionX(event);
        slider.classList.add('grabbing');
      };
    };

    const touchMove = (event) => {
      if (isDragging) {
        const currentPosition = getPositionX(event);
        currentTranslate = prevTranslate + currentPosition - startPos;
      }
    };

    const touchEnd = () => {
      isDragging = false;
      const movedBy = currentTranslate - prevTranslate;

      if (movedBy < -100 && currentPosition < totalCards - visibleCards) {
        scrollSlider(1);
      } else if (movedBy > 100 && currentPosition > 0) {
        scrollSlider(-1);
      }

      slider.classList.remove('grabbing');
    };

    const getPositionX = (event) => {
      return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
    };

    slider.addEventListener('touchstart', touchStart(0));
    slider.addEventListener('touchend', touchEnd);
    slider.addEventListener('touchmove', touchMove);
    slider.addEventListener('mousedown', touchStart(0));
    slider.addEventListener('mouseup', touchEnd);
    slider.addEventListener('mouseleave', touchEnd);
    slider.addEventListener('mousemove', touchMove);

    // Initialize pagination and button state for each slider
    createPagination();
    updateButtonState();

    prevButton.addEventListener('click', () => scrollSlider(-1));
    nextButton.addEventListener('click', () => scrollSlider(1));
  });
});
