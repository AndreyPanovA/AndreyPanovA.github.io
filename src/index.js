import "./less/index.less";
import {timelineOpen, timelineClose,_strokeWidth,RADIUS,hamburger,spans,spanOne,spanTwo,spanThree,modalMenu } from "./module"
import {tabLink, sitetype} from "./js/tabs"
import Scroll from "./js/scroll"
window.addEventListener('scroll',Scroll);
import {dropdown,dropdownItem} from "./js/dropdown"
import Burger from "./js/hamburger"

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

const workList = [
  [
      "Контроль качества работы навигационного оборудования и оборудования автоматического подсчета пассажиров", [
          'модуль «Коммуникационные службы»',
          'модуль «Ведение нормативно-справочной информации»',
          'модуль «Учет и мониторинг качества работы оборудования»'
      ]
  ], 
  [
      "Мониторинг пассажиропотока на маршрутах ГПТ по данным от датчиков", [
          'модуль «Коммуникационные службы»',
          'модуль «Ведение нормативно-справочной информации»',
          'модуль «Редактор ГИС улично-дорожной сети и линий маршрутов»',
          'модуль «Учет и мониторинг качества работы оборудования»',
          'модуль «Навигационный процессинг»',
          'модуль «Табличные обследования»'
      ]
  ], 
  [
      "Ручные обследования пассажиропотоков табличным способом", [
          'модуль «Ведение нормативно-справочной информации»',
          'модуль «Табличные обследования»'
      ]
  ], 
  [
      "Ручные обследования пассажиропотоков силуэтным способом", [
          'модуль «Ведение нормативно-справочной информации»',
          'модуль «Силуэтные обследования»'
      ]
  ], 
  [
      "Расчет и анализ маршрутного модельного пассажиропотока", [
          'модуль «Коммуникационные службы»',
          'модуль «Ведение нормативно-справочной информации»',
          'модуль «Редактор ГИС улично-дорожной сети и линий маршрутов»',
          'модуль «Учет и мониторинг качества работы оборудования»',
          'модуль «Навигационный процессинг»',
          'модуль «Табличные обследования»',
          'модуль «Модельный пассажиропоток»',
          
      ]
  ], 
  [
      "Сетевой анализ модельного пассажиропотока", [
          'модуль «Коммуникационные службы»',
          'модуль «Ведение нормативно-справочной информации»',
          'модуль «Редактор ГИС улично-дорожной сети и линий маршрутов»',
          'модуль «Учет и мониторинг качества работы оборудования»',
          'модуль «Навигационный процессинг»',
          'модуль «Табличные обследования»',
          'модуль «Модельный пассажиропоток»',
          'модуль «Сетевой анализ модельного пассажиропотока»'
      ]
  ], 
  [
      "Анализ пассажиропотока по данным системы оплаты проезда", [
          'модуль «Коммуникационные службы»',
          'модуль «Ведение нормативно-справочной информации»',
          'модуль «Импорт фактически выполненных рейсов из диспетчерской системы»',
          'модуль «Учет и мониторинг качества операционных данных»'
      ]
  ], 
];
const eduList = [
  'Получение навыков по заполнению справочной информации по подвижному составу, телематическому оборудованию, маршрутной сети.',
  'Получение навыков сбора данных о пассажиропотоке табличным методом.',
  'Получение навыков сбора и заполнения данных табличного метода обследования пассажиропотоков.',
  'Получение навыков расчёта и анализа основных характеристик пассажиропотока, собранных табличным методом обследования.',
  'Получение навыков сбора и заполнения данных силуэтного метода обследования пассажиропотока.',
  'Получение навыков анализа параметров работы маршрута и остановочного пункта по периодам суток на основе данных силуэтного обследования пассажиропотока.'
];
const moduleText = document.querySelector(".module-text")
const next = document.querySelector(".next")
const chengeModule = document.querySelectorAll(".chenge-module")
const changeText =({target, target:{ dataset:{id}}}, el=id)=> {
  let textArr = workList; 
  if (sitetype == 1) textArr = eduList; 
  el++
  if (el>textArr.length-1) el=0
  target.setAttribute("data-id", el)
  moduleText.innerText= textArr[el]
}
next.addEventListener("click",changeText)
