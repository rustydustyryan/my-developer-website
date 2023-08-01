// Scroll 'About' Animation
const about = document.querySelector('.about-content');

window.addEventListener('scroll', fadeIn);

function fadeIn() {
  const triggerBottom = window.innerHeight / 5 * 4;

  Array.from(about.children).forEach((el) => {
    const elTop = el.getBoundingClientRect().top;

    if (elTop < triggerBottom) {
      el.classList.add('show');
    } else {
      el.classList.remove('show');
    }
  });
}




// 'Project' Title Animation
const title = document.querySelector('.main-title');

title.innerHTML = title.innerText.split('').map((letter, idx) => `<span style="transition-delay:${idx * 60}ms">${letter}</span>`).join('');

window.addEventListener('scroll', wave);

function wave() {
  const triggerBottom = window.innerHeight / 5 * 4;
  const elTop = title.getBoundingClientRect().top;
  const rect = title.getBoundingClientRect();
  const isInViewport = rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth);

        console.log(window.innerHeight);

  Array.from(title.children).forEach((el) => {
    if (elTop < triggerBottom) {
      el.classList.add('show');
    }
  });
}



// 'Projects' Slide In Animation
const websites = document.querySelectorAll('.website')

window.addEventListener('scroll', slide);

function slide() {
  triggerBottom = window.innerHeight / 5 * 4.8;

  websites.forEach((el, idx) => {
    const elTop = el.getBoundingClientRect().top;

    // el.style.transitionDelay = `${idx * 130}ms`;

    if (elTop < triggerBottom) {
      el.classList.add('show');
    } else {
      el.classList.remove('show');
    }
  });
}

