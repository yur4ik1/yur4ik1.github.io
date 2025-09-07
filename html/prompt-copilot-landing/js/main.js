// Header scroll functionality
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    
    if (!header) return;
    
    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 50) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Check initial scroll position
    handleScroll();

    // Initialize Reviews Swiper
    const reviewsSwiper = new Swiper('.reviews-swiper', {
        // Basic settings
        slidesPerView: 'auto',
        spaceBetween: 12,
        centeredSlides: false,
        loop: true,
        
        // Autoplay settings
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        
        // Enable mouse/touch interaction
        simulateTouch: true,
        allowTouchMove: true,
        touchRatio: 1,
        touchAngle: 45,
        
        // Mouse wheel support
        mousewheel: {
            forceToAxis: true,
            sensitivity: 1,
        },
        
        // Grab cursor
        grabCursor: true,
        
        // Free mode for smooth scrolling
        freeMode: {
            enabled: true,
            sticky: false,
            momentum: true,
            momentumRatio: 0.5,
            momentumVelocityRatio: 0.5,
        },
        
        // Smooth scrolling
        speed: 1000,
        
        // Responsive breakpoints
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 12,
                centeredSlides: true,
                freeMode: false,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 12,
                centeredSlides: false,
                freeMode: false,
            },
            1024: {
                slidesPerView: 'auto',
                spaceBetween: 12,
                centeredSlides: false,
                freeMode: true,
            }
        }
    });

    // Pricing tabs functionality
    const pricingTabs = document.querySelectorAll('.pricing__tabs-item');
    const pricingContents = document.querySelectorAll('.pricing__content');

    if (pricingTabs.length && pricingContents.length) {
        pricingTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const targetTab = this.getAttribute('data-tab');
                
                // Remove active class from all tabs
                pricingTabs.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked tab
                this.classList.add('active');
                
                // Hide all content sections
                pricingContents.forEach(content => {
                    content.style.display = 'none';
                });
                
                // Show target content section
                const targetContent = document.querySelector(`[data-content="${targetTab}"]`);
                if (targetContent) {
                    targetContent.style.display = 'flex';
                }
            });
        });
    }

    // FAQ functionality
    const faqItems = document.querySelectorAll('.faq__content-item');

    if (faqItems.length) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq__content-item-question');
            
            if (question) {
                question.addEventListener('click', function() {
                    // Toggle active class
                    item.classList.toggle('active');
                    
                    // Close other FAQ items (optional - for accordion behavior)
                    // faqItems.forEach(otherItem => {
                    //     if (otherItem !== item) {
                    //         otherItem.classList.remove('active');
                    //     }
                    // });
                });
            }
        });
    }

    // Link copying functionality
    const linkButtons = document.querySelectorAll('.link-button');

    if (linkButtons.length) {
        linkButtons.forEach(button => {
            button.addEventListener('click', async function() {
                const link = this.getAttribute('data-link');
                const type = this.getAttribute('data-type');
                const img = this.querySelector('img');
                
                if (!link || !img) return;
                
                // Prevent multiple clicks
                if (this.classList.contains('copying')) return;
                
                try {
                    // Copy to clipboard
                    await navigator.clipboard.writeText(link);
                    
                    // Add copying state
                    this.classList.add('copying');
                    
                    // Store original src
                    const originalSrc = img.src;
                    
                    // Change icon to check
                    img.src = './img/click-check.svg';
                    
                    // Create and show badge
                    const badge = document.createElement('div');
                    badge.className = 'copied-badge';
                    badge.textContent = 'Copied!';
                    this.appendChild(badge);
                    
                    // Show badge with animation
                    setTimeout(() => {
                        badge.classList.add('show');
                    }, 10);
                    
                    // Hide badge and restore icon after 2 seconds
                    setTimeout(() => {
                        badge.classList.remove('show');
                        
                        setTimeout(() => {
                            // Restore original icon
                            img.src = originalSrc;
                            this.classList.remove('copying');
                            
                            // Remove badge
                            if (badge.parentNode) {
                                badge.parentNode.removeChild(badge);
                            }
                        }, 300);
                    }, 2000);
                    
                } catch (err) {
                    console.error('Failed to copy link: ', err);
                    
                    // Fallback for older browsers
                    const textArea = document.createElement('textarea');
                    textArea.value = link;
                    document.body.appendChild(textArea);
                    textArea.select();
                    
                    try {
                        document.execCommand('copy');
                        console.log('Link copied using fallback method');
                    } catch (fallbackErr) {
                        console.error('Fallback copy failed: ', fallbackErr);
                    }
                    
                    document.body.removeChild(textArea);
                }
            });
        });
    }
});

// Calculator functionality
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('timeSlider');
    const inputValue = document.getElementById('inputValue');
    const resultValue = document.getElementById('resultValue');
    const sliderValue = document.getElementById('sliderValue');
    
    if (!slider || !inputValue || !resultValue || !sliderValue) return;
    
    function updateCalculation() {
        const minutes = parseInt(slider.value);
        const savedMinutes = minutes * 20;
        const percentage = ((minutes - slider.min) / (slider.max - slider.min)) * 100;
        
        inputValue.textContent = minutes;
        resultValue.textContent = savedMinutes;
        sliderValue.textContent = minutes;
        
        // Dynamic font size based on slider value
        function adjustFontSize(element, number, baseFontSize) {
            let fontSize = baseFontSize;
            
            if (number < 50) {
                fontSize = baseFontSize; // 128px for values under 50
            } else if (number >= 50 && number < 75) {
                fontSize = baseFontSize * 0.85; // ~109px for 50-74
            } else if (number >= 75 && number < 90) {
                fontSize = baseFontSize * 0.85; // ~96px for 75-89
            } else {
                fontSize = baseFontSize * 0.75; // ~83px for 90-100
            }
            
            element.style.setProperty('font-size', fontSize + 'px', 'important');
        }
        
        // Debug: check if elements are found
        console.log('inputValue element:', inputValue);
        console.log('minutes:', minutes, 'length:', minutes.toString().length);
        
        // Adjust font sizes
        adjustFontSize(inputValue, minutes, 128);
        adjustFontSize(resultValue, minutes, 128); // Use minutes (inputValue) for resultValue scaling too
        adjustFontSize(sliderValue, minutes, 14);
        
        // Calculate exact position for the slider value (number above thumb)
        const sliderRect = slider.getBoundingClientRect();
        const sliderWidth = sliderRect.width;
        const thumbWidth = 16; // Width of the thumb from CSS
        
        // Calculate position accounting for thumb width
        // At 0% - thumb center is at thumbWidth/2
        // At 100% - thumb center is at sliderWidth - thumbWidth/2
        const availableWidth = sliderWidth - thumbWidth;
        const thumbPosition = (thumbWidth / 2) + (percentage / 100) * availableWidth;
        
        // Position the number exactly above the thumb center
        sliderValue.style.left = thumbPosition + 'px';
        
        // Update CSS custom property for ::before width
        document.documentElement.style.setProperty('--slider-progress', percentage + '%');
    }
    
    // Update on slider change
    slider.addEventListener('input', updateCalculation);
    
    // Update on window resize to recalculate positions
    window.addEventListener('resize', updateCalculation);
    
    // Initialize calculation
    updateCalculation();
});
