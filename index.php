<?php

// Запускаем сессии
session_start();

// Подключаем конфиг
require_once('config.php');

// Подключаем файл функций
require_once('functions.php');

// Получаем значение с GET['view']
if( empty($_GET['view']) ) {
  $view = 'index';
} else {
  $view = $_GET['view'];
}

// Контроллер страниц
switch($view) {
  case 'index':
    // получаем массив с портфолио
    $portfolio = get_portfolio();
    break;
  case 'catalog':
    // получаем категории
    $categories = get_categories();
    // получаем все продукты
    $products = get_products();
    break;
  case 'caterory':
    // получаем категории
    $categories = get_categories();
    // получаем имя гет catid
    $catid = trim( $_GET['catid'] );
    // получаем продукты по категории
    $products = get_product_catid($catid);
    break;
  case 'materials':
    $materials = get_materials();
    break;
}

// Подключаем базовый шаблон
require_once('view/layouts/base.php');

?>