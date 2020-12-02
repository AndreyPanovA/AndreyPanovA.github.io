import "./less/index.less";
import { Excel } from "./components/excel/Excel";
import { Header } from "./components/header/Header";
import { Toolbar } from "./components/toolbar/Toolbar";
import { Formula } from "./components/formula/Formula";
import { Table } from "./components/table/Table";
// import "./js/libs/mo.min.js"

const excel = new Excel("#app", {
    components: [Header, Toolbar, Formula, Table],
});


// const burger = document.querySelector(".burger")
const menu = document.querySelector(".navigation")
const tabLink =document.querySelectorAll(".tab-link")
const body =document.querySelector("body")

tabLink.forEach((elem)=> {
    elem.addEventListener("click", (e)=> {
        tabLink.forEach((item)=> {
            item.classList.remove("active-tab")
        })
        const edutype = document.getElementsByClassName('edu-type');
        const worktype = document.getElementsByClassName('work-type');
        console.log(worktype,edutype)
        if (elem.dataset.id == 1) {
          [...worktype].forEach((item) => {
            item.classList.remove("off");
          });
          [...edutype].forEach((item) => {
            item.classList.add("off");
          })
        } else if (elem.dataset.id == 2) {
          [...worktype].forEach((item) => {
            item.classList.add("off");
          });
          [...edutype].forEach((item) => {
            item.classList.remove("off");
          })
        }
        
        elem.classList.add("active-tab")
    })
})
// burger.addEventListener("click",()=> {
// menu.classList.toggle("nav-show")
// })


// 

window.addEventListener('scroll', function(event) {
  // console.log(event, "test", pageYOffset)
  const arr =document.querySelectorAll('.spans').forEach((x) => {

 
  if (pageYOffset > 1850) {
    x.classList.add("changeColor")
  }
  else {
    x.classList.remove("changeColor")
  }
});
});

var timelineOpen = new mojs.Timeline({ speed: 1.5 });
var timelineClose = new mojs.Timeline({ speed: 2 });

var _strokeWidth;
var RADIUS = 15;
var hamburger = document.querySelector("#hamburger-open");

var spans = document.getElementsByClassName("spans");
var spanOne = document.querySelector("#spanOne");
var spanTwo = document.querySelector("#spanTwo");
var spanThree = document.querySelector("#spanThree");

var modalMenu = document.querySelector(".modal-menu");

var burst1 = new mojs.Burst({
  parent: hamburger,
  x: "50%",
  y: "50%",
  angle: { 0: 90 },
  radius: { 30: 45 },
  count: 3,
  children: {
    shape: "circle",
    radius: RADIUS,
    scale: { 1: 0 },
    fill: ["#ff4338", "#00b3e3", "#3cd52e"],
    duration: 2000,
    easing: "quad.out"
  }
});

var burst2 = new mojs.Burst({
  parent: hamburger,
  x: "50%",
  y: "50%",
  angle: { 0: 90 },
  radius: { 30: 45 },
  count: 3,
  children: {
    shape: "circle",
    radius: RADIUS,
    scale: { 0: 1 },
    strokeWidth: { 1: 3 },
    opacity: { 1: 0 },
    fill: "transparent",
    stroke: ["#ff4338", "#00b3e3", "#3cd52e"],
    duration: 2000,
    easing: "quad.out"
  }
});

// OPEN
var openBackground = new mojs.Shape({
  fill: "#111820",
  scale: { 0: 8.5 },
  radius: 200,
  delay: 500,
  easing: "cubic.out",
  backwardEasing: "ease.out",
  duration: 2000
});

burst1.el.style.zIndex = 90000;
openBackground.el.style.zIndex = 100;
openBackground.el.style.position = "fixed";

// check if the hamburger's been crossed
let cross = spanOne.classList.contains("white");

//timeline with burst and background open
timelineOpen.add(burst1, burst2, openBackground);
//timeline with background close
timelineClose.add(openBackground);

//click on the hamburger
hamburger.addEventListener("click", function(e) {
  // check if the menu is a cross
  var cross = spanOne.classList.contains("white");

  modalMenu.classList.toggle("show");
  body.classList.toggle("stop")


  if (cross) {
    timelineClose.playBackward();
    for (var i = 0; i < spans.length; i++) {
      spans[i].classList.remove("white");
    }
    spanOne.classList.remove("spanOneRotate");
    spanTwo.classList.remove("spanTwoRotate");
    spanThree.classList.remove("spanThreeHide");
  } else {
    timelineOpen.play();

    for (var i = 0; i < spans.length; i++) {
      spans[i].classList.add("white");
    }

    spanOne.classList.add("spanOneRotate");
    spanTwo.classList.add("spanTwoRotate");
    spanThree.classList.add("spanThreeHide");
  }
});


// Рабочая кнопочка next проверить ее работу