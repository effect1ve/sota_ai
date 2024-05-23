
<?php
$name = $_POST['name'];
$company = $_POST['company'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$textarea = $_POST['textarea'];


$to = 'sosisocko@gmail.com';
$subject = 'Новая заявка с сайта SOTA AI';
$message = "Имя: $name\nКомпания: $company\nEmail: $email\nТелефон: $phone\nОписание задачи: $textarea";
$headers = 'From: yoursite@gmail.com' . "\r\n" .
    'Reply-To: yoursite@gmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
$headers .= "Content-Type: text/plain; charset=utf-8\r\n";
mail($to, $subject, $message, $headers);
?>

