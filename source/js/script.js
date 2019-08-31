var button = document.querySelector(".menu-button__container");
var nav = document.querySelector(".nav");
var icon = document.querySelector(".menu-button");

nav.classList.remove ("nav--show");
icon.classList.remove("menu-button--close");

button.addEventListener("click", function(evt) {
  nav.classList.toggle("nav--show");
  if(icon.classList.contains("menu-button--open")) {
    icon.classList.remove("menu-button--open")
    icon.classList.add("menu-button--close")
  }
  else {
    icon.classList.remove("menu-button--close")
    icon.classList.add("menu-button--open")
  }
});
