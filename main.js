"use strict";

const headingPrimary = document.querySelector(".heading-primary");

// let i = 0;

const typeWriterHeading = function (i) {
  const speed = 120;
  const txt = "Happy Birthday Chiena!";
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
