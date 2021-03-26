"use strict";

const headingPrimary = document.querySelector(".header__heading-primary");

// Auto-type
const typeWriterHeading = function (i) {
  const speed = 145;
  const txt = "Happy Birthday!";
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
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) curSlide = 0;
    else curSlide++;

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) curSlide = maxSlide - 1;
    else curSlide--;

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    createDots();
    activateDot(0);
    goToSlide(0);
  };
  init();

  // Event Handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    e.key === "ArrowRight" && nextSlide();
    e.key === "ArrowLeft" && prevSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
