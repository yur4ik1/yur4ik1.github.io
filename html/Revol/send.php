<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$whatsapp = $_POST['whatsapp'];
$telegram = $_POST['telegram'];
$token = "5235240480:AAG_XzFUgaMkR8ghNV31jAKpj1QWDmPYUEE";
$chat_id = "-842997646";

$arr = array(
    'Имя пользователя: ' => $name,
    'Телефон: ' => $phone,
    'Сообщение:' => $message,
    'Whatsapp:' => $whatsapp,
    'Telegram:' => $telegram
);

foreach ($arr as $key => $value) {
    $txt .= "<b>" . $key . "</b> " . $value . "%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");

if (isset($_POST['name'])) {$phone = $_POST['name'];}
if (isset($_POST['phone'])) {$name = $_POST['phone'];}
if (isset($_POST['message'])) {$name = $_POST['message'];}
if (isset($_POST['whatsapp'])) {$name = $_POST['whatsapp'];}
if (isset($_POST['telegram'])) {$name = $_POST['telegram'];}
 
$myaddres  = "michalpalich.call@gmail.com"; 
 
$mes = "Тема: Заявка с сайта - http://revol-studio.com/\nТелефон: $phone\nИмя: $name\nСообщение: $message\nTelegram': $telegram\nWhatsapp: $whatsapp";
 
$sub='Заказ'; 
$email='Заказ обратного звонка';
$send = mail ($myaddres,$sub,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$email");
 
ini_set('short_open_tag', 'On');

if ($sendToTelegram) { ?>
    <script>
        window.location.href = 'thanks.html';
    </script>
<?php
} else {
    echo "Error";
}


?>