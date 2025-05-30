const open_btn = document.querySelector(".open-btn");
const close_btn = document.querySelector(".close-btn");
// each of the red, white, and black side panels have a class of "nav"
const nav = document.querySelectorAll(".nav");

// add class of "visible" to each of the 3 color nav elements on click of the hamburger menu
open_btn.addEventListener("click", () => {
  nav.forEach((nav_el) => nav_el.classList.add("visible"));
});

// remove class of "visible" when you click the X icon on the side panel
close_btn.addEventListener("click", () => {
  nav.forEach((nav_el) => nav_el.classList.remove("visible"));
});
