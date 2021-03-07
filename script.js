"use strict";

const headingPrimary = document.querySelector(".header__heading-primary");

// Auto-type
const typeWriterHeading = function (i) {
  const speed = 120;
  const txt = "Happy Birthday Ina!";
  if (i < txt.length) {
    headingPrimary.innerHTML += txt.charAt(i);
    i++;

    setTimeout(function () {
      typeWriterHeading(i);
    }, speed);
  }
};

document.addEventListener("DOMContentLoaded", function () {
  typeWriterHeading(0);
});

headingPrimary.addEventListener("click", function () {
  if (headingPrimary.innerHTML !== "Happy Birthday Ina!") return;
  headingPrimary.innerHTML = "";
  typeWriterHeading(0);
});

// Cursor style
headingPrimary.addEventListener("mouseover", function () {
  if (headingPrimary.innerHTML !== "Happy Birthday Ina!")
    headingPrimary.style.cursor = "default";
  else headingPrimary.style.cursor = "pointer";
});

// Slider Component
const slider = function () {
  const slides = document.querySelectorAll(".slider__slide");

  const goToSlide = function () {
    slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
  };
  goToSlide();
};
slider();
