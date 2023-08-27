const grayTextElement = document.querySelector('.gray');
const text = grayTextElement.textContent;

const chars = text.split('');
const coloredSpans = chars.map(char => {
  const charSpan = document.createElement('span');
  charSpan.textContent = char;
  charSpan.className = 'gray'; // Додаємо клас для анімації
  grayTextElement.appendChild(charSpan);
  return charSpan;
});

grayTextElement.textContent = ''; // Очищаємо вміст елементу

coloredSpans.forEach((charSpan, index) => {
  setTimeout(() => {
    charSpan.style.animationDelay = `${index * 0.5}s`; // Затримка для анімації
    charSpan.style.animationDuration = `${chars.length * 0.5}s`; // Тривалість анімації
    charSpan.style.opacity = 1; // Задаємо початкову прозорість
  }, index * 500);
});



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
      // Забираємо всі інші активні класи
      listItems.forEach(function (otherItem) {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });

      // Додаємо або видаляємо клас active
      item.classList.toggle("active");
    });
  });
});


