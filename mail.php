<?php

// Подключаем функции
require_once('functions.php');

// данные администратора
$recepient = "europasia@list.ru";
// $recepient = "alisultanovshamil1992@gmail.com";
$sitename = "europa-asia.com";

// Принимаемые данные
$name = clear_data($_POST["order-name"]);
$phone = clear_data($_POST["order-phone"]);

//$name = $_POST["order-name"];
//$phone = $_POST["order-phone"];

// создаем сообщение
$message = "
<table width='100%' border='1px' style='border-collapse: collapse'>
<tr>
<td style='padding: 10px;'>Имя:</td>
<td style='padding: 10px;'>$name</td>
</tr>
<tr>
<td style='padding: 10px;'>Телефон:</td>
<td style='padding: 10px;'>$phone</td>
</tr>
</table>";

// Заголовок письма
$pagetitle = "Новая заявка с сайта \"$sitename\"";

// отправляем
mail($recepient, $pagetitle, $message, "Content-type: text/html; charset=\"utf-8\"\n From: $recepient");

// Подключаемся к бд
db_connect();

// Составляем запрос
$query = "INSERT INTO `orders` (`name`, `phone`, `datetime`) VALUES ('$name', '$phone', CURRENT_TIMESTAMP)";

// Добавляем в бд
mysql_query($query);

?>