const menu = document.querySelector(".navigation")
const tabLink =document.querySelectorAll(".tab-link")
const body =document.querySelector("body")
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
const dropdown = document.querySelectorAll(".dropdown");
const dropdownItem = document.querySelectorAll(".dropdownItem");
const edutype = document.getElementsByClassName('edu-type');
const worktype = document.getElementsByClassName('work-type');
// 
export {
  body,
  timelineOpen,
  timelineClose,
  _strokeWidth,
  RADIUS,
  hamburger,
  spans,
  spanOne,
  spanTwo,
  spanThree,
  modalMenu,
  dropdown,
  dropdownItem,
  tabLink,
  worktype,
  edutype
}