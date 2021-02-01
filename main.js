"use strict";

const headingPrimary = document.querySelector(".heading-primary");

const typeWriter = function (i, domObj, speed) {
  console.log(domObj);
  const txt = domObj.textContent;
  if (i < txt.length) {
    domObj.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
};

document.addEventListener("DOMContentLoaded", function () {
  typeWriter(0, headingPrimary, 50);
});
