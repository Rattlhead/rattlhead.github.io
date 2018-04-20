$(document).ready(function() {

  // Начало анимаций
  var wow = new WOW({
    offset: 100,
    mobile: false,
    live: true
  });
  wow.init();
  // Конец анимация

  // Начало анимация чисел
  var show = true;
  var countbox = ".numbers-item__number";
  if ($('*').is(countbox)) {
    $(window).on("scroll load resize", function() {
      if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
      var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
      var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
      var w_height = $(window).height(); // Высота окна браузера
      var d_height = $(document).height(); // Высота всего документа
      var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
      if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {

        $(countbox).spincrement({

          duration: 1500,
          complete: function(e) {
            e.text(e.text() + 'k+')
          }
        });
        show = false;
      }
    });
  };
  // Конец анимация чисел

  // Скрипты с меню
  // Начало изменения меню
  $(window).on("scroll load resize", function() {
    // console.log($(window).scrollTop());
    if ($(window).scrollTop() > 50) {

      $(".top-nav").addClass("min-top-nav");

    } else { $(".top-nav").removeClass("min-top-nav"); }
  });
  // Конец изменения меню

  // Начало скрипта открытие меню
  $(".top-nav__btn-menu").on('click', function() {
    $(".top-nav__menu").toggleClass("d-none");
  });
  // Конец скрипта открытие меню
  // Конец скриптов меню


  // Начало скролл до элемента
  $("a").click(function() {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    $('html').animate({ scrollTop: destination }, 500);
    $('body').animate({ scrollTop: destination }, 500);
    return false;
  });
  // Конец скролл до элемента
});