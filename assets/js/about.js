let burgerBtn = document.querySelector(".burger");
let menu = document.querySelector(".links");
let size = window.innerWidth;
let modalClose = document.querySelector(".modalClose");
let line1 = document.querySelector(".line1");
let line2 = document.querySelector(".line2");
let line3 = document.querySelector(".line3");
let sectionContent = document.querySelector(".sectionContent");
let logo = document.querySelector(".logo");

window.addEventListener("load", function () {
  document.querySelector("body").classList.add("loaded");
});
setInterval(() => {
  document.querySelector("body").classList.add("loaded");
}, 3000);

function mediaQuery() {
  size = window.innerWidth;
  if (size < "1370") {
    menu.classList.add("close");
  } else {
    menu.classList.remove("close");
  }
}
burgerBtn.addEventListener("click", () => {
  menu.classList.toggle("close");
  //   burgerBtn.classList.toggle("hovBtn");
  line1.classList.toggle("first");
  line2.classList.toggle("second");
  line3.classList.toggle("third");
  document.body.classList.toggle("scroll");
  sectionContent.classList.toggle("blur");
  logo.classList.toggle("blur");
});
document.addEventListener("DOMContentLoaded", () => {
  mediaQuery();
});
window.onresize = function (event) {
  size = window.innerWidth;
  mediaQuery();
};
modalClose.addEventListener("click", () => {
  mediaQuery();
  line1.classList.remove("first");
  line2.classList.remove("second");
  line3.classList.remove("third");
  document.body.classList.remove("scroll");
  sectionContent.classList.remove("blur");
  logo.classList.remove("blur");
});
