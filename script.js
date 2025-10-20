// Typing animation
var typed = new Typed(".typing", {
  strings: ["Python Developer", "AI Enthusiast", "Machine Learning Engineer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

// Navigation active link & smooth scroll
const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
    const id = this.getAttribute('href').slice(1);
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  });
});

// Section reveal animation
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('in-view');
  });
}, { threshold: 0.25 });
sections.forEach(sec => observer.observe(sec));

// GSAP animations
document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".hello, .my-profession, .section-title", {
    opacity: 0,
    y: 40,
    duration: 1.2,
    ease: "power3.out",
    stagger: 0.3
  });
});
