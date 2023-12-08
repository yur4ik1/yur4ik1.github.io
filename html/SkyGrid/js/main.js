

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
  const footerSection = document.querySelector('.triggers');
  const formSection = document.querySelector('.form');

  if (!headerMain) {
    return;
  }

  const windowHeight = window.innerHeight;
  const scrollPosition = window.scrollY;

  const isInPlansSection = plansSection && scrollPosition >= plansSection.offsetTop && scrollPosition < plansSection.offsetTop + plansSection.offsetHeight;
  const isInIntegrationsSection = integrationsSection && scrollPosition >= integrationsSection.offsetTop && scrollPosition < integrationsSection.offsetTop + integrationsSection.offsetHeight;
  const isInContactsSection = contactsSection && scrollPosition >= contactsSection.offsetTop && scrollPosition < contactsSection.offsetTop + contactsSection.offsetHeight;
  const isInFooterSection = footerSection && scrollPosition >= footerSection.offsetTop && scrollPosition < footerSection.offsetTop + footerSection.offsetHeight;
  const isInFormSection = formSection && scrollPosition >= formSection.offsetTop && scrollPosition < formSection.offsetTop + formSection.offsetHeight;

  if (isInPlansSection || isInIntegrationsSection || isInContactsSection || isInFooterSection) {
    headerMain.classList.add('dark');
  } else {
    headerMain.classList.remove('dark');
  }
}

window.addEventListener('scroll', toggleDarkHeader);
window.addEventListener('load', toggleDarkHeader);



// faq

let faqItems = document.querySelectorAll(".faq__items-item");

if (faqItems) {
  faqItems.forEach(function (item) {
    item.addEventListener("click", function () {
      faqItems.forEach(function (otherItem) {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });

      if (item.classList.contains("active")) {
        item.classList.remove("active");
      } else {
        item.classList.add("active");
      }
    });
  });
}



// scroll to id

function smoothScrollTo(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    document.body.style.overflow = 'hidden';

    element.scrollIntoView({ behavior: 'smooth', block: 'start' });

    setTimeout(() => {
      document.body.style.overflow = '';
    }, 1000);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash;
  if (hash) {
    window.history.pushState("", document.title, window.location.pathname + window.location.search);
    setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) {
        document.body.style.overflow = 'hidden';

        element.scrollIntoView({
          behavior: 'smooth'
        });

        setTimeout(() => {
          document.body.style.overflow = '';
        }, 1000); 
      }
    }, 500);
  }
});


// redirect for link

document.addEventListener('DOMContentLoaded', () => {
  // Обробка кліку на посилання з класом trigger-5
  document.querySelectorAll('.trigger-5').forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      // Відкриття посилання у новій вкладці
      window.open('/suppliers.html?trigger5Clicked=true#shops', '_blank');
    });
  });

  // Перевірка URL на наявність параметра trigger5Clicked
  const urlParams = new URLSearchParams(window.location.search);
  if (window.location.pathname.endsWith('/suppliers.html') && urlParams.get('trigger5Clicked') === 'true') {
    // Додавання класу deactivate до shop-item
    const countryTables = document.querySelectorAll('.shops__table-country');
    countryTables.forEach(table => {
      const shopItems = table.querySelectorAll('.shop-item');
      if (shopItems.length > 5) {
        for (let i = 5; i < shopItems.length; i++) {
          shopItems[i].classList.add('deactivate');
        }
      }
    });

  }
});


