$(document).ready(function () {
  //Получить элементы, к которым необходимо добавить маски
  $(function () {
    $("#input_1").mask("+7(999) 999-99-99");
  });
  $(function () {
    $("#input_2").mask("+7(999) 999-99-99");
  });
  $(function () {
    $("#input_3").mask("+7(999) 999-99-99");
  });
  
  $('.button-click').on("click", function () {
    $('.overlay').show(); 
  });
  $('.popup-close').on("click", function () {
    $('.overlay').hide();
    $('.thanks').hide();
  });

  $('.button-send_1').on("click", function () {
    var input1 = $('#input_1').val();

    if (input1 == '') {
      return alert('Заполните поле');
    }
    else {
      $('.thanks').show();
    }
  });

  $('.button-send_2').on("click", function () {
    var input2 = $('#input_2').val();

    if (input2 == '') {
      return alert('Заполните поле');
    } else {
      $('.thanks').show();
    }
  });

  $('.button-send_3').on("click", function () {
    var input3 = $('#input_3').val();

    if (input3 == '') {
      return alert('Заполните поле');
    } else {
      $('.thanks').show();
    }
  });

  var link = $('.gamburger-btn');
  var link_active = $('.gamburger-btn_active');
  var gamburger = $('.gamburger');
  var menu = $('.header-menu__bg');

  link.click(function() {
    link.toggleClass('gamburger-btn_active');
    menu.css('display', 'block');
    menu.toggleClass('header-menu__bg_active');
  });
  link_active.click(function() {
    menu.togglelass('header-none');   
    link.removeClass('gamburger-btn_active');   
    menu.removeClass('header-menu__bg_active');   
  });
});
