// Navigation

const nav = document.querySelector(".main-nav");
const navToggler = document.querySelector(".nav-toggler");
const togglerImg = navToggler.querySelector("img");
const navLinks = document.querySelectorAll(".main-nav a");
navLinks.forEach((link) => link.addEventListener("click", toggleNav));

navToggler.addEventListener("click", toggleNav);

function toggleNav() {
  nav.classList.toggle("active");
  if (togglerImg.src.includes("hamburger")) {
    togglerImg.src = "ressources/cross.svg";
  } else {
    togglerImg.src = "ressources/hamburger.svg";
  }
}

// Smooth Scroll Links

const smoothScrollLinks = [
  ...navLinks,
  ...document.querySelectorAll(".hero a"),
];
const sections = [...document.querySelectorAll("section")];

smoothScrollLinks.forEach((link) =>
  link.addEventListener("click", addSmoothScroll)
);

function addSmoothScroll(e) {
  e.preventDefault();
  const linkHref = e.target.getAttribute("href").substring(1);
  console.log(linkHref);
  window.scrollTo({
    top: document.getElementById(linkHref).offsetTop * 0.95,
    behavior: "smooth",
  });
}

// Slideshow

const slideShowImages = document.querySelectorAll(
  ".slideshow-img-container img"
);
const fadeSlideDots = document.querySelectorAll(".fade-slide-dots .dot");
fadeSlideDots.forEach((dot) => dot.addEventListener("click", fadeSlideShow));

let currentFadeIndex = 1;
let fadeIntervalID; // Pour le set interval :
// on veut reset l'interval de changement des slides si on click sur un des dots

function fadeSlideShow(e) {
  // e = objet Event fourni par addEventListener
  slideShowImages[currentFadeIndex - 1].classList.remove("active");
  fadeSlideDots[currentFadeIndex - 1].classList.remove("active");

  if (e) {
    // e = objet Event fourni par addEventListener
    currentFadeIndex = e.target.getAttribute("data-fadeIndex");
    clearInterval(fadeIntervalID);
    fadeIntervalID = setInterval(fadeSlideShow, 3500);
  } else {
    currentFadeIndex++;
    if (currentFadeIndex > slideShowImages.length) {
      currentFadeIndex = 1;
    }
  }
  slideShowImages[currentFadeIndex - 1].classList.add("active");
  fadeSlideDots[currentFadeIndex - 1].classList.add("active");
}

fadeIntervalID = window.setInterval(fadeSlideShow, 3500);
