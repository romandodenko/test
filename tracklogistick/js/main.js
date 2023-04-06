"use strict"

window.onload = function () {

  const aosInit = document.querySelector(".aos-init");

  if (aosInit) {

    AOS.init();

  }

  if (document.body.clientWidth >= 1024) {

    SmoothScroll({
			animationTime: 800,
			stepSize: 170,

			accelerationDelta: 50,
			accelerationMax: 1,

			keyboardSupport: true,
			arrowScroll: 50,

			pulseAlgorithm: true,
			pulseScale: 4,
			pulseNormalize: 1,

			touchpadSupport: false,
			fixedBackground: true,
			excluded: ''
		})

  }

  document.documentElement.classList.add("loaded");

  // Открытие и закрытие бургера

  function bodyBlock() {
    document.body.style.overflow = "hidden";
  }

  const menu = document.querySelector(".header__menu");

  document.addEventListener("click", function (e) {

    const elementInteractive = e.target;

    if (elementInteractive.closest(".upper")) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }

    if (elementInteractive.closest(".burger")) { // Открытие и закрытие бургера
      menu.classList.add("menu-active")
      setTimeout(bodyBlock, 200)
    }

    if (elementInteractive.closest(".header__exit-menu")) { // Открытие и закрытие бургера 
      menu.classList.remove("menu-active")
      document.body.style.overflow = "";
    }

    if (elementInteractive.closest(".nav__link")) { // Открытие и закрытие бургера
      menu.classList.remove("menu-active")
      document.body.style.overflow = "";
    }

    if (elementInteractive.closest(".faq__top")) { // Открытие и закрытие бургера

      let faqItem = elementInteractive.closest(".faq__item");

      if (!faqItem.classList.contains("active")) {

        faqItem.classList.add("active");

        let faqItemBottom = faqItem.querySelector(".faq__bottom");

        gsap.to(faqItemBottom, {
          height: "auto",
        })

      } else {

        let faqItem = elementInteractive.closest(".faq__item");

        faqItem.classList.remove("active");

        let faqItemBottom = faqItem.querySelector(".faq__bottom");

        gsap.to(faqItemBottom, {
          height: 0,
        })

      }

    }

    if (elementInteractive.closest(".tab-btn")) { // Открытие и закрытие бургера

      document.querySelectorAll(".tab-btn").forEach(function (e) {
        e.classList.remove("active");
      })
      elementInteractive.closest(".tab-btn").classList.add("active");
    }

    if (elementInteractive.closest(".curser-wrapper-form__close")) {

      let curserWrapperForm = elementInteractive.closest(".curser-wrapper-form");

      let curserWrapperFormItem = curserWrapperForm.querySelector(".curser-wrapper-form__item");

      let curserWrapperFormOkay = curserWrapperForm.querySelector(".okay");

      let curserWrapperFormSpinner = curserWrapperForm.querySelector(".wrapper-spinner-curser");

      let curserWrapperFormError = curserWrapperForm.querySelector(".curse-error");

      curserWrapperForm.classList.remove("active");

      curserWrapperFormItem.classList.remove("disabled");

      curserWrapperFormOkay.classList.remove("active");

      curserWrapperFormSpinner.classList.remove("active");

      curserWrapperFormError.classList.remove("active");

    }

    if (elementInteractive.closest(".curser-wrapper-form__exit")) {

      let curserWrapperForm = elementInteractive.closest(".curser-wrapper-form");

      let curserWrapperFormItem = curserWrapperForm.querySelector(".curser-wrapper-form__item");

      let curserWrapperFormOkay = curserWrapperForm.querySelector(".okay");

      let curserWrapperFormSpinner = curserWrapperForm.querySelector(".wrapper-spinner-curser");

      let curserWrapperFormError = curserWrapperForm.querySelector(".curse-error");

      curserWrapperForm.classList.remove("active");

      curserWrapperFormError.classList.remove("active");

      curserWrapperFormItem.classList.remove("disabled");

      curserWrapperFormOkay.classList.remove("active");

      curserWrapperFormSpinner.classList.remove("active");

    }

    if (elementInteractive.closest(".init-form")) {

      menu.classList.remove("menu-active")

      document.querySelector(".curser-wrapper-form").classList.add("active");

    }

    if (elementInteractive.closest(".wrapper-okay__close")) {

      document.querySelector(".wrapper-okay").classList.remove("active");

    }

    if (elementInteractive.closest(".wrapper-okay__exit")) {

      document.querySelector(".wrapper-okay").classList.remove("active");

    }

    if (elementInteractive.closest(".wrapper-error__close")) {

      document.querySelector(".wrapper-error").classList.remove("active");

    }

    if (elementInteractive.closest(".wrapper-error__exit")) {

      document.querySelector(".wrapper-error").classList.remove("active");

    }

  })

  // Скрипт для проверки , поддерживает ли браузер webp 

  function testWebP(callback) {
    var webP = new Image();

    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };

    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  testWebP(function (support) {
    if (support == true) {
      document.querySelector('body').classList.add('webp');
    } else {
      document.querySelector('body').classList.add('no-webp');
    }
  });

  document.addEventListener("scroll", function (e) {

    let scrollY = window.scrollY;

    let mapOffset = document.querySelector(".header").clientHeight;

    if (scrollY >= mapOffset) {
      document.querySelector(".upper").classList.add("active")
    } else {
      document.querySelector(".upper").classList.remove("active")
    }
  })

  // Табы на path

  document.querySelectorAll(".tab-btn").forEach(function (tabsBtn) {
    tabsBtn.addEventListener("click", function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll(".tab-content").forEach(function (tabContent) {
        tabContent.classList.remove("tab-content-active")
      })
      document.querySelector(`[data-target="${path}"]`).classList.add("tab-content-active")
    })
  })

  // Слайдер

  const parkSliderInit = document.querySelector(".park-slider");

  if (parkSliderInit) {
    const parkSlider = new Swiper('.park-slider', {
      observer: true,
      observeParents: true,
      watchOverflow: true,
      slidesPerView: 1,
      speed: 600,
      allowTouchMove: false,
      direction: 'horizontal',
      navigation: {
        nextEl: '.park-slider-button-next',
        prevEl: '.park-slider-button-prev',
      },
      breakpoints: {
        320: {
          spaceBetween: 10,
        },
        480: {
          spaceBetween: 15,
        },
        640: {
          spaceBetween: 20,
        }
      },
    });
  }

  // Динамические адаптив

  function DynamicAdapt(type) {
    this.type = type;
  }

  DynamicAdapt.prototype.init = function () {
    const _this = this;
    // массив объектов
    this.оbjects = [];
    this.daClassname = "_dynamic_adapt_";
    // массив DOM-элементов
    this.nodes = document.querySelectorAll("[data-da]");

    // наполнение оbjects объктами
    for (let i = 0; i < this.nodes.length; i++) {
      const node = this.nodes[i];
      const data = node.dataset.da.trim();
      const dataArray = data.split(",");
      const оbject = {};
      оbject.element = node;
      оbject.parent = node.parentNode;
      оbject.destination = document.querySelector(dataArray[0].trim());
      оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
      оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
      оbject.index = this.indexInParent(оbject.parent, оbject.element);
      this.оbjects.push(оbject);
    }

    this.arraySort(this.оbjects);

    // массив уникальных медиа-запросов
    this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
      return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
    }, this);
    this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
      return Array.prototype.indexOf.call(self, item) === index;
    });

    // навешивание слушателя на медиа-запрос
    // и вызов обработчика при первом запуске
    for (let i = 0; i < this.mediaQueries.length; i++) {
      const media = this.mediaQueries[i];
      const mediaSplit = String.prototype.split.call(media, ',');
      const matchMedia = window.matchMedia(mediaSplit[0]);
      const mediaBreakpoint = mediaSplit[1];

      // массив объектов с подходящим брейкпоинтом
      const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
        return item.breakpoint === mediaBreakpoint;
      });
      matchMedia.addListener(function () {
        _this.mediaHandler(matchMedia, оbjectsFilter);
      });
      this.mediaHandler(matchMedia, оbjectsFilter);
    }
  };

  DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
    if (matchMedia.matches) {
      for (let i = 0; i < оbjects.length; i++) {
        const оbject = оbjects[i];
        оbject.index = this.indexInParent(оbject.parent, оbject.element);
        this.moveTo(оbject.place, оbject.element, оbject.destination);
      }
    } else {
      for (let i = 0; i < оbjects.length; i++) {
        const оbject = оbjects[i];
        if (оbject.element.classList.contains(this.daClassname)) {
          this.moveBack(оbject.parent, оbject.element, оbject.index);
        }
      }
    }
  };

  // Функция перемещения
  DynamicAdapt.prototype.moveTo = function (place, element, destination) {
    element.classList.add(this.daClassname);
    if (place === 'last' || place >= destination.children.length) {
      destination.insertAdjacentElement('beforeend', element);
      return;
    }
    if (place === 'first') {
      destination.insertAdjacentElement('afterbegin', element);
      return;
    }
    destination.children[place].insertAdjacentElement('beforebegin', element);
  }

  // Функция возврата
  DynamicAdapt.prototype.moveBack = function (parent, element, index) {
    element.classList.remove(this.daClassname);
    if (parent.children[index] !== undefined) {
      parent.children[index].insertAdjacentElement('beforebegin', element);
    } else {
      parent.insertAdjacentElement('beforeend', element);
    }
  }

  // Функция получения индекса внутри родителя
  DynamicAdapt.prototype.indexInParent = function (parent, element) {
    const array = Array.prototype.slice.call(parent.children);
    return Array.prototype.indexOf.call(array, element);
  };

  // Функция сортировки массива по breakpoint и place 
  // по возрастанию для this.type = min
  // по убыванию для this.type = max
  DynamicAdapt.prototype.arraySort = function (arr) {
    if (this.type === "min") {
      Array.prototype.sort.call(arr, function (a, b) {
        if (a.breakpoint === b.breakpoint) {
          if (a.place === b.place) {
            return 0;
          }

          if (a.place === "first" || b.place === "last") {
            return -1;
          }

          if (a.place === "last" || b.place === "first") {
            return 1;
          }

          return a.place - b.place;
        }

        return a.breakpoint - b.breakpoint;
      });
    } else {
      Array.prototype.sort.call(arr, function (a, b) {
        if (a.breakpoint === b.breakpoint) {
          if (a.place === b.place) {
            return 0;
          }

          if (a.place === "first" || b.place === "last") {
            return 1;
          }

          if (a.place === "last" || b.place === "first") {
            return -1;
          }

          return b.place - a.place;
        }

        return b.breakpoint - a.breakpoint;
      });
      return;
    }
  };

  const da = new DynamicAdapt("max");
  da.init();

  // Яндекс карта

  const mapClass = document.querySelector(".footer-content__wrapper-map")
  if (mapClass) {
    ymaps.ready(init);

    function init() {
      const myMap = new ymaps.Map(
        "map", {
          center: [55.354988069373945, 86.02150349999995],
          zoom: 14,
        },
      );
      // var myPlacemark = new ymaps.Placemark(myMap.getCenter(55.354988069373945,86.02150349999995), {}, { // Если нужно чтобы точка была всегда по центру
      var myPlacemark = new ymaps.Placemark(myMap.getCenter(55.354988069373945, 86.02150349999995), {}, {});

      myMap.geoObjects.add(myPlacemark);
      myMap.controls.remove('geolocationControl'); // удаляем геолокацию
      myMap.controls.remove('searchControl'); // удаляем поиск
      myMap.controls.remove('trafficControl'); // удаляем контроль трафика
      myMap.controls.remove('typeSelector'); // удаляем тип
      myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
      myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
      myMap.controls.remove('rulerControl'); // удаляем контрол правил
    }
  }

  // Валидация

  const heroFormInitOne = document.querySelector(".hero-tabs-form-1");

  if (heroFormInitOne) {
    const validator = new JustValidate('.hero-tabs-form-1', { // можно использовать классы вместо ид

      errorLabelStyle: { // Стили для ошибки
        color: '#ff0000',
      }

    });

    validator
      .addField('#gorodSend', [{ // можно использовать классы вместо ид
        rule: 'required',
        errorMessage: 'Введите город отправки',
      }, ])
      .addField('#gorodPost', [{ // можно использовать классы вместо ид
        rule: 'required',
        errorMessage: 'Введите город доставки',
      }, ])
      .addField('#cargoWeight', [{ // можно использовать классы вместо ид
        rule: 'required',
        errorMessage: 'Введите вес груза',
      }, ])
      .addField('#dimensions', [{ // можно использовать классы вместо ид
        rule: 'required',
        errorMessage: 'Введите габариты',
      }, ])
      .onSuccess((event) => { // Если форма проходит валидацию то происходит код ниже

        document.querySelector(".page-spinner").classList.add("active");

        let formData = new FormData(event.target);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {

              document.querySelector(".page-spinner").classList.remove("active");

              document.querySelector(".wrapper-okay").classList.add("active");

            } else {

              document.querySelector(".page-spinner").classList.remove("active");

              document.querySelector(".wrapper-error").classList.add("active");

            }
          }
        }

        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);

        event.target.reset();
      })

  }

  const heroFormInitTwo = document.querySelector(".hero-tabs-form-2");

  if (heroFormInitTwo) {
    let heroFormTwoTel = heroFormInitTwo.querySelector("input[type='tel']");
    let heroFormTwoTelIm = new Inputmask("+7 (999) 999-99-99");
    heroFormTwoTelIm.mask(heroFormTwoTel);

    const validator = new JustValidate('.hero-tabs-form-2', { // можно использовать классы вместо ид

      errorLabelStyle: { // Стили для ошибки
        color: '#ff0000',
      }

    });

    validator
      .addField('#numberDocuments', [{ // можно использовать классы вместо ид
        rule: 'required',
        errorMessage: 'Введите номер документа',
      }, ])
      .addField('#phoneTrace', [{
          rule: 'required',
          errorMessage: 'Введите телефон',
        },
        {
          rule: 'function',
          validator: function () {
            const phone = heroFormTwoTel.inputmask.unmaskedvalue();
            return phone.length === 10;
          },
          errorMessage: 'Введите корректный телефон',
        },
      ])
      .onSuccess((event) => { // Если форма проходит валидацию то происходит код ниже

        document.querySelector(".page-spinner").classList.add("active");

        let formData = new FormData(event.target);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              document.querySelector(".page-spinner").classList.remove("active");

              document.querySelector(".wrapper-okay").classList.add("active");
            } else {
              document.querySelector(".page-spinner").classList.remove("active");

              document.querySelector(".wrapper-error").classList.add("active");
            }
          }
        }

        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);

        event.target.reset();
      })

  }

  const heroFormInitThird = document.querySelector(".hero-tabs-form-3");

  if (heroFormInitThird) {
    let heroFormThirdTel = heroFormInitThird.querySelector("input[type='tel']");
    let heroFormThirdTelIm = new Inputmask("+7 (999) 999-99-99");
    heroFormThirdTelIm.mask(heroFormThirdTel);

    const validator = new JustValidate('.hero-tabs-form-3', { // можно использовать классы вместо ид

      errorLabelStyle: { // Стили для ошибки
        color: '#ff0000',
      }

    });

    validator
      .addField('#nameHelp', [{ // можно использовать классы вместо ид
        rule: 'required',
        errorMessage: 'Введите ваше имя',
      }, ])
      .addField('#phoneHelp', [{
          rule: 'required',
          errorMessage: 'Введите телефон',
        },
        {
          rule: 'function',
          validator: function () {
            const phone = heroFormThirdTel.inputmask.unmaskedvalue();
            return phone.length === 10;
          },
          errorMessage: 'Введите корректный телефон',
        },
      ])
      .onSuccess((event) => { // Если форма проходит валидацию то происходит код ниже

        document.querySelector(".page-spinner").classList.add("active");

        let formData = new FormData(event.target);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              document.querySelector(".page-spinner").classList.remove("active");
              document.querySelector(".wrapper-okay").classList.add("active");
            } else {
              document.querySelector(".page-spinner").classList.remove("active");

              document.querySelector(".wrapper-error").classList.add("active");
            }
          }
        }

        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);

        event.target.reset();
      })

  }

  const priceItemFormInit = document.querySelector(".price-item-form");

  if (priceItemFormInit) {
    const validator = new JustValidate('.price-item-form', { // можно использовать классы вместо ид

      errorLabelStyle: { // Стили для ошибки
        color: '#ff0000',
      }

    });

    validator
      .addField('#priceGorodSend', [{ // можно использовать классы вместо ид
        rule: 'required',
        errorMessage: 'Введите город отправки',
      }, ])
      .addField('#priceGorodPost', [{ // можно использовать классы вместо ид
        rule: 'required',
        errorMessage: 'Введите город доставки',
      }, ])
      .addField('#priceVes', [{ // можно использовать классы вместо ид
        rule: 'required',
        errorMessage: 'Введите вес груза',
      }, ])
      .addField('#priceGabariti', [{ // можно использовать классы вместо ид
        rule: 'required',
        errorMessage: 'Введите габариты',
      }, ])
      .onSuccess((event) => { // Если форма проходит валидацию то происходит код ниже
        document.querySelector(".page-spinner").classList.add("active");

        let formData = new FormData(event.target);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              document.querySelector(".page-spinner").classList.remove("active");
              document.querySelector(".wrapper-okay").classList.add("active");
            } else {
              document.querySelector(".page-spinner").classList.remove("active");

              document.querySelector(".wrapper-error").classList.add("active");
            }
          }
        }

        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);

        event.target.reset();
      })

  }

  const curserFormInit = document.querySelector(".curser-form");

  if (curserFormInit) {

    let curserFormTel = curserFormInit.querySelector("input[type='tel']");
    let curserFormTelIm = new Inputmask("+7 (999) 999-99-99");
    curserFormTelIm.mask(curserFormTel);

    const validator = new JustValidate('.curser-form', { // можно использовать классы вместо ид

      errorLabelStyle: { // Стили для ошибки
        color: '#ff0000',
      }

    });

    validator
      .addField('#curserName', [{ // можно использовать классы вместо ид
        rule: 'required',
        errorMessage: 'Введите ваше имя',
      }, ])
      .addField('#curserPhone', [{
          rule: 'required',
          errorMessage: 'Введите ваш телефон',
        },
        {
          rule: 'function',
          validator: function () {
            const phone = curserFormTel.inputmask.unmaskedvalue();
            return phone.length === 10;
          },
          errorMessage: 'Введите корректный телефон',
        },
      ])
      .onSuccess((event) => { // Если форма проходит валидацию то происходит код ниже

        let curserWrapperForm = document.querySelector(".curser-wrapper-form");

        curserWrapperForm.querySelector(".curser-wrapper-form__item").classList.add("disabled");

        curserWrapperForm.querySelector(".wrapper-spinner-curser").classList.add("active");

        let formData = new FormData(event.target);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {

              let curserWrapperForm = document.querySelector(".curser-wrapper-form");

              curserWrapperForm.querySelector(".wrapper-spinner-curser").classList.remove("active");

              curserWrapperForm.querySelector(".okay").classList.add("active");

            } else {
              let curserWrapperForm = document.querySelector(".curser-wrapper-form");

              curserWrapperForm.querySelector(".wrapper-spinner-curser").classList.remove("active");

              curserWrapperForm.querySelector(".curse-error").classList.add("active");
            }
          }
        }

        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);

        event.target.reset();
      })

  }

}