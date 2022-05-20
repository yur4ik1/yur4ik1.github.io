<?php 

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';
    require 'phpmailer/src/SMTP.php';

    $mail = new PHPMailer();
    $mail->IsSMTP();
    $mail->Mailer = "smtp";

    $mail->SMTPDebug  = 1;  
    $mail->SMTPAuth   = TRUE;
    $mail->SMTPSecure = "tls";
    $mail->Port       = 587;
    $mail->Host       = "smtp.gmail.com";
    $mail->Username   = "vavilov2821@gmail.com";
    $mail->Password   = "Dima3434_";

    $mail->IsHTML(true);
    $mail->AddAddress("vavilov9823@gmail.com", "Dima");
    $mail->SetFrom("vavilov2821@gmail.com", "***SPAM*** Онлайн консультант: сообщение с сайта twowords.info");
    $mail->AddReplyTo("vavilov2821@gmail.com", "reply-to-name");
    // $mail->AddCC("cc-recipient-email@domain", "cc-recipient-name");
    $mail->Subject = "Test is Test Email sent via Gmail SMTP Server using PHP Mailer";

    $brand = $_POST['brand']
    $name = $_POST['name']
    $userPost = $_POST['email']

    $fullmessage = "
    Имя: $name \n
    Бренд: $brand \n
    Моя почта: $userPost
    ";

    $mail->MsgHTML($fullmessage); 
    if(!$mail->Send()) {
    echo "Error while sending Email.";
    var_dump($mail);
    } else {
    echo "Email sent successfully";
    }


?>