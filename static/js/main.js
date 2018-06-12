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
    // 7covers-for-furniture
    // gallery
    var gallery1 = [
        {
            "src": './static/media/gallery/1childrens/1.jpg',
            'thumb': './static/media/gallery/1childrens/1.jpg'
        },
        {
            'src': './static/media/gallery/1childrens/2.jpg',
            'thumb': './static/media/gallery/1childrens/2.jpg'
        },
        {
            'src': './static/media/gallery/1childrens/3.jpg',
            'thumb': './static/media/gallery/1childrens/3.jpg'
        },
        {
            "src": './static/media/gallery/1childrens/4.jpg',
            'thumb': './static/media/gallery/1childrens/4.jpg'
        },
        {
            'src': './static/media/gallery/1childrens/5.jpg',
            'thumb': './static/media/gallery/1childrens/5.jpg'
        },
        {
            'src': './static/media/gallery/1childrens/6.jpg',
            'thumb': './static/media/gallery/1childrens/6.jpg'
        },
        {
            "src": './static/media/gallery/1childrens/7.jpg',
            'thumb': './static/media/gallery/1childrens/7.jpg'
        },
        {
            'src': './static/media/gallery/1childrens/8.jpg',
            'thumb': './static/media/gallery/1childrens/8.jpg'
        },
        {
            'src': './static/media/gallery/1childrens/9.jpg',
            'thumb': './static/media/gallery/1childrens/9.jpg'
        },
        {
            "src": './static/media/gallery/1childrens/10.jpg',
            'thumb': './static/media/gallery/1childrens/10.jpg'
        },
        {
            'src': './static/media/gallery/1childrens/11.jpg',
            'thumb': './static/media/gallery/1childrens/11.jpg'
        },
        {
            'src': './static/media/gallery/1childrens/12.jpg',
            'thumb': './static/media/gallery/1childrens/12.jpg'
        }
    ];
    var gallery2 = [
        {
            "src": './static/media/gallery/2livingroom/1.jpg',
            'thumb': './static/media/gallery/2livingroom/1.jpg'
        },
        {
            'src': './static/media/gallery/2livingroom/2.jpg',
            'thumb': './static/media/gallery/2livingroom/2.jpg'
        },
        {
            'src': './static/media/gallery/2livingroom/3.jpg',
            'thumb': './static/media/gallery/2livingroom/3.jpg'
        },
        {
            "src": './static/media/gallery/2livingroom/4.jpg',
            'thumb': './static/media/gallery/2livingroom/4.jpg'
        },
        {
            'src': './static/media/gallery/2livingroom/5.jpg',
            'thumb': './static/media/gallery/2livingroom/5.jpg'
        },
        {
            'src': './static/media/gallery/2livingroom/6.jpg',
            'thumb': './static/media/gallery/2livingroom/6.jpg'
        },
        {
            "src": './static/media/gallery/2livingroom/7.jpg',
            'thumb': './static/media/gallery/2livingroom/7.jpg'
        },
        {
            'src': './static/media/gallery/2livingroom/8.jpg',
            'thumb': './static/media/gallery/2livingroom/8.jpg'
        },
        {
            'src': './static/media/gallery/2livingroom/9.jpg',
            'thumb': './static/media/gallery/2livingroom/9.jpg'
        },
        {
            "src": './static/media/gallery/2livingroom/10.jpg',
            'thumb': './static/media/gallery/2livingroom/10.jpg'
        },
        {
            'src': './static/media/gallery/2livingroom/11.jpg',
            'thumb': './static/media/gallery/2livingroom/11.jpg'
        },
        {
            'src': './static/media/gallery/2livingroom/12.jpg',
            'thumb': './static/media/gallery/2livingroom/12.jpg'
        },
        {
            'src': './static/media/gallery/2livingroom/13.jpg',
            'thumb': './static/media/gallery/2livingroom/13.jpg'
        },
        {
            'src': './static/media/gallery/2livingroom/14.jpg',
            'thumb': './static/media/gallery/2livingroom/14.jpg'
        },
        {
            'src': './static/media/gallery/2livingroom/15.jpg',
            'thumb': './static/media/gallery/2livingroom/15.jpg'
        },
        {
            'src': './static/media/gallery/2livingroom/16.jpg',
            'thumb': './static/media/gallery/2livingroom/16.jpg'
        },
        {
            'src': './static/media/gallery/2livingroom/17.jpg',
            'thumb': './static/media/gallery/2livingroom/17.jpg'
        },
        {
            'src': './static/media/gallery/2livingroom/18.jpg',
            'thumb': './static/media/gallery/2livingroom/18.jpg'
        },
        {
            'src': './static/media/gallery/2livingroom/19.jpg',
            'thumb': './static/media/gallery/2livingroom/19.jpg'
        }
    ];
    var gallery3 = [
        {
            "src": './static/media/gallery/3bedrooms/1.jpg',
            'thumb': './static/media/gallery/3bedrooms/1.jpg'
        },
        {
            'src': './static/media/gallery/3bedrooms/2.jpg',
            'thumb': './static/media/gallery/3bedrooms/2.jpg'
        },
        {
            'src': './static/media/gallery/3bedrooms/3.jpg',
            'thumb': './static/media/gallery/3bedrooms/3.jpg'
        },
        {
            "src": './static/media/gallery/3bedrooms/4.jpg',
            'thumb': './static/media/gallery/3bedrooms/4.jpg'
        },
        {
            'src': './static/media/gallery/3bedrooms/5.jpg',
            'thumb': './static/media/gallery/3bedrooms/5.jpg'
        },
        {
            'src': './static/media/gallery/3bedrooms/6.jpg',
            'thumb': './static/media/gallery/3bedrooms/6.jpg'
        },
        {
            "src": './static/media/gallery/3bedrooms/7.jpg',
            'thumb': './static/media/gallery/3bedrooms/7.jpg'
        },
        {
            'src': './static/media/gallery/3bedrooms/8.jpg',
            'thumb': './static/media/gallery/3bedrooms/8.jpg'
        },
        {
            'src': './static/media/gallery/3bedrooms/9.jpg',
            'thumb': './static/media/gallery/3bedrooms/9.jpg'
        },
        {
            "src": './static/media/gallery/3bedrooms/10.jpg',
            'thumb': './static/media/gallery/3bedrooms/10.jpg'
        },
        {
            'src': './static/media/gallery/3bedrooms/11.jpg',
            'thumb': './static/media/gallery/3bedrooms/11.jpg'
        },
        {
            'src': './static/media/gallery/3bedrooms/12.jpg',
            'thumb': './static/media/gallery/3bedrooms/12.jpg'
        },
        {
            "src": './static/media/gallery/3bedrooms/13.jpg',
            'thumb': './static/media/gallery/3bedrooms/13.jpg'
        },
        {
            'src': './static/media/gallery/3bedrooms/14.jpg',
            'thumb': './static/media/gallery/3bedrooms/14.jpg'
        },
        {
            'src': './static/media/gallery/3bedrooms/15.jpg',
            'thumb': './static/media/gallery/3bedrooms/15.jpg'
        },
        {
            "src": './static/media/gallery/3bedrooms/16.jpg',
            'thumb': './static/media/gallery/3bedrooms/16.jpg'
        },
        {
            'src': './static/media/gallery/3bedrooms/17.jpg',
            'thumb': './static/media/gallery/3bedrooms/17.jpg'
        },
        {
            'src': './static/media/gallery/3bedrooms/18.jpg',
            'thumb': './static/media/gallery/3bedrooms/18.jpg'
        },
        {
            "src": './static/media/gallery/3bedrooms/19.jpg',
            'thumb': './static/media/gallery/3bedrooms/19.jpg'
        },
        {
            'src': './static/media/gallery/3bedrooms/20.jpg',
            'thumb': './static/media/gallery/3bedrooms/20.jpg'
        },
        {
            'src': './static/media/gallery/3bedrooms/21.jpg',
            'thumb': './static/media/gallery/3bedrooms/21.jpg'
        },
        {
            "src": './static/media/gallery/3bedrooms/22.jpg',
            'thumb': './static/media/gallery/3bedrooms/22.jpg'
        },
        {
            'src': './static/media/gallery/3bedrooms/23.jpg',
            'thumb': './static/media/gallery/3bedrooms/23.jpg'
        },
        {
            'src': './static/media/gallery/3bedrooms/24.jpg',
            'thumb': './static/media/gallery/3bedrooms/24.jpg'
        },
        {
            "src": './static/media/gallery/3bedrooms/25.jpg',
            'thumb': './static/media/gallery/3bedrooms/25.jpg'
        },
        {
            'src': './static/media/gallery/3bedrooms/26.jpg',
            'thumb': './static/media/gallery/3bedrooms/26.jpg'
        },
        {
            "src": './static/media/gallery/3bedrooms/27.jpg',
            'thumb': './static/media/gallery/3bedrooms/27.jpg'
        },
        {
            'src': './static/media/gallery/3bedrooms/28.jpg',
            'thumb': './static/media/gallery/3bedrooms/28.jpg'
        },
        {
            "src": './static/media/gallery/3bedrooms/29.jpg',
            'thumb': './static/media/gallery/3bedrooms/29.jpg'
        },
        {
            'src': './static/media/gallery/3bedrooms/30.jpg',
            'thumb': './static/media/gallery/3bedrooms/30.jpg'
        },
        {
            "src": './static/media/gallery/3bedrooms/31.jpg',
            'thumb': './static/media/gallery/3bedrooms/31.jpg'
        },
        {
            'src': './static/media/gallery/3bedrooms/32.jpg',
            'thumb': './static/media/gallery/3bedrooms/32.jpg'
        },
        {
            "src": './static/media/gallery/3bedrooms/33.jpg',
            'thumb': './static/media/gallery/3bedrooms/33.jpg'
        },
        {
            'src': './static/media/gallery/3bedrooms/34.jpg',
            'thumb': './static/media/gallery/3bedrooms/34.jpg'
        }
    ];
    var gallery4 = [
        {
            "src": './static/media/gallery/4kitchen/1.jpg',
            'thumb': './static/media/gallery/4kitchen/1.jpg'
        },
        {
            'src': './static/media/gallery/4kitchen/2.jpg',
            'thumb': './static/media/gallery/4kitchen/2.jpg'
        },
        {
            'src': './static/media/gallery/4kitchen/3.jpg',
            'thumb': './static/media/gallery/4kitchen/3.jpg'
        },
        {
            "src": './static/media/gallery/4kitchen/4.jpg',
            'thumb': './static/media/gallery/4kitchen/4.jpg'
        },
        {
            'src': './static/media/gallery/4kitchen/5.jpg',
            'thumb': './static/media/gallery/4kitchen/5.jpg'
        },
        {
            'src': './static/media/gallery/4kitchen/6.jpg',
            'thumb': './static/media/gallery/4kitchen/6.jpg'
        },
        {
            "src": './static/media/gallery/4kitchen/7.jpg',
            'thumb': './static/media/gallery/4kitchen/7.jpg'
        },
        {
            'src': './static/media/gallery/4kitchen/8.jpg',
            'thumb': './static/media/gallery/4kitchen/8.jpg'
        },
        {
            'src': './static/media/gallery/4kitchen/9.jpg',
            'thumb': './static/media/gallery/4kitchen/9.jpg'
        },
        {
            "src": './static/media/gallery/4kitchen/10.jpg',
            'thumb': './static/media/gallery/4kitchen/10.jpg'
        },
        {
            'src': './static/media/gallery/4kitchen/11.jpg',
            'thumb': './static/media/gallery/4kitchen/11.jpg'
        },
        {
            'src': './static/media/gallery/4kitchen/12.jpg',
            'thumb': './static/media/gallery/4kitchen/12.jpg'
        },
        {
            "src": './static/media/gallery/4kitchen/13.jpg',
            'thumb': './static/media/gallery/4kitchen/13.jpg'
        },
        {
            'src': './static/media/gallery/4kitchen/14.jpg',
            'thumb': './static/media/gallery/4kitchen/14.jpg'
        },
        {
            'src': './static/media/gallery/4kitchen/15.jpg',
            'thumb': './static/media/gallery/4kitchen/15.jpg'
        },
        {
            "src": './static/media/gallery/4kitchen/16.jpg',
            'thumb': './static/media/gallery/4kitchen/16.jpg'
        },
        {
            'src': './static/media/gallery/4kitchen/17.jpg',
            'thumb': './static/media/gallery/4kitchen/17.jpg'
        },
        {
            'src': './static/media/gallery/4kitchen/18.jpg',
            'thumb': './static/media/gallery/4kitchen/18.jpg'
        },
        {
            "src": './static/media/gallery/4kitchen/19.jpg',
            'thumb': './static/media/gallery/4kitchen/19.jpg'
        },
        {
            'src': './static/media/gallery/4kitchen/20.jpg',
            'thumb': './static/media/gallery/4kitchen/20.jpg'
        },
        {
            'src': './static/media/gallery/4kitchen/21.jpg',
            'thumb': './static/media/gallery/4kitchen/21.jpg'
        },
        {
            "src": './static/media/gallery/4kitchen/22.jpg',
            'thumb': './static/media/gallery/4kitchen/22.jpg'
        },
        {
            'src': './static/media/gallery/4kitchen/23.jpg',
            'thumb': './static/media/gallery/4kitchen/23.jpg'
        },
        {
            'src': './static/media/gallery/4kitchen/24.jpg',
            'thumb': './static/media/gallery/4kitchen/24.jpg'
        },
        {
            "src": './static/media/gallery/4kitchen/25.jpg',
            'thumb': './static/media/gallery/4kitchen/25.jpg'
        },
        {
            'src': './static/media/gallery/4kitchen/26.jpg',
            'thumb': './static/media/gallery/4kitchen/26.jpg'
        },
        {
            "src": './static/media/gallery/4kitchen/27.jpg',
            'thumb': './static/media/gallery/4kitchen/27.jpg'
        },
        {
            'src': './static/media/gallery/4kitchen/28.jpg',
            'thumb': './static/media/gallery/4kitchen/28.jpg'
        },
        {
            "src": './static/media/gallery/4kitchen/29.jpg',
            'thumb': './static/media/gallery/4kitchen/29.jpg'
        },
        {
            'src': './static/media/gallery/4kitchen/30.jpg',
            'thumb': './static/media/gallery/4kitchen/30.jpg'
        },
        {
            "src": './static/media/gallery/4kitchen/31.jpg',
            'thumb': './static/media/gallery/4kitchen/31.jpg'
        },
        {
            'src': './static/media/gallery/4kitchen/32.jpg',
            'thumb': './static/media/gallery/4kitchen/32.jpg'
        },
        {
            "src": './static/media/gallery/4kitchen/33.jpg',
            'thumb': './static/media/gallery/4kitchen/33.jpg'
        },
        {
            'src': './static/media/gallery/4kitchen/34.jpg',
            'thumb': './static/media/gallery/4kitchen/34.jpg'
        },
        {
            "src": './static/media/gallery/4kitchen/35.jpg',
            'thumb': './static/media/gallery/4kitchen/35.jpg'
        },
        {
            'src': './static/media/gallery/4kitchen/36.jpg',
            'thumb': './static/media/gallery/4kitchen/36.jpg'
        },
        {
            "src": './static/media/gallery/4kitchen/37.jpg',
            'thumb': './static/media/gallery/4kitchen/37.jpg'
        },
        {
            'src': './static/media/gallery/4kitchen/38.jpg',
            'thumb': './static/media/gallery/4kitchen/38.jpg'
        },
        {
            "src": './static/media/gallery/4kitchen/39.jpg',
            'thumb': './static/media/gallery/4kitchen/39.jpg'
        },
        {
            'src': './static/media/gallery/4kitchen/40.jpg',
            'thumb': './static/media/gallery/4kitchen/40.jpg'
        }
    ];
    var gallery5 = [
        {
            "src": './static/media/gallery/5cabinet-library/1.jpg',
            'thumb': './static/media/gallery/5cabinet-library/1.jpg'
        },
        {
            'src': './static/media/gallery/5cabinet-library/2.jpg',
            'thumb': './static/media/gallery/5cabinet-library/2.jpg'
        },
        {
            'src': './static/media/gallery/5cabinet-library/3.jpg',
            'thumb': './static/media/gallery/5cabinet-library/3.jpg'
        },
        {
            "src": './static/media/gallery/5cabinet-library/4.jpg',
            'thumb': './static/media/gallery/5cabinet-library/4.jpg'
        },
        {
            'src': './static/media/gallery/5cabinet-library/5.jpg',
            'thumb': './static/media/gallery/5cabinet-library/5.jpg'
        },
        {
            'src': './static/media/gallery/5cabinet-library/6.jpg',
            'thumb': './static/media/gallery/5cabinet-library/6.jpg'
        },
        {
            "src": './static/media/gallery/5cabinet-library/7.jpg',
            'thumb': './static/media/gallery/5cabinet-library/7.jpg'
        },
        {
            'src': './static/media/gallery/5cabinet-library/8.jpg',
            'thumb': './static/media/gallery/5cabinet-library/8.jpg'
        },
        {
            'src': './static/media/gallery/5cabinet-library/9.jpg',
            'thumb': './static/media/gallery/5cabinet-library/9.jpg'
        },
        {
            "src": './static/media/gallery/5cabinet-library/10.jpg',
            'thumb': './static/media/gallery/5cabinet-library/10.jpg'
        },
        {
            'src': './static/media/gallery/5cabinet-library/11.jpg',
            'thumb': './static/media/gallery/5cabinet-library/11.jpg'
        },
        {
            'src': './static/media/gallery/5cabinet-library/12.jpg',
            'thumb': './static/media/gallery/5cabinet-library/12.jpg'
        },
        {
            'src': './static/media/gallery/5cabinet-library/13.jpg',
            'thumb': './static/media/gallery/5cabinet-library/13.jpg'
        },
        {
            'src': './static/media/gallery/5cabinet-library/14.jpg',
            'thumb': './static/media/gallery/5cabinet-library/14.jpg'
        },
        {
            'src': './static/media/gallery/5cabinet-library/15.jpg',
            'thumb': './static/media/gallery/5cabinet-library/15.jpg'
        }
    ];
    var gallery6 = [
        {
            "src": './static/media/gallery/6swimming-pools-and-toilets/1.jpg',
            'thumb': './static/media/gallery/6swimming-pools-and-toilets/1.jpg'
        },
        {
            'src': './static/media/gallery/6swimming-pools-and-toilets/2.jpg',
            'thumb': './static/media/gallery/6swimming-pools-and-toilets/2.jpg'
        },
        {
            'src': './static/media/gallery/6swimming-pools-and-toilets/3.jpg',
            'thumb': './static/media/gallery/6swimming-pools-and-toilets/3.jpg'
        },
        {
            "src": './static/media/gallery/6swimming-pools-and-toilets/4.jpg',
            'thumb': './static/media/gallery/6swimming-pools-and-toilets/4.jpg'
        },
        {
            'src': './static/media/gallery/6swimming-pools-and-toilets/5.jpg',
            'thumb': './static/media/gallery/6swimming-pools-and-toilets/5.jpg'
        },
        {
            'src': './static/media/gallery/6swimming-pools-and-toilets/6.jpg',
            'thumb': './static/media/gallery/6swimming-pools-and-toilets/6.jpg'
        },
        {
            "src": './static/media/gallery/6swimming-pools-and-toilets/7.jpg',
            'thumb': './static/media/gallery/6swimming-pools-and-toilets/7.jpg'
        },
        {
            'src': './static/media/gallery/6swimming-pools-and-toilets/8.jpg',
            'thumb': './static/media/gallery/6swimming-pools-and-toilets/8.jpg'
        },
        {
            'src': './static/media/gallery/6swimming-pools-and-toilets/9.jpg',
            'thumb': './static/media/gallery/6swimming-pools-and-toilets/9.jpg'
        },
        {
            "src": './static/media/gallery/6swimming-pools-and-toilets/10.jpg',
            'thumb': './static/media/gallery/6swimming-pools-and-toilets/10.jpg'
        },
        {
            'src': './static/media/gallery/6swimming-pools-and-toilets/11.jpg',
            'thumb': './static/media/gallery/6swimming-pools-and-toilets/11.jpg'
        },
        {
            'src': './static/media/gallery/6swimming-pools-and-toilets/12.jpg',
            'thumb': './static/media/gallery/6swimming-pools-and-toilets/12.jpg'
        },
        {
            'src': './static/media/gallery/6swimming-pools-and-toilets/13.jpg',
            'thumb': './static/media/gallery/6swimming-pools-and-toilets/13.jpg'
        },
        {
            'src': './static/media/gallery/6swimming-pools-and-toilets/14.jpg',
            'thumb': './static/media/gallery/6swimming-pools-and-toilets/14.jpg'
        },
        {
            'src': './static/media/gallery/6swimming-pools-and-toilets/15.jpg',
            'thumb': './static/media/gallery/6swimming-pools-and-toilets/15.jpg'
        },
        {
            'src': './static/media/gallery/6swimming-pools-and-toilets/16.jpg',
            'thumb': './static/media/gallery/6swimming-pools-and-toilets/16.jpg'
        },
        {
            'src': './static/media/gallery/6swimming-pools-and-toilets/17.jpg',
            'thumb': './static/media/gallery/6swimming-pools-and-toilets/17.jpg'
        },
        {
            'src': './static/media/gallery/6swimming-pools-and-toilets/18.jpg',
            'thumb': './static/media/gallery/6swimming-pools-and-toilets/18.jpg'
        },
        {
            'src': './static/media/gallery/6swimming-pools-and-toilets/19.jpg',
            'thumb': './static/media/gallery/6swimming-pools-and-toilets/19.jpg'
        }
    ];
    var gallery7 = [
        {
            "src": './static/media/gallery/7covers-for-furniture/1.jpg',
            'thumb': './static/media/gallery/7covers-for-furniture/1.jpg'
        },
        {
            'src': './static/media/gallery/7covers-for-furniture/2.jpg',
            'thumb': './static/media/gallery/7covers-for-furniture/2.jpg'
        },
        {
            'src': './static/media/gallery/7covers-for-furniture/3.jpg',
            'thumb': './static/media/gallery/7covers-for-furniture/3.jpg'
        },
        {
            "src": './static/media/gallery/7covers-for-furniture/4.jpg',
            'thumb': './static/media/gallery/7covers-for-furniture/4.jpg'
        },
        {
            'src': './static/media/gallery/7covers-for-furniture/5.jpg',
            'thumb': './static/media/gallery/7covers-for-furniture/5.jpg'
        },
        {
            'src': './static/media/gallery/7covers-for-furniture/6.jpg',
            'thumb': './static/media/gallery/7covers-for-furniture/6.jpg'
        },
        {
            "src": './static/media/gallery/7covers-for-furniture/7.jpg',
            'thumb': './static/media/gallery/7covers-for-furniture/7.jpg'
        },
        {
            'src': './static/media/gallery/7covers-for-furniture/8.jpg',
            'thumb': './static/media/gallery/7covers-for-furniture/8.jpg'
        },
        {
            'src': './static/media/gallery/7covers-for-furniture/9.jpg',
            'thumb': './static/media/gallery/7covers-for-furniture/9.jpg'
        },
        {
            "src": './static/media/gallery/7covers-for-furniture/10.jpg',
            'thumb': './static/media/gallery/7covers-for-furniture/10.jpg'
        },
        {
            'src': './static/media/gallery/7covers-for-furniture/11.jpg',
            'thumb': './static/media/gallery/7covers-for-furniture/11.jpg'
        },
        {
            'src': './static/media/gallery/7covers-for-furniture/12.jpg',
            'thumb': './static/media/gallery/7covers-for-furniture/12.jpg'
        },
        {
            "src": './static/media/gallery/7covers-for-furniture/13.jpg',
            'thumb': './static/media/gallery/7covers-for-furniture/13.jpg'
        },
        {
            'src': './static/media/gallery/7covers-for-furniture/14.jpg',
            'thumb': './static/media/gallery/7covers-for-furniture/14.jpg'
        },
        {
            'src': './static/media/gallery/7covers-for-furniture/15.jpg',
            'thumb': './static/media/gallery/7covers-for-furniture/15.jpg'
        },
        {
            "src": './static/media/gallery/7covers-for-furniture/16.jpg',
            'thumb': './static/media/gallery/7covers-for-furniture/16.jpg'
        },
        {
            'src': './static/media/gallery/7covers-for-furniture/17.jpg',
            'thumb': './static/media/gallery/7covers-for-furniture/17.jpg'
        },
        {
            'src': './static/media/gallery/7covers-for-furniture/18.jpg',
            'thumb': './static/media/gallery/7covers-for-furniture/18.jpg'
        },
        {
            "src": './static/media/gallery/7covers-for-furniture/19.jpg',
            'thumb': './static/media/gallery/7covers-for-furniture/19.jpg'
        },
        {
            'src': './static/media/gallery/7covers-for-furniture/20.jpg',
            'thumb': './static/media/gallery/7covers-for-furniture/20.jpg'
        },
        {
            'src': './static/media/gallery/7covers-for-furniture/21.jpg',
            'thumb': './static/media/gallery/7covers-for-furniture/21.jpg'
        },
        {
            "src": './static/media/gallery/7covers-for-furniture/22.jpg',
            'thumb': './static/media/gallery/7covers-for-furniture/22.jpg'
        },
        {
            'src': './static/media/gallery/7covers-for-furniture/23.jpg',
            'thumb': './static/media/gallery/7covers-for-furniture/23.jpg'
        },
        {
            'src': './static/media/gallery/7covers-for-furniture/24.jpg',
            'thumb': './static/media/gallery/7covers-for-furniture/24.jpg'
        },
        {
            "src": './static/media/gallery/7covers-for-furniture/25.jpg',
            'thumb': './static/media/gallery/7covers-for-furniture/25.jpg'
        },
        {
            'src': './static/media/gallery/7covers-for-furniture/26.jpg',
            'thumb': './static/media/gallery/7covers-for-furniture/26.jpg'
        },
        {
            "src": './static/media/gallery/7covers-for-furniture/27.jpg',
            'thumb': './static/media/gallery/7covers-for-furniture/27.jpg'
        }
    ];
    var gallery8 = [
        {
            "src": './static/media/gallery/8offices/1.jpg',
            'thumb': './static/media/gallery/8offices/1.jpg'
        },
        {
            'src': './static/media/gallery/8offices/2.jpg',
            'thumb': './static/media/gallery/8offices/2.jpg'
        },
        {
            'src': './static/media/gallery/8offices/3.jpg',
            'thumb': './static/media/gallery/8offices/3.jpg'
        },
        {
            "src": './static/media/gallery/8offices/4.jpg',
            'thumb': './static/media/gallery/8offices/4.jpg'
        },
        {
            'src': './static/media/gallery/8offices/5.jpg',
            'thumb': './static/media/gallery/8offices/5.jpg'
        },
        {
            'src': './static/media/gallery/8offices/6.jpg',
            'thumb': './static/media/gallery/8offices/6.jpg'
        },
        {
            "src": './static/media/gallery/8offices/7.jpg',
            'thumb': './static/media/gallery/8offices/7.jpg'
        },
        {
            'src': './static/media/gallery/8offices/8.jpg',
            'thumb': './static/media/gallery/8offices/8.jpg'
        },
        {
            'src': './static/media/gallery/8offices/9.jpg',
            'thumb': './static/media/gallery/8offices/9.jpg'
        },
        {
            "src": './static/media/gallery/8offices/10.jpg',
            'thumb': './static/media/gallery/8offices/10.jpg'
        },
        {
            'src': './static/media/gallery/8offices/11.jpg',
            'thumb': './static/media/gallery/8offices/11.jpg'
        },
        {
            'src': './static/media/gallery/8offices/12.jpg',
            'thumb': './static/media/gallery/8offices/12.jpg'
        }
    ];
    var gallery9 = [
        {
            'src': './static/media/gallery/9curtains-with-photo-printing/8.jpg',
            'thumb': './static/media/gallery/9curtains-with-photo-printing/8.jpg'
        },
        {
            'src': './static/media/gallery/9curtains-with-photo-printing/9.jpg',
            'thumb': './static/media/gallery/9curtains-with-photo-printing/9.jpg'
        },
        {
            "src": './static/media/gallery/9curtains-with-photo-printing/10.jpg',
            'thumb': './static/media/gallery/9curtains-with-photo-printing/10.jpg'
        },
        {
            'src': './static/media/gallery/9curtains-with-photo-printing/11.jpg',
            'thumb': './static/media/gallery/9curtains-with-photo-printing/11.jpg'
        },
        {
            'src': './static/media/gallery/9curtains-with-photo-printing/12.jpg',
            'thumb': './static/media/gallery/9curtains-with-photo-printing/12.jpg'
        }
    ];
    var gallery10 = [
    ];
    // gallery end

}());
