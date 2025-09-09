// Klaviyo scripts
document.querySelector('.klaviyo_form_trigger_1').addEventListener('click', function (){
  window._klOnsite = window._klOnsite || []; 
  window._klOnsite.push(['openForm', 'WUYMW8']);
});

document.querySelector('.klaviyo_form_trigger_2').addEventListener('click', function (){
  window._klOnsite = window._klOnsite || []; 
  window._klOnsite.push(['openForm', 'WUYMW8']);
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

// 'Projects' background gradient follow cursor
const highlightContainers = document.querySelectorAll('.highlight-container');

highlightContainers.forEach((container) => {
  container.addEventListener('mousemove', (e) => {
    const { left, top, width, height } = container.getBoundingClientRect();

    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;

    let posX = (mouseX / width) * 100;
    let posY = (mouseY / height) * 100;

    const centerX = 50;
    const centerY = 50;
    const maxShift = 15;

    posX = centerX + (posX - centerX) * (maxShift / 60);
    posY = centerY + (posY - centerY) * (maxShift / 60);

    container.style.background = container.classList.contains('highlight-container-2')
      ? `radial-gradient(circle at ${posX}% ${posY}%, #fff 0%, var(--light) 70%)`
      : `radial-gradient(circle at ${posX}% ${posY}%, rgba(13,131,231,1) 0%, var(--slate) 48%)`;
  });

  container.addEventListener('mouseleave', () => {
    container.style.background = container.classList.contains('highlight-container-2')
      ? `radial-gradient(circle at 50% 50%, #fff 0%, var(--light) 70%)`
      : `radial-gradient(circle at 50% 50%, rgba(13,131,231,1) 0%, var(--slate) 48%)`;
  });
});


// Scroll Gradient
// Linear interpolation function
function lerp(start, end, t) {
  return start + (end - start) * t;
}

window.addEventListener("scroll", () => {
  const container = document.querySelector(".highlight-container-2");
  if (!container) return;
  
  // Get container position and dimensions
  const rect = container.getBoundingClientRect();
  const containerTop = rect.top + window.scrollY;
  const containerHeight = container.offsetHeight;
  
  // Calculate the scroll fraction relative to the container
  let scrollFraction = (window.scrollY - containerTop) / containerHeight;
  scrollFraction = Math.max(0, Math.min(1, scrollFraction));
  
  // Make dark blue fully appear by 75% scroll within the container.
  const t = Math.min(1, scrollFraction / 0.75);
  
  // --- Stop 0 (top) and Stop 100 (bottom) --- 
  // Initial (bright blue) for both stops: #258be493 = rgba(37,139,228,0.576)
  // Final for stop 0: #0a1933 = rgba(10,25,51,1)
  // Final for stop 100: #0a1933af = rgba(10,25,51,0.686)
  const stop0Initial = { r: 37, g: 139, b: 228, a: 0.576 };
  const stop0Final   = { r: 10, g: 25,  b: 51,  a: 1 };
  
  const stop100Initial = { r: 37, g: 139, b: 228, a: 0.450 };
  const stop100Final   = { r: 10, g: 25,  b: 51,  a: 1 };
  
  const r0 = Math.round(lerp(stop0Initial.r, stop0Final.r, t));
  const g0 = Math.round(lerp(stop0Initial.g, stop0Final.g, t));
  const b0 = Math.round(lerp(stop0Initial.b, stop0Final.b, t));
  const a0 = lerp(stop0Initial.a, stop0Final.a, t).toFixed(3);
  
  const r100 = Math.round(lerp(stop100Initial.r, stop100Final.r, t));
  const g100 = Math.round(lerp(stop100Initial.g, stop100Final.g, t));
  const b100 = Math.round(lerp(stop100Initial.b, stop100Final.b, t));
  const a100 = lerp(stop100Initial.a, stop100Final.a, t).toFixed(3);
  
  const stop0Color = `rgba(${r0}, ${g0}, ${b0}, ${a0})`;
  const stop100Color = `rgba(${r100}, ${g100}, ${b100}, ${a100})`;
  
  // --- Middle stop ---
  // Initially fully transparent (using dark blue’s RGB: 10,25,51), then transitions to #0a1933a2.
  // #0a1933a2 = rgba(10,25,51,0.635)
  const midInitial = { r: 10, g: 25, b: 51, a: 0.2 };
  const midFinal   = { r: 10, g: 25, b: 51, a: .98 };
  
  const rMid = midInitial.r; // remains constant
  const gMid = midInitial.g;
  const bMid = midInitial.b;
  const aMid = lerp(midInitial.a, midFinal.a, t).toFixed(3);
  
  const midColor = `rgba(${rMid}, ${gMid}, ${bMid}, ${aMid})`;
  
  // Build the new background gradient
  // Using the same percentages as the original: 0%, 35% to 70%, 100%
  const newGradient = `linear-gradient(180deg, ${stop0Color} 0%, ${midColor} 30% 70%, ${stop100Color} 100%), url(/media/slc.jpeg)`;
  
  container.style.background = newGradient;
});


// 'Projects' UX/UI Slider
const slides = document.querySelectorAll('.slide');
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) {
        slide.classList.add('active');
      }
    });
  }

  document.getElementById('prevBtn').addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  });

  document.getElementById('nextBtn').addEventListener('click', () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  });

  showSlide(current);


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
    div.style.transform = `perspective(600px) rotateX(${offsetY * -2.5}deg) rotateY(${offsetX * 2.5}deg)`;

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

