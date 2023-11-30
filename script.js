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

title.innerHTML = title.innerText.split('').map((letter, idx) => `<span style="transition-delay:${idx * 60}ms; text-align: center;">${letter}</span>`).join('');

window.addEventListener('scroll', wave);

function wave() {
  const triggerBottom = window.innerHeight / 5 * 4;
  const elTop = title.getBoundingClientRect().top;
  const rect = title.getBoundingClientRect();
  const isInViewport = rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth);

  Array.from(title.children).forEach((el) => {
    if (elTop < triggerBottom) {
      el.classList.add('show');
    }
  });
}

// 'Projects' Slide In Animation
const websites = document.querySelectorAll('.website')

window.addEventListener('scroll', slideIn);

function slideIn() {
  triggerBottom = window.innerHeight / 5 * 4.8;

  websites.forEach((el, idx) => {
    const elTop = el.getBoundingClientRect().top;

    // el.style.transitionDelay = `${idx * 100}ms`;

    if (elTop < triggerBottom) {
      el.classList.add('show');
    } else {
      el.classList.remove('show');
    }
  });
}

// 'Projects' filter results
const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  input.addEventListener('change', filterResults);
});

function filterResults() {
  const results = document.querySelector('.results');
  if (inputs[0].checked) {
    results.innerHTML = '';
  } else {
    results.innerHTML = `displaying results for: ${inputs[1].checked ? 'HTML' : ''} ${inputs[2].checked ? 'CSS/SASS' : ''} ${inputs[3].checked ? 'JavaScript' : ''} ${inputs[4].checked ? 'TypeScript' : ''} ${inputs[5].checked ? 'React' : ''} ${inputs[6].checked ? 'WordPress' : ''} ${inputs[7].checked ? 'API' : ''}`;
  }

  // Add to end of results.innerHTML when I have more projects
  // ${inputs[8].checked ? 'Node.js' : ''} ${inputs[9].checked ? 'Shell' : ''} ${inputs[10].checked ? 'Bootstrap' : ''}

  if (inputs[0].checked) {
    websites.forEach((el) => {
      el.classList.remove('hide');
    });
  } else if (inputs[1].checked) {
    websites.forEach((el) => {
      el.classList.contains('html') ? el.classList.remove('hide') : el.classList.add('hide');
    });
  } else if (inputs[2].checked) {
    websites.forEach((el) => {
      el.classList.contains('css') ? el.classList.remove('hide') : el.classList.add('hide');
    });
  } else if (inputs[3].checked) {
    websites.forEach((el) => {
      el.classList.contains('javascript') ? el.classList.remove('hide') : el.classList.add('hide');
    });
  } else if (inputs[4].checked) {
    websites.forEach((el) => {
      el.classList.contains('typescript') ? el.classList.remove('hide') : el.classList.add('hide');
    });
  } else if (inputs[5].checked) {
    websites.forEach((el) => {
      el.classList.contains('react') ? el.classList.remove('hide') : el.classList.add('hide');
    });
  } else if (inputs[6].checked) {
    websites.forEach((el) => {
      el.classList.contains('wordpress') ? el.classList.remove('hide') : el.classList.add('hide');
    });
  } else if (inputs[7].checked) {
    websites.forEach((el) => {
      el.classList.contains('api') ? el.classList.remove('hide') : el.classList.add('hide');
    });
  // } else if (inputs[8].checked) {
  //   websites.forEach((el) => {
  //     el.classList.contains('node') ? el.classList.remove('hide') : el.classList.add('hide');
  //   });
  // } else if (inputs[9].checked) {
  //   websites.forEach((el) => {
  //     el.classList.contains('shell') ? el.classList.remove('hide') : el.classList.add('hide');
  //   });
  // } else if (inputs[10].checked) {
  //   websites.forEach((el) => {
  //     el.classList.contains('bootstrap') ? el.classList.remove('hide') : el.classList.add('hide');
  //   });
  } else {
    websites.forEach((el) => {
      el.classList.add('hide');
    });
  }
}


// 'Resume' Grow Animation
const resume = document.getElementById('resume');
const circle = document.getElementById('ryan-circle');
const clickMe = document.getElementById('click-me');
const description = document.getElementById('description');

circle.addEventListener('click', grow);
clickMe.addEventListener('click', grow);

// q: is mouse-over the right event to use here?
function grow() {
  circle.style.transform = 'scale(0)';
  circle.style.display = 'none';
  clickMe.style.display = 'none';
  resume.style.display = 'inline';
  description.style.display = 'block';
  clickMe.style.display = 'none';
}

