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
const moduleText = document.querySelector(".module-text")
const next = document.querySelector(".next")
const chengeModule = document.querySelectorAll(".chenge-module")
// 

// Header Title
const workList = [
  [
      [
          '«Коммуникационные службы»',
         
      ]
  ], 
  [
       [
          '</br>модуль «Коммуникационные службы»',
          '</br>модуль «Ведение нормативно-справочной информации»',
          '</br>модуль «Редактор ГИС улично-дорожной сети и линий маршрутов»',
          '</br>модуль «Учет и мониторинг качества работы оборудования»',
          '</br>модуль «Навигационный процессинг»',
          '</br>модуль «Табличные обследования»'
      ]
  ], 
  [
      [
          '</br>модуль «Ведение нормативно-справочной информации»',
          '</br>модуль «Табличные обследования»'
      ]
  ], 
  [
       [
          '</br>модуль «Ведение нормативно-справочной информации»',
          '</br>модуль «Силуэтные обследования»'
      ]
  ], 
  [
       [
          '</br>модуль «Коммуникационные службы»',
          '</br>модуль «Ведение нормативно-справочной информации»',
          '</br>модуль «Редактор ГИС улично-дорожной сети и линий маршрутов»',
          '</br>модуль «Учет и мониторинг качества работы оборудования»',
          '</br>модуль «Навигационный процессинг»',
          '</br>модуль «Табличные обследования»',
          '</br>модуль «Модельный пассажиропоток»',
          
      ]
  ], 
  [
      [
          '</br>модуль «Коммуникационные службы»',
          '</br>модуль «Ведение нормативно-справочной информации»',
          '</br>модуль «Редактор ГИС улично-дорожной сети и линий маршрутов»',
          '</br>модуль «Учет и мониторинг качества работы оборудования»',
          '</br>модуль «Навигационный процессинг»',
          '</br>модуль «Табличные обследования»',
          '</br>модуль «Модельный пассажиропоток»',
          '</br>модуль «Сетевой анализ модельного пассажиропотока»'
      ]
  ], 
  [
       [
          '</br>модуль «Коммуникационные службы»',
          '</br>модуль «Ведение нормативно-справочной информации»',
          '</br>модуль «Импорт фактически выполненных рейсов из диспетчерской системы»',
          '</br>модуль «Учет и мониторинг качества операционных данных»'
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
  edutype,
  moduleText,
  next,
  chengeModule,
  workList,
  eduList
}