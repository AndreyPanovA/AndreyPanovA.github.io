function $(selector) {
    return new Dom(selector,null, {currentHref:window.location.href})
  }
  class Dom {
    constructor(selector="body", state, props={}) {
      this.sel= document.querySelector(selector)
      this.name="Andrey"
      this.props=props
      this.state={
        count:0,
        ...state
      }
    }
    setState = (val)=> {
      if (typeof(val)=="function") {
      const newState=  val(this.state)
   
      this.state= newState
  
      return false
      }
      this.state=val
    }
    on(type="click", func) {
      if (typeof func !=="function") {
        console.log("Error, func is not a function: ", typeof(func)) 
        return false
      }
      this.sel.addEventListener(type,func)
    }
    Components = [
      function BurgerComponent(props, children, tag) {
        var tag = document.createElement("div");
        const html= `<div id="hamburger-open"><span class="spans" id="spanOne" data-span="span"></span><span class="spans" id="spanTwo" data-span="span"></span><span class="spans" id="spanThree" data-span="span"></span></div>
            <div class="modal-menu">
                    <h2 class="menuitem work-type dropdown" data-id="1">Новости</h2>
                    <div class="dropdownItem offItem" data-id="1">
                        <a href="#" class="menuitem">Тестовая ссылка 1</a>
                    </div>
                    <h2 class="menuitem work-type dropdown" data-id="2">Сервисы</h2>
                    <div class="dropdownItem offItem service-inner" data-id="2">
                        <a href="/" class="menuitem">Сервис «Ведение паспортов маршрутов в соответствии с ФЗ 220 с использованием встроенной ГИС»</a>
                        <a href="/" class="menuitem">Сервис «Мониторинг качества телематических данных и работоспособности оборудования»</a>
                        <a href="/index4.html" class="menuitem">Сервис «Формирование интервальных расписаний»</a>
                        <a href="/modules/gis.html" class="menuitem">Сервис «Формирование объявленных расписаний»</a>
                        <a href="/index6.html" class="menuitem">Сервис «Расчет транспортной работы по данным навигационных треков»</a>
                        <a href="/index7.html" class="menuitem">Сервис «Мониторинг пассажиропотока на маршрутах ГПТ по данным от датчиков» в соответствии с ГОСТ 54-723-2019</a>
                        <a href="/index8.html" class="menuitem">Сервис «Расчет и анализ маршрутного модельного пассажиропотока»</a>
                        <a href="/index9.html" class="menuitem">Сервис «Расчет и анализ пассажиропотока по данным валидаций АСОП и навигационным трекам» соответствии с ГОСТ 54-723-2019</a>
                        <a href="/index10.html" class="menuitem">Сервис «Анализ модельного пассажиропотока на маршрутной сети»</a>
                    </div>
                    <h2 class="menuitem work-type">Клиентам</h2>
                    <h2 class="menuitem work-type">Контакты</h2>
                    <h2 class="menuitem edu-type off">Новости</h2>
                    <h2 class="menuitem edu-type off">ВУЗам</h2>
                    <h2 class="menuitem edu-type off dropdown" data-id="3">ЗУВ</h2>
                    <div class="dropdownItem offItem" data-id="3">
                        <a href="/index11.html" class="menuitem">ЗУВ: «Мониторинг поступления телематических данных от оборудования»</a>
                        <a href="/index12.html" class="menuitem">ЗУВ: «Сбор и ввод данных табличного обследования пассажиропотоков»</a>
                        <a href="/index13.html" class="menuitem">ЗУВ: «Сбор и ввод данных силуэтного метода обслудования пассажиропотоков»</a>
                        <a href="/index14.html" class="menuitem">ЗУВ: «Расчет рейсовых параметров пассажиропотока по данным табличного</a>
                        <a href="/index15.html" class="menuitem">ЗУВ: «Расчет и анализ параметров работы маршрута и остановочного пункта»</a>
                    </div>
            </div>	
        </div>`
        tag.innerHTML=html
        return tag
        },
      function ChartWave(props, children, tag) {
        var tag = document.createElement("div");
        tag.classList.add("chart-border")
        const html=``
        tag.innerHTML=html
        return tag
        },
      function ChartUniversity(props, children, Tag, className) {
          var tag = document.createElement("div");
          tag.classList.add("chart")
          tag.classList.add("work-type1")
          const html =`
          <div class="chart work-type">	
                      <h1 class="small">Карта информационных сервисов для городского пассажирского транспорта для </br> интеграторов и перевозчиков 
                      </h1>
                      <h1 class="center">Сервис «Ведение паспортов маршрутов в соответствии с ФЗ 220 с использованием встроенной ГИС»               
                      </h1>
                      <div class="chart-border"></div>
                      <div class="rotation">
                      <div class="rotation-1">
                      <div class="chart-line">
                          <p>Сервис «Мониторинг качества телематических данных и работоспособности оборудования»               
                          </p>
                          <p>Сервис «Формирование интервальных расписаний»               
                          </p>
                          <p>Сервис «Формирование объявленных расписаний»               
                          </p>
                          <p>Сервис «Расчет транспортной работы по данным навигационных треков»           
                          </p>
                      </div>
                      <div class="chart-line no-2">
                          <p>Сервис «Мониторинг пассажиропотока на маршрутах ГПТ по данным от датчиков» в соответствии с ГОСТ 54-723-2019 </p> 
                          <p>Сервис «Расчет и анализ маршрутного модельного пассажиропотока»               
                          </p>      
                          <div class=""><p>Сервис «Расчет и анализ пассажиропотока по данным валидаций АСОП и навигационным трекам»  соответствии с ГОСТ 54-723-2019                           
                          </p></div>    
                      </div>
                  </div>
                      <div class="chart-line no-3">
                          <p>Сервис «Анализ модельного пассажиропотока на маршрутной сети»               
                          </p>
                      </div>
                  </div>
                      <div class="chart-border"></div> 
                      
          </div>`
          tag.innerHTML=html
          return tag
        }, 
      function ChartTransport(props, children, Tag) {
          var tag = document.createElement("div");
          tag.classList.add("chart")
          tag.classList.add("edu-type")
          tag.classList.add("off")
          const html =`
                      <h1 class="small">Информационные сервисы по перевозкам городским </br> пассажирским транспортом для ВУЗов 
                      </h1>
                      <h1 class="center">ЗУВ: «Ведение паспортов маршрутов в соответствии с ФЗ 220»               
                      </h1>
                      <div class="chart-border"></div>
                      <div class="chart-line">
                          <p>ЗУВ: «Мониторинг поступления телематических данных от оборудования»               
                          </p>
                          <p>ЗУВ: «Сбор и ввод данных табличного обследования пассажиропотоков»               
                          </p>
                          <p>ЗУВ: «Сбор и ввод данных силуэтного метода обслудования пассажиропотоков»               
                          </p>
                      </div>
                      <div class="chart-line no-2">
                          <p></p>
                          <p>ЗУВ: «Расчет рейсовых параметров пассажиропотока по данным табличного </p> 
                          <p>ЗУВ: «Расчет и анализ параметров работы маршрута и остановочного пункта»</p>
                          </div>`
          tag.innerHTML=html
          return tag
        },
      function ServisComponent(props, children, Tag) {
        console.log("props", props)
          var tag = document.createElement("div");
          tag.classList.add("servis")
          const items = [
            "ведение справочника предприятий/филиалов",
            "ведение справочников подвижного состава и телематического оборудования",
            "ведение справочника реестра остановочных пунктов",
            "ведение справочников маршрутов и их трасс",
            "рисование графа дорог, линий маршрутов",
            "ведение дополнительных справочников"
          ]
          const html =`
                      <div class="wave">
                          <img src="./src/img/wave.png" alt="">
                      </div>
                      <div class="servis-line edu-type off">
                          <div class="servis-text">
                          <p>Транспортная БД</p>
                          <h1 style="margin-bottom: 15px; font-size: 20px;"> ЗУВ: «Ведение паспортов маршрутов в соответствии с ФЗ 220» </h1>
                          <h3>Состав модулей:</h3>
                          <div class="text-cont ">
                              <p>- модуль ведения нормативно-справочной информации (активная ссылка на отдельную страницу с описанием модуля);</p>
                              <p> - ГИС-редактор улично-дорожной сети и маршрутов (активная ссылка на отдельную страницу с описанием модуля);.</p>
                          </div>
                          <h3>Перечень решаемых задач:</h3>
              <div class="text-cont">
                ${items.map((el,idx)=>`<p>- ${el};`)}
                          </div>
                      </div>
                      <div class="img">
                          <img src="./src/img/bus-huge.png" alt="">
                          <div class="whiteImg">
                              <div class="img-type1">
                                  <img src="./src/img/bus.png" alt="">
                              </div>
                              <div class="img-type2">
                                  <img src="./src/img/bus1.png" alt="">
                              </div>
                          </div>
                      </div>
                      </div>
              
                      <div class="servis-line work-type">
                          <div class="servis-text">
                          <p>Транспортная БД</p>
                          <h1 style="margin-bottom: 15px; font-size: 20px;" > Контроль качества работы навигационного оборудования и оборудования автоматического подсчета пассажиров </h1>
                          <h3>Состав модулей:</h3>
                          <div class="text-cont ">
                              <p>- Информаци</p>
                              <p> - ГИС-редактор улично-дорожной сети и маршрутов (активная ссылка на отдельную страницу с описанием модуля);.</p>
                          </div>
                          <h3>Перечень решаемых задач:</h3>
                          <div class="text-cont ">
                              <p>- ведение справочника предприятий/филиалов;</p>
                              <p>- ведение справочников подвижного состава и телематического оборудования;</p>
                              <p>- ведение справочника реестра остановочных пунктов;</p>
                              <p>- ведение справочников маршрутов и их трасс;</p>
                              <p>- рисование графа дорог, линий маршрутов;</p>
                              <p>- ведение дополнительных справочников.</p>
                          </div>
                      </div>
                      <div class="img">
                          <img src="./src/img/bus-huge.png" alt="">
                          <div class="whiteImg">
                              <div class="img-type1">
                                  <img src="./src/img/bus.png" alt="">
                              </div>
                              <div class="img-type2">
                                  <img src="./src/img/bus1.png" alt="">
                              </div>
                          </div>
                      </div>
                      </div>
         `
          tag.innerHTML=html
          return tag
        },
      function ChoiceComponent(props, children, Tag) {
          var tag = document.createElement("div");
          tag.classList.add("choice")
          const html =`
          <div class="choice-text">
            <h1>Выбирайте нас!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dicta quidem, ad pariatur laudantium, error dolor exercitationem maxime cupiditate dignissimos ullam, maiores quibusdam ab sunt qui. Accusamus assumenda soluta voluptas quia. Explicabo totam aut commodi!</p>
            <div class="logo">
              <img src="./src/img/logo.png" alt="Транспортные данные">
            </div>
          </div>
     `
        tag.innerHTML=html
        return tag
        },
      function Footer(props, children, Tag) {
        var tag = document.createElement("div");
        tag.classList.add("footer")
        const html =``
        return tag
      }
    ]
    async render(type) {
      if (type) {
        this.Components.forEach((el, idx)=> {
          if (type==el.name) {
            this.sel.appendChild(el(this.props))
            this.setState((prev)=> {
              const {count}=prev
              return {...prev, [el.name]:true}
            })
          }
        })
  
        return false
      }
  
      this.Components.forEach((el, idx)=> {
        for(let key in this.state) {
          if (key=="el" && this.state[key]) {
            continue
          }
        }
        
        this.sel.appendChild(el(this.props))
        this.setState((prev)=> {
          const {count}=prev
          return {...prev, [el.name]:true}
        })
      })
      console.log(this.state, "this.state")
    }
  }
  
  // $(".burger-menu-start").render("BurgerComponent")
  $(".custom-container").render()
  
  
  // Module
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
  const moduleText = document.querySelector(".module-text")
  const next = document.querySelector(".next")
  const chengeModule = document.querySelectorAll(".chenge-module")
  const title = document.querySelector(".work-type-title")
  
  // Header Title
  // Модуль мониторинга качества телематических данных и работоспособности оборудования 
  
  const workList = {
    index: [
      [
          [
              '</br>«Модуль справочники маршрутов»',
              `<a href="src/pages/modules/nsi.html" class="btn-custom block uniq-btn-custom">Подробнее...</a>`
              
          ]
      ], 
      [
           [
            '</br>«Модуль ГИС-редактор УДС и маршрутов»',
            `<a href="src/pages/modules/gis.html" class="btn-custom block uniq-btn-custom">Подробнее...</a>`
          ]
      ]],
    equip: [
      [
          [
              '</br>«Модуль телематических служб приёма данных»',
              `<a href="index4.html" class="btn-custom block uniq-btn-custom">Подробнее...</a>`
              
          ]
      ], 
      [
           [
            '</br>«Модуль ведения справочников подвижного состава и оборудования»',
            `<a href="index3.html" class="btn-custom block ">Подробнее...</a>`
          ]
      ]]
  }
  const eduList = [
    'Получение навыков по заполнению справочной информации по подвижному составу, телематическому оборудованию, маршрутной сети.',
    'Получение навыков сбора данных о пассажиропотоке табличным методом.',
    'Получение навыков сбора и заполнения данных табличного метода обследования пассажиропотоков.',
    'Получение навыков расчёта и анализа основных характеристик пассажиропотока, собранных табличным методом обследования.',
    'Получение навыков сбора и заполнения данных силуэтного метода обследования пассажиропотока.',
    'Получение навыков анализа параметров работы маршрута и остановочного пункта по периодам суток на основе данных силуэтного обследования пассажиропотока.'
  ];
  
  // Load/ Start
  const tag ="index"
  const start =window.addEventListener("load", ()=> {
   
      moduleText.innerHTML= workList[tag][0]
  })
  // Tabs
  let sitetype = 0; 
  
  tabLink.forEach((elem)=> {
      elem.addEventListener("click", (e)=> {
          tabLink.forEach((item)=> {
              item.classList.remove("active-tab")
          })
          if (elem.dataset.id == 1) {
            moduleText.innerHTML= workList.index[0]
           
            sitetype = 0; 
            [...worktype].forEach((item) => {
              item.classList.remove("off");
            });
            [...edutype].forEach((item) => {
              item.classList.add("off");
            })
          } else if (elem.dataset.id == 2) {
            moduleText.innerHTML= eduList[0]
            sitetype = 1; 
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
  
  const changeText =({target, target:{ dataset:{id}}}, el=id)=> {
    let textArr = workList.index; 
    if (sitetype == 1) textArr = eduList; 
    el++
    if (el>textArr.length-1) el=0
    target.setAttribute("data-id", el)
    moduleText.innerHTML= textArr[el]
  }
  next.addEventListener("click",changeText)
  // Scroll
  function Scroll (event) {
    const arr =document.querySelectorAll('.spans').forEach((x) => {
    if (pageYOffset > 1800) {
      x.classList.add("changeColor")
    }
    else {
      x.classList.remove("changeColor")
    }
  });
  }
  
  const scroll =window.addEventListener('scroll',Scroll);
  // dropdown
  const modalShow = (idx, type)=> {
    type ? dropdownItem[idx].classList.remove("offItem") :  dropdownItem[idx].classList.add("offItem")
  }
  // Index.js
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
  // hamburger
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
  
  
  // Slider
      const texts = [
          // ["Контроль качества работы навигационного оборудования ", "Surface gravity‎: ‎9.807 m/s²"],
          // ["Mars", "Surface gravity‎: ‎3.711 m/s²"],
          // ["Venus", "Surface gravity‎: ‎8.87 m/s²"],
        // ["Venus1", "Surface gravity‎: ‎8.87 m/s²"],
      ]
  rgbKineticSlider = new rgbKineticSlider({
  
    slideImages: images, // array of images > must be 1920 x 1080
    itemsTitles: texts, // array of titles / subtitles
  
    backgroundDisplacementSprite: 'img/map-9.jpg', // slide displacement image 
    cursorDisplacementSprite: 'img/displace-circle.png', // cursor displacement image
  
    cursorImgEffect : true, // enable cursor effect
    cursorTextEffect : false, // enable cursor text effect
    cursorScaleIntensity : 0.65, // cursor effect intensity
    cursorMomentum : 0.14, // lower is slower
  
    swipe: true, // enable swipe
    swipeDistance : window.innerWidth * 0.4, // swipe distance - ex : 580
    swipeScaleIntensity: 2, // scale intensity during swipping
  
    slideTransitionDuration : 1, // transition duration
    transitionScaleIntensity : 30, // scale intensity during transition
    transitionScaleAmplitude : 160, // scale amplitude during transition
  
    nav: true, // enable navigation
    navElement: '.main-nav', // set nav class
    
    imagesRgbEffect : false, // enable img rgb effect
    imagesRgbIntensity : 0.9, // set img rgb intensity
    navImagesRgbIntensity : 80, // set img rgb intensity for regular nav 
  
    textsDisplay : true, // show title
    textsSubTitleDisplay : true, // show subtitles
    textsTiltEffect : true, // enable text tilt
    googleFonts : ['Playfair Display:700', 'Roboto:400'], // select google font to use
    buttonMode : false, // enable button mode for title
    textsRgbEffect : true, // enable text rgb effect
    textsRgbIntensity : 0.03, // set text rgb intensity
    navTextsRgbIntensity : 15, // set text rgb intensity for regular nav
  
    textTitleColor : 'white', // title color
    textTitleSize : 125, // title size
    mobileTextTitleSize : 125, // title size
    textTitleLetterspacing : 3, // title letterspacing
  
    textSubTitleColor : 'white', // subtitle color ex : 0x000000
    textSubTitleSize : 21, // subtitle size
    mobileTextSubTitleSize : 21, // mobile subtitle size
    textSubTitleLetterspacing : 2, // subtitle letter spacing
    textSubTitleOffsetTop : 90, // subtitle offset top
    mobileTextSubTitleOffsetTop : 90, // mobile subtitle offset top
  });
  
  