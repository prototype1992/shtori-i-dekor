(function () {

  // fancybox
  $('.fancybox').fancybox({
    helpers: {
      overlay: {
        locked: false
      }
    }
  });

  // index slider
  $('.portfolio-slider').lightSlider({
    item: 3,
    adaptiveHeight: true,
    verticalHeight: 300,
    //autoWidth: true,
    auto: true,
    loop: true,
    pause: 7000,
    controls: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          item: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          item: 1
        }
      }
    ]
  });

  // jquery ui accordion
  $("#services").accordion({
    heightStyle: "content",
    collapsible: true
  });

  // phone masked
  $('.my-phone').mask("+7 (999)-999-99-99");

  // menu toggle
  $('.top-menu__toggle').on('click', function (e) {
    e.preventDefault();
    $(this).parent().children('.top-menu__list').stop().slideToggle();
  });


  // Отправка заявки
  $(".js-order-form").submit(function () {
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function () {
      //var msg = $(this).find('.msg-text');
      //msg.show();
      $('.js-order-form input').attr('disabled', 'disabled');
      setTimeout(function() {
        //msg.hide();
        $('.js-order-form input').removeAttr('disabled');
        $.fancybox.close();
      }, 2000);
      $(this).find("input").val("");
      alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
      $(".js-order-form").trigger("reset");
    });
    return false;
  });


}());
