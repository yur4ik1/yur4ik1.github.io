

// Scroll header

const header = document.querySelector(".header");
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
let headerMain = document.querySelector('.header__main')

if (mobileMenu) {
  burder.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    burder.classList.toggle('active');
    headerMain.classList.toggle('act');

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


// price btn

let retailText = document.querySelector('.retail-text');
let wholesaleText = document.querySelector('.wholesale-text');
let filterBtn = document.querySelector('.price__filter-btn');
let priceCards = document.querySelectorAll('.price__cards');

if (filterBtn) {
    filterBtn.addEventListener('click', () => {
        retailText.classList.toggle('active');
        filterBtn.classList.toggle('active');
        wholesaleText.classList.toggle('active');

        // Перевіряємо, який елемент price__cards вже має клас 'active'
        priceCards.forEach((card) => {
            // Перемикаємо клас 'active' для кожного елемента
            card.classList.toggle('active');
        });
    });
}


// dark mode

function toggleDarkHeader() {
  const headerMain = document.querySelector('.header');
  const plansSection = document.querySelector('.banner');
  const integrationsSection = document.querySelector('.stories');
  const contactsSection = document.querySelector('.countrys');
  const footerSection = document.querySelector('.footer');

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
  } else {
    headerMain.classList.remove('dark');
  }
}

window.addEventListener('scroll', toggleDarkHeader);
window.addEventListener('load', toggleDarkHeader);