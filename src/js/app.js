/*
 !(i)
 Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 Или когда импортирован весь файл, например import "files/script.js";
 Неиспользуемый (не вызванный) код в итоговый файл не попадает.

 Если мы хотим добавить модуль следует его расскоментировать
 */
import {
  isWebp,
  headerFixed,
  togglePopupWindows,
  addTouchClass,
  addLoadedClass,
  menuInit,
} from './modules';
/* Раскомментировать для использования */
// import { MousePRLX } from './libs/parallaxMouse'

/* Раскомментировать для использования */
// import AOS from 'aos'

/* Раскомментировать для использования */
// import Swiper, { Navigation, Pagination } from 'swiper'

// Включить/выключить FLS (Full Logging System) (в работе)
window['FLS'] = location.hostname === 'localhost';

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML
 ! (i) необходимо для корректного отображения webp из css
 */
isWebp();
/* Добавление класса touch для HTML если браузер мобильный */
/* Раскомментировать для использования */
// addTouchClass();
/* Добавление loaded для HTML после полной загрузки страницы */
/* Раскомментировать для использования */
// addLoadedClass();
/* Модуль для работы с меню (Бургер) */
/* Раскомментировать для использования */
// menuInit()

/* Библиотека для анимаций ===============================================================================
 *  документация: https://michalsnik.github.io/aos
 */
// AOS.init();
// =======================================================================================================

// Паралакс мышей ========================================================================================
// const mousePrlx = new MousePRLX({})
// =======================================================================================================

// Фиксированный header ==================================================================================
// headerFixed()
// =======================================================================================================

/* Открытие/закрытие модальных окон ======================================================================
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * И на кнопку, которая вызывает окно так же повешай атрибут data-type="<название окна>"

 * На обертку(враппер) окна добавь класс _overlay-bg
 * На кнопку для закрытия окна добавь класс button-close
 */
/* Раскомментировать для использования */
// togglePopupWindows()
// =======================================================================================================
const swiper = new Swiper('.standart__slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 500,
})
const swiperWide = new Swiper('.wide__slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 500,
  slidesPerView: 5,
  spaceBetween: 30,
})
const swiperNews = new Swiper('.news__slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  speed: 500,
  slidesPerView: 3,
  spaceBetween: 30,
})

const swiperReviews = new Swiper('.reviews__slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 500,
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
})

const swiperEducation = new Swiper('.education__slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 500,
  loop: true, 
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
})

const swiperGraduate = new Swiper(".graduate__slider", { 
  speed: 500,
  breakpoints: { 
      990: {
          slidesPerView: 2, 
          spaceBetween: 30, 
          centeredSlides: true,
          initialSlide: 1, 
          loop: true, 
          speed: 500,
          navigation: { 
              nextEl: ".swiper-button-next", 
              prevEl: ".swiper-button-prev", 
          },
          pagination: {
              el: ".swiper-pagination",
          },
      },

  }

});

$(function () {

  var header = $("#header"),
    introH = $("#header").innerHeight(),
    scrollOffset = $(window).scrollTop();
  checkScroll(scrollOffset);

  $(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if (scrollOffset >= introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }
});

$(function () {

  var formFixed = $("#form-fixed"),
  formFixedActive = $("#form-fixed").innerHeight() + 3000,
    scrollOffset = $(window).scrollTop();
  checkScroll(scrollOffset);

  $(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if (scrollOffset >= formFixedActive) {
      formFixed.addClass("fixed");
    } else {
      formFixed.removeClass("fixed");
    }
  }
});

// const formFixed = document.querySelector(".form-fixed");

// window.addEventListener("scroll", function() {
//   const formFixedTop = formFixed.getBoundingClientRect().top;
//   const windowHeight = window.innerHeight;

//   if (formFixedTop < windowHeight) {
//     formFixed.classList.add("fixed");
//   } else {
//     formFixed.classList.remove("fixed");
//   }
// });

// $(function() {
//   $('.direction__accordion-item').on('click', function() {
//     $('.direction__accordion-item').removeClass('active');
//     $(this).addClass('active');
//   });
// });

let accordion = document.querySelector('.direction__accordion');
let items = accordion.querySelectorAll('.direction__accordion-item');
// let title = accordion.querySelectorAll('.accordion__toggle');

function toggleAccordion() {
  let thisItem = this;

  items.forEach(item => {
    if (thisItem == item) {
      // if this item is equal to the clicked item, open it.
      thisItem.classList.toggle('active');
      return;
    }
    // otherwise, remove the open class
    item.classList.remove('active');
  });

}

items.forEach(question => question.addEventListener('click', toggleAccordion));

// let accordion = document.querySelector('.direction__accordion');
// let items = accordion.querySelectorAll('.direction__accordion-item');
// let title = accordion.querySelectorAll('.accordion__toggle');

// function toggleAccordion() {
//   let thisItem = this.parentNode;

//   items.forEach(item => {
//     if (thisItem == item ) {
//       // if this item is equal to the clicked item, open it.
//       thisItem.classList.toggle('active');
//       return;
//     } 
//     // otherwise, remove the open class
//     item.classList.remove('active');
//   });
// }

// title.forEach(question => question.addEventListener('click', toggleAccordion));

$('.diplom__slider').slick({
  infinite: true,
  autoplay: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: '<img class="diplom__slider-left" src="images/arrow-left.png" alt="">',
  nextArrow: '<img class="diplom__slider-right" src="images/arrow-right.png" alt="">',
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,

      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        centerMode: true,
      }
    }
  ]
});



$(function () {
  $(".accordion > .accordion__item.active").children(".accordion__body").slideDown();
  $(".accordion > .accordion__item").click(function () {
    $(this).siblings(".accordion__item").removeClass("active").children(".accordion__body").slideUp();
    $(this).toggleClass("active").children(".accordion__body").slideToggle("ease-out");
  });
});

$(function () {
  var id = ' #academic-work-1, #academic-work-2, #academic-work-3, #academic-work-4';

  $('head').append('<style>body {overflow-x: hidden;}#allrecords {overflow: visible !important;}#t-header,#t-footer {position: relative;z-index: 2;} .t-rec {position: relative;z-index: 1;overflow-x: hidden;}' + id + ' { position: -webkit-sticky; position: sticky; top: 0; z-index: 0;}</style>');

  $(window).on('load resize', function () {
    $(id).each(function () {
      var topPosition = $(window).height() - $(this).height();
      topPosition += $(window).scrollTop();
      if (topPosition < 0) {
        $(this).css('top', topPosition)
      } else {
        $(this).css('top', 140)
        $('#academic-work-2').css('top', 210)
        $('#academic-work-3').css('top', 280)
      }
    });
  });
});



$(function() {
  $('.info__accordion .info__accordion-item:nth-child(1) .info__accordion-header');
  // $('.info__accordion .info__accordion-item:nth-child(1) .info__accordion-content').slideDown(); //добавляет класс active первому элементу
  $('.info__accordion-header').on('click', function() {
      if($(this).hasClass('active')) {
        $(this).siblings('.info__accordion-content').slideUp();
        $(this).removeClass('active');
      }
      else {
        $('.info__accordion-content').slideUp();
        $('.info__accordion-header').removeClass('active');
        $(this).siblings('.info__accordion-content').slideToggle();
        $(this).toggleClass('active');
      }
  });     
  });

  $(function() {
    $('.teacher__accordion .teacher__accordion-item:nth-child(1) .teacher__accordion-header');
    // $('.teacher__accordion .teacher__accordion-item:nth-child(1) .teacher__accordion-wrapper').slideDown(); //добавляет класс active первому элементу
    $('.teacher__accordion-heading').on('click', function() {
  
        if($(this).hasClass('active')) {
          $(this).siblings('.teacher__accordion-wrapper__block').slideUp(500);
          $(this).removeClass('active');
         
        }
        else {
          $('.teacher__accordion-wrapper__block').slideUp();
          $('.teacher__accordion-heading').removeClass('active');
          $(this).siblings('.teacher__accordion-wrapper__block').slideToggle(500);
          $(this).toggleClass('active');
          setTimeout(function () {
            $('html, body').animate({
              scrollTop: $('.teacher__accordion-heading.active').offset().top - 50,
            });
          }, 500);
        }
    });   
 
    });
  
   $(function() {
      $('.logistics__accordion .logistics__accordion-item:nth-child(1) .logistics__accordion-header');
      // $('.logistics__accordion .logistics__accordion-item:nth-child(1) .logistics__accordion-wrapper').slideDown(); //добавляет класс active первому элементу
      $('.logistics__accordion-heading').on('click', function() {
    
          if($(this).hasClass('active')) {
            $(this).siblings('.logistics__accordion-wrapper__block').slideUp(500);
            $(this).removeClass('active');
           
          }
          else {
            $('.logistics__accordion-wrapper__block').slideUp();
            $('.logistics__accordion-heading').removeClass('active');
            $(this).siblings('.logistics__accordion-wrapper__block').slideToggle(500);
            $(this).toggleClass('active');
            setTimeout(function () {
              $('html, body').animate({
                scrollTop: $('.logistics__accordion-heading.active').offset().top - 50,
              });
            }, 500);
          }
      });   
   
      });
  
    $(function() {
      $('[data-code]').mouseenter(function() {    
          $('.district span').html($(this).attr('data-title'));
          $('.district').show();
      });    
      $('[data-code]').mouseleave(function() {
          if (!$('.rf-map').hasClass("open")) {
              $('.district').hide();
          }
      });    
      $('.rf-map').on('click', '[data-code], .district-links div', function(){    
          let id = $(this).attr('data-code');
          if ($('#' + id).text() != '') {
              $('.district').show();
              $('.district span').html($(this).attr('data-title'));
              $('[data-code]').addClass('dropfill'); 
              $(this).addClass('mainfill'); 
              $('.rf-map').addClass('open');
              $('#' + id).fadeIn();
          }
      });
      $('.close-district').click(function() {
          $('.rf-map').removeClass('open');
          $('[data-code]').removeClass('dropfill');
          $('[data-code]').removeClass('mainfill');
          $('.district-text').hide();
          $('.district').hide();
      });    
      $('[data-code]').each(function() {  
          let id = $(this).attr('data-code');
          let title = $(this).attr('data-title');    
          if ($('#' + id).text() != '') {    
              $('.district-links').append('<div data-title="' + title + '" data-code="' + id + '">' + title + '</div>');    
          }
      }); 
  });  

  $('.icon-close').on('click', function() {
    $('.video-widget__container').remove()
  })

 

  $('.video-widget__container').on('click', function() {
    $(this).toggleClass('active');
    if($(this).hasClass('active')) {
      $(this).children('.icon-close').addClass('active')
      $(this).children('.video-widget__video--one').css('display', 'none')
      $(this).append(` <video class="video-widget__video video-widget__video--two" loop="" autoplay="" playsinline="" preload="auto" controlslist="nodownload" disablepictureinpicture="">
      <source src="static/video/oksan.mp4" type="video/mp4">
      </video> `);
    }
    else {
      $(this).children('.icon-close').removeClass('active')
      $(this).children('.video-widget__video--one').css('display', '')
      $(this).children('.video-widget__video--two').remove()
    }
  })

 
  $.getJSON("static/trips.json", function (data) {
    var currentDate = new Date();
    var closestStartDate = null;

    $.each(data.trips, function (index, trip) {
        var startDate = new Date(trip.start_date);

        if (
            startDate >= currentDate &&
            (closestStartDate == null || startDate < closestStartDate)
        ) {
            closestStartDate = startDate;
        }
    });

    if (closestStartDate != null) {
        setInterval(function () {
            var remainingTime = closestStartDate - new Date();
            var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
            var hours = Math.floor(
                (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            var minutes = Math.floor(
                (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
            );
            var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

            $("span[data-product='before_date']").text(
                days.toString() + "д " +
                hours.toString().padStart(2, '0') + " : " +
                minutes.toString().padStart(2, '0') + " : " +
                seconds.toString().padStart(2, '0')
            );
        }, 1000);
    }

    function goToNextEvent() {
        var nextStartDate = null;

        $.each(data.trips, function (index, trip) {
            var startDate = new Date(trip.start_date);

            if (
                startDate > closestStartDate &&
                (nextStartDate == null || startDate < nextStartDate)
            ) {
                nextStartDate = startDate;
            }
        });

        if (nextStartDate != null) {
            closestStartDate = nextStartDate;

            setInterval(function () {
                var remainingTime = closestStartDate - new Date();
                var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
                var hours = Math.floor(
                    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                var minutes = Math.floor(
                    (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
                );
                var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

                $("span[data-product='before_date']").text(
                    days.toString() + "д " +
                    hours.toString().padStart(2, '0') + " : " +
                    minutes.toString().padStart(2, '0') + " : " +
                    seconds.toString().padStart(2, '0')
                );
            }, 1000);
        }
    }

    setTimeout(goToNextEvent, closestStartDate - currentDate);
});

$.getJSON("static/trips.json", function(data) {
  var options = "";
  $.each(data.trips, function(index, trip) {
    var cityCode = trip.city.substring(0, 2).toUpperCase();
    var startDate = trip.start_date;
    var endDate = trip.end_date;
    options += '<option value="' + cityCode + '">' + trip.city + ' — ' + startDate + ' - ' + endDate + '</option>';
  });
  $("select").html(options);
});

$.getJSON("static/trips.json", function (data) {
  var trips = data.trips;

  trips.forEach(function (trip) {
    var city = trip.city;
    var color = trip.color;
    var startDate = trip.start_date;
    var endDate = trip.end_date;
    var status = trip.status;

    var html = '<div class="schedule__inner">';
    html += '<div class="schedule__inner-item__town">' + city;
    html +=
      '<span class="schedule__inner-item__color schedule__inner-item__color--' +
      color +
      '"></span>';
    html += "</div>";
    html += '<div class="schedule__inner-item__block">';
    html +=
      '<div class="schedule__inner-item__date">' +
      startDate +
      " — " +
      endDate +
      "</div>";
    html +=
      '<div class="schedule__inner-item__btn"><button class="btn btn--modal-json">' +
      status +
      "</button></div>";
    html += "</div>";
    html += "</div>";

    $(".schedule").append(html);
  });
});

$('.btn--modal').click(function () {
  $.fancybox.open({
    src: '#form--modal',
    type: 'inline'
  });
});
function openModalWithDelay() {
  setTimeout(function() {
    $('.btn--modal-json').click(function () {
      $.fancybox.open({
        src: '#form--modal',
        type: 'inline'
      });
    });
  }, 10000);
}

openModalWithDelay();
