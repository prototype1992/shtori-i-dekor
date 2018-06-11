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
            setTimeout(function () {
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

    // $("#lightgalery").lightGallery({});

    // gallery start
    $('.js-gallery-run').on('click', function (event) {
        event.preventDefault();

        var result = null;
        var currentGallery = $(this).attr('data-href');

        switch (currentGallery) {
            case 'gallery1':
                result = gallery1;
                break;
            case 'gallery2':
                result = gallery2;
                break;
            case 'gallery3':
                result = gallery3;
                break;
            case 'gallery4':
                result = gallery4;
                break;
            case 'gallery5':
                result = gallery5;
                break;
            case 'gallery6':
                result = gallery6;
                break;
            case 'gallery7':
                result = gallery7;
                break;
            case 'gallery8':
                result = gallery8;
                break;
            case 'gallery9':
                result = gallery9;
                break;
            case 'gallery10':
                result = gallery10;
                break;
        }

        $(this).lightGallery({
            dynamic: true,
            counter: true,
            addClass: 'shamil-frontend',
            width: '90%',
            height: '90%',
            dynamicEl: result
        })
    });

    // gallery
    var gallery1 = [
        {
            "src": './static/media/portfolio/27519_DSC_0332.JPG',
            'thumb': './static/img/gallery-work/9.jpg'
        },
        {
            'src': './static/media/portfolio/27519_DSC_0332.JPG',
            'thumb': './static/img/gallery-work/9.jpg'
        },
        {
            'src': './static/media/portfolio/27519_DSC_0332.JPG',
            'thumb': './static/img/gallery-work/9.jpg'
        }
    ];
    var gallery2 = [
        {
            "src": './static/media/portfolio/27519_DSC_0332.JPG',
            'thumb': './static/img/gallery-work/9.jpg'
        },
        {
            'src': './static/media/portfolio/27519_DSC_0332.JPG',
            'thumb': './static/img/gallery-work/9.jpg'
        },
        {
            'src': './static/media/portfolio/27519_DSC_0332.JPG',
            'thumb': './static/img/gallery-work/9.jpg'
        }
    ];
    var gallery3 = [
        {
            "src": './static/media/gallery/3/1.jpg',
            'thumb': './static/media/gallery/3/1.jpg'
        },
        {
            'src': './static/media/gallery/3/2.jpg',
            'thumb': './static/media/gallery/3/2.jpg'
        },
        {
            'src': './static/media/gallery/3/3.jpg',
            'thumb': './static/media/gallery/3/3.jpg'
        },
        {
            "src": './static/media/gallery/3/4.jpg',
            'thumb': './static/media/gallery/3/4.jpg'
        },
        {
            'src': './static/media/gallery/3/5.jpg',
            'thumb': './static/media/gallery/3/5.jpg'
        },
        {
            'src': './static/media/gallery/3/6.jpg',
            'thumb': './static/media/gallery/3/6.jpg'
        },
        {
            "src": './static/media/gallery/3/7.jpg',
            'thumb': './static/media/gallery/3/7.jpg'
        },
        {
            'src': './static/media/gallery/3/8.jpg',
            'thumb': './static/media/gallery/3/8.jpg'
        },
        {
            'src': './static/media/gallery/3/9.jpg',
            'thumb': './static/media/gallery/3/9.jpg'
        },
        {
            "src": './static/media/gallery/3/10.jpg',
            'thumb': './static/media/gallery/3/10.jpg'
        },
        {
            'src': './static/media/gallery/3/11.jpg',
            'thumb': './static/media/gallery/3/11.jpg'
        },
        {
            'src': './static/media/gallery/3/12.jpg',
            'thumb': './static/media/gallery/3/12.jpg'
        },
        {
            "src": './static/media/gallery/3/13.jpg',
            'thumb': './static/media/gallery/3/13.jpg'
        },
        {
            'src': './static/media/gallery/3/14.jpg',
            'thumb': './static/media/gallery/3/14.jpg'
        },
        {
            'src': './static/media/gallery/3/15.jpg',
            'thumb': './static/media/gallery/3/15.jpg'
        },
        {
            "src": './static/media/gallery/3/16.jpg',
            'thumb': './static/media/gallery/3/16.jpg'
        },
        {
            'src': './static/media/gallery/3/17.jpg',
            'thumb': './static/media/gallery/3/17.jpg'
        },
        {
            'src': './static/media/gallery/3/18.jpg',
            'thumb': './static/media/gallery/3/18.jpg'
        },
        {
            "src": './static/media/gallery/3/19.jpg',
            'thumb': './static/media/gallery/3/19.jpg'
        },
        {
            'src': './static/media/gallery/3/20.jpg',
            'thumb': './static/media/gallery/3/20.jpg'
        },
        {
            'src': './static/media/gallery/3/21.jpg',
            'thumb': './static/media/gallery/3/21.jpg'
        },
        {
            "src": './static/media/gallery/3/22.jpg',
            'thumb': './static/media/gallery/3/22.jpg'
        },
        {
            'src': './static/media/gallery/3/23.jpg',
            'thumb': './static/media/gallery/3/23.jpg'
        },
        {
            'src': './static/media/gallery/3/24.jpg',
            'thumb': './static/media/gallery/3/24.jpg'
        },
        {
            "src": './static/media/gallery/3/25.jpg',
            'thumb': './static/media/gallery/3/25.jpg'
        },
        {
            'src': './static/media/gallery/3/26.jpg',
            'thumb': './static/media/gallery/3/26.jpg'
        }
    ];
    var gallery4 = [
        {
            "src": './static/media/portfolio/27519_DSC_0332.JPG',
            'thumb': './static/img/gallery-work/9.jpg'
        },
        {
            'src': './static/media/portfolio/27519_DSC_0332.JPG',
            'thumb': './static/img/gallery-work/9.jpg'
        },
        {
            'src': './static/media/portfolio/27519_DSC_0332.JPG',
            'thumb': './static/img/gallery-work/9.jpg'
        }
    ];
    var gallery5 = [
        {
            "src": './static/media/portfolio/27519_DSC_0332.JPG',
            'thumb': './static/img/gallery-work/9.jpg'
        },
        {
            'src': './static/media/portfolio/27519_DSC_0332.JPG',
            'thumb': './static/img/gallery-work/9.jpg'
        },
        {
            'src': './static/media/portfolio/27519_DSC_0332.JPG',
            'thumb': './static/img/gallery-work/9.jpg'
        }
    ];
    var gallery6 = [
        {
            "src": './static/media/portfolio/27519_DSC_0332.JPG',
            'thumb': './static/img/gallery-work/9.jpg'
        },
        {
            'src': './static/media/portfolio/27519_DSC_0332.JPG',
            'thumb': './static/img/gallery-work/9.jpg'
        },
        {
            'src': './static/media/portfolio/27519_DSC_0332.JPG',
            'thumb': './static/img/gallery-work/9.jpg'
        }
    ];
    var gallery7 = [
        {
            "src": './static/media/portfolio/27519_DSC_0332.JPG',
            'thumb': './static/img/gallery-work/9.jpg'
        },
        {
            'src': './static/media/portfolio/27519_DSC_0332.JPG',
            'thumb': './static/img/gallery-work/9.jpg'
        },
        {
            'src': './static/media/portfolio/27519_DSC_0332.JPG',
            'thumb': './static/img/gallery-work/9.jpg'
        }
    ];
    var gallery8 = [
        {
            "src": './static/media/portfolio/27519_DSC_0332.JPG',
            'thumb': './static/img/gallery-work/9.jpg'
        },
        {
            'src': './static/media/portfolio/27519_DSC_0332.JPG',
            'thumb': './static/img/gallery-work/9.jpg'
        },
        {
            'src': './static/media/portfolio/27519_DSC_0332.JPG',
            'thumb': './static/img/gallery-work/9.jpg'
        }
    ];
    var gallery9 = [
        {
            "src": './static/media/portfolio/27519_DSC_0332.JPG',
            'thumb': './static/img/gallery-work/9.jpg'
        },
        {
            'src': './static/media/portfolio/27519_DSC_0332.JPG',
            'thumb': './static/img/gallery-work/9.jpg'
        },
        {
            'src': './static/media/portfolio/27519_DSC_0332.JPG',
            'thumb': './static/img/gallery-work/9.jpg'
        }
    ];
    var gallery10 = [
        {
            "src": './static/media/portfolio/27519_DSC_0332.JPG',
            'thumb': './static/img/gallery-work/9.jpg'
        },
        {
            'src': './static/media/portfolio/27519_DSC_0332.JPG',
            'thumb': './static/img/gallery-work/9.jpg'
        },
        {
            'src': './static/media/portfolio/27519_DSC_0332.JPG',
            'thumb': './static/img/gallery-work/9.jpg'
        }
    ];
    // gallery end

}());
