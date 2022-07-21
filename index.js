"use strict";
const allSection = document.querySelectorAll(".projects-items-header");
const footer = document.querySelector(".footer");
const observationCallBack = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.add("move");
  observer.unobserve(entry.target);
};
const observerOptions = {
  root: null,
  threshold: 0.15,
};
const observer = new IntersectionObserver(observationCallBack, observerOptions);
allSection.forEach((x) => {
  observer.observe(x);
});
