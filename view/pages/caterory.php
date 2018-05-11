<h2 class="page-title">ПОРТФОЛИО</h2>

<div class="container">

  <ul class="categories">
    <?php foreach ($categories as $category): ?>
      <li class="categories__item">
        <a class="categories__link" href="index.php?view=caterory&catid=<?= $category['cat_id'] ?>">
          <?= $category['name']?>
        </a>
      </li>
    <?php endforeach; ?>
  </ul>

  <ul class="catalog">
    <?php foreach ($products as $product): ?>
      <li class="catalog__item">
        <div class="catalog-box">
          <div class="catalog-box__img">
            <a href="<?= MEDIA_DIR . 'products/' . $product['img'] ?>" class="fancybox" rel="products">
              <img src="<?= MEDIA_DIR . 'products/' . $product['img'] ?>" alt="<?= $product['name'] ?>">
            </a>
          </div>
        </div>
      </li>
    <?php endforeach; ?>
  </ul>

</div>