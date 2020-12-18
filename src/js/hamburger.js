
import {  body,timelineOpen, timelineClose,_strokeWidth,spans,spanOne,spanTwo,spanThree,modalMenu, dropdownItem } from "../module"
 function Burger(e)  {
  dropdownItem.forEach((el, idx)=> {
    el.style.maxHeight="50vh"
  })
    var cross = spanOne.classList.contains("white");
    modalMenu.classList.toggle("show");
    body.classList.toggle("stop");
    const arr =document.querySelectorAll('.spans').forEach((x) => {
      x.classList.remove("changeColor");
    });
  
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
  }
export default Burger
  