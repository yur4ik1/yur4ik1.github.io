// Heading blur animation for all h1, h2 and h3 elements
document.addEventListener('DOMContentLoaded', function() {
    // Function to split text into letters and prepare for animation
    function prepareHeadingAnimation(heading, isHero = false) {
        const text = heading.textContent;
        const className = isHero ? 'hero-letter' : 'heading-letter';
        
        // Split text into words
        const words = text.split(' ');
        let htmlString = '';
        let letterIndex = 0;
        
        let addedWordsCount = 0;
        
        words.forEach((word) => {
            // Skip empty words
            if (!word.trim()) {
                return;
            }
            
            // Add space before word (except first added word)
            if (addedWordsCount > 0) {
                htmlString += ' ';
            }
            
            // Create word wrapper
            htmlString += '<span class="word-wrapper">';
            
            // Create spans for each letter in the word
            word.split('').forEach((char) => {
                const delay = letterIndex * 0.01;
                htmlString += `<span class="${className}" style="animation-delay: ${delay}s">${char}</span>`;
                letterIndex++;
            });
            
            htmlString += '</span>';
            addedWordsCount++;
        });
        
        heading.innerHTML = htmlString;
    }

    // Function to trigger animation
    function triggerHeadingAnimation(heading) {
        heading.classList.add('animate');
    }

    // Get all h1, h2 and h3 elements
    const headings = document.querySelectorAll('h1, h2, h3');
    
    if (headings.length === 0) return;

    // Prepare all headings for animation
    headings.forEach(heading => {
        const isHero = heading.classList.contains('hero__content-title');
        prepareHeadingAnimation(heading, isHero);
    });

    // Special case: trigger hero title immediately
    const heroTitle = document.querySelector('.hero__content-title');
    if (heroTitle) {
        setTimeout(() => {
            triggerHeadingAnimation(heroTitle);
        }, 100);
    }

    // Set up Intersection Observer for scroll-triggered animations
    const observerOptions = {
        threshold: 0.3, // Trigger when 30% of heading is visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before fully visible
    };

    const headingObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animate')) {
                // Small delay for smoother effect
                setTimeout(() => {
                    triggerHeadingAnimation(entry.target);
                }, 0);
            }
        });
    }, observerOptions);

    // Observe all headings except hero title (it animates immediately)
    headings.forEach(heading => {
        if (!heading.classList.contains('hero__content-title')) {
            headingObserver.observe(heading);
        }
    });
});



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

    // Custom smooth scroll with easing animation
    const menuLinks = document.querySelectorAll('.header__menu-link');
    const menuItems = document.querySelectorAll('.header__menu-item');
    
    // Flag to prevent auto-updating active menu during custom scroll animation
    let isCustomScrolling = false;

    // Easing function - ease-in-out-cubic for smooth acceleration/deceleration
    function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    // Custom smooth scroll function
    function smoothScrollTo(targetPosition, duration = 1200) {
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;
        
        // Set flag to prevent auto-updating active menu
        isCustomScrolling = true;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            
            // Apply easing function
            const easedProgress = easeInOutCubic(progress);
            
            window.scrollTo(0, startPosition + distance * easedProgress);
            
            if (progress < 1) {
                requestAnimationFrame(animation);
            } else {
                // Animation finished, allow auto-updating active menu again
                setTimeout(() => {
                    isCustomScrolling = false;
                }, 100); // Small delay to ensure scroll position is stable
            }
        }
        
        requestAnimationFrame(animation);
    }

    if (menuLinks.length) {
        menuLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                // Only handle anchor links
                if (href.startsWith('#')) {
                    e.preventDefault();
                    
                    const targetId = href.substring(1);
                    const targetElement = document.getElementById(targetId);
                    
                    if (targetElement) {
                        // Calculate offset for fixed header (header height + some padding)
                        const headerHeight = 100; // Approximate header height
                        const elementPosition = targetElement.offsetTop - headerHeight;
                        
                        // Use custom smooth scroll with easing
                        smoothScrollTo(elementPosition, 1200);
                        
                        // Update active menu item
                        menuItems.forEach(item => item.classList.remove('active'));
                        this.parentElement.classList.add('active');
                    }
                }
            });
        });
    }

    // Update active menu item on scroll
    const sections = document.querySelectorAll('section[id], main[id]');
    
    if (sections.length && menuItems.length) {
        window.addEventListener('scroll', function() {
            // Don't update active menu during custom scroll animation
            if (isCustomScrolling) {
                return;
            }
            
            const scrollPosition = window.scrollY + 100; // Offset for header
            
            let currentSection = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    currentSection = section.getAttribute('id');
                }
            });
            
            // Update active menu item only during manual scroll
            menuItems.forEach(item => {
                item.classList.remove('active');
                const link = item.querySelector('a');
                if (link && link.getAttribute('href') === '#' + currentSection) {
                    item.classList.add('active');
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
            element.style.setProperty('font-size', fontSize + 'px', 'important');
        }
        
        // Debug: check if elements are found
        console.log('inputValue element:', inputValue);
        console.log('minutes:', minutes, 'length:', minutes.toString().length);
        
        // Adjust font sizes
        adjustFontSize(inputValue, minutes, 100);
        adjustFontSize(resultValue, minutes, 100); // Use minutes (inputValue) for resultValue scaling too
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

// Smooth infinite scroll for hero logos
document.addEventListener('DOMContentLoaded', function() {
    const logosList = document.querySelector('.hero__logos-list');
    
    if (logosList) {
        // Clone logos for seamless infinite scroll
        const logoItems = Array.from(logosList.children);
        
        // Duplicate logos multiple times for smooth infinite scroll
        for (let i = 0; i < 4; i++) {
            logoItems.forEach(item => {
                const clone = item.cloneNode(true);
                logosList.appendChild(clone);
            });
        }
        
        // Set up smooth scroll animation
        let scrollPosition = 0;
        const scrollSpeed = 1; // pixels per frame
        const totalWidth = logosList.scrollWidth;
        const resetPoint = totalWidth / 5; // Reset when we've scrolled one set of logos
        
        function animateScroll() {
            scrollPosition += scrollSpeed;
            
            // Reset position when we've scrolled one complete set
            if (scrollPosition >= resetPoint) {
                scrollPosition = 0;
            }
            
            logosList.style.transform = `translateX(-${scrollPosition}px)`;
            requestAnimationFrame(animateScroll);
        }
        
        // Start animation
        requestAnimationFrame(animateScroll);
    }
});


// Custom fadeInUp animation with Intersection Observer
document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fadeInUp');
    
    if (fadeElements.length === 0) return;

    // Group elements by their parent container for stagger effect
    const elementGroups = new Map();
    
    fadeElements.forEach(element => {
        const parent = element.parentElement;
        if (!elementGroups.has(parent)) {
            elementGroups.set(parent, []);
        }
        elementGroups.get(parent).push(element);
    });

    // Create intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const parent = element.parentElement;
                const siblings = elementGroups.get(parent) || [element];
                
                // Check if element is in FAQ section or has no-stagger class
                const isFaqSection = element.closest('.faq') !== null;
                const hasNoStagger = element.classList.contains('no-stagger') || 
                                   parent.classList.contains('no-stagger');
                
                if (isFaqSection || hasNoStagger) {
                    // No stagger delay - animate immediately
                    element.classList.add('animate');
                } else {
                    // Find the index of current element among siblings
                    const elementIndex = siblings.indexOf(element);
                    
                    // Calculate stagger delay (100ms between each element)
                    const staggerDelay = elementIndex * 100;
                    
                    // Trigger animation with stagger delay
                    setTimeout(() => {
                        element.classList.add('animate');
                    }, staggerDelay);
                }
                
                // Stop observing this element (animate only once)
                observer.unobserve(element);
            }
        });
    }, {
        threshold: 0.1,           // Trigger when 10% visible
        rootMargin: '0px 0px -50px 0px'  // Trigger 50px before element comes into view
    });

    // Start observing all fadeInUp elements
    fadeElements.forEach(element => {
        observer.observe(element);
    });
    
    // Utility function to manually trigger fadeInUp animation
    window.triggerFadeInUp = function(selector) {
        const element = document.querySelector(selector);
        if (element && element.classList.contains('fadeInUp')) {
            element.classList.add('animate');
        }
    };
    
    // Utility function to reset fadeInUp animation
    window.resetFadeInUp = function(selector) {
        const element = document.querySelector(selector);
        if (element && element.classList.contains('fadeInUp')) {
            element.classList.remove('animate');
        }
    };
});
