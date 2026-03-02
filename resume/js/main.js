// =============================================
// Theme toggle
// =============================================
document.addEventListener('DOMContentLoaded', function() {
    var html = document.documentElement;
    var saved = localStorage.getItem('theme');
    if (saved) html.setAttribute('data-theme', saved);

    function toggleTheme() {
        var current = html.getAttribute('data-theme');
        var next = current === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    }

    var heroToggle = document.getElementById('themeSwitch');
    var navToggle = document.getElementById('themeSwitchNav');

    if (heroToggle) heroToggle.addEventListener('click', toggleTheme);
    if (navToggle) navToggle.addEventListener('click', toggleTheme);
});


// =============================================
// Scroll progress bar
// =============================================
document.addEventListener('DOMContentLoaded', function() {
    var progressBar = document.getElementById('scrollProgress');

    function updateProgress() {
        var scrollTop = window.pageYOffset;
        var docHeight = document.documentElement.scrollHeight - window.innerHeight;
        var pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressBar.style.width = pct + '%';
    }

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
});


// =============================================
// Sticky nav
// =============================================
document.addEventListener('DOMContentLoaded', function() {
    var nav = document.getElementById('nav');
    var heroToggle = document.getElementById('themeToggleHero');

    function updateNav() {
        var scrollTop = window.pageYOffset;
        if (scrollTop > window.innerHeight * 0.6) {
            nav.classList.add('visible');
            if (heroToggle) heroToggle.style.opacity = '0';
            if (heroToggle) heroToggle.style.pointerEvents = 'none';
        } else {
            nav.classList.remove('visible');
            if (heroToggle) heroToggle.style.opacity = '1';
            if (heroToggle) heroToggle.style.pointerEvents = 'auto';
        }
    }

    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav();
});


// =============================================
// Cursor glow
// =============================================
document.addEventListener('DOMContentLoaded', function() {
    var cursorGlow = document.getElementById('cursorGlow');
    if (!cursorGlow) return;

    document.addEventListener('mousemove', function(e) {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    });
});


// =============================================
// Letter-by-letter heading animation (pcp-landing style)
// =============================================
document.addEventListener('DOMContentLoaded', function() {
    function wrapTextInLetters(text, className, counterObj) {
        var words = text.split(' ');
        var result = '';
        var addedWords = 0;

        words.forEach(function(word) {
            if (!word.trim()) return;
            if (addedWords > 0) result += ' ';
            result += '<span class="word-wrapper">';
            word.split('').forEach(function(ch) {
                var delay = counterObj.index * 0.012;
                result += '<span class="' + className + '" style="animation-delay:' + delay + 's">' + ch + '</span>';
                counterObj.index++;
            });
            result += '</span>';
            addedWords++;
        });

        return result;
    }

    function prepareHeadingAnimation(heading, isHero) {
        var className = isHero ? 'hero-letter' : 'heading-letter';
        var counter = { index: 0 };
        var nodes = heading.childNodes;
        var html = '';

        for (var i = 0; i < nodes.length; i++) {
            var node = nodes[i];

            if (node.nodeType === 3) {
                // Text node
                var text = node.textContent;
                if (text.trim()) {
                    html += wrapTextInLetters(text, className, counter);
                }
            } else if (node.nodeType === 1) {
                // Element node
                if (node.tagName === 'BR') {
                    html += '<br>';
                } else {
                    // Preserve wrapper element (e.g. <span class="accent-text">)
                    var tag = node.tagName.toLowerCase();
                    var cls = node.getAttribute('class');
                    var innerText = node.textContent;
                    html += '<' + tag + (cls ? ' class="' + cls + '"' : '') + '>';
                    html += wrapTextInLetters(innerText, className, counter);
                    html += '</' + tag + '>';
                }
            }
        }

        heading.innerHTML = html;
    }

    function triggerHeadingAnimation(heading) {
        heading.classList.add('animate');
    }

    var headings = document.querySelectorAll('.section-title, .hero__heading');

    headings.forEach(function(h) {
        var isHero = h.classList.contains('hero__heading');
        prepareHeadingAnimation(h, isHero);
    });

    // Hero title animates immediately
    var heroHeading = document.querySelector('.hero__heading');
    if (heroHeading) {
        setTimeout(function() {
            triggerHeadingAnimation(heroHeading);
        }, 200);
    }

    // Scroll-triggered for other headings
    var headingObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting && !entry.target.classList.contains('animate')) {
                triggerHeadingAnimation(entry.target);
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    });

    headings.forEach(function(h) {
        if (!h.classList.contains('hero__heading')) {
            headingObserver.observe(h);
        }
    });
});


// =============================================
// FadeInUp observer with stagger
// =============================================
document.addEventListener('DOMContentLoaded', function() {
    var fadeElements = document.querySelectorAll('.fadeInUp');
    if (fadeElements.length === 0) return;

    var groupMap = new Map();

    fadeElements.forEach(function(el) {
        var parent = el.parentElement;
        if (!groupMap.has(parent)) groupMap.set(parent, []);
        groupMap.get(parent).push(el);
    });

    var fadeObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                var el = entry.target;
                var siblings = groupMap.get(el.parentElement) || [el];
                var idx = siblings.indexOf(el);
                var delay = idx * 80;
                setTimeout(function() { el.classList.add('animate'); }, delay);
                fadeObserver.unobserve(el);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });

    fadeElements.forEach(function(el) {
        fadeObserver.observe(el);
    });

    // Hero elements animate immediately
    var heroFadeEls = document.querySelectorAll('.hero .fadeInUp');
    heroFadeEls.forEach(function(el, i) {
        setTimeout(function() { el.classList.add('animate'); }, 300 + i * 120);
    });
});


// =============================================
// Timeline animation (line grow + dot pulse)
// =============================================
document.addEventListener('DOMContentLoaded', function() {
    var timeline = document.getElementById('timeline');
    if (!timeline) return;

    var dots = document.querySelectorAll('.timeline__dot');

    var timelineObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                timeline.classList.add('animate');

                dots.forEach(function(dot, i) {
                    setTimeout(function() {
                        dot.classList.add('animate');
                        setTimeout(function() { dot.classList.add('pulse'); }, 100);
                    }, 300 + i * 250);
                });

                timelineObserver.unobserve(timeline);
            }
        });
    }, { threshold: 0.15 });

    timelineObserver.observe(timeline);
});


// =============================================
// Counter animation
// =============================================
document.addEventListener('DOMContentLoaded', function() {
    var counters = document.querySelectorAll('[data-count]');

    function animateCounter(el) {
        var target = parseInt(el.getAttribute('data-count'));
        var suffix = '+';
        var duration = 1500;
        var start = performance.now();

        function step(now) {
            var elapsed = now - start;
            var progress = Math.min(elapsed / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3);
            var current = Math.floor(eased * target);
            el.textContent = current + suffix;
            if (progress < 1) requestAnimationFrame(step);
        }

        requestAnimationFrame(step);
    }

    var counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(function(c) {
        counterObserver.observe(c);
    });
});


// =============================================
// Smooth scroll for nav links
// =============================================
document.addEventListener('DOMContentLoaded', function() {
    function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function smoothScrollTo(targetPosition, duration) {
        duration = duration || 1200;
        var startPosition = window.pageYOffset;
        var distance = targetPosition - startPosition;
        var startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            var timeElapsed = currentTime - startTime;
            var progress = Math.min(timeElapsed / duration, 1);
            var easedProgress = easeInOutCubic(progress);
            window.scrollTo(0, startPosition + distance * easedProgress);
            if (progress < 1) requestAnimationFrame(animation);
        }

        requestAnimationFrame(animation);
    }

    document.querySelectorAll('.nav__links a[href^="#"]').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                var offset = target.offsetTop - 80;
                smoothScrollTo(offset, 1200);
            }
        });
    });
});
