<?php
$name = '';
$company = '';
$email = '';
$phone = '';
$textarea = '';

if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['company'])) {$company = $_POST['company'];}
if (isset($_POST['email'])) {$email = $_POST['email'];}
if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
if (isset($_POST['textarea'])) {$textarea = $_POST['textarea'];}

$myaddress  = "YOURMAIL";

$mes = "\n Имя: $name\n Компания: $company\n Почта: $email\n Телефон: $phone\n Сообщение: $textarea";

$sub='Заказ с сайта SOTA AI'; 
$from_email='sotaai.uz'; 
$send = mail($myaddress, $sub, $mes, "Content-type:text/plain; charset=utf-8\r\nFrom: $from_email");

if ($send) {
    http_response_code(200);
    echo "Сообщение успешно отправлено";
} else {
    http_response_code(500);
    echo "Ошибка при отправке сообщения";
}
?>
