var button = document.querySelector(".header__toogle");
var nav = document.querySelector(".nav");

nav.classList.remove ("nav--show");

button.addEventListener("click", function(evt) {
  nav.classList.toggle("nav--show");
});
