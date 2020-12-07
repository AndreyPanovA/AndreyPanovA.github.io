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
const servMenu = document.getElementsByClassName('frame__tagline')[2];
const drop = document.getElementsByClassName('dropdown');
const nextMenu = document.getElementsByClassName('next')[0];
const edutype = document.getElementsByClassName('edu-type');
const worktype = document.getElementsByClassName('work-type');
const headCont = document.getElementsByClassName('head-container')[0];
const head = document.querySelector(".header-title h1");
const hamMenu = document.getElementsByClassName('menuitem');
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
let sitetype = 0; 
let circle = 0; 

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
  servMenu, 
  drop,
  nextMenu,
  workList, 
  eduList, 
  worktype, 
  edutype, 
  sitetype, 
  circle, 
  headCont, 
  head, 
  hamMenu
}