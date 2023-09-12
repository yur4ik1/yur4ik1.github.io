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

// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

class TextScramble {
  constructor(el) {
    this.el = el
    this.chars = '!<>-_\\/[]{}—=+*^?#________'
    this.update = this.update.bind(this)
  }
  setText(newText) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }
  update() {
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}

// ——————————————————————————————————————————————————
// Example
// ——————————————————————————————————————————————————


const phrases = [
  '',
  'Unrestricted eb Axoyof',
]

const el = document.querySelector('.gray-text')
const fx = new TextScramble(el)

let counter = 0
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 800)
  })
  counter = (counter + 1) % phrases.length
}

next()
*/

// Products Tabs 

document.addEventListener("DOMContentLoaded", function () {
  const selectItems = document.querySelectorAll(".products__tabs-item");
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
*/

