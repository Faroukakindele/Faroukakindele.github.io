const hamburmenu = document.querySelector(".hamburger");
const bar = document.querySelector(".bar");
const mobile_menu = document.querySelector(".navlist ul");
const nav = document.querySelector("#nav");
const hero = document.querySelector("#hero");
const Allsections = document.querySelectorAll("section");
hamburmenu.addEventListener("click", (e) => {
  hamburmenu.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});
const nav_link = document.querySelectorAll(".navlist a");

nav_link.forEach((link) =>
  link.addEventListener("click", (e) => {
    mobile_menu.classList.remove("active");
    hamburmenu.classList.remove("active");
  })
);

// sticky header
const navHeight = nav.getBoundingClientRect().height;
const headerCallBack = (entries, observer) => {
  const [entry] = entries;
  if (entry.isIntersecting) {
    nav.classList.remove("color");
  } else {
    nav.classList.add("color");
  }
};
const headerOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};
const headerObserver = new IntersectionObserver(
  headerCallBack,
  headerOptions
).observe(hero);

// smooth reveal

const sectionCallback = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("reveal");
  observer.unobserve(entry.target);
};
const sectionOptions = {
  root: null,
  threshold: 0.15,
};
const sectionReveal = new IntersectionObserver(sectionCallback, sectionOptions);
Allsections.forEach((section) => {
  section.classList.add("reveal");
  sectionReveal.observe(section);
});

// Adding Links
