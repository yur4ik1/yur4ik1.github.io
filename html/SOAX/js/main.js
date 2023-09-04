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

// submenu

// Отримуємо всі елементи li.sub і їх підменю
var subMenuItems = document.querySelectorAll('.header__menu-item.sub');

subMenuItems.forEach(function (item) {
  item.addEventListener('click', function () {

    var submenu = this.querySelector('.submenu');

    if (submenu) {
      if (submenu.classList.contains('active')) {
        submenu.classList.remove('active');
      } else {
        closeOtherSubmenus(item);
        submenu.classList.add('active');
      }
    }
  });
});


function closeOtherSubmenus(currentItem) {
  subMenuItems.forEach(function (item) {
    if (item !== currentItem) {
      var submenu = item.querySelector('.submenu');
      if (submenu && submenu.classList.contains('active')) {
        submenu.classList.remove('active');
      }
    }
  });
}


// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

class TextScramble {
  constructor(el) {
    this.el = el
    this.chars = 'xoyof'
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
  'xoyof',
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

