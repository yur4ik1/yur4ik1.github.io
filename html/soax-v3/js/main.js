// Scroll header

const header = document.querySelector(".header__main");
const width = window.innerWidth

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

// mobile menu

let burder = document.querySelector('.burger');
let mobileMenu = document.querySelector('.header__mobile-menu');

if (mobileMenu) {
  burder.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');

    if (mobileMenu.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  });
}


// submenu

let subMenuItems = document.querySelectorAll('.header__menu-item.sub');

subMenuItems.forEach(function (item) {
  let submenu = item.querySelector('.submenu');

  if (submenu) {
    item.addEventListener('mouseenter', function () {
      submenu.classList.add('active');
    });

    item.addEventListener('mouseleave', function () {
      submenu.classList.remove('active');
    });

    submenu.addEventListener('mouseenter', function () {
      submenu.classList.add('active');
    });

    submenu.addEventListener('mouseleave', function () {
      submenu.classList.remove('active');
    });
  }
});


// Pricing Tabs 

document.addEventListener("DOMContentLoaded", function () {
  const selectItems = document.querySelectorAll(".pricing__tabs-item");
  const tabsItems = document.querySelectorAll(".tabs-item");

  selectItems.forEach((selectItem, index) => {
    selectItem.addEventListener("click", () => {
      selectItems.forEach(item => {
        item.classList.remove("active");
      });
      selectItem.classList.add("active");
      tabsItems.forEach(item => {
        item.classList.remove("active");
      });
      tabsItems[index].classList.add("active");
    });
  });
});


// dots animation

document.addEventListener("DOMContentLoaded", function () {
  const svgObject = document.getElementById('svg-object');

 
  function toggleActiveClassAndChangeFill(path) {
      path.classList.add('active'); 
      path.setAttribute('fill', '#4855DC'); 
      path.parentElement.removeAttribute('filter'); 

      setTimeout(() => {
          path.classList.remove('active');
          path.setAttribute('fill', '#F2EDE9');
          setTimeout(() => {
              toggleActiveClassAndChangeFill(path); 
          }, Math.random() * 2500); 
      }, 2500); 
  }

  svgObject.addEventListener('load', function () {
      const svgDocument = svgObject.contentDocument;
      const bluePaths = svgDocument.querySelectorAll('path.blue');
      const bluePathsArray = Array.from(bluePaths);
      bluePathsArray.forEach(path => {
          toggleActiveClassAndChangeFill(path);
      });
  });
});


// dark mode

function toggleDarkHeader() {
  const headerMain = document.querySelector('.header__main');
  const plansSection = document.querySelector('.plans');
  const integrationsSection = document.querySelector('.integrations');
  const contactsSection = document.querySelector('.contacts');
  const footerSection = document.querySelector('.footer');
  const mobileMenu = document.querySelector('.header__mobile-menu');

  if (!headerMain) {
    return;
  }

  const windowHeight = window.innerHeight;
  const scrollPosition = window.scrollY;

  const isInPlansSection = plansSection && scrollPosition >= plansSection.offsetTop && scrollPosition < plansSection.offsetTop + plansSection.offsetHeight;
  const isInIntegrationsSection = integrationsSection && scrollPosition >= integrationsSection.offsetTop && scrollPosition < integrationsSection.offsetTop + integrationsSection.offsetHeight;
  const isInContactsSection = contactsSection && scrollPosition >= contactsSection.offsetTop && scrollPosition < contactsSection.offsetTop + contactsSection.offsetHeight;
  const isInFooterSection = footerSection && scrollPosition >= footerSection.offsetTop && scrollPosition < footerSection.offsetTop + footerSection.offsetHeight;

  if (isInPlansSection || isInIntegrationsSection || isInContactsSection || isInFooterSection) {
    headerMain.classList.add('dark');
    mobileMenu.classList.add('dark');
  } else {
    headerMain.classList.remove('dark');
    mobileMenu.classList.remove('dark');
  }
}

window.addEventListener('scroll', toggleDarkHeader);
window.addEventListener('load', toggleDarkHeader);


// gradient animation

document.addEventListener('mousemove', function(event) {
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;
  
  let mouseXpercentage = event.pageX / windowWidth * 50;
  let mouseYpercentage = event.pageY / windowHeight * 50;
  
  let radialGradient1 = document.querySelector('.radial-gradient');
  let radialGradient2 = document.querySelector('.radial-gradient-2');
  
  radialGradient1.style.background = 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #FC7CFF, rgba(218, 113, 231, 0.00))';
  radialGradient2.style.background = 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, rgba(146, 112, 243, 0.74), rgba(77, 87, 209, 0.00))';
});











/*

// hero animation

const bgElement1 = document.querySelector('.bg-1');
const bgElement2 = document.querySelector('.bg-2');
let marginLeftValue1 = 0; // Начальное значение margin-left для .bg-1
let marginLeftValue2 = 0; // Начальное значение margin-left для .bg-2

// Функция для анимации .bg-1 (влево)
function animateMarginLeft1() {
  marginLeftValue1 += 3; // Увеличиваем значение margin-left на 100px (или любое другое значение)
  bgElement1.style.marginLeft = marginLeftValue1 + 'px';

  // Если достигнута необходимая позиция, останавливаем анимацию
  if (marginLeftValue1 < 400) { // Замените на нужное вам значение
    requestAnimationFrame(animateMarginLeft1);
  }
}

// Функция для анимации .bg-2 (вправо)
function animateMarginLeft2() {
  marginLeftValue2 -= 3; // Увеличиваем значение margin-left на 100px (или любое другое значение)
  bgElement2.style.marginLeft = marginLeftValue2 + 'px';

  // Если достигнута необходимая позиция, останавливаем анимацию
  if (marginLeftValue2 < 100) { // Замените на нужное вам значение
    requestAnimationFrame(animateMarginLeft2);
  }
}

// Запускаем анимации
animateMarginLeft1(); // Для .bg-1 (влево)
animateMarginLeft2(); // Для .bg-2 (вправо)

*/



/*

// Plans Dropdown 

document.addEventListener("DOMContentLoaded", function () {
  const listItems = document.querySelectorAll(".plans__list-item");

  listItems.forEach(function (item) {
    const head = item.querySelector(".plans__list-head");

    head.addEventListener("click", function () {
      listItems.forEach(function (otherItem) {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });
      item.classList.toggle("active");
    });
  });
});



// Line animatiton

function toggleAnimatedBorderForContainer1() {
  const container1 = document.querySelector('.integrations__items-row.right-scroll:first-child');
  if (!container1) return;
  const items1 = container1.querySelectorAll('.integrations__items-item.animated-border');

  if (items1.length > 0) {
    items1.forEach((item) => {
      item.classList.remove('animated-border');
    });
  }

  const items = container1.querySelectorAll('.integrations__items-item');
  const randomIndex = Math.floor(Math.random() * items.length);
  const randomItem = items[randomIndex];

  randomItem.classList.add('animated-border');
}

function toggleAnimatedBorderForContainer2() {
  const container2 = document.querySelector('.integrations__items-row.left-scroll:nth-child(2)');
  if (!container2) return;

  const items2 = container2.querySelectorAll('.integrations__items-item.animated-border');

  if (items2.length > 0) {
    items2.forEach((item) => {
      item.classList.remove('animated-border');
    });
  }

  const items = container2.querySelectorAll('.integrations__items-item');

  const randomIndex = Math.floor(Math.random() * items.length);
  const randomItem = items[randomIndex];

  randomItem.classList.add('animated-border');
}

setInterval(toggleAnimatedBorderForContainer1, 1800);
setInterval(toggleAnimatedBorderForContainer2, 2000);





/*
const gradient1 = document.getElementById('gradient-1');
const gradient2 = document.getElementById('gradient-2');
const peopleBlock = document.querySelector('.integrations__people');

peopleBlock.addEventListener('mousemove', (event) => {
  const mouseX = event.clientX - peopleBlock.getBoundingClientRect().left;
  const mouseY = event.clientY - peopleBlock.getBoundingClientRect().top;
  
  // Обчислення позиції градієнту відносно курсора
  const gradientX = mouseX - gradient1.offsetWidth / 2;
  const gradientY = mouseY - gradient1.offsetHeight / 2;

  // Оновлення стилів позиції градієнтів
  gradient1.style.left = `${gradientX}px`;
  gradient1.style.top = `${gradientY}px`;
  
  gradient2.style.left = `${gradientX}px`;
  gradient2.style.top = `${gradientY}px`;
}); 





// hubspot js 

(function () {
  // Variables
  var nav = document.querySelector('.header__navigation');
  var langSwitcher = document.querySelector('.header__language-switcher');
  var search = document.querySelector('.header__search');
  var allToggles = document.querySelectorAll('.header--toggle');
  var navToggle = document.querySelector('.header__navigation--toggle');
  var langToggle = document.querySelector('.header__language-switcher--toggle');
  var searchToggle = document.querySelector('.header__search--toggle');
  var closeToggle = document.querySelector('.header__close--toggle');
  var allElements = document.querySelectorAll(
    '.header--element, .header--toggle'
  );
  var emailGlobalUnsub = document.querySelector('input[name="globalunsub"]');

  // Functions

  // Function for executing code on document ready
  function domReady(callback) {
    if (['interactive', 'complete'].indexOf(document.readyState) >= 0) {
      callback();
    } else {
      document.addEventListener('DOMContentLoaded', callback);
    }
  }

  // Function for toggling mobile navigation
  function toggleNav() {
    allToggles.forEach(function (toggle) {
      toggle.classList.toggle('hide');
    });

    nav.classList.toggle('open');
    navToggle.classList.toggle('open');

    closeToggle.classList.toggle('show');
  }

  // Function for toggling mobile language selector
  function toggleLang() {
    allToggles.forEach(function (toggle) {
      toggle.classList.toggle('hide');
    });

    langSwitcher.classList.toggle('open');
    langToggle.classList.toggle('open');

    closeToggle.classList.toggle('show');
  }

  // Function for toggling mobile search field
  function toggleSearch() {
    allToggles.forEach(function (toggle) {
      toggle.classList.toggle('hide');
    });

    search.classList.toggle('open');
    searchToggle.classList.toggle('open');

    closeToggle.classList.toggle('show');
  }

  // Function for the header close option on mobile
  function closeAll() {
    allElements.forEach(function (element) {
      element.classList.remove('hide', 'open');
    });

    closeToggle.classList.remove('show');
  }

  // Function to disable the other checkbox inputs on the email subscription system page template
  function toggleDisabled() {
    var emailSubItem = document.querySelectorAll('#email-prefs-form .item');

    emailSubItem.forEach(function (item) {
      var emailSubItemInput = item.querySelector('input');

      if (emailGlobalUnsub.checked) {
        item.classList.add('disabled');
        emailSubItemInput.setAttribute('disabled', 'disabled');
        emailSubItemInput.checked = false;
      } else {
        item.classList.remove('disabled');
        emailSubItemInput.removeAttribute('disabled');
      }
    });
  }

  // Execute JavaScript on document ready
  domReady(function () {
    if (!document.body) {
      return;
    } else {
      // Function dependent on language switcher
      if (langSwitcher) {
        langToggle.addEventListener('click', toggleLang);
      }

      // Function dependent on navigation
      if (navToggle) {
        navToggle.addEventListener('click', toggleNav);
      }

      // Function dependent on search field
      if (searchToggle) {
        searchToggle.addEventListener('click', toggleSearch);
      }

      // Function dependent on close toggle
      if (closeToggle) {
        closeToggle.addEventListener('click', closeAll);
      }

      // Function dependent on email unsubscribe from all input
      if (emailGlobalUnsub) {
        emailGlobalUnsub.addEventListener('change', toggleDisabled);
      }
    }
  });
})();


*/