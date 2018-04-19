$(document).ready(function() {

  wow = new WOW({
    offset: 100, // default
    mobile: false, // default
    live: true // default
  })
  wow.init();

  // Начало анимация чисел
  var show = true;
  var countbox = ".numbers-item__number";
  $(window).on("scroll load resize", function() {
    if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
    var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
    var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
    var w_height = $(window).height(); // Высота окна браузера
    var d_height = $(document).height(); // Высота всего документа
    var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
    if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {

      $(countbox).spincrement({
        duration: 2000,
        complete: function(e) {
          e.text(e.text() + 'k+')
        }
      });
      show = false;
    }
  });
  // Конец анимация чисел


  // Начало скрипты меню
  $(".top-nav__btn-menu").on('click', function() {
    $(".top-nav__menu").toggleClass("d-none");

  });
  // Конец скрипта меню

  // Начало Скрол до элемента
  $("a").click(function() {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    $('html').animate({ scrollTop: destination }, 500);
    $('body').animate({ scrollTop: destination }, 500);
    return false;
  });
  // Конец Скрол до элемента

  // Начало анимация цифр

  // var show = true;
  //    var countbox = ".numbers-item__number";
  //    $(window).on("scroll load resize", function () {
  //        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
  //        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
  //        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
  //        var w_height = $(window).height(); // Высота окна браузера
  //        var d_height = $(document).height(); // Высота всего документа
  //        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
  //        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
  //            $('.numbers-item__number').css('opacity', '1');
  //            $('.numbers-item__number').spincrement({
  //                thousandSeparator: "",
  //                duration: 1200
  //            });

  //            show = false;
  //        }
  //    });

  // Конец анимация цифр




});