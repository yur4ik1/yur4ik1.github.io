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
            var translateX;
            if (window.innerWidth <= 720) {
                // Mobile: move by 100% (full width)
                translateX = -this.currentSlide * 100;
                this.wrapper.style.transform = 'translateX(' + translateX + '%)';
            } else {
                // Desktop: move by fixed pixel width
                translateX = -this.currentSlide * this.slideWidth;
                this.wrapper.style.transform = 'translateX(' + translateX + 'px)';
            }

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

    // Update slider on window resize
    window.addEventListener('resize', function() {
        if (seoSlider.wrapper) {
            seoSlider.updateSlider();
        }
    });

    // Reviews Slider functionality
    const reviewsSlider = {
        currentSlide: 0,
        totalSlides: 0,
        slides: [],
        paginationItems: [],
        leftBtn: null,
        rightBtn: null,

        init: function() {
            // Get elements - only for desktop reviews navigation (not mobile)
            var reviewsNav = document.querySelector('.reviews__navigation:not(.mobile)');
            if (!reviewsNav) return;
            
            this.slides = document.querySelectorAll('.reviews__slide');
            this.paginationItems = reviewsNav.querySelectorAll('.reviews__pagination-item');
            this.leftBtn = reviewsNav.querySelector('.pagination-reviews__left');
            this.rightBtn = reviewsNav.querySelector('.pagination-reviews__right');
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
            
            // Fade effect: first fade out current, then fade in new
            var self = this;
            var currentSlide = this.currentSlide;
            
            // Fade out all slides first
            this.slides.forEach(function(slide) {
                slide.style.opacity = '0';
            });
            
            // After fade out, show new slide
            setTimeout(function() {
                self.slides.forEach(function(slide, index) {
                    if (index === currentSlide) {
                        slide.classList.add('active');
                        setTimeout(function() {
                            slide.style.opacity = '1';
                        }, 50);
                    } else {
                        slide.classList.remove('active');
                    }
                });
            }, 100);

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

    // Initialize reviews slider (desktop)
    reviewsSlider.init();

    // Mobile Reviews Slider functionality
    var mobileReviewsSlider = {
        currentSlide: 0,
        totalSlides: 0,
        slides: [],
        paginationItems: [],
        leftBtn: null,
        rightBtn: null,

        init: function() {
            // Get elements - only for mobile reviews navigation
            var mobileReviewsNav = document.querySelector('.reviews__navigation.mobile');
            if (!mobileReviewsNav) return;
            
            this.slides = document.querySelectorAll('.reviews__slide');
            this.paginationItems = mobileReviewsNav.querySelectorAll('.reviews__pagination-item');
            this.leftBtn = mobileReviewsNav.querySelector('.pagination-reviews__left');
            this.rightBtn = mobileReviewsNav.querySelector('.pagination-reviews__right');
            this.totalSlides = this.slides.length;

            console.log('Mobile Reviews slider init:', {
                slides: this.slides.length,
                pagination: this.paginationItems.length,
                leftBtn: !!this.leftBtn,
                rightBtn: !!this.rightBtn
            });

            if (this.slides.length === 0) {
                console.error('No reviews slides found for mobile!');
                return;
            }

            // Set initial state
            this.updateSlider();

            // Add event listeners
            if (this.leftBtn) {
                var self = this;
                this.leftBtn.addEventListener('click', function() {
                    console.log('Mobile Left button clicked');
                    self.prevSlide();
                });
            }

            if (this.rightBtn) {
                var self = this;
                this.rightBtn.addEventListener('click', function() {
                    console.log('Mobile Right button clicked');
                    self.nextSlide();
                });
            }

            // Add pagination click events
            var self = this;
            this.paginationItems.forEach(function(item, index) {
                item.addEventListener('click', function() {
                    console.log('Mobile Pagination clicked:', index);
                    self.goToSlide(index);
                });
            });
        },

        updateSlider: function() {
            console.log('Updating mobile slider to slide:', this.currentSlide);
            
            // Fade effect: first fade out current, then fade in new
            var self = this;
            var currentSlide = this.currentSlide;
            
            // Fade out all slides first
            this.slides.forEach(function(slide) {
                slide.style.opacity = '0';
            });
            
            // After fade out, show new slide
            setTimeout(function() {
                self.slides.forEach(function(slide, index) {
                    if (index === currentSlide) {
                        slide.classList.add('active');
                        setTimeout(function() {
                            slide.style.opacity = '1';
                        }, 50);
                    } else {
                        slide.classList.remove('active');
                    }
                });
            }, 100);

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

    // Initialize mobile reviews slider
    mobileReviewsSlider.init();

    // Burger menu toggle
    var burgerButton = document.querySelector('.header__burger');
    var mobileMenu = document.querySelector('.mobile__menu');

    if (burgerButton && mobileMenu) {
        burgerButton.addEventListener('click', function() {
            burgerButton.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
    }

    // Blog mobile slider functionality
    var blogSlider = {
        currentSlide: 0,
        totalSlides: 0,
        slides: [],
        paginationItems: [],
        leftBtn: null,
        rightBtn: null,

        init: function() {
            this.slides = document.querySelectorAll('.blog__item');
            this.paginationItems = document.querySelectorAll('.blog__pagination-item');
            this.leftBtn = document.querySelector('.blog__pagination .industries__seo-pagination-button.left');
            this.rightBtn = document.querySelector('.blog__pagination .industries__seo-pagination-button.right');
            this.totalSlides = this.slides.length;

            console.log('Blog slider init:', {
                windowWidth: window.innerWidth,
                slides: this.slides.length,
                pagination: this.paginationItems.length,
                leftBtn: !!this.leftBtn,
                rightBtn: !!this.rightBtn
            });

            if (this.slides.length === 0) {
                console.error('No blog slides found!');
                return;
            }

            // Set initial state
            this.updateSlider();

            // Add event listeners
            if (this.leftBtn) {
                var self = this;
                this.leftBtn.addEventListener('click', function() {
                    console.log('Blog left button clicked');
                    self.prevSlide();
                });
            } else {
                console.log('Blog left button not found');
            }

            if (this.rightBtn) {
                var self = this;
                this.rightBtn.addEventListener('click', function() {
                    console.log('Blog right button clicked');
                    self.nextSlide();
                });
            } else {
                console.log('Blog right button not found');
            }

            // Add pagination click events
            var self = this;
            this.paginationItems.forEach(function(item, index) {
                item.addEventListener('click', function() {
                    self.goToSlide(index);
                });
            });
        },

        updateSlider: function() {
            // Only work on mobile
            if (window.innerWidth > 720) return;
            
            console.log('Blog slider updating to slide:', this.currentSlide);
            
            // Fade effect: first fade out current, then fade in new
            var self = this;
            var currentSlide = this.currentSlide;
            
            // Fade out all slides first
            this.slides.forEach(function(slide) {
                slide.style.opacity = '0';
            });
            
            // After fade out, show new slide
            setTimeout(function() {
                self.slides.forEach(function(slide, index) {
                    if (index === currentSlide) {
                        slide.classList.add('active');
                        setTimeout(function() {
                            slide.style.opacity = '1';
                        }, 50);
                        console.log('Activated slide:', index);
                    } else {
                        slide.classList.remove('active');
                    }
                });
            }, 150);

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

    // Initialize blog slider
    blogSlider.init();

    // Reinitialize blog slider on resize
    window.addEventListener('resize', function() {
        blogSlider.init();
    });

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