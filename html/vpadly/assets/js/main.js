/***************************************************
==================== JS INDEX ======================
****************************************************
00. Preloader
01. Cursor Animations
02. Offcanvas
03. Scroll Top
04. Modals
05. Header 1
06. Header 2
07. Header 3
08. Header 5
09. Header Search
10. Roll Slider
11. Workflow Slider
12. Team Slider
13. Testimonial Slider
14. Testimonial Slider 3
15. Portfolio Slider
16. Service 1
17. Counter
18. Button Hover Animation
19. Button Move Animation
20. Register GSAP
21. Config GSAP
22. Service 6
23. Choose Section
24. Portfolio 5 Animation 
25. Title Animation
26. Title Animation Top
27. Text Animation
28. Text Animation Top
29. Offcanvas Menu
30. Service 3
31. Folks animation
32. Menu Text Animation
33. Main Portfolio Sticky
34. Hero 3 Animation
35. Home Page 2 Animations
36. Award Animation
37. Portfolio Main Slider
38. Portfolio Animation
39. Portfolio Slider 2
40. Portfolio Slider 3
41. Image Moving Animations
42. Counter Animation
43. Workflow Slider Animation | animation__fade
44. Workflow Slider Animation 2 |  fade_bottom
45. Blog animation 
46. Blog animation 2
47. Blog Animation 3
48. Zoom In Animation
49. Service 3 Animation
50. Testimonial 2 Animation
51. Testimonial 3 Image Animation
52. Pricing Table Animation 
53. Service 2 Animation 
54. Hero 1 Animation
55. Service 1 Animation
56. Features 2 Animation 
57. Portfolio 6 Animation 
58. Portfolio 5 Border
59. Portfolio Main Slider
60. Portfolio Slider 6
61. Testimonial Slider 4
62. Team 7
63.Portfolio Slider 7
64. Header 7
65. Service 7 Animation
****************************************************/

(function ($) {
    "use strict";

    // Get Device width
    let device_width = window.innerWidth;

    /////////////////////////////////////////////////////
    // 00. Preloader
    $(document).ready(function () {
        $('.preloader').hide();
    });
    /////////////////////////////////////////////////////

    // 07. Data backgrond
    $("[data-background").each(function () {
        $(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
    });

    /////////////////////////////////////////////////////
    // HERO - 9

    var testimonial_4 = new Swiper(".hero-9", {
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: false,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
            clickable: true,

            renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' + ' <span><i class="fa-solid fa-minus increase-dash"></i></span> ' + '<span class="' + totalClass + '"></span>';
            }
        },
        breakpoints: {
            1200: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            320: {
                slidesPerView: 1,
            },
        }
    });



    /////////////////////////////////////////////////////
    // 01. Cursor Animations

    // Home Page Client Cursor
    var client_cursor = document.getElementById("client_cursor");

    // Team Page Team Cursor
    var team_cursor = document.getElementById("team_cursor");

    // Portfolio  Cursor
    var portf_cursor_6 = document.getElementById("portf_cursor_6");

    // Featured  Cursor
    var featured_cursor = document.getElementById("featured_cursor");

    var portfolio4_cursor = document.getElementById("portfolio4_cursor");

    function mousemoveHandler(e) {
        try {
            const target = e.target;

            let tl = gsap.timeline({
                defaults: {
                    x: e.clientX,
                    y: e.clientY,
                }
            })
            let t2 = gsap.timeline({
                defaults: {
                    x: e.clientX,
                    y: e.clientY,
                }
            })

            // Home Page Client Cursor
            if (target.closest(".testimonial__img")) {
                tl.to(client_cursor, {
                    opacity: 1,
                    ease: "power4.out"
                }, "-=0.3");
            } else {
                t2.to(client_cursor, {
                    opacity: 0,
                    ease: "power4.out"
                }, "-=0.3");
            }

            // Team Page Team Cursor
            if (target.closest(".team__slider")) {
                tl.to(team_cursor, {
                    opacity: 1,
                    ease: "power4.out"
                }, "-=0.3");
            } else {
                t2.to(team_cursor, {
                    opacity: 0,
                    ease: "power4.out"
                }, "-=0.3");
            }

            // Portfolio Cursor
            if (target.closest(".portfolio__item-6")) {
                tl.to(portf_cursor_6, {
                    opacity: 1,
                    ease: "power4.out"
                }, "-=0.3");
            } else {
                t2.to(portf_cursor_6, {
                    opacity: 0,
                    ease: "power4.out"
                }, "-=0.3");
            }
            // Portfolio Cursor
            if (target.closest(".portfolio__item-6")) {
                tl.to(portf_cursor_6, {
                    opacity: 1,
                    ease: "power4.out"
                }, "-=0.3");
            } else {
                t2.to(portf_cursor_6, {
                    opacity: 0,
                    ease: "power4.out"
                }, "-=0.3");
            }

            // featured  Cursor
            if (target.closest(".portfolio__slider-3")) {
                tl.to(featured_cursor, {
                    opacity: 1,
                    ease: "power4.out"
                }, "-=0.3");
            } else {
                t2.to(featured_cursor, {
                    opacity: 0,
                    ease: "power4.out"
                }, "-=0.3");
            }

            // featured  Cursor
            if (target.closest(".portfolio__area-5")) {
                tl.to(portfolio4_cursor, {
                    opacity: 1,
                    ease: "power4.out"
                }, "-=0.3");
            } else {
                t2.to(portfolio4_cursor, {
                    opacity: 0,
                    ease: "power4.out"
                }, "-=0.3");
            }

            // Main Cursor Moving 
            tl.to(".cursor1", {
                ease: "power2.out"
            })
                .to(".cursor2", {
                    ease: "power2.out"
                }, "-=0.4")

        } catch (error) {
            console.log(error)
        }

    }
    document.addEventListener("mousemove", mousemoveHandler);
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 02. Offcanvas 
    $("#open_offcanvas").click(function () {
        $('.offcanvas__area').css('opacity', '1');
        $('.offcanvas__area').css('visibility', 'visible');
    });
    $("#close_offcanvas").click(function () {
        $('.offcanvas__area').css('opacity', '0');
        $('.offcanvas__area').css('visibility', 'hidden');
    });
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 03. Scroll Top
    let scroll_top = document.getElementById("scroll_top");
    if (scroll_top) {
        window.onscroll = function () {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                scroll_top.style.display = "block";
            } else {
                scroll_top.style.display = "none";
            }
        };

        scroll_top.addEventListener('click', function () {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });
    }

    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 0);
        }
    });

    ////////////////////////////////////////////////



    /////////////////////////////////////////////////////
    // 04. Modals
    var testimonial = document.querySelector(".testimonial__area");
    if (testimonial) {

        // Testimonial Modal 1
        var modal_testimonial = document.querySelector("#modal_testimonial");
        var modal_trigger = document.querySelector(".modal-trigger");
        var modal_close = document.querySelector("#modal_close");

        modal_trigger.addEventListener("click", function () {
            modal_testimonial.classList.add("modal-show");
        });
        modal_close.addEventListener("click", function () {
            modal_testimonial.classList.remove("modal-show");
        });

        // Testimonial Modal 2
        var modal_testimonial_2 = document.querySelector("#modal_testimonial2");
        var modal_trigger_2 = document.querySelector(".modal-trigger-2");
        var modal_close_2 = document.querySelector("#modal_close2");

        modal_trigger_2.addEventListener("click", function () {
            modal_testimonial_2.classList.add("modal-show");
        });
        modal_close_2.addEventListener("click", function () {
            modal_testimonial_2.classList.remove("modal-show");
        });

        // Testimonial Modal 3
        var modal_testimonial_3 = document.querySelector("#modal_testimonial3");
        var modal_trigger_3 = document.querySelector(".modal-trigger-3");
        var modal_close_3 = document.querySelector("#modal_close3");

        modal_trigger_3.addEventListener("click", function () {
            modal_testimonial_3.classList.add("modal-show");
        });
        modal_close_3.addEventListener("click", function () {
            modal_testimonial_3.classList.remove("modal-show");
        });
    }

    var job_apply = document.querySelector(".job__apply");
    if (job_apply) {

        // application Modal 1
        var modal_application = document.querySelector("#application_form");
        var apply_trigger = document.querySelector(".job__apply");
        var apply_close = document.querySelector("#apply_close");

        apply_trigger.addEventListener("click", function () {
            modal_application.classList.add("modal-show");
        });
        apply_close.addEventListener("click", function () {
            modal_application.classList.remove("modal-show");
        });

        // application Modal 2
        var modal_application_2 = document.querySelector("#application_form2");
        var apply_trigger_2 = document.querySelector(".apply-trigger");
        var apply_close_2 = document.querySelector("#apply_close2");
        var back_form1 = document.querySelector("#back_form1");

        apply_trigger_2.addEventListener("click", function () {
            modal_application_2.classList.add("modal-show");
        });
        apply_close_2.addEventListener("click", function () {
            modal_application_2.classList.remove("modal-show");
            modal_application.classList.remove("modal-show");
        });
        back_form1.addEventListener("click", function () {
            modal_application_2.classList.remove("modal-show");
        });
    }
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 05. Header 1
    if (device_width < 1365) {
        let header_bg = document.querySelector(".header__area");

        if (header_bg) {
            window.onscroll = function () {
                if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                    header_bg.style.background = "#121212";
                    header_bg.style.setProperty('mix-blend-mode', 'unset');
                    if (scroll_top) {
                        scroll_top.style.display = "block";
                    }
                } else {
                    header_bg.style.background = "transparent";
                    header_bg.style.setProperty('mix-blend-mode', 'exclusion');
                    if (scroll_top) {
                        scroll_top.style.display = "none";
                    }
                }
            };
        }
    }
    /////////////////////////////////////////////////////



    /////////////////////////////////////////////////////
    // 06. Header 2
    let header_bg_2 = document.querySelector(".header__area-2");
    if (header_bg_2) {
        window.onscroll = function () {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                header_bg_2.style.background = "#121212";
                header_bg_2.classList.add("sticky-2");
                if (scroll_top) {
                    scroll_top.style.display = "block";
                }
            } else {
                header_bg_2.style.background = "transparent";
                header_bg_2.classList.remove("sticky-2");
                if (scroll_top) {
                    scroll_top.style.display = "none";
                }
            }
        };
    }
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 07. Header 3
    let header_bg_3 = document.querySelector(".header__area-3");
    if (header_bg_3) {
        window.onscroll = function () {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                header_bg_3.classList.add("sticky-3");
                if (scroll_top) {
                    scroll_top.style.display = "block";
                }
            } else {
                header_bg_3.classList.remove("sticky-3");
                if (scroll_top) {
                    scroll_top.style.display = "none";
                }
            }
        };
    }
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 08. Header 5
    let header_bg_5 = document.querySelector(".header__area-5");
    if (header_bg_5) {
        window.onscroll = function () {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                header_bg_5.classList.add("sticky-5");
                if (scroll_top) {
                    scroll_top.style.display = "block";
                }
            } else {
                header_bg_5.classList.remove("sticky-5");
                if (scroll_top) {
                    scroll_top.style.display = "none";
                }
            }
        };
    }
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 09. Header Search
    let header_search = document.querySelector(".header__search");
    let search_icon = document.querySelector("#search_icon");
    let search_close = document.querySelector("#search_close");
    if (header_search) {
        search_icon.addEventListener("click", function () {
            header_search.classList.add('open-search');
            search_icon.style.display = 'none';
            search_close.style.display = 'block';
        });

        search_close.addEventListener("click", function () {
            header_search.classList.remove('open-search');
            search_icon.style.display = 'block';
            search_close.style.display = 'none';
        });
    }
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 10. Roll Slider
    var roll_slider = new Swiper(".roll__slider", {
        loop: true,
        freemode: true,
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true,
        allowTouchMove: false,
        speed: 2000,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 3,
            },
            800: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
            1300: {
                slidesPerView: 5,
            },
            1900: {
                slidesPerView: 8,
            },
        },
    });
    // 10. Roll Slider
    var roll_slider = new Swiper(".roll__slider2", {
        loop: true,
        freemode: true,
        slidesPerView: 1,
        spaceBetween: 60,
        centeredSlides: false,
        allowTouchMove: false,
        speed: 10000,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
        },
    });
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 11. Workflow Slider
    var workflow_slider = new Swiper(".workflow__slider", {
        loop: true,
        freemode: true,
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 2000,
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    });
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 12. Team Slider
    var team_slider = new Swiper(".team__slider", {
        spaceBetween: 30,
        loop: true,
        freemode: true,
        slidesPerView: 1,
        speed: 2000,
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            1000: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        }
    });
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 13. Testimonial Slider
    var testimonial_slider = new Swiper(".testimonial__slider", {
        spaceBetween: 0,
        loop: true,
        freemode: true,
        slidesPerView: 1,
        speed: 2000,

        navigation: {
            nextEl: ".next-button",
            prevEl: ".prev-button",
        },
    });
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 14. Testimonial Slider 3
    var testimonial_slider_3 = new Swiper(".testimonial__slider-3", {
        spaceBetween: 0,
        loop: true,
        freemode: true,
        slidesPerView: 1,
        speed: 2000,

        allowSlideNext: false,
        allowSlidePrev: false,

        navigation: {
            nextEl: ".next-button",
            prevEl: ".prev-button",
        },
    });
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 15. Portfolio Slider 
    var total_portfolio_item = $('.portfolio__item-6').length;
    if (total_portfolio_item) {
        $('.portfolio__total').html(total_portfolio_item);
    }

    $(document).on('scroll', function () {
        $('.portfolio__item-6').each(function () {
            if ($(this).position().top <= $(document).scrollTop() && ($(this).position().top + $(this).outerHeight()) > $(document).scrollTop()) {

                var item_num = $(this).data('portfitem');
                $('.portfolio__current').html(item_num);
                $(this).addClass('active').siblings().removeClass('active');
            }
        });
    });
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 16. Service 1
    $('.service__list a:nth-child(1)').addClass('active').siblings().removeClass('acitve');

    $('.service__item').on('mousemove', function (e) {
        var service_id = $(this).data("service");

        $('.service__img.img-' + service_id).addClass('active').siblings().removeClass('active');
        $('.shape-box-' + service_id).addClass('current').siblings().removeClass('current');

        if (service_id != 1) {
            $('.service__list a:nth-child(1)').removeClass('active');
        }
    });


    $('.service__item').on('mouseout', function (e) {
        var service_id = $(this).data("service");

        $('.service__list a:nth-child(' + service_id + ')').addClass('active').siblings().removeClass('active');
    });
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 17. Counter
    const about_counter = window.counterUp.default
    const about_cb = entries => {

        entries.forEach(entry => {
            const el = entry.target
            if (entry.isIntersecting && !el.classList.contains('is-visible')) {
                about_counter(el, {
                    duration: 1000,
                    delay: 16,
                })
                el.classList.add('is-visible')
            }
        })
    }

    const IO = new IntersectionObserver(about_cb, {
        threshold: 1
    })

    const els = document.querySelectorAll('.counter__number');
    els.forEach((el) => {
        IO.observe(el)
    });
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 18. Button Hover Animation
    $('.btn-hover').on('mouseenter', function (e) {
        var x = e.pageX - $(this).offset().left;
        var y = e.pageY - $(this).offset().top;

        $(this).find('span').css({
            top: y,
            left: x
        });
    });

    $('.btn-hover').on('mouseout', function (e) {
        var x = e.pageX - $(this).offset().left;
        var y = e.pageY - $(this).offset().top;

        $(this).find('span').css({
            top: y,
            left: x
        });
    });
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 19. Button Move Animation
    const all_btns = gsap.utils.toArray(".btn_wrapper");
    if (all_btns.length > 0) {
        var all_btn = gsap.utils.toArray(".btn_wrapper");
    } else {
        var all_btn = gsap.utils.toArray("#btn_wrapper");
    }
    const all_btn_cirlce = gsap.utils.toArray(".btn-item");
    all_btn.forEach((btn, i) => {
        $(btn).mousemove(function (e) {
            callParallax(e);
        });

        function callParallax(e) {
            parallaxIt(e, all_btn_cirlce[i], 80);
        }

        function parallaxIt(e, target, movement) {
            var $this = $(btn);
            var relX = e.pageX - $this.offset().left;
            var relY = e.pageY - $this.offset().top;

            gsap.to(target, 0.5, {
                x: ((relX - $this.width() / 2) / $this.width()) * movement,
                y: ((relY - $this.height() / 2) / $this.height()) * movement,
                ease: Power2.easeOut,
            });
        }
        $(btn).mouseleave(function (e) {
            gsap.to(all_btn_cirlce[i], 0.5, {
                x: 0,
                y: 0,
                ease: Power2.easeOut,
            });
        });
    });
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 20. Register GSAP
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, TweenMax, ScrollToPlugin);
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 21. Config GSAP
    gsap.config({
        nullTargetWarn: false,
    });
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 22. Service 6
    if (device_width > 1200) {
        gsap.to(".service__list-6", {
            scrollTrigger: {
                trigger: ".service__area-6",
                pin: ".service__list-6",
                pinSpacing: true,
                start: "top top",
                end: "bottom bottom"
            }
        })

        gsap.to(".service__image-wrap", {
            scrollTrigger: {
                trigger: ".service__area-6",
                pin: ".mid-content",
                pinSpacing: true,
                start: "top top",
                end: "bottom bottom",
                markers: false
            }
        })

        let service_images = gsap.utils.toArray(".service__image")
        let service_imagess = gsap.utils.toArray(".service__image img")
        let service_items = gsap.utils.toArray(".service__item-6")

        if (service_items) {
            service_items.forEach((image, i) => {
                console.log(service_images[i].img)
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: image,
                        scrub: 1,
                        start: "top top-=600",
                        markers: false,
                    }
                });
                tl.to(service_images[i], {
                    zIndex: "1",
                })
                tl.to(service_imagess[i], {
                    opacity: 0,
                    duration: 1,
                    scale: 1.2,
                    ease: "power4.out"
                }, "-=1")
            })
        }

        let navItems = gsap.utils.toArray(".service__list-6 li a")
        if (navItems) {
            navItems.forEach((nav) => {
                nav.addEventListener("click", (e) => {
                    e.preventDefault();
                    const ids = nav.getAttribute("href")
                    gsap.to(window, {
                        duration: 0.5,
                        scrollTo: ids,
                        ease: "power4.out"
                    });
                })
            })
        }

        // Active Nav
        $(document).on('scroll', function () {
            $('.service__item-6').each(function () {
                if ($(this).position().top <= $(document).scrollTop() && ($(this).position().top + $(this).outerHeight()) > $(document).scrollTop()) {
                    var sec_id = $(this).data('secid');

                    $('.service__list-6 li:nth-child(' + sec_id + ')').addClass('active').siblings().removeClass('active');
                }
            });
        });
    }
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 23. Choose Section
    if (device_width > 1200) {

        var workflow_section_3 = document.querySelector('.workflow__wrapper-3');
        if (workflow_section_3) {

            let duration = 1,
                sections = gsap.utils.toArray(".wf_panel"),
                sectionIncrement = duration / (sections.length - 1),
                tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".workflow__wrapper-3",
                        pin: true,
                        scrub: 1,
                        start: "top top",
                        end: "+=5000"
                    }
                });

            tl.to(sections, {
                xPercent: -100 * (sections.length - 1),
                duration: duration,
                ease: "none"
            });

            sections.forEach((section, index) => {
                let tween = gsap.from(section, {
                    opacity: 0,
                    scale: 0.6,
                    duration: 0.5,
                    force3D: true,
                    paused: true
                });
                addSectionCallbacks(tl, {
                    start: sectionIncrement * (index - 0.99),
                    end: sectionIncrement * (index + 0.99),
                    onEnter: () => tween.play(),
                    onLeave: () => tween.reverse(),
                    onEnterBack: () => tween.play(),
                    onLeaveBack: () => tween.reverse()
                });
                index || tween.progress(1);
            });

            function addSectionCallbacks(timeline, {
                start,
                end,
                param,
                onEnter,
                onLeave,
                onEnterBack,
                onLeaveBack
            }) {
                let trackDirection = animation => {
                    let onUpdate = animation.eventCallback("onUpdate"),
                        prevTime = animation.time();
                    animation.direction = animation.reversed() ? -1 : 1;
                    animation.eventCallback("onUpdate", () => {
                        let time = animation.time();
                        if (prevTime !== time) {
                            animation.direction = time < prevTime ? -1 : 1;
                            prevTime = time;
                        }
                        onUpdate && onUpdate.call(animation);
                    });
                },
                    empty = v => v;
                timeline.direction || trackDirection(timeline);
                start >= 0 && timeline.add(() => ((timeline.direction < 0 ? onLeaveBack : onEnter) || empty)(param), start);
                end <= timeline.duration() && timeline.add(() => ((timeline.direction < 0 ? onEnterBack : onLeave) || empty)(param), end);
            }
        }
    }
    /////////////////////////////////////////////////////


    if (device_width > 100) {

        /////////////////////////////////////////////////////
        // 24. Portfolio 5 Animation 
        let skewSetter = gsap.quickTo(".portfolio__item-5 img", "skewY"),
            clamp = gsap.utils.clamp(-15, 15);
        const smoother = ScrollSmoother.create({
            smooth: 1.35,
            effects: device_width < 1025 ? false : true,
            smoothTouch: false,
            normalizeScroll: false,
            ignoreMobileResize: true,
            onUpdate: self => skewSetter(clamp(self.getVelocity() / -80)),
            onStop: () => skewSetter(0)
        });

        /////////////////////////////////////////////////////


        ///////////////////////////////////////////////////// 
        // 25. Title Animation
        let splitTitleLines = gsap.utils.toArray(".title-anim");

        splitTitleLines.forEach(splitTextLine => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: splitTextLine,
                    start: 'top 90%',
                    end: 'bottom 60%',
                    scrub: false,
                    markers: false,
                    toggleActions: 'play none none none'
                }
            });

            const itemSplitted = new SplitText(splitTextLine, {
                type: "words, lines"
            });
            gsap.set(splitTextLine, {
                perspective: 400
            });
            itemSplitted.split({
                type: "lines"
            })
            tl.from(itemSplitted.lines, {
                duration: 1,
                delay: 0.3,
                opacity: 0,
                rotationX: -80,
                force3D: true,
                transformOrigin: "top center -50",
                stagger: 0.1
            });
        });
        /////////////////////////////////////////////////////


        /////////////////////////////////////////////////////
        // 26. Title Animation Top

        /////////////////////////////////////////////////////


        /////////////////////////////////////////////////////
        // 27. Text Animation
        let splitTextLines = gsap.utils.toArray(".text-anim p");

        splitTextLines.forEach(splitTextLine => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: splitTextLine,
                    start: 'top 90%',
                    duration: 2,
                    end: 'bottom 60%',
                    scrub: false,
                    markers: false,
                    toggleActions: 'play none none none'
                }
            });

            const itemSplitted = new SplitText(splitTextLine, {
                type: "lines"
            });
            gsap.set(splitTextLine, {
                perspective: 400
            });
            itemSplitted.split({
                type: "lines"
            })
            tl.from(itemSplitted.lines, {
                duration: 1,
                delay: 0.5,
                opacity: 0,
                rotationX: -80,
                force3D: true,
                transformOrigin: "top center -50",
                stagger: 0.1
            });
        });
        /////////////////////////////////////////////////////


        /////////////////////////////////////////////////////
        // 28. Text Animation Top
        let text_anim_top = gsap.utils.toArray(".text-anim-top");

        text_anim_top.forEach(splitTextLine2 => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: splitTextLine2,
                    start: 'top 100%',
                    toggleActions: 'play none play reset'
                }
            });

            const itemSplitted = new SplitText(splitTextLine2, {
                type: 'words'
            }),
                textNumWords = itemSplitted.words.length;

            gsap.delayedCall(0.05, function () {
                for (var i = 0; i < textNumWords; i++) {
                    tl.from(itemSplitted.words[i], 1, {
                        force3D: true,
                        scale: Math.random() > 0.5 ? 0 : 2,
                        opacity: 0
                    }, Math.random());
                }
            });
        });
        /////////////////////////////////////////////////////
    }



    jQuery(document).ready(function () {
        /////////////////////////////////////////////////////
        // 29. Offcanvas Menu
        $('.offcanvas__menu').meanmenu({
            meanScreenWidth: "5000",
            meanMenuContainer: '.offcanvas__menu-wrapper',
            meanMenuCloseSize: '36px',
        });
        /////////////////////////////////////////////////////
    });


    /////////////////////////////////////////////////////
    // 30. Service 3
    const serviceImgItem = document.querySelectorAll(".service__item-3");

    function followImageCursor(event, serviceImgItem) {
        const contentBox = serviceImgItem.getBoundingClientRect();
        const dx = event.clientX - contentBox.x;
        const dy = event.clientY - contentBox.y;
        serviceImgItem.children[3].style.transform = `translate(${dx}px, ${dy}px)`;
    }

    serviceImgItem.forEach((item, i) => {
        item.addEventListener("mousemove", (event) => {
            setInterval(followImageCursor(event, item), 1000);
        });
    });
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 31. Folks animation
    let endTl = gsap.timeline({
        repeat: -1,
        delay: 0.5,
        scrollTrigger: {
            trigger: '.end',
          // start: 'bottom 90%-=50px'
        }
    });
    gsap.set('.end', {
        opacity: 0
    });
    gsap.to('.end', {
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.end',
            // start: 'bottom 90%-=50px',
            once: true
        }
    });
    let mySplitText = new SplitText(".end", {
        type: "words,chars"
    });
    let chars = mySplitText.chars;
    let endGradient = chroma.scale(['#F9D371', '#F47340', '#EF2F88', '#8843F2']);
    endTl.to(chars, {
        duration: 0.5,
        scaleY: 0.6,
        ease: "power3.out",
        stagger: 0.04,
        transformOrigin: 'center bottom'
    });
    endTl.to(chars, {
        yPercent: -20,
        ease: "elastic",
        stagger: 0.03,
        duration: 0.8
    }, 0.5);
    endTl.to(chars, {
        scaleY: 1,
        ease: "elastic.out(2.5, 0.2)",
        stagger: 0.03,
        duration: 1.5
    }, 0.5);
    endTl.to(chars, {
        color: (i, el, arr) => {
            return endGradient(i / arr.length).hex();
        },
        ease: "power2.out",
        stagger: 0.03,
        duration: 0.3
    }, 0.5);
    endTl.to(chars, {
        yPercent: 0,
        ease: "back",
        stagger: 0.03,
        duration: 0.8
    }, 0.7);
    endTl.to(chars, {
        color: '#c9f31d',
        duration: 1.4,
        stagger: 0.05
    });
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 32. Menu Text Animation
    document.querySelectorAll('.menu-anim > li > a').forEach(button => button.innerHTML = '<div class="menu-text"><span>' + button.textContent.split('').join('</span><span>') + '</span></div>');

    setTimeout(() => {
        var menu_text = document.querySelectorAll(".menu-text span")
        menu_text.forEach((item) => {
            var font_sizes = window.getComputedStyle(item, null);
            let font_size = font_sizes.getPropertyValue("font-size");
            let size_in_number = parseInt(font_size.replace("px", ""));
            let new_size = parseInt(size_in_number / 3)
            new_size = new_size + "px"
            if (item.innerHTML == " ") {
                item.style.width = new_size
            }
        })
    }, 1000)
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 33. Main Portfolio Sticky
    ScrollTrigger.create({
        trigger: ".portfolio__wrapper-6",
        start: "top top",
        end: "bottom bottom",
        pin: ".portfolio__title-wrap-6",
        pinSpacing: false,
    });
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 34. Hero 3 Animation
    const radio_buttons = document.querySelector("#video_check");
    const video_start = document.querySelector(".hero__area-3");

    if (radio_buttons) {
        radio_buttons.addEventListener('click', function () {
            let video = document.querySelector(".video-title")
            let videoClose = document.querySelector(".video-title.close-video-title")
            if (radio_buttons.checked) {
                document.querySelector(".wrapper").style.zIndex = "1";
                video.style.display = "none";
                videoClose.style.display = "block";
                video_start.classList.add('start-video');
                document.querySelector('.header__area-3').classList.add('bg-white');

            } else {
                document.querySelector(".wrapper").style.zIndex = "999";
                video.style.display = "block";
                videoClose.style.display = "none";
                video_start.classList.remove('start-video');
                document.querySelector('.header__area-3').classList.remove('bg-white');
            }
        });
    }
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 35. Home Page 2 Animations
    let tHero = gsap.timeline()

    let heading_title = new SplitText(".sec-title-3", {
        type: "chars"
    })
    let heading_char = heading_title.chars

    tHero.from(heading_char, {
        rotate: 20,
        ease: "back.out",
        opacity: 0,
        duration: 2,
        stagger: 0.1
    })

    tHero.from(".hero2-shape img", {
        xPercent: -100,
        duration: 1,
    }, '-=6.5')

    tHero.from(".hero__text-2 p", {
        opacity: 0,
        x: -30,
        duration: 1.5
    }, '-=5')

    var hero_bts = document.querySelector(".hero__text-2 .btn_wrapper")
    if (hero_bts) {
        var hero_btn = document.querySelector(".hero__text-2 .btn_wrapper")
    } else {
        var hero_btn = document.querySelector(".hero__text-2 #btn_wrapper")
    }
    console.log(hero_btn)
    tHero.from(hero_btn, {
        opacity: 0,
        y: -70,
        ease: "bounce",
        duration: 1.5
    }, '-=5')

    // All Buttons 
    let arr1 = gsap.utils.toArray("#btn_wrapper")
    let arr2 = gsap.utils.toArray(".btn_wrapper")
    const all_buttons = arr1.concat(arr2);

    all_buttons.forEach((btn) => {
        if (!(btn.classList.contains("hero__button"))) {
            gsap.from(btn, {
                scrollTrigger: {
                    trigger: btn,
                    start: "top center+=150",
                    markers: false,
                },
                opacity: 0,
                y: -70,
                ease: "bounce",
                duration: 1.5,
            })
        }
    })

    let imageTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".about__img-2",
            start: "top bottom",
            markers: false,
            scrub: 1,
            end: "bottom center"
        }
    })

    // Image pin 
    imageTl.to(".about__img-2 img", {
        scale: 1.15,
        duration: 1,
    })
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 36. Award Animation
    let award_timeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".award__text",
            start: "top center+=150",
        }
    })

    gsap.set(".award__text", {
        opacity: 0,
        y: -500,
    })
    award_timeline.to(".award__text", {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "bounce",
    })

    gsap.set(".award__text-2", {
        opacity: 0,
        y: -500
    })

    award_timeline.to(".award__text-2", {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "bounce"
    }, "-=1.5")

    award_timeline.to(".award__text", {
        x: -100,
        duration: 2,
    }, "-=1")
    award_timeline.to(".award__text-2", {
        x: -100,
        duration: 2,
    }, "-=1")
    award_timeline.to(".award__text", {
        x: 0,
        duration: 2,
    }, "-=1")
    award_timeline.to(".award__text-2", {
        x: 0,
        duration: 2,
    }, "-=1")
    /////////////////////////////////////////////////////



    /////////////////////////////////////////////////////
    // 38. Portfolio Animation
    if (device_width > 767) {
        let portfolioline = gsap.timeline({
            scrollTrigger: {
                trigger: ".portfolio__area",
                start: "top center-=200",
                pin: ".portfolio__text",
                end: "bottom bottom+=80",
                markers: false,
                pinSpacing: false,
                scrub: 1,
            }
        })

        portfolioline.to(".portfolio__text", {
            scale: 3,
            duration: 1
        })
        portfolioline.to(".portfolio__text", {
            scale: 3,
            duration: 1
        })
        portfolioline.to(".portfolio__text", {
            scale: 1,
            duration: 1
        }, "+=2")
    }


    let portfolio_lists = gsap.utils.toArray(".portfolio__item")
    portfolio_lists.forEach((portfolio, i) => {
        gsap.set(portfolio, {
            opacity: 0.7
        })
        let t1 = gsap.timeline()

        t1.set(portfolio, {
            position: "relative",
        })
        t1.to(portfolio, {
            scrollTrigger: {
                trigger: portfolio,
                scrub: 2,
                duration: 1.5,
                start: "top bottom+=100",
                end: "bottom center",
                markers: false
            },
            scale: 1,
            opacity: 1,
            rotateX: 0,
        })
    });

    gsap.to(".bg_image img", {
        xPercent: -18,
        scrollTrigger: {
            trigger: ".portfolio__area",
            start: "top top",
            end: "bottom center",
            pin: ".bg_image",
            scrub: 3
        }
    });
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 39. Portfolio Slider 2
    var portfolio_slider = new Swiper(".portfolio__slider-2", {
        slidesPerView: 1,
        spaceBetween: 0,
        effect: "fade",
        speed: 1500,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (i, className) {
                return `
        <button class="${className}">
          <svg class="circle-progress"><circle class="circle-origin" r="24.5" cx="25" cy="25"></circle></svg><span></span>
        </button>
      `;
            }
        }
    });

    var portfolio_project_thumbs = new Swiper(".portfolio__project-thumbs", {
        loop: true,
        spaceBetween: 0,
        slidesPerView: 1,
        freeMode: true,
        watchSlidesProgress: true,
        allowTouchMove: false,
    });
    var portfolio_project = new Swiper(".portfolio__project-slider", {
        loop: true,
        spaceBetween: 10,
        navigation: {
            nextEl: ".pp-next",
            prevEl: ".pp-prev",
        },
        thumbs: {
            swiper: portfolio_project_thumbs,
        },
    });
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 40. Portfolio Slider 3
    var portfolio_slider_3 = new Swiper(".portfolio__slider-3", {
        speed: 1500,
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".pp-next",
            prevEl: ".pp-prev",
        },
    });
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 41. Image Moving Animations

    // Service Page 
    let image_list = [".solution__wrapper img"]
    imageMoving(".solution__area", image_list)

    // Home Page Client
    imageMoving(".testimonial__area", ".testimonial__img img")

    // Testimonial 3
    imageMoving(".testimonial__area-3", ".testimonial__area-3 img")

    // Image Moving with Cursor Function
    function imageMoving(wrapper, image_list) {
        let container = document.querySelector(wrapper)
        try {
            if (container) {
                container.addEventListener("mousemove", (e) => {

                    var x = e.clientX
                    var y = e.clientY
                    let viewportWidth = window.innerWidth;
                    let viewportHeight = window.innerHeight;
                    let center = viewportWidth / 2
                    let centerHeight = innerHeight / 2

                    if (x > center) {
                        gsap.to(image_list, {
                            x: 15,
                            duration: 5,
                            ease: "power4.out"
                        })
                    } else {
                        gsap.to(image_list, {
                            x: -15,
                            duration: 5,
                            ease: "power4.out"
                        })
                    }
                    if (y > centerHeight) {
                        gsap.to(image_list, {
                            y: 15,
                            duration: 5,
                            ease: "power4.out"
                        })
                    } else {
                        gsap.to(image_list, {
                            y: -15,
                            duration: 5,
                            ease: "power4.out"
                        })
                    }
                });
            }
        } catch (err) {
            console.log(err)
        }
    }
    /////////////////////////////////////////////////////




    imageMovingPortfolio(".portfolio-section", ".portfolio__hero img")

    // Image Moving with Cursor Function
    function imageMovingPortfolio(wrapper, image_list) {
        let container = document.querySelector(wrapper)
        try {
            if (container) {
                container.addEventListener("mousemove", (e) => {

                    var x = e.clientX
                    var y = e.clientY
                    let viewportWidth = window.innerWidth;
                    let viewportHeight = window.innerHeight;
                    let center = viewportWidth / 2
                    let centerHeight = innerHeight / 2

                    if (x > center) {
                        gsap.to(image_list, {
                            x: 60,
                            duration: 5,
                            ease: "power4.out"
                        })
                    } else {
                        gsap.to(image_list, {
                            x: -60,
                            duration: 5,
                            ease: "power4.out"
                        })
                    }
                    if (y > centerHeight) {
                        gsap.to(image_list, {
                            scale: 1.15,
                            duration: 5,
                            ease: "power4.out"
                        })
                    } else {
                        gsap.to(image_list, {
                            scale: 1,
                            duration: 5,
                            ease: "power4.out"
                        })
                    }
                });
            }
        } catch (err) {
            console.log(err)
        }
    }



    /////////////////////////////////////////////////////
    // 42. Counter Animation
    gsap.set(".counter_animation .counter__anim", {
        y: -100,
        opacity: 0,
    })
    if (device_width < 1023) {
        const counterArray = gsap.utils.toArray(".counter_animation .counter__anim")
        counterArray.forEach((item, i) => {
            let counterTl = gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "top center+=200",
                }
            })
            counterTl.to(item, {
                y: 0,
                opacity: 1,
                ease: "bounce",
                duration: 1.5,
            })
        })
    } else {

        gsap.to(".counter_animation .counter__anim", {
            scrollTrigger: {
                trigger: ".counter_animation",
                start: "top center+=300",
            },
            y: 0,
            opacity: 1,
            ease: "bounce",
            duration: 1.5,
            stagger: {
                each: 0.3,
            }
        })
    }
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 43. Workflow Slider Animation | animation__fade
    gsap.set(".fade_left", {
        x: -20,
        opacity: 0,
    })
    gsap.to(".fade_left", {
        scrollTrigger: {
            trigger: ".fade_left",
            start: "top center+=300",
        },
        x: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1,
        stagger: {
            each: 0.2,
        }
    })
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 44. Workflow Slider Animation 2 |  fade_bottom
    gsap.set(".fade_bottom", {
        y: 30,
        opacity: 0
    });

    if (device_width < 1023) {
        const fadeArray = gsap.utils.toArray(".fade_bottom")
        fadeArray.forEach((item, i) => {
            let fadeTl = gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "top center+=200",
                }
            })
            fadeTl.to(item, {
                y: 0,
                opacity: 1,
                ease: "power2.out",
                duration: 1.5,
            })
        })
    } else {
        gsap.to(".fade_bottom", {
            scrollTrigger: {
                trigger: ".fade_bottom",
                start: "top center+=300",
                markers: false
            },
            y: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 1,
            stagger: {
                each: 0.2
            }
        })
    }
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 45. Blog animation 
    gsap.set(".blog__animation .blog__item", {
        x: 50,
        opacity: 0
    });

    if (device_width < 1023) {
        const blogList = gsap.utils.toArray(".blog__animation .blog__item")
        blogList.forEach((item, i) => {
            let blogTl = gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "top center+=200",
                }
            })
            blogTl.to(item, {
                x: 0,
                opacity: 1,
                ease: "power2.out",
                duration: 1.5,
            })
        })
    } else {
        gsap.to(".blog__animation .blog__item", {
            scrollTrigger: {
                trigger: ".blog__animation .blog__item",
                start: "top center+=300",
                markers: false
            },
            x: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 2,
            stagger: {
                each: 0.3
            }
        })
    }
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 46. Blog animation 2
    gsap.set(".blog__animation .blog__item-2", {
        x: 50,
        opacity: 0
    });

    if (device_width < 1023) {
        const blogList = gsap.utils.toArray(".blog__animation .blog__item-2")
        blogList.forEach((item, i) => {
            let blogTl = gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "top center+=200",
                }
            })
            blogTl.to(item, {
                x: 0,
                opacity: 1,
                ease: "power2.out",
                duration: 1.5,
            })
        })
    } else {
        gsap.to(".blog__animation .blog__item-2", {
            scrollTrigger: {
                trigger: ".blog__animation .blog__item-2",
                start: "top center+=300",
                markers: false
            },
            x: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 2,
            stagger: {
                each: 0.3
            }
        })
    }
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 47. Blog Animation 3
    gsap.set(".blog__animation .blog__item-3", {
        x: 50,
        opacity: 0
    });

    if (device_width < 1023) {
        const blogList = gsap.utils.toArray(".blog__animation .blog__item-3")
        blogList.forEach((item, i) => {
            let blogTl = gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "top center+=200",
                }
            })
            blogTl.to(item, {
                x: 0,
                opacity: 1,
                ease: "power2.out",
                duration: 1.5,
            })
        })
    } else {
        gsap.to(".blog__animation .blog__item-3", {
            scrollTrigger: {
                trigger: ".blog__animation .blog__item-3",
                start: "top center+=300",
                markers: false
            },
            x: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 2,
            stagger: {
                each: 0.3
            }
        })
    }
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 48. Zoom In Animation
    gsap.set(".zoom_in", {
        opacity: 0,
        y: 30,
        scale: 0.5,
    });
    gsap.to(".zoom_in", {
        scrollTrigger: {
            trigger: ".zoom_in",
            start: "top center+=200",
            markers: false
        },
        y: 0,
        opacity: 1,
        scale: 1,
        ease: "power2.out",
        duration: 1,
        stagger: {
            each: 0.2
        }
    })
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 49. Service 3 Animation 
    let service__items_3 = gsap.utils.toArray(".service_animation")
    let service__items_heading = gsap.utils.toArray(".service_animation h3")
    let service__items_content = gsap.utils.toArray(".service_animation .service__content-3")

    service__items_3.forEach((service_item, i) => {
        gsap.set([service__items_heading[i], service__items_content[i]], {
            x: -30,
            opacity: 0,
        })

        let service3_timeline = gsap.timeline({
            scrollTrigger: {
                trigger: service_item,
                start: "top center+=200",
                markers: false
            }
        })

        service3_timeline.to(service__items_heading[i], {
            x: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 1.5,
            stagger: {
                each: 0.2
            }
        })
        service3_timeline.to(service__items_content[i], {
            x: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 1.5,
            stagger: {
                each: 0.2
            }
        }, "-=1")
    })
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////  
    // 50. Testimonial 2 Animation 
    gsap.set(".testimonial__inner-2", {
        opacity: 0,
        x: -100
    });

    gsap.to(".testimonial__inner-2", {
        scrollTrigger: {
            trigger: ".testimonial__slider-wrapper-2",
            start: "top center+=100",
            end: "bottom bottom",
        },
        opacity: 1,
        x: 0,
        duration: 1
    })
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 51. Testimonial 3 Image Animation
    gsap.set(".animation_image_zoom img", {
        opacity: 0,
        scale: 0.5
    });

    gsap.to(".animation_image_zoom img", {
        scrollTrigger: {
            trigger: ".testimonial__area-3",
            start: "top center+=200",
            markers: false
        },
        opacity: 1,
        scale: 1,
        x: 20,
        ease: "power2.out",
        duration: 2.5,
        stagger: {
            each: 0.3
        }
    })
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 52. Pricing Table Animation 
    let pricing_timeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".price__table",
            start: "top center",
        }
    })

    gsap.set(".animation_from_bottom", {
        yPercent: 50
    })

    pricing_timeline.to(".animation_from_bottom", {
        yPercent: 0,
        duration: 2,
        ease: "power4.out",
    })

    gsap.set(".animation_from_top", {
        yPercent: -50,
        opacity: 0
    })
    pricing_timeline.to(".animation_from_top", {
        yPercent: 0,
        duration: 2,
        opacity: 1,
        ease: "power4.out",
    }, "-=2")
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 53. Service 2 Animation 
    let animation__services2 = gsap.utils.toArray(".animation__service-2 .service__item-2")
    gsap.set(animation__services2, {
        opacity: 0,
        x: -30,
    })

    if (animation__services2) {
        if (device_width < 1023) {
            animation__services2.forEach((item, i) => {
                gsap.to(item, {
                    scrollTrigger: {
                        trigger: item,
                        start: "top center+=200",
                        markers: false
                    },
                    opacity: 1,
                    x: 0,
                    ease: "power2.out",
                    duration: 2,
                    stagger: {
                        each: 0.4
                    }
                })
            })
        } else {
            gsap.to(".animation__service-2 .service__item-2", {
                scrollTrigger: {
                    trigger: ".animation__service-2",
                    start: "top center+=200",
                    markers: false
                },
                opacity: 1,
                x: 0,
                ease: "power2.out",
                duration: 2,
                stagger: {
                    each: 0.4
                }
            })
        }
    }
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 54. Hero 1 Animation
    // if (document.querySelector(".animation__hero_one")) {
    //   let heroOnetl = gsap.timeline()
    //   gsap.set(".animation__hero_one .experience", {
    //     y: 50,
    //     opacity: 0,
    //   })

    //   // animation__hero_one a
    //   let split_char_btn = new SplitText(".animation__hero_one a", { type: "chars, words" })
    //   heroOnetl.from(split_char_btn.words, { duration: 1, x: -50, opacity: 0, autoAlpha: 0, stagger: 0.1 });

    //   //hero__title
    //   let split_char_hero = new SplitText(".hero__title", { type: "chars, words" })
    //   heroOnetl.from(split_char_hero.chars, { duration: 1, x: 70, opacity: 0, autoAlpha: 0, stagger: 0.1 }, '-=1');

    //   //hero__Sub_title
    //   let split_char_hero_subtitle = new SplitText(".animation__hero_one .hero__sub-title", { type: "words" })
    //   heroOnetl.from(split_char_hero_subtitle.words, { duration: 1, x: 50, opacity: 0, autoAlpha: 0, stagger: 0.07 }, '-=1.5');

    //   // heroOnetl.to(".animation__hero_one .hero__sub-title", {
    //   //   y: 0,
    //   //   opacity: 1,
    //   //   duration: 2,
    //   //   ease: "power2.out"
    //   // }, '-=1.5')

    //   heroOnetl.to(".animation__hero_one .experience", {
    //     y: 0,
    //     opacity: 1,
    //     duration: 2,
    //     ease: "power2.out"
    //   }, '-=1.5')
    // }












    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 55. Service 1 Animation
    let home1_services = gsap.utils.toArray(".animation_home1_service")
    let service__number = gsap.utils.toArray(".animation_home1_service .service__number span")
    let service__title = gsap.utils.toArray(".animation_home1_service .service__title")
    let service__text = gsap.utils.toArray(".animation_home1_service .service__text p")
    let service__link = gsap.utils.toArray(".animation_home1_service .service__link p")

    home1_services.forEach((service, i) => {
        gsap.set([service__number[i], service__title[i], service__text[i], service__link[i]], {
            opacity: 0,
            x: -50
        })

        let home1ServiceTl = gsap.timeline({
            scrollTrigger: {
                trigger: service,
                start: "top center+=300",
                end: "bottom bottom",
                markers: false
            },
        })

        home1ServiceTl.to(service__number[i], {
            x: 0,
            opacity: 1,
            duration: 1.2
        })
        home1ServiceTl.to(service__title[i], {
            x: 0,
            opacity: 1,
            duration: 1.2
        }, "-=1")
        home1ServiceTl.to(service__text[i], {
            x: 0,
            opacity: 1,
            duration: 1.2
        }, "-=1")
        home1ServiceTl.to(service__link[i], {
            x: 0,
            opacity: 1,
            duration: 1.2
        }, "-=1")
    })
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////  
    // 56. Features 2 Animation 
    let animation__feature2 = gsap.utils.toArray(".animation__feature2 .feature__item")
    if (device_width < 1023) {
        animation__feature2.forEach((item, i) => {
            gsap.set(item, {
                opacity: 0,
                y: 60
            })
            let featured2Timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "top center+=200"
                }
            })
            featured2Timeline.to(item, {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power4.out"
            })
        })
    } else {
        gsap.set(".animation__feature2 .feature__item", {
            opacity: 0,
            y: 40
        })
        gsap.to(".animation__feature2 .feature__item", {
            scrollTrigger: {
                trigger: ".animation__feature2",
                start: "top center+=200"
            },
            opacity: 1,
            y: 0,
            duration: 2,
            ease: "power4.out",
            stagger: 0.3
        })
    }
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 57. Portfolio 6 Animation 
    const portfolio_listss = gsap.utils.toArray(".portfolio__item-6 img")
    if (portfolio_listss) {
        portfolio_listss.forEach((item, i) => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: "top center",
                    scrub: 1.5,
                },
                scale: 2.5,
                duration: 1,
            })
        })
    }
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 58. Portfolio 5 Border
    let total_portfolio_items = document.querySelectorAll(".portfolio__item-5")
    let total_row = Math.ceil(total_portfolio_items.length / 3)

    let border_row = document.getElementById("items__border")
    for (let i = 0; i < total_row; i++) {
        border_row.innerHTML += '<span class="sec-line"></span> '
    }

    let row_height = 100 / total_row
    var total_lines = document.querySelectorAll("#items__border .sec-line")

    total_lines.forEach((item, i) => {
        let counter = i + 1
        item.style.top = `${row_height * counter}%`;
        item.style.opacity = 1;
    })
    /////////////////////////////////////////////////////



    // Charchater Come Animation 
    let char_come = document.querySelectorAll(".animation__char_come")

    char_come.forEach((char_come) => {
        let split_char = new SplitText(char_come, {
            type: "chars, words"
        })
        gsap.from(split_char.chars, {
            duration: 1,
            x: 70,
            autoAlpha: 0,
            stagger: 0.05
        });
    })


    // Charchater Come long Animation 
    let char_come_long = document.querySelectorAll(".animation__char_come_long")

    char_come_long.forEach((char_come) => {
        let split_char = new SplitText(char_come, {
            type: "chars, words"
        })
        gsap.from(split_char.chars, {
            duration: 1,
            x: 70,
            autoAlpha: 0,
            stagger: 0.15
        });
    })


    // Charchater Up Animation 
    let char_up = document.querySelector(".animation__char_up")
    let split_char_up = new SplitText(char_up, {
        type: "chars, words"
    })
    gsap.from(split_char_up.chars, {
        duration: 1,
        y: 15,
        autoAlpha: 0,
        stagger: 0.05
    });



    // Service Page hero Animation 
    let word_up = document.querySelector(".animation__word_up")
    let split_word_up = new SplitText(word_up, {
        type: "words",
        position: "absolute"
    })
    gsap.from(split_word_up.words, {
        duration: 1,
        y: 50,
        autoAlpha: 0,
        stagger: 0.05
    });

    // Service Page hero Animation   
    let word_come = document.querySelectorAll(".animation__word_come")
    word_come.forEach((word_come) => {
        let split_word_come = new SplitText(word_come, {
            type: "chars words",
            position: "absolute"
        })
        gsap.from(split_word_come.words, {
            duration: 1,
            x: 50,
            autoAlpha: 0,
            stagger: 0.05
        });
    })

    // Service Page hero Animation   
    let word_come_long = document.querySelectorAll(".animation__word_come_long")
    word_come_long.forEach((word_come_long) => {
        let split_word_come_long = new SplitText(word_come_long, {
            type: "chars words",
            position: "absolute"
        })
        gsap.from(split_word_come_long.words, {
            duration: 1,
            x: 50,
            autoAlpha: 0,
            stagger: 0.5
        });
    })


    // Home page Hero Animation 

    /////////////////////////////////////////////////////
    //  Service Page Animation 
    let animation__service_page = gsap.utils.toArray(".animation__service_page")
    if (animation__service_page) {
        animation__service_page.forEach((item, i) => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: "top center+=20%",
                    markers: false,
                },
                opacity: 0,
                x: -50,
                ease: "power2.out",
                duration: 2,
            })
        })

    }
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 59. Portfolio Main Slider
    var breakpoint = window.matchMedia('( max-width: 1300px )');
    var pp_main_wrap = document.querySelector('.portfolio__main-slider');

    if (pp_main_wrap) {
        var enableSwiper = function () {
            var pp_main = new Swiper(".portfolio__main-slider", {
                allowTouchMove: false,
                slidesPerView: 1,
                spaceBetween: 0,
                mousewheel: true,
                effect: "fade",
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                }
            });
        };

        var breakpointChecker = function () {
            if (breakpoint.matches === true) {
                if (pp_main !== undefined) pp_main.destroy(true, true);
                return;
            } else if (breakpoint.matches === false) {
                return enableSwiper();
            }
        };

        breakpoint.addListener(breakpointChecker);
        breakpointChecker();
    }
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 60. Portfolio Slider 6
    var portfolio_slider_6 = new Swiper(".portfolio__slider-4", {
        speed: 1500,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 15,
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1000: {
                slidesPerView: 2,
                spaceBetween: 60,
            },
            1200: {
                slidesPerView: 2,
                spaceBetween: 90,
            },
            1400: {
                slidesPerView: 2,
                spaceBetween: 120,
            },
        },
    });
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 61. Testimonial Slider 4

    var testimonial_slider_4 = new Swiper(".testimonial__slider-4", {
        spaceBetween: 20,
        loop: true,
        freemode: true,
        slidesPerView: 3,
        speed: 2000,
        pagination: {
            el: ".pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".next-button",
            prevEl: ".prev-button",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            }
        }
    });
    /////////////////////////////////////////////////////


    // Switcher JS
    $('#switcher_open').on('click', function () {
        $(this).hide();
        $('#switcher_close').show();
        $('.switcher__icon').css('right', '280px');
        $('.switcher__items').css({
            'right': '0',
        });
    });

    $('#switcher_close').on('click', function () {
        $(this).hide();
        $('#switcher_open').show();
        $('.switcher__icon').css('right', '0');
        $('.switcher__items').css({
            'right': '-280px',
        });
    });

    // Mode JS
    $('.mode-type button').on('click', function (e) {
        $(this).addClass('active').siblings().removeClass('active');

        var mode_val = $('.mode-type button.active').attr('data-mode');
        if (mode_val == 'dark') {
            $('body').addClass('dark');
        } else {
            $('body').removeClass('dark');
        }
    });

    // Language JS
    $('.lang_dir button').on('click', function (e) {
        $(this).addClass('active').siblings().removeClass('active');

        var dir_val = $('.lang_dir button.active').attr('data-mode');
        if (dir_val == 'rtl') {
            $('body').addClass('dir-rtl');
        } else {
            $('body').removeClass('dir-rtl');
        }
    });

    // Cursor JS
    $('#cursor_style').on('change', function () {
        var cursor_val = $(this).val();

        if (cursor_val == '1') {
            $('.cursor1').hide();
            $('.cursor2').hide();
        } else {
            $('.cursor1').show();
            $('.cursor2').show();
        }
    });


    /////////////////////////////////////////////////////
    // 62. Team 7
    const team_item_7 = document.querySelectorAll(".team__item-7");

    function teamImageAnimation(event, team_item_7) {
        const contentBox = team_item_7.getBoundingClientRect();
        const dx = event.clientX - contentBox.x;
        const dy = event.clientY - contentBox.y;
        team_item_7.children[3].style.transform = `translate(${dx}px, ${dy}px)`;
    }

    team_item_7.forEach((item, i) => {
        item.addEventListener("mousemove", (event) => {
            setInterval(teamImageAnimation(event, item), 1000);
        });
    });
    ///////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 63. Portfolio Slider 7
    var portfolio_slider_7 = new Swiper(".portfolio__slider-7", {
        loop: true,
        freemode: true,
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        speed: 2000,
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            800: {
                slidesPerView: 2,
                spaceBetween: 50,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 70,
            },
        },
    });
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 64. Header 7
    let header_bg_7 = document.querySelector(".header__area-7");
    if (header_bg_7) {
        window.onscroll = function () {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                header_bg_7.classList.add("sticky-7");
                if (scroll_top) {
                    scroll_top.style.display = "block";
                }
            } else {
                header_bg_7.classList.remove("sticky-7");
                if (scroll_top) {
                    scroll_top.style.display = "none";
                }
            }
        };
    }
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 65. Service 7 Animation 
    let animation_services_7 = gsap.utils.toArray(".animation_service_7 .service__item-7")
    gsap.set(animation_services_7, {
        opacity: 0,
        x: -30,
    })

    if (animation_services_7) {
        if (device_width < 1023) {
            animation_services_7.forEach((item, i) => {
                gsap.to(item, {
                    scrollTrigger: {
                        trigger: item,
                        start: "top center+=200",
                        markers: false
                    },
                    opacity: 1,
                    x: -0,
                    ease: "power2.out",
                    duration: 2,
                    stagger: {
                        each: 0.4
                    }
                })
            })
        } else {
            gsap.to(".animation_service_7 .service__item-7", {
                scrollTrigger: {
                    trigger: ".animation_service_7",
                    start: "top center+=200",
                    markers: false
                },
                opacity: 1,
                x: 0,
                ease: "power2.out",
                duration: 2,
                stagger: {
                    each: 0.4
                }
            })
        }
    }
    /////////////////////////////////////////////////////



    /////////////////////////////////////////////////////
    // 65. Service 7 Animation 
    let animation_workflow_6 = gsap.utils.toArray(".animation_workflow_6 .workflow__item-4")
    if (animation_workflow_6) {
        if (device_width < 1023) {
            animation_workflow_6.forEach((item, i) => {
                gsap.from(item, {
                    scrollTrigger: {
                        trigger: item,
                        start: "top center+=200",
                        markers: false
                    },
                    opacity: 0,
                    x: -30,
                    ease: "power2.out",
                    duration: 2,
                    stagger: {
                        each: 0.4
                    }
                })
            })
        } else {
            gsap.from(".animation_workflow_6 .workflow__item-4", {
                scrollTrigger: {
                    trigger: ".animation_workflow_6",
                    start: "top center+=200",
                    markers: false
                },
                opacity: 0,
                x: -30,
                ease: "power2.out",
                duration: 2,
                stagger: {
                    each: 0.4
                }
            })
        }
    }
    /////////////////////////////////////////////////////



    /////////////////////////////////////////////////////
    // 66. Blog Animation 3
    gsap.set(".blog__animation .blog__item-4", {
        x: 50,
        opacity: 0
    });

    if (device_width < 1023) {
        const blogList = gsap.utils.toArray(".blog__animation .blog__item-4")
        blogList.forEach((item, i) => {
            let blogTl = gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "top center+=200",
                }
            })
            blogTl.to(item, {
                x: 0,
                opacity: 1,
                ease: "power2.out",
                duration: 1.5,
            })
        })
    } else {
        gsap.to(".blog__animation .blog__item-4", {
            scrollTrigger: {
                trigger: ".blog__animation .blog__item-4",
                start: "top center+=300",
                markers: false
            },
            x: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 2,
            stagger: {
                each: 0.3
            }
        })
    }
    /////////////////////////////////////////////////////

    // Home One Hero Animation 
    let HomeDigital = gsap.timeline()
    let HomeDigitalImage = gsap.timeline()

    let hero7_thum_anim = document.querySelector(".hero7__thum-anim")
    if (hero7_thum_anim) {
        let hero7_thumb_1 = document.querySelector(".image-1")
        let hero7_thumb_2 = document.querySelector(".image-2")
        let hero7_thumb_3 = document.querySelector(".image-3")
        let hero7_thumb_4 = document.querySelector(".image-4")

        gsap.from(".image-1", {
            x: 65,
            yPercent: 100,
            opacity: 0,
            duration: 2,
            delay: 1
        })

        gsap.from(".image-2", {
            delay: 1.5,
            scale: 0,
            duration: 1.5
        })

        gsap.from(".image-3", {
            x: 65,
            yPercent: -100,
            duration: 2,
            opacity: 0,
            delay: 1
        })
        gsap.from(".image-4", {
            xPercent: -100,
            yPercent: -100,
            duration: 2,
            opacity: 0,
            delay: 1
        })

    }


    // Charchater Come long Animation 
    let mark = document.querySelector(".hero__area-3 .title-left")
    let eting = document.querySelector(".hero__area-3 .title-right")
    let hero__text_animation = document.querySelector(".hero__text-animation")


    let split_creatives = new SplitText(mark, {
        type: "chars"
    })
    let split_solutions = new SplitText(eting, {
        type: "chars"
    })
    let split_text_animation = new SplitText(hero__text_animation, {
        type: "chars words"
    })

    HomeDigital.from(split_creatives.chars, {
        duration: 2,
        x: 100,
        autoAlpha: 0,
        stagger: 0.2
    });
    HomeDigital.from(split_solutions.chars, {
        duration: 1,
        x: 100,
        autoAlpha: 0,
        stagger: 0.1
    }, "-=1");
    HomeDigital.from(split_text_animation.words, {
        duration: 1,
        x: 50,
        autoAlpha: 0,
        stagger: 0.05
    }, "-=1");



    // Home page Hero Animation 
    let homeCreative = gsap.timeline()

    // Charchater Come long Animation 
    let creative = document.querySelector(".service__hero-right-2 .creative")
    let solution = document.querySelector(".service__hero-right-2 .solution")
    let heroContent = document.querySelector(".service__hero-right-2 .animate_content")


    let split_creative = new SplitText(creative, {
        type: "chars"
    })
    let split_solution = new SplitText(solution, {
        type: "chars"
    })
    let split_herocontent = new SplitText(heroContent, {
        type: "chars words"
    })

    homeCreative.from(split_creative.chars, {
        duration: 1,
        x: 70,
        autoAlpha: 0,
        stagger: 0.1
    });
    homeCreative.from(split_solution.chars, {
        duration: 1,
        x: 70,
        autoAlpha: 0,
        stagger: 0.1
    }, "-=1.5");
    homeCreative.from(split_herocontent.words, {
        duration: 1,
        x: 50,
        autoAlpha: 0,
        stagger: 0.05
    }, "-=1");


    // Home page Hero Animation 
    gsap.set(".experience", {
        y: 50,
        opacity: 0,
    })
    let homeAgency = gsap.timeline()

    // Charchater Come long Animation 
    let hero__title = document.querySelector(".hero__title")
    let hero__subtitle = document.querySelector(".hero__sub-title")


    let split_hero__title = new SplitText(hero__title, {
        type: "chars"
    })
    let split_hero__subtitle = new SplitText(hero__subtitle, {
        type: "chars words"
    })

    homeAgency.from(split_hero__title.chars, {
        duration: 1,
        x: 70,
        autoAlpha: 0,
        stagger: 0.1
    });
    homeAgency.from(split_hero__subtitle.words, {
        duration: 1,
        x: 50,
        autoAlpha: 0,
        stagger: 0.05
    }, "-=1");

    homeAgency.to(".experience", {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power2.out"
    }, '-=1.5')



    // Home 6 Hero Animation 
    let homeStratup = gsap.timeline()

    // Charchater Come long Animation 
    let hero6_title = document.querySelector(".hero__six_anim .hero__title-6")
    let hero6_desc = document.querySelector(".hero__six_anim p")

    let hero6_button = document.querySelector(".hero__six_anim a")
    let hero6_image = document.querySelector(".hero__right-6 img")

    gsap.set(hero6_image, {
        opacity: 0,
        y: 50
    })
    gsap.set(hero6_button, {
        opacity: 0,
        y: 50
    })


    let split_hero6_title = new SplitText(hero6_title, {
        type: "chars"
    })
    let split_hero6_desc = new SplitText(hero6_desc, {
        type: "chars words"
    })

    homeStratup.from(split_hero6_title.chars, {
        duration: 1,
        x: 70,
        autoAlpha: 0,
        stagger: 0.1
    });
    homeStratup.from(split_hero6_desc.words, {
        duration: 1,
        x: 50,
        autoAlpha: 0,
        stagger: 0.05
    }, "-=1");
    homeStratup.to(hero6_button, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out"
    }, "-=1.5")
    homeStratup.to(hero6_image, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out"
    }, "-=1")



    /////////////////////////////////////////////////////
    // 67. Workflow Slider Animation |  fade_bottom 2
    gsap.set(".fade_bottom_2", {
        y: 30,
        opacity: 0
    });

    if (device_width < 1023) {
        const fadeArray = gsap.utils.toArray(".fade_bottom_2")
        fadeArray.forEach((item, i) => {
            let fadeTl = gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "top center+=200",
                }
            })
            fadeTl.to(item, {
                y: 0,
                opacity: 1,
                ease: "power2.out",
                duration: 1.5,
            })
        })
    } else {
        gsap.to(".fade_bottom_2", {
            scrollTrigger: {
                trigger: ".fade_bottom_2",
                start: "top center+=300",
                markers: false
            },
            y: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 1,
            stagger: {
                each: 0.2
            }
        })
    }
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 68. Workflow Slider Animation 2 |  fade_bottom
    gsap.set(".fade_bottom_3", {
        y: 30,
        opacity: 0
    });

    if (device_width < 1023) {
        const fadeArray = gsap.utils.toArray(".fade_bottom_3")
        fadeArray.forEach((item, i) => {
            let fadeTl = gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "top center+=200",
                }
            })
            fadeTl.to(item, {
                y: 0,
                opacity: 1,
                ease: "power2.out",
                duration: 1.5,
            })
        })
    } else {
        gsap.to(".fade_bottom_3", {
            scrollTrigger: {
                trigger: ".fade_bottom_3",
                start: "top center+=300",
                markers: false
            },
            y: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 1,
            stagger: {
                each: 0.2
            }
        })
    }
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 69. Workflow Slider Animation 2 |  fade_bottom
    gsap.set(".fade_bottom_4", {
        y: 30,
        opacity: 0
    });

    if (device_width < 1023) {
        const fadeArray = gsap.utils.toArray(".fade_bottom_4")
        fadeArray.forEach((item, i) => {
            let fadeTl = gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "top center+=200",
                }
            })
            fadeTl.to(item, {
                y: 0,
                opacity: 1,
                ease: "power2.out",
                duration: 1.5,
            })
        })
    } else {
        gsap.to(".fade_bottom_4", {
            scrollTrigger: {
                trigger: ".fade_bottom_4",
                start: "top center+=300",
                markers: false
            },
            y: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 1,
            stagger: {
                each: 0.2
            }
        })
    }
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 69. Workflow Slider Animation 2 |  fade_bottom_5
    gsap.set(".fade_bottom_5", {
        y: 30,
        opacity: 0
    });

    if (device_width < 1023) {
        const fadeArray = gsap.utils.toArray(".fade_bottom_5")
        fadeArray.forEach((item, i) => {
            let fadeTl = gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "top center+=200",
                }
            })
            fadeTl.to(item, {
                y: 0,
                opacity: 1,
                ease: "power2.out",
                duration: 1.5,
            })
        })
    } else {
        gsap.to(".fade_bottom_5", {
            scrollTrigger: {
                trigger: ".fade_bottom_5",
                start: "top center+=300",
                markers: false
            },
            y: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 1,
            stagger: {
                each: 0.2
            }
        })
    }
    /////////////////////////////////////////////////////


    // HERO - 10
    var hero10 = new Swiper(".hero10_activition", {
        direction: 'horizontal',
        loop: true,
        speed: 1500,
        slidesPerView: 4,
        spaceBetween: 30,
        mousewheel: true,
        mousewheelControl: true,
        keyboard: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
            clickable: true,

            renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' + ' <span><i class="fa-solid fa-minus increase-dash"></i></span> ' + '<span class="' + totalClass + '"></span>';
            }
        },
        breakpoints: {
            1400: {
                slidesPerView: 4,
            },
            1000: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            320: {
                slidesPerView: 1,
            },
        }
    });


    // =========================================================
    // Image Hover
    const hover_title = document.querySelectorAll(".hover_wrap");

    if (hover_title) {
        function hoverImgFunc(event, hover_title) {
            const contentBox = hover_title.getBoundingClientRect();
            const dx = event.clientX - contentBox.x;
            const dy = event.clientY - contentBox.y;
            hover_title.children[0].style.transform = `translate(${dx}px, ${dy}px)`;
        }

        hover_title.forEach((item, i) => {
            item.addEventListener("mousemove", (event) => {
                setInterval(hoverImgFunc(event, item), 1000);
            });
        });
    }
    // =========================================================


    // =====================================================================
    //  showcase 8 hover
    const hover_8_wrap = document.querySelectorAll(".hover_8_wrap a");
    const h8_wrap_len = hover_8_wrap.length;

    if (h8_wrap_len == 1) {
        function showCase8Func(event, hover_8_wrap) {
            const contentBox = hover_8_wrap[0].getBoundingClientRect();
            const dx = event.pageX;
            const dy = event.clientY - contentBox.y;
            document.querySelector('.hover_8_img').style.transform = `translate(${dx}px, ${dy}px)`;
        }
        hover_8_wrap[0].addEventListener("mousemove", (event) => {
            setInterval(showCase8Func(event, hover_8_wrap), 1000);
            document.querySelector('.hover_8_img').classList.add('active');
        });
        hover_8_wrap[0].addEventListener("mouseout", (event) => {
            document.querySelector('.hover_8_img').classList.remove('active');
        });
    }

    if (h8_wrap_len == 2) {
        function showCase8Func(event, hover_8_wrap) {
            const contentBox = hover_8_wrap[0].getBoundingClientRect();
            const dx = event.pageX;
            const dy = event.clientY - contentBox.y;
            document.querySelector('.hover_8_img').style.transform = `translate(${dx}px, ${dy}px)`;

            console.log(event.pageX);
        }
        hover_8_wrap[0].addEventListener("mousemove", (event) => {
            setInterval(showCase8Func(event, hover_8_wrap), 1000);
            document.querySelector('.hover_8_img').classList.add('active');
        });
        hover_8_wrap[0].addEventListener("mouseout", (event) => {
            document.querySelector('.hover_8_img').classList.remove('active');
        });

        function showCase8Func2(event, hover_8_wrap) {
            const contentBox = hover_8_wrap[1].getBoundingClientRect();
            const dx = event.pageX;
            const dy = event.clientY - contentBox.y;
            document.querySelector('.hover_8_img_2').style.transform = `translate(${dx}px, ${dy}px)`;
        }
        hover_8_wrap[1].addEventListener("mousemove", (event) => {
            setInterval(showCase8Func2(event, hover_8_wrap), 1000);
            document.querySelector('.hover_8_img_2').classList.add('active');
        });
        hover_8_wrap[1].addEventListener("mouseout", (event) => {
            document.querySelector('.hover_8_img_2').classList.remove('active');
        });
    }
    // =================================================================


    // Home 9
    let slider_9_image = document.querySelector(".slider9_images");

    if (slider_9_image) {
        document.querySelector(".slider9_images").style.display = 'none';
        var cols = 1;
        if (device_width > 767) {
            cols = 3;
        } else {
            cols = 1;
        }

        const main = document.getElementById("main");
        let parts = [];

        var content_list = document.querySelectorAll('.slide9_content');
        var title_list = document.querySelectorAll('.slide9_content h2');


        var content_list = document.querySelectorAll('.slide9_content p');

        var images_listss = document.querySelectorAll('.slider9_image img');
        var images = []
        var titles = []
        var contents = []

        images_listss.forEach((item) => {
            let srcs = item.getAttribute("src")
            images.push(srcs)
        })
        title_list.forEach((item) => {
            let title = item.innerHTML
            titles.push(title)
        })
        content_list.forEach((item) => {
            let content = item.innerHTML
            contents.push(content)
        })


        let current = 0;
        let playing = false;


        for (let col = 0; col < cols; col++) {
            let part = document.createElement("div");
            part.className = "part";
            let el = document.createElement("a");
            el.className = "section";
            el.href = "http://127.0.0.1:5500/service-details.html"

            let img = document.createElement("img");
            img.src = images[current];
            el.appendChild(img);

            let h2 = document.createElement("h2");
            h2.innerHTML = titles[current];
            el.appendChild(h2);

            let p = document.createElement("p");
            p.innerHTML = contents[current];
            el.appendChild(p);


            part.style.setProperty("--x", (-100 / cols) * col + "vw");
            part.appendChild(el);
            main.appendChild(part);
            parts.push(part);
        }

        // Cursor Pointer and Circle event
        function lerp(start, end, amount) {
            return (1 - amount) * start + amount * end;
        }

        const cursor = document.createElement("div");
        cursor.className = "cursor";

        const cursorF = document.createElement("div");
        cursorF.className = "cursor-f";
        let cursorX = 0;
        let cursorY = 0;
        let pageX = 0;
        let pageY = 0;
        let size = 8;
        let sizeF = 36;
        let followSpeed = 0.16;

        document.body.appendChild(cursor);
        document.body.appendChild(cursorF);

        if ("ontouchstart" in window) {
            cursor.style.display = "none";
            cursorF.style.display = "none";
        }

        cursor.style.setProperty("--size", size + "px");
        cursorF.style.setProperty("--size", sizeF + "px");

        window.addEventListener("mousemove", function (e) {
            pageX = e.clientX;
            pageY = e.clientY;
            cursor.style.left = e.clientX - size / 2 + "px";
            cursor.style.top = e.clientY - size / 2 + "px";
        });

        function loop() {
            cursorX = lerp(cursorX, pageX, followSpeed);
            cursorY = lerp(cursorY, pageY, followSpeed);
            cursorF.style.top = cursorY - sizeF / 2 + "px";
            cursorF.style.left = cursorX - sizeF / 2 + "px";
            requestAnimationFrame(loop);
        }
        loop();

        // Rollover UP & Down Mouse Wheel Navigation
        let animOptions = {
            duration: 2.3,
            ease: Power4.easeInOut
        };

        function go(dir) {
            if (!playing) {
                playing = true;
                if (current + dir < 0) current = images.length - 1;
                else if (current + dir >= images.length) current = 0;
                else current += dir;

                function up(part, next) {
                    part.appendChild(next);
                    gsap
                        .to(part, {
                            ...animOptions,
                            y: -window.innerHeight
                        })
                        .then(function () {
                            part.children[0].remove();
                            gsap.to(part, {
                                duration: 0,
                                y: 0
                            });
                        });
                }

                function down(part, next) {
                    part.prepend(next);
                    gsap.to(part, {
                        duration: 0,
                        y: -window.innerHeight
                    });
                    gsap.to(part, {
                        ...animOptions,
                        y: 0
                    }).then(function () {
                        part.children[1].remove();
                        playing = false;
                    });
                }

                for (let p in parts) {
                    let part = parts[p];
                    let next = document.createElement("a");
                    next.href = "http://127.0.0.1:5500/service-details.html"
                    next.className = "section";
                    let img = document.createElement("img");
                    img.src = images[current];
                    next.appendChild(img);

                    let h2 = document.createElement("h2");
                    h2.innerHTML = titles[current];
                    next.appendChild(h2);

                    let pa = document.createElement("p");
                    pa.innerHTML = contents[current];
                    next.appendChild(pa);



                    if ((p - Math.max(0, dir)) % 2) {
                        down(part, next);
                    } else {
                        up(part, next);
                    }
                }
            }
        }

        //Press Up & Down Keyboard Arrow Event
        window.addEventListener("keydown", function (e) {
            if (["ArrowDown", "ArrowRight"].includes(e.key)) {
                go(1);
            } else if (["ArrowUp", "ArrowLeft"].includes(e.key)) {
                go(-1);
            }
        });

        // Cursor Invent Target Touches
        let startY;
        let endY;
        let clicked = false;

        function mousedown(e) {
            gsap.to(cursor, {
                scale: 4.5
            });
            gsap.to(cursorF, {
                scale: 0.4
            });

            clicked = true;
            startY = e.clientY || e.touches[0].clientY || e.targetTouches[0].clientY;
        }

        function mouseup(e) {
            gsap.to(cursor, {
                scale: 1
            });
            gsap.to(cursorF, {
                scale: 1
            });

            endY = e.clientY || endY;
            if (clicked && startY && Math.abs(startY - endY) >= 40) {
                go(!Math.min(0, startY - endY) ? 1 : -1);
                clicked = false;
                startY = null;
                endY = null;
            }
        }

        window.addEventListener("mousedown", mousedown, false);
        window.addEventListener("touchstart", mousedown, false);
        window.addEventListener(
            "touchmove",
            function (e) {
                if (clicked) {
                    endY = e.touches[0].clientY || e.targetTouches[0].clientY;
                }
            },
            false
        );
        window.addEventListener("touchend", mouseup, false);
        window.addEventListener("mouseup", mouseup, false);

        //Mouse Wheel Scroll Transition
        let scrollTimeout;

        function wheel(e) {
            clearTimeout(scrollTimeout);
            setTimeout(function () {
                if (e.deltaY < -40) {
                    go(-1);
                } else if (e.deltaY >= 40) {
                    go(1);
                }
            });
        }
        window.addEventListener("mousewheel", wheel, false);
        window.addEventListener("wheel", wheel, false);

        let alls = document.querySelectorAll('#main .part');
        alls[0].classList.add('showed');
    }


    // Tilt JS
    let tilt = document.querySelectorAll(".wc-tilt");
    let tilt_2 = document.querySelectorAll(".wc-tilt-2");

    if (tilt) {
        VanillaTilt.init(document.querySelectorAll(".wc-tilt"), {
            max: 15,
            speed: 3000,
        });
    }

    if (tilt_2) {
        VanillaTilt.init(document.querySelectorAll(".wc-tilt-2"), {
            max: 10,
            speed: 3000,
        });
    }



    // Home 16
    var shocase_list_16 = document.querySelectorAll(".showcase__content-16");

    shocase_list_16.forEach((shocase16) => {
        gsap.to(shocase16, {
            scrollTrigger: {
                trigger: shocase16,
                pin: shocase16,
                pinSpacing: false,
                start: "top top",
                delay: 1
            }
        });
    });


    ////////////////////////////////////////////////
    // Home 8
    let imageTl_8 = gsap.timeline({
        scrollTrigger: {
            trigger: ".portfolio__big",
            start: "top top+=90",
            pin: true,
            markers: false,
            scrub: 1,
            pinSpacing: false,
            end: "bottom bottom+=150",
        }
    });
    imageTl_8.to(".portfolio__big-inner", {
        width: "100%",
    });
    ///////////////////////////////////////////////////


    //////////////////////////////////////////////////
    // Home 12
    const portfImgItem12 = document.querySelectorAll(".portfolio__item-12");

    function portfImageCursor(event, portfImgItem12) {
        const contentBox = portfImgItem12.getBoundingClientRect();
        const dx = event.clientX - contentBox.x;
        const dy = event.clientY - contentBox.y;
        portfImgItem12.children[3].style.transform = `translate(${dx}px, ${dy}px)`;
    }

    portfImgItem12.forEach((item, i) => {
        item.addEventListener("mousemove", (event) => {
            setInterval(portfImageCursor(event, item), 1000);
        });
    });
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // Activate MixitUp
    let mixitup_17 = document.querySelector('.showcase-mixitup');
    if (mixitup_17) {
        var mixer = mixitup('.showcase-mixitup');
    }
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // Home 17
    gsap.to(".showcase__menu-4", {
        scrollTrigger: {
            trigger: ".showcase__area-4",
            pin: ".showcase__menu-4",
            pinSpacing: false,
            start: "top top",
            end: "bottom center",
            markers: false,
            delay: 1
        }
    });
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    //
    let mainSliderSelector = '.main-slider',
        thumbSliderSelector = '.thumb-slider';

    // Main Slider
    let mainSliderOptions = {
        loop: true,
        speed: 1500,
        parallax: true,
        mousewheel: true,
        loopAdditionalSlides: 6,
        grabCursor: true,
        effect: "fade",
        watchSlidesProgress: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    };
    let mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);

    // thumb Slider
    let thumbSliderOptions = {
        loop: true,
        loopAdditionalSlides: 5,
        speed: 1500,
        spaceBetween: 15,
        centeredSlides: true,
        touchRatio: 0.2,
        slideToClickedSlide: true,
        direction: 'vertical',
        breakpoints: {
            200: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 5,
            },
            1024: {
                slidesPerView: 5,
            },
            1400: {
                slidesPerView: 7,
            },
        },
    };
    let thumbSlider = new Swiper(thumbSliderSelector, thumbSliderOptions);

    mainSlider.controller.control = thumbSlider;
    thumbSlider.controller.control = mainSlider;

    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // Home 11
    let mainSliderSelector11 = '.main-slider11',
        thumbSliderSelector11 = '.thumb-slider11';

    // Main Slider
    let mainSliderOptions11 = {
        loop: true,
        speed: 1500,
        parallax: true,
        mousewheel: true,
        loopAdditionalSlides: 6,
        grabCursor: true,
        effect: "fade",
        watchSlidesProgress: true,
        direction: 'vertical',
    };
    let mainSlider11 = new Swiper(mainSliderSelector11, mainSliderOptions11);

    // thumb Slider
    let thumbSliderOptions11 = {
        loop: true,
        loopAdditionalSlides: 5,
        speed: 1500,
        centeredSlides: true,
        touchRatio: 0.2,
        slideToClickedSlide: true,
        direction: 'vertical',
        breakpoints: {
            200: {
                slidesPerView: 6,
            },
            768: {
                slidesPerView: 6,
            },
            1200: {
                slidesPerView: 5,
            },
        },
    };
    let thumbSlider11 = new Swiper(thumbSliderSelector11, thumbSliderOptions11);

    mainSlider11.controller.control = thumbSlider11;
    thumbSlider11.controller.control = mainSlider11;
    /////////////////////////////////////////////////////


    // Job Details
    if (device_width > 767) {
        gsap.to(".job__detail-sidebar", {
            scrollTrigger: {
                trigger: ".job__detail",
                pin: ".job__detail-sidebar",
                pinSpacing: false,
                start: "top top",
                end: "bottom center",
                markers: false,
                delay: 1
            }
        });
    }




})(jQuery);