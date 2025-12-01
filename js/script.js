//////////////Set Current Year////////////////

const displayYearEl = document.querySelector(".current-year");
const currentYear = new Date().getFullYear();

displayYearEl.textContent = currentYear;

//////////////Mobile Navigation////////////////

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

//////////////Smooth Scrolling////////////////

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    //Scroll Back to the top

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    //Scroll to sections

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

//////////////Sticky Navigation////////////////

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  (entries) => {
    const bodyEl = document.body;
    const ent = entries[0];

    if (!ent.isIntersecting) {
      bodyEl.classList.add("sticky");
    } else {
      bodyEl.classList.remove("sticky");
    }
  },
  {
    root: null, // In the Viewport
    threshold: 0, //as soon as section moves out of viewport
    rootMargin: "-80px",
  }
);

obs.observe(sectionHeroEl);
