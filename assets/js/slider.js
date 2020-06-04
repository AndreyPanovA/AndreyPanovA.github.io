const left = document.querySelector(".btn_left");
const right = document.querySelector(".btn_right");
const slides = document.querySelectorAll(".slide");
const slidesBg = document.querySelectorAll(".slide_bg");
let slide_idx = 0;

function changeSlide(sign, elem) {
  elem.forEach((element, index) => {
    element.classList.remove("show");
  });
  slide_idx = slide_idx + sign;
  if (slide_idx < 0) {
    slide_idx = elem.length - 1;
  } else if (slide_idx > elem.length - 1) {
    slide_idx = 0;
  }
  elem[slide_idx].classList.add("show");
}

left.addEventListener("click", () => {
  slides.forEach((element) => {
    element.style.animation = "appearLeft 0.5s ease-in-out";
  });
  changeSlide(-1, slides);
  changeSlide(-1, slidesBg);
});
right.addEventListener("click", () => {
  slides.forEach((element) => {
    element.style.animation = "appearRight 0.5s ease-in-out";
  });
  changeSlide(1, slides);
  changeSlide(1, slidesBg);
});
