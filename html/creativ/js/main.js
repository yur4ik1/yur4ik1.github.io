const slides = document.querySelectorAll('.video__slide');
const slideContainer = document.querySelector('.video__slides');
let currentSlide = 0;
let observer;

function showSlide() {
  // First, hide all of the slides
  for (let slide of slides) {
    slide.style.display = 'none';
    const h3 = slide.querySelector('h3');
    if (h3) {
        h3.style.opacity = '0';
    }
  }

  // Then, display the current slide
  const current = slides[currentSlide];
  current.style.display = 'flex';

  // Add the fade-in class to the h3 elements
  const h3s = current.querySelectorAll('h3');
  for (let h3 of h3s) {
    h3.style.opacity = '1';
  }
}

// Show the first slide when the page loads
showSlide();

function startSlideshow() {
  // Start the slide show
  observer = setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide();
    if (currentSlide === slides.length - 1) {
      stopSlideshow();
    }
  }, 2000);
}

function stopSlideshow() {
  // Stop the slide show
  clearInterval(observer);
}

// Set up the IntersectionObserver to start and stop the slide show
const options = {
  root: null,  // The root element is the viewport
  rootMargin: '0px',
  threshold: 1.0
}

observer = new IntersectionObserver(callback, options);
observer.observe(slideContainer);

function callback(entries, observer) {
  // If the .video__slides element is in view, start the slide show
  // If it is not in view, stop the slide show
  if (entries[0].isIntersecting) {
    startSlideshow();
  } else {
    stopSlideshow();
  }
}
