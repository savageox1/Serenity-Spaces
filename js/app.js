// header
// navbar toogle in mobile
let navbar = document.querySelector("[data-navbar]");
let navToggler = document.querySelector("[data-nav-toggler]");
navToggler.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// header scroll state
let header = document.querySelector("[data-header]");
window.addEventListener("scroll", () => {
  header.classList.toggle("active", window.scrollY > 0);
});

// add to favorite button toggle
let toggleBtns = document.querySelectorAll("[data-toggle-btn]");
toggleBtns.forEach((toggleBtn) => {
  toggleBtn.addEventListener("click", () => {
      toggleBtn.classList.toggle("active");
  });
});

// footer 
let year = new Date().getFullYear();
let footerYear = document.querySelector(".copyright").lastElementChild;
footerYear.innerHTML = year;
