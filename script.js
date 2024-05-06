document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
  
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  
    document.addEventListener('click', (event) => {
      if (!event.target.closest('.navbar')) {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
      }
    });
  });
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let index = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
}

nextBtn.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

// Show the first slide initially
showSlide(index);
