// Smooth scroll to info section
document.getElementById("learnMore").addEventListener("click", function () {
  window.scrollTo({
    top: document.querySelector(".info-section").offsetTop,
    behavior: "smooth",
  });
});

// Back to Top button
const backToTop = document.getElementById("backToTop");
window.onscroll = function() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
};
backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Slideshow function
let slideIndex = { services: 0, cre: 0, theater: 0 };
let slideshows = ['services', 'cre', 'theater'];

function showSlides(section) {
    const slides = document.querySelectorAll(`#${section}-slideshow .slide`);
    slides.forEach(slide => (slide.style.display = "none"));
    slideIndex[section]++;
    if (slideIndex[section] > slides.length) { slideIndex[section] = 1; }
    slides[slideIndex[section]-1].style.display = "block";
    setTimeout(() => showSlides(section), 4000);
}

function plusSlides(n, section) {
    const slides = document.querySelectorAll(`#${section}-slideshow .slide`);
    slideIndex[section] += n;
    if (slideIndex[section] > slides.length) { slideIndex[section] = 1; }
    if (slideIndex[section] < 1) { slideIndex[section] = slides.length; }
    slides.forEach(slide => (slide.style.display = "none"));
    slides[slideIndex[section]-1].style.display = "block";
}

slideshows.forEach(showSlides);
// Fade-in on scroll
const fadeEls = document.querySelectorAll('.fade-in');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 });

fadeEls.forEach(el => fadeObserver.observe(el));
// Back to Top button behavior
const back = document.getElementById("backToTop");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTop.style.display = "block";
    backToTop.style.opacity = "1";
  } else {
    backToTop.style.opacity = "0";
    backToTop.style.display = "none";
  }
};

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

