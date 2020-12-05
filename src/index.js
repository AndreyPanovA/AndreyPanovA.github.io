import "./less/index.less";
import {timelineOpen, timelineClose,_strokeWidth,RADIUS,hamburger,spans,spanOne,spanTwo,spanThree,modalMenu } from "./module"
import {tabLink} from "./js/tabs"
import Scroll from "./js/scroll"
window.addEventListener('scroll',Scroll);
import {dropdown,dropdownItem} from "./js/dropdown";
import {workList, eduList, nextMenu, sitetype, circle, headCont, head} from "./js/menu-circle";
import Burger from "./js/hamburger";



(function Circle(e) {
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
    let cross = spanOne.classList.contains("white");
    timelineOpen.add(burst1, burst2, openBackground);
    timelineClose.add(openBackground);
    hamburger.addEventListener("click", Burger);
})()

// 
const next = document.querySelector(".next")
const chengeModule = document.querySelectorAll(".chenge-module")
let i = 0
next.addEventListener("click", (e)=> {
  chengeModule.forEach((el,idx)=> {
    i++
    el.classList.add("off")
    if (el.id==idx) {
      el.classList.remove("off")
    }
  })
})
