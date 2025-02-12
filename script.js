// 'Hero' Brightness Cursor Animation
// document.addEventListener("mousemove", (e) => {
//   const hero = document.querySelector(".hero");
//   const { width, height, left, top } = hero.getBoundingClientRect();
  
//   const xPercent = ((e.clientX - left) / width) * 100;
//   const yPercent = ((e.clientY - top) / height) * 100;

//   hero.style.setProperty('--brightness', 0.8 + (xPercent / 500));
// });


// 'Hero' Hue Cursor Animation
document.addEventListener("mousemove", (e) => {
  const hero = document.querySelector(".hero");
  const { width, left } = hero.getBoundingClientRect();
  
  const hue = ((e.clientX - left) / width) * 30 - 25; // Adjust hue shift range
  hero.style.setProperty('--hue-shift', hue + "deg");
});


// Scroll 'About' Animation
const sections = [document.querySelector('.about-content'), document.querySelector('.other-skills-container')];

window.addEventListener('scroll', fadeIn);

function fadeIn() {
  const triggerBottom = window.innerHeight / 5 * 4;

  sections.forEach(section => {
    if (!section) return; // Ensure section exists

    const containers = Array.from(section.children);

    containers.forEach((el, index) => {
      const elTop = el.getBoundingClientRect().top;

      if (elTop < triggerBottom) {
        setTimeout(() => {
          el.classList.add('show');
        }, index * 170); // Adjust delay timing (150ms between elements)
      } else {
        el.classList.remove('show');
      }
    });
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
// const websites = document.querySelectorAll('.website')

// window.addEventListener('scroll', slideIn);

// function slideIn() {
//   triggerBottom = window.innerHeight / 5 * 4.8;

//   websites.forEach((el, idx) => {
//     const elTop = el.getBoundingClientRect().top;

//     el.style.transitionDelay = `${idx * 60}ms`;

//     if (elTop < triggerBottom) {
//       el.classList.add('show');
//     } else {
//       el.classList.remove('show');
//     }
//   });
// }

// 'Projects' filter results
// const inputs = document.querySelectorAll('input');

// inputs.forEach((input) => {
//   input.addEventListener('change', filterResults);
// });

// function filterResults() {
//   const results = document.querySelector('.results');
//   if (inputs[0].checked) {
//     results.innerHTML = '';
//   } else {
//     results.innerHTML = `displaying results for: ${inputs[1].checked ? 'HTML' : ''} ${inputs[2].checked ? 'CSS/SASS' : ''} ${inputs[3].checked ? 'JavaScript' : ''} ${inputs[4].checked ? 'TypeScript' : ''} ${inputs[5].checked ? 'React' : ''} ${inputs[6].checked ? 'WordPress' : ''} ${inputs[7].checked ? 'API' : ''}`;
//   }

//   if (inputs[0].checked) {
//     websites.forEach((el) => {
//       el.classList.remove('hide');
//     });
//   } else if (inputs[1].checked) {
//     websites.forEach((el) => {
//       el.classList.contains('html') ? el.classList.remove('hide') : el.classList.add('hide');
//     });
//   } else if (inputs[2].checked) {
//     websites.forEach((el) => {
//       el.classList.contains('css') ? el.classList.remove('hide') : el.classList.add('hide');
//     });
//   } else if (inputs[3].checked) {
//     websites.forEach((el) => {
//       el.classList.contains('javascript') ? el.classList.remove('hide') : el.classList.add('hide');
//     });
//   } else if (inputs[4].checked) {
//     websites.forEach((el) => {
//       el.classList.contains('typescript') ? el.classList.remove('hide') : el.classList.add('hide');
//     });
//   } else if (inputs[5].checked) {
//     websites.forEach((el) => {
//       el.classList.contains('react') ? el.classList.remove('hide') : el.classList.add('hide');
//     });
//   } else if (inputs[6].checked) {
//     websites.forEach((el) => {
//       el.classList.contains('wordpress') ? el.classList.remove('hide') : el.classList.add('hide');
//     });
//   } else if (inputs[7].checked) {
//     websites.forEach((el) => {
//       el.classList.contains('api') ? el.classList.remove('hide') : el.classList.add('hide');
//     });
//   } else {
//     websites.forEach((el) => {
//       el.classList.add('hide');
//     });
//   }
// }

// 'Projects' background gradient follow cursor
const highlightContainers = document.querySelectorAll('.highlight-container, .highlight-container-2');

highlightContainers.forEach((container) => {
  container.addEventListener('mousemove', (e) => {
    const { left, top, width, height } = container.getBoundingClientRect();

    // Get mouse position relative to the container
    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;

    // Normalize to percentages (0% to 100%)
    let posX = (mouseX / width) * 100;
    let posY = (mouseY / height) * 100;

    // **Limit movement** by blending with a fixed center position
    const centerX = 50; // Default center
    const centerY = 50;
    const maxShift = 10; // Max movement range in percentage

    posX = centerX + (posX - centerX) * (maxShift / 50); // Adjust to stay close to center
    posY = centerY + (posY - centerY) * (maxShift / 50);

    // Update gradient position dynamically
    container.style.background = container.classList.contains('highlight-container-2')
      ? `radial-gradient(circle at ${posX}% ${posY}%, rgb(149, 83, 225) 0%, var(--slate) 70%)`
      : `radial-gradient(circle at ${posX}% ${posY}%, rgba(13,131,231,1) 0%, var(--slate) 37%)`;
  });

  container.addEventListener('mouseleave', () => {
    // Reset gradient to its center when the mouse leaves
    container.style.background = container.classList.contains('highlight-container-2')
      ? `radial-gradient(circle at 50% 50%, rgb(149, 83, 225) 0%, var(--slate) 70%)`
      : `radial-gradient(circle at 50% 50%, rgba(13,131,231,1) 0%, var(--slate) 37%)`;
  });
});


// 'Projects' 3D Hover Animation
const websiteDiv = document.querySelectorAll('.website');

websiteDiv.forEach((div) => {
  div.addEventListener('mousemove', (e) => {
    const { left, top, width, height } = div.getBoundingClientRect();
    
    // Get mouse position relative to the div
    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;
    
    // Normalize mouse position to range from -1 to 1
    const offsetX = (mouseX / width) * 2 - 1;
    const offsetY = (mouseY / height) * 2 - 1;

    // Apply transform to create the 3D effect
    div.style.transform = `perspective(600px) rotateX(${offsetY * 2}deg) rotateY(${offsetX * 2}deg)`;

    // Dynamically adjust box-shadow to match the tilt direction
    const shadowX = -offsetX * 20; // Shadow moves opposite to the cursor
    const shadowY = -offsetY * 20;
    const blur = 30; // Blurriness of shadow

    div.style.boxShadow = `${shadowX}px ${shadowY}px ${blur}px rgba(0, 0, 0, 0.3)`;
  });

  div.addEventListener('mouseleave', () => {
    // Reset transform and shadow when the cursor leaves
    div.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg)';
    div.style.boxShadow = '10px 10px 15px rgba(0, 0, 0, 0.2)';
  });
});


// 'Projects' load more button
document.addEventListener("DOMContentLoaded", () => {
  const websites = document.querySelectorAll(".website");
  const showMoreBtn = document.getElementById("show-more-btn");
  let visibleCount = 4; // Number of initially visible websites

  // Ensure the first four websites are immediately visible
  websites.forEach((website, index) => {
    if (index < visibleCount) {
      website.style.display = "block";
      setTimeout(() => website.classList.add("visible"), 10); // Tiny delay to trigger transition
    } else {
      website.style.display = "none"; // Hide the rest initially
    }
  });

  showMoreBtn.addEventListener("click", () => {
    let nextCount = visibleCount + 4;

    websites.forEach((website, index) => {
      if (index >= visibleCount && index < nextCount) {
        website.style.display = "block";

        // Delay to allow `display: block` to register before triggering transition
        setTimeout(() => {
          website.classList.add("visible");
        }, (index - visibleCount) * 150); // Stagger effect
      }
    });

    visibleCount = nextCount;

    if (visibleCount >= websites.length) {
      showMoreBtn.style.display = "none";
    }
  });
});


// 'Resume' Grow Animation
const resume = document.getElementById('resume');
const circle = document.getElementById('ryan-circle');
const clickMe = document.getElementById('click-me');
const description = document.getElementById('description');
const x = document.getElementsByClassName('fa-solid fa-x');

circle.addEventListener('click', grow);
clickMe.addEventListener('click', grow);
x[0].addEventListener('click', collapse);

function grow() {
  circle.style.transform = 'scale(0)';
  circle.style.display = 'none';
  clickMe.style.display = 'none';
  resume.style.display = 'inline';
  description.style.display = 'block';
  clickMe.style.display = 'none';

  if (description.style.display === 'block') {
    x[0].style.display = 'inline';
  };
}

function collapse() {
  resume.style.display = 'none';
  circle.style.transform = '';
  circle.style.display = 'inline';
  clickMe.style.display = 'inline';
  description.style.display = 'none';
  x[0].style.display = 'none';
}

