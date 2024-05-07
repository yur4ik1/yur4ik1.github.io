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
