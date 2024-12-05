// header menu

const menuBurger = document.querySelector('.header__burger');
const mobileNavigation = document.querySelector('.mobile-navigation');
const signUpMobile = document.querySelector('.header__sign-up-mob');

menuBurger.addEventListener('click', () => {
    mobileNavigation.classList.toggle('active');
    menuBurger.classList.toggle('active');
    signUpMobile.classList.toggle('hidden');
});

const menu = document.querySelector('.menu-list');

menu.addEventListener('click', (event) => {
    if (event.target.classList.contains('menu-item') && event.target.classList.contains('sub')) {
        event.target.classList.toggle('active');
    }
});



document.addEventListener('DOMContentLoaded', function () {
    var menuItems = document.querySelectorAll('.header__navigation-item.sub');

    menuItems.forEach(function (item) {
        var submenu = item.querySelector('.submenu');

        // Remove .submenu from the DOM
        if (submenu) {
            submenu.parentNode.removeChild(submenu);
        }

        item.addEventListener('mouseenter', function () {
            if (submenu) {
                // Append .submenu back to the DOM in an initial hidden state
                item.appendChild(submenu);
                submenu.style.opacity = '0';
                submenu.style.visibility = 'hidden';
                submenu.style.zIndex = '999999';

                // Add the 'active' class to the current menu item
                item.classList.add('active');

                // Small delay to allow for smooth transition effect
                setTimeout(function () {
                    submenu.style.opacity = '1';
                    submenu.style.visibility = 'visible';
                }, 0);
            }
        });

        item.addEventListener('mouseleave', function () {
            if (submenu) {
                // Start fading out the submenu
                submenu.style.opacity = '0';
                submenu.style.visibility = 'hidden';

                // Remove the 'active' class from the current menu item
                item.classList.remove('active');

                // Remove .submenu from the DOM after transition ends
                setTimeout(function () {
                    if (submenu.parentNode) {
                        item.removeChild(submenu);
                    }
                }, 300); // Delay matching the transition duration
            }
        });
    });
});



// header 
const header = document.querySelector(".header");
const width = window.innerWidth

if (header) {
    window.onscroll = () => {
        let posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        if (posTop > 1) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }

        if (width < 1023) {
            if (posTop > 0) {
                header.classList.add('active');
            } else {
                header.classList.remove('active');
            }
        }

    }
}


// new pricing

document.addEventListener('DOMContentLoaded', function () {
    const isHomePage = window.location.pathname === '/' || window.location.pathname === '/index.html';

    const heroElement = document.querySelector('.pricing-new__hero');
    if (heroElement && heroElement.classList.contains('hidden')) {
        if (isHomePage) {
            heroElement.remove();
        }
    }

    const allPageInfos = document.querySelectorAll('.table-popup-info.all-page');
    const homePageInfos = document.querySelectorAll('.table-popup-info.home-page');

    if (isHomePage) {
        allPageInfos.forEach(info => info.remove());
        homePageInfos.forEach(info => {
            info.style.display = 'block';
            info.style.opacity = '0';
            info.style.visibility = 'hidden';
        });
    } else {
        homePageInfos.forEach(info => info.remove());
        allPageInfos.forEach(info => {
            info.style.display = 'block';
            info.style.opacity = '0';
            info.style.visibility = 'hidden';
        });
    }

    // pricing table, control panels, etc.
    const tableSelectors = ['.pricing-table.monthly.individual', '.pricing-table.monthly.enterprise'];
    const tableItems = document.querySelectorAll('.table-mobile-item, .pricing-table');
    const cardLists = document.querySelectorAll('.cards-list');
    const controlPanels = document.querySelectorAll('.control-panel .switch-2 span');

    tableSelectors.forEach(selector => {
        const table = document.querySelector(selector);
        if (table) {
            const headerDivs = table.querySelectorAll('.header-row > div');
            const pricingRows = table.querySelectorAll('.pricing-row');
            const subHeaderRows = table.querySelectorAll('.sub-header-row');
            const footerRow = table.querySelector('.footer-row');
            const footerDivs = Array.from(footerRow.children);

            headerDivs.forEach((headerDiv, index) => {
                if (headerDiv.classList.contains('active')) {
                    pricingRows.forEach(pricingRow => {
                        const pricingDivs = pricingRow.querySelectorAll('div');
                        if (pricingDivs[index]) {
                            pricingDivs[index].classList.add('active');
                        }
                    });

                    subHeaderRows.forEach(subHeaderRow => {
                        let divCounter = 1;
                        const subHeaderDivs = Array.from(subHeaderRow.children);
                        subHeaderDivs.forEach((subHeaderDiv, subIndex) => {
                            if (!subHeaderDiv.classList.contains('name') && divCounter === index) {
                                subHeaderDiv.classList.add('active');
                            }
                            if (!subHeaderDiv.classList.contains('name')) {
                                divCounter++;
                            }
                        });
                    });

                    footerDivs.forEach((footerDiv, footerIndex) => {
                        if (footerIndex === index) {
                            footerDiv.classList.add('active');
                        }
                    });
                }
            });
        }
    });

    const updateActiveState = (activeClass) => {
        tableItems.forEach(table => {
            table.classList.toggle('act', table.classList.contains(activeClass));
        });

        cardLists.forEach(list => {
            list.classList.toggle('act', list.classList.contains(activeClass));
        });
    };

    controlPanels.forEach(item => {
        item.addEventListener('click', () => {
            const activeClass = item.classList.contains('individual') ? 'individual' : 'enterprise';
            controlPanels.forEach(i => i.classList.remove('act'));
            controlPanels.forEach(i => {
                if (i.classList.contains(activeClass)) {
                    i.classList.add('act');
                }
            });
            updateActiveState(activeClass);
        });
    });

    const initialActiveClass = document.querySelector('.control-panel .switch-2 span.act').classList.contains('individual') ? 'individual' : 'enterprise';
    updateActiveState(initialActiveClass);

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

    document.querySelectorAll('.info-trigger-mob').forEach(trigger => {
        trigger.addEventListener('click', function () {
            const togglePopup = (parentSelector) => {
                const parent = trigger.closest(parentSelector);
                if (parent) {
                    const popupInfo = parent.querySelector('.table-popup-info');
                    if (popupInfo) {
                        popupInfo.classList.toggle('active');
                        if (popupInfo.classList.contains('active')) {
                            setTimeout(() => {
                                popupInfo.classList.remove('active');
                            }, 3000);
                        }
                    }
                }
            };

            togglePopup('.cat-name');
            togglePopup('.info');
        });
    });
});


// Define threshold values
const THRESHOLD = 20;
const THRESHOLD_2 = 20;

// SwipeSlider class
class SwipeSlider {
    constructor(slider) {
        this.startX = 0;
        this.oldX = 0;
        this.startPosition = 0;
        this.snapPosition = 0;
        this.isDown = false;
        this.userHasSwiped = false;

        // Init
        this.cacheElements(slider);
        this.setDimensions();
        this.bindHandlers();
        this.createPagination();
    }

    cacheElements(slider) {
        this.slider = slider;
        this.items = this.slider.querySelectorAll('.js-slider-item');
    }

    setDimensions() {
        const sliderWidth = this.slider.offsetWidth;
        const itemWidth = this.items[0].offsetWidth;
        const itemsWidth = this.items.length * itemWidth;

        this.itemWidth = itemWidth;
        this.maxAllowedW = -itemsWidth;
    }

    // Calculate boundaries
    calculateBoundaries(position, bounce = true) {
        const bounceMargin = bounce ? this.itemWidth / 4 : 0;

        if (position > bounceMargin) return bounceMargin;
        if (position < this.maxAllowedW - bounceMargin)
            return this.maxAllowedW - bounceMargin;

        return position;
    }

    calculateNextSnap(position, swipeNext) {
        let snapPosition = (parseInt((position / this.itemWidth), 10) - swipeNext) * this.itemWidth;
        let lastPositions = this.maxAllowedW + this.itemWidth;

        if (snapPosition <= lastPositions)
            snapPosition = lastPositions;

        this.currentSlide = -(snapPosition / this.itemWidth);
        this.updatePagination(this.currentSlide);

        return snapPosition;
    }

    moveSlider(position, snapPosition = null) {
        this.snapPosition = snapPosition != null ? snapPosition : position;
        this.slider.setAttribute('style', `transform: translate3d(${position}px, 0, 0)`);
    }

    // Helpers
    mapToRange(num, inMin, inMax, outMin, outMax) {
        return ((num - inMin) * (outMax - outMin)) / ((inMax - inMin) + outMin);
    }

    // Handlers
    bindHandlers() {
        this.slider.addEventListener('touchstart', (e) => this.handleTouchStart(e));
        this.slider.addEventListener('touchmove', (e) => this.handleTouchMove(e));
        this.slider.addEventListener('touchend', (e) => this.handleEnd(e));

        this.slider.addEventListener('mousedown', (e) => this.handleMouseStart(e));
        this.slider.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        this.slider.addEventListener('mouseup', (e) => this.handleEnd(e));
        this.slider.addEventListener('mouseleave', (e) => this.handleEnd(e));

        this.slider.addEventListener('click', (e) => this.handleClick(e));
        window.addEventListener('resize', () => this.handleResize());
    }

    handleTouchStart(e) {
        if (e.touches.length > 1) return;
        this.handleStart(e);
    }

    handleMouseStart(e) {
        e.preventDefault();
        this.handleStart(e);
    }

    handleStart(e) {
        this.isDown = true;
        this.userHasSwiped = false;
        this.startPosition = this.snapPosition;
        this.startX = (e.pageX || e.touches[0].pageX) - this.slider.offsetLeft;

        this.slider.classList.add('active');
    }

    handleTouchMove(e) {
        if (e.touches.length > 1 || !this.isDown) return;
        this.handleMove(e);
    }

    handleMouseMove(e) {
        if (!this.isDown) return;
        e.preventDefault();
        this.handleMove(e);
    }

    handleMove(e) {
        const pageX = e.pageX || e.touches[0].pageX;
        const currX = pageX - this.slider.offsetLeft;
        const dist = currX - this.startX;

        if (Math.abs(dist) < THRESHOLD) return;

        const swipeNext = this.oldX - currX < 0 ? 0 : 1;
        const accelerate = this.mapToRange(Math.abs(dist), THRESHOLD, window.innerWidth, 1, 3);
        const position = this.calculateBoundaries(this.startPosition + (dist * accelerate));

        e.preventDefault();

        this.userHasSwiped = true;
        this.oldX = currX;

        this.moveSlider(position, this.calculateNextSnap(position, swipeNext));
    }

    createPagination() {
        this.pagination = this.slider.parentElement.querySelector(".slider-pagination-1");
        this.pagination.innerHTML = ''; // Clear any existing dots

        for (let i = 0; i < this.items.length; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            this.pagination.appendChild(dot);
        }
    }

    updatePagination(currentIndex) {
        const dots = this.pagination.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    handleEnd() {
        if (!this.isDown) return;
        this.isDown = false;
        this.slider.classList.remove('active');
        this.moveSlider(this.snapPosition);
    }

    handleResize() {
        this.setDimensions();
        if (this.maxAllowedW > this.snapPosition) {
            this.moveSlider(this.maxAllowedW);
        }
    }

    handleClick(e) {
        if (!this.userHasSwiped) return;
        e.preventDefault();
        this.userHasSwiped = false;
    }
}

// SwipeSliderV2 class extends SwipeSlider
class SwipeSliderV2 extends SwipeSlider {
    constructor(slider) {
        super(slider);
        this.createPagination();
    }

    createPagination() {
        this.pagination = this.slider.parentElement.querySelector(".slider-pagination-2");
        this.pagination.innerHTML = ''; // Clear any existing dots

        for (let i = 0; i < this.items.length; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            this.pagination.appendChild(dot);
        }
    }
}

// Initialize the sliders
const slidersV1 = document.querySelectorAll('.slider-wrapper-1');
slidersV1.forEach((slider) => {
    new SwipeSlider(slider);
});

const slidersV2 = document.querySelectorAll('.slider-wrapper-2');
slidersV2.forEach((slider) => {
    new SwipeSliderV2(slider);
});



// Control panel logic to show/hide paginations
document.addEventListener('DOMContentLoaded', function () {
    const controlPanels = document.querySelectorAll('.control-panel .switch-2 span');

    const togglePagination = () => {
        const isIndividualActive = document.querySelector('.control-panel .switch-2 span.individual').classList.contains('act');
        const pagination1 = document.querySelector('.slider-pagination-1');
        const pagination2 = document.querySelector('.slider-pagination-2');

        if (isIndividualActive) {
            if (pagination1) pagination1.style.display = 'block';
            if (pagination2) pagination2.style.display = 'none';
        } else {
            if (pagination1) pagination1.style.display = 'none';
            if (pagination2) pagination2.style.display = 'block';
        }
    };

    controlPanels.forEach(panel => {
        panel.addEventListener('click', () => {
            togglePagination();
        });
    });

    togglePagination();
});

// cards v3

let cardContainers = document.querySelectorAll(".cards-v2");

function markLinesForEachNElem(featuresCards, nElem, classToAdd) {
    if (featuresCards.length > nElem) {
        for (let i = nElem; i < featuresCards.length; i += nElem) {
            featuresCards[i - 1].classList.add(classToAdd)
        }
    }
}

if (cardContainers) {
    console.log("im here!!")
    console.log(cardContainers)
    cardContainers.forEach(container => {
        console.log(container)
        let featuresCards = container.querySelectorAll(".our-features__card");
        console.log(featuresCards)

        if (parentContainsClass(container, "active")) {
            markLinesForEachNElem(featuresCards, 3, "split-line_3cols");
        } else if (parentContainsClass(container, "style_3")) {
            markLinesForEachNElem(featuresCards, 4, "split-line_4cols");
        } else if (parentContainsClass(container, "style_4")) {
            markLinesForEachNElem(featuresCards, 3, "split-line_3cols");
        } else if (parentContainsClass(container, "style_5")) {
            markLinesForEachNElem(featuresCards, 3, "split-line_3cols");
        } else if (parentContainsClass(container, "style_6")) {
            markLinesForEachNElem(featuresCards, 4, "split-line_4cols");
        }
    })
}

function parentContainsClass(parent, style) {
    console.log("parent -")
    console.log(parent)
    return parent.classList.contains(style);
}


const accordionBtns = document.querySelectorAll(".accordion");
var allContents = [];

accordionBtns.forEach((accordion) => {
    allContents.push(accordion.nextElementSibling);
});

function closeAllContents() {
    allContents.forEach((el) => {
        closeContent(el);
    })
}


const OPEN_CLASS = "is-open";

function closeContent(content) {
    content.style.maxHeight = null;
    content.classList.remove(OPEN_CLASS);
}

accordionBtns.forEach((accordion) => {
    accordion.onclick = function () {
        closeAllContents();

        let content = this.nextElementSibling;

        if (content.style.maxHeight) {
            //this is if the accordion is open
            closeContent(content);
            accordion.classList.remove(OPEN_CLASS)
        } else {
            //if the accordion is currently closed
            content.style.maxHeight = content.scrollHeight + "px";
            accordion.classList.add(OPEN_CLASS)
            content.classList.add(OPEN_CLASS);
        }
    };
});



// reviews module 
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.reviews__wrap');
    const slides = slider.querySelectorAll('.reviews__item');
    const leftButton = document.querySelector('.nav-button.left');
    const rightButton = document.querySelector('.nav-button.right');
    const totalSlides = slides.length;
    let currentIndex = 0;
    const scrollToSlide = (index) => {
        slides[index].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center', 
        });
    };

    leftButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--; 
            scrollToSlide(currentIndex);
        }
    });

    rightButton.addEventListener('click', () => {
        if (currentIndex < totalSlides - 1) {
            currentIndex++; 
            scrollToSlide(currentIndex);
        }
    });

    window.addEventListener('resize', () => {
        scrollToSlide(currentIndex);
    });
});
