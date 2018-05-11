
<h2 class="page-title">Материалы</h2>

<!--<p class="page-descr">Какое то описание страницы</p>-->

<div class="container">
  <ul class="gallery">
    <?php foreach ($materials as $material): ?>
      <li class="gallery__item">
        <div class="gallery-box">
          <a class="gallery-box__img fancybox" rel="material-gallery" href="<?= MEDIA_DIR . 'materials/' . $material['img'] ?>">
            <img src="<?= MEDIA_DIR . 'materials/' . $material['img'] ?>" alt="">
          </a>
          <p class="gallery-box__title"><?= $material['name']?></p>
        </div>
      </li>
    <?php endforeach; ?>
  </ul>
</div>