var button = document.querySelector(".menu-button");
var nav = document.querySelector(".nav");
var icon = document.querySelector(".menu-button__icon");

nav.classList.remove ("nav--show");
icon.classList.remove("menu-button__icon--close");
button.classList.remove("menu-button--nojs");

button.addEventListener("click", function(evt) {
  nav.classList.toggle("nav--show");
  if(icon.classList.contains("menu-button__icon--open")) {
    icon.classList.remove("menu-button__icon--open")
    icon.classList.add("menu-button__icon--close")
  }
  else {
    icon.classList.remove("menu-button__icon--close")
    icon.classList.add("menu-button__icon--open")
  };
});
