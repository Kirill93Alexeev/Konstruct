let button = document.querySelector(".mobile-burger");
let close = document.querySelector(".mobile-close");
let mobile_menu = document.querySelector(".mobile");
let navHome = document.querySelector(".nav-home");
let navAbout = document.querySelector(".nav-about");
let navSkills = document.querySelector(".nav-services");
let navPortfolio = document.querySelector(".nav-work");
let navContacts = document.querySelector(".nav-contact");

button.addEventListener("click", function () {
  mobile_menu.classList.remove("d-none");
});

close.addEventListener("click", function () {
  mobile_menu.classList.add("d-none");
});

navHome.addEventListener("click", function () {
  mobile_menu.classList.add("d-none");
});
navAbout.addEventListener("click", function () {
  mobile_menu.classList.add("d-none");
});
navSkills.addEventListener("click", function () {
  mobile_menu.classList.add("d-none");
});
navPortfolio.addEventListener("click", function () {
  mobile_menu.classList.add("d-none");
});
navContacts.addEventListener("click", function () {
  mobile_menu.classList.add("d-none");
});
