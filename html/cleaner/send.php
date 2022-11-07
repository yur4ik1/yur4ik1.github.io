<?php
if (isset($_POST['name'])) {$phone = $_POST['name'];}
if (isset($_POST['phone'])) {$name = $_POST['phone'];}
 
$myaddres  = "michalpalich.call@gmail.com"; 
 
$mes = "Тема: Заявка с сайта \nТелефон: $phone\nИмя: $name\n";
 
$sub='Заказ'; 
$email='Заказ обратного звонка';
$send = mail ($myaddres,$sub,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$email");
 
ini_set('short_open_tag', 'On');

if ($send) { ?>
    <script>
        alert('Спасибо! Заявка отправлена.')
    </script>
<?php
} else { ?>
     <script>
        alert('Что-то пошло не так...')
    </script>
<?php }

?>