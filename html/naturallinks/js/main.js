document.addEventListener('DOMContentLoaded', function() {
    // SEO Slider functionality
    const seoSlider = {
        currentSlide: 0,
        totalSlides: 0,
        wrapper: null,
        slides: [],
        paginationItems: [],
        paginationRunner: null,
        leftBtn: null,
        rightBtn: null,
        slideWidth: 411, // 387px width + 24px gap
        isAnimating: false,

        init: function() {
            // Get elements
            this.wrapper = document.querySelector('.industries__seo-swiper-wrapper');
            this.slides = document.querySelectorAll('.industries__seo-swiper-item');
            this.paginationItems = document.querySelectorAll('.industries__pagination-item');
            this.leftBtn = document.querySelector('.industries__seo-pagination-button.left');
            this.rightBtn = document.querySelector('.industries__seo-pagination-button.right');
            this.totalSlides = this.slides.length;

            if (!this.wrapper || this.slides.length === 0) return;

            // Set initial state
            this.updateSlider();

            // Add event listeners
            if (this.leftBtn) this.leftBtn.addEventListener('click', this.prevSlide.bind(this));
            if (this.rightBtn) this.rightBtn.addEventListener('click', this.nextSlide.bind(this));

            // Add pagination click events
            var self = this;
            this.paginationItems.forEach(function(item, index) {
                item.addEventListener('click', function() {
                    self.goToSlide(index);
                });
            });

        },

        updateSlider: function() {
            const translateX = -this.currentSlide * this.slideWidth;
            this.wrapper.style.transform = `translateX(${translateX}px)`;

            var currentSlide = this.currentSlide;
            this.paginationItems.forEach(function(item, index) {
                if (index === currentSlide) item.classList.add('active');
                else item.classList.remove('active');
            });

            if (this.leftBtn) this.leftBtn.style.opacity = this.currentSlide === 0 ? '0.5' : '1';
            if (this.rightBtn) this.rightBtn.style.opacity = this.currentSlide >= this.totalSlides - 1 ? '0.5' : '1';
        },

        nextSlide: function() {
            if (this.currentSlide < this.totalSlides - 1) {
                this.currentSlide++;
            } else {
                this.currentSlide = 0; // Loop back to start
            }
            this.updateSlider();
        },

        prevSlide: function() {
            if (this.currentSlide > 0) {
                this.currentSlide--;
            } else {
                this.currentSlide = this.totalSlides - 1; // Loop to end
            }
            this.updateSlider();
        },

        goToSlide: function(index) {
            this.currentSlide = index;
            this.updateSlider();
        }
    };

    // Initialize slider
    seoSlider.init();

    // Reviews Slider functionality
    const reviewsSlider = {
        currentSlide: 0,
        totalSlides: 0,
        slides: [],
        paginationItems: [],
        leftBtn: null,
        rightBtn: null,

        init: function() {
            // Get elements
            this.slides = document.querySelectorAll('.reviews__slide');
            this.paginationItems = document.querySelectorAll('.reviews__pagination-item');
            this.leftBtn = document.querySelector('.pagination-reviews__left');
            this.rightBtn = document.querySelector('.pagination-reviews__right');
            this.totalSlides = this.slides.length;

            console.log('Reviews slider init:', {
                slides: this.slides.length,
                pagination: this.paginationItems.length,
                leftBtn: !!this.leftBtn,
                rightBtn: !!this.rightBtn
            });

            if (this.slides.length === 0) {
                console.error('No reviews slides found!');
                return;
            }

            // Set initial state
            this.updateSlider();

            // Add event listeners
            if (this.leftBtn) {
                var self = this;
                this.leftBtn.addEventListener('click', function() {
                    console.log('Left button clicked');
                    self.prevSlide();
                });
            }

            if (this.rightBtn) {
                var self = this;
                this.rightBtn.addEventListener('click', function() {
                    console.log('Right button clicked');
                    self.nextSlide();
                });
            }

            // Add pagination click events
            var self = this;
            this.paginationItems.forEach(function(item, index) {
                item.addEventListener('click', function() {
                    console.log('Pagination clicked:', index);
                    self.goToSlide(index);
                });
            });
        },

        updateSlider: function() {
            console.log('Updating slider to slide:', this.currentSlide);
            
            // Update slides visibility
            var currentSlide = this.currentSlide;
            this.slides.forEach(function(slide, index) {
                if (index === currentSlide) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });

            // Update pagination
            var currentSlide = this.currentSlide;
            this.paginationItems.forEach(function(item, index) {
                if (index === currentSlide) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });

            // Update button states
            if (this.leftBtn) this.leftBtn.style.opacity = this.currentSlide === 0 ? '0.5' : '1';
            if (this.rightBtn) this.rightBtn.style.opacity = this.currentSlide >= this.totalSlides - 1 ? '0.5' : '1';
        },

        nextSlide: function() {
            if (this.currentSlide < this.totalSlides - 1) {
                this.currentSlide++;
            } else {
                this.currentSlide = 0; // Loop back to start
            }
            this.updateSlider();
        },

        prevSlide: function() {
            if (this.currentSlide > 0) {
                this.currentSlide--;
            } else {
                this.currentSlide = this.totalSlides - 1; // Loop to end
            }
            this.updateSlider();
        },

        goToSlide: function(index) {
            this.currentSlide = index;
            this.updateSlider();
        }
    };

    // Initialize reviews slider
    reviewsSlider.init();

    // Case navigation hover functionality
    var caseList = document.querySelector('.case');
    var caseNavigation = document.querySelector('.case__navigation');
    
    if (caseList && caseNavigation) {
        var isHoveringNavigation = false;
        var isHoveringList = false;
        
        function showNavigation() {
            caseNavigation.style.opacity = '1';
            caseNavigation.style.visibility = 'visible';
        }
        
        function hideNavigation() {
            if (!isHoveringNavigation && !isHoveringList) {
                caseNavigation.style.opacity = '0';
                caseNavigation.style.visibility = 'hidden';
            }
        }
        
        // Case list events
        caseList.addEventListener('mouseenter', function() {
            isHoveringList = true;
            showNavigation();
        });
        
        caseList.addEventListener('mouseleave', function() {
            isHoveringList = false;
            setTimeout(hideNavigation, 100);
        });
        
        // Navigation events
        caseNavigation.addEventListener('mouseenter', function() {
            isHoveringNavigation = true;
            showNavigation();
        });
        
        caseNavigation.addEventListener('mouseleave', function() {
            isHoveringNavigation = false;
            setTimeout(hideNavigation, 100);
        });
    }

    // FAQ functionality
    var faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(function(item) {
        var header = item.querySelector('.faq-item__header');
        
        header.addEventListener('click', function() {
            var isActive = item.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach(function(otherItem) {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
    });

    // Initialize Swiper for CASE section
    (function initCaseSwiper(){
        var root = document.querySelector('.case');
        var el = root ? root.querySelector('.case-swiper') : null;
        if (!el || typeof Swiper === 'undefined') return;

        var paginationEl = root.querySelector('.pagination');

        var swiper = new Swiper(el, {
            slidesPerView: 1,
            spaceBetween: 36,
            speed: 500,
            loop: false,
            effect: 'fade',
            fadeEffect: { crossFade: true },
            allowTouchMove: false,
            navigation: {
                nextEl: '.case__navigation-button.right',
                prevEl: '.case__navigation-button.left',
            },
            pagination: {
                el: paginationEl,
                clickable: true,
                bulletClass: 'pagination__item case__pagination-item',
                bulletActiveClass: 'active',
                renderBullet: function (index, className) {
                    return '<span class="' + className + '"></span>';
                }
            }
        });
    })();
});