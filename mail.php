<?php

// очистка полей
function clear_data($data) {
  $data = trim( htmlspecialchars( $data ) );
  return $data;
}


// данные администратора
$recepient = "zanaves@bk.ru";
$recepient2 = "alisultanovshamil1992@gmail.com";
$sitename = "shtori-i-dekor.ru";

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
mail($recepient2, $pagetitle, $message, "Content-type: text/html; charset=\"utf-8\"\n From: $recepient");


?>
