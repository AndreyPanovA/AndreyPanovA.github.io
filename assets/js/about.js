window.addEventListener("load", function () {
  document.querySelector("body").classList.add("loaded");
});
setTimeout(() => {
  document.querySelector("body").classList.add("loaded");
}, 8000);
const burg = document.querySelector(".burger");
const menue = document.querySelector("nav");
const closer = document.querySelector(".modalClose");
const body = document.querySelector(".blur_container");
burg.addEventListener("click", () => {
  menue.classList.toggle("menuActive");
  burg.classList.toggle("move");
  burg.classList.toggle("xer");
  body.classList.toggle("blur");
  body.style.border = "20px solid red;";
  closer.style.display = "block";
});
closer.addEventListener("click", () => {
  closer.style.display = "none";
  burg.classList.remove("move");
  burg.classList.remove("xer");
  menue.classList.remove("menuActive");
  body.classList.remove("blur");
});
