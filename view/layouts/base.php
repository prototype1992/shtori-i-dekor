<!DOCTYPE html>
<html lang="ru">
<head>

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Студия дизайна Европа Азия, купить шторы в Москве - europa-asia.com">
  <meta name="keywords" content="Студия дизайна Европа Азия, купить шторы в Москве, шторы в Москве">
  <meta name="yandex-verification" content="eb1cd5b56cd4dfa0" />


  <title>Студия дизайна Европа Азия, купить шторы в Москве - europa-asia.com</title>

  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700|Ubuntu:700&amp;subset=cyrillic"
        rel="stylesheet">
  <link rel="stylesheet" href="static/css/style.min.css"/>

</head>
<body>

<!-- Yandex.Metrika counter -->
<script type="text/javascript"> (function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter41341404 = new Ya.Metrika({ id:41341404, clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true }); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = "https://mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks"); </script> <noscript><div><img src="https://mc.yandex.ru/watch/41341404" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->

<div class="wrapper">
  <div class="main">
    <div class="all">

      <header class="header">
        <div class="container">
          <div class="header__inner">
            <div class="header__left">
              <div class="header-logo">
                <a href="/">
                  <img src="static/img/logo.png" alt="Студия дизайна Европа Азия" title="Студия дизайна Европа Азия">
                </a>
              </div>
              <div class="header-slogan">
                Дизайн и пошив штор, предметы интерьера, дамские аксессуары и сувениры
              </div>
            </div>

            <div class="header-contacts">
              <div class="address">
                <p><?= SITE_CITY ?></p>

                <p><?= SITE_ADDRESS ?></p>

                <p><?= ADMIN_EMAIL ?></p>
              </div>
              <div class="phones">
                <p><?= SITE_PHONE ?></p>
                <a class="phones__link fancybox" href="#header-phone">Заказать звонок</a>
              </div>
            </div>

          </div>
        </div>
      </header>

      <nav class="top-menu">
        <div class="container">
          <a href="" class="top-menu__toggle">Меню</a>
          <ul class="top-menu__list">
            <?php foreach ($menu as $item ): ?>
              <li class="top-menu__item">
                <a href="index.php?view=<?= $item['link'] ?>" class="top-menu__link <?php if($view == $item['link']) echo 'active' ?>">
                  <?= $item['name'] ?>
                </a>
              </li>
            <?php endforeach; ?>
          </ul>
        </div>
      </nav>

      <div class="page-content">

        <?php require_once('view/pages/' . $view . '.php'); ?>

      </div>

    </div>
  </div>
  <div class="footer">
    <ul class="footer-menu">
      <?php foreach ($menu as $item ): ?>
        <li class="footer-menu__item">
          <a href="index.php?view=<?= $item['link'] ?>" class="footer-menu__link <?php if($view == $item['link']) echo 'active' ?>">
            <?= $item['name'] ?>
          </a>
        </li>
      <?php endforeach; ?>
    </ul>
    <div class="container">
      <p class="copyright">Copyright: 2016 - <?= SITE_NAME ?></p>
      <a href="http://alisultanov.ru/" target="_blank" class="made-site">Разработка сайта - Alisultanov.ru</a>
    </div>
  </div>
</div>


<!--modals-->
<div class="hidden">
  <div id="header-phone" class="phone-modal">
    <h3 class="header-phone-modal__title">Заказать звонок</h3>

    <form action="" method="post" class="js-order-form">
      <input type="text" name="order-name" class="phone-modal__input " placeholder="Ваше имя">
      <input type="text" name="order-phone" class="phone-modal__input my-phone" placeholder="+7 (999)-999-99-99">
      <button type="submit" class="phone-modal__button">Отправить</button>
    </form>
  </div>

</div>
<!--modals end-->


<script src="static/js/jquery.min.js"></script>
<script src="static/libs/jquery-ui/jquery-ui.min.js"></script>
<script src="static/libs/fancybox/jquery.fancybox.pack.js"></script>
<script src="static/libs/lightslider/js/lightslider.min.js"></script>
<script src="static/libs/inputmasked/jquery.maskedinput.min.js"></script>
<script src="static/js/main.js"></script>

</body>
</html>